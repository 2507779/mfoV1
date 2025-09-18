import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const ReviewsCarousel = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Автопрокрутка
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [reviews.length, isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(currentIndex === 0 ? reviews.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1)
  }

  const goToSlide = (index) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ))
  }

  if (!reviews || reviews.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Отзывы клиентов</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Узнайте, что говорят наши пользователи о работе с различными МФО
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Карусель отзывов */}
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={review.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-background shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        {/* Аватар */}
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-semibold">
                            {review.name.charAt(0)}
                          </span>
                        </div>

                        <div className="flex-1">
                          {/* Заголовок отзыва */}
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <h4 className="font-semibold">{review.name}</h4>
                              <div className="flex items-center space-x-1 mt-1">
                                {renderStars(review.rating)}
                              </div>
                            </div>
                            <Quote className="w-8 h-8 text-muted-foreground/30" />
                          </div>

                          {/* Текст отзыва */}
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            "{review.text}"
                          </p>

                          {/* Дата */}
                          <div className="text-sm text-muted-foreground">
                            {new Date(review.date).toLocaleDateString('ru-RU', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Кнопки навигации */}
          <Button
            variant="outline"
            size="sm"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full"
            onClick={goToPrevious}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full"
            onClick={goToNext}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Индикаторы */}
          <div className="flex justify-center space-x-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4.2</div>
              <div className="text-sm text-muted-foreground">Средний рейтинг</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Положительных отзывов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReviewsCarousel

