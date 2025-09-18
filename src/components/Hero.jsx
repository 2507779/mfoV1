import { Button } from '@/components/ui/button'
import { ArrowDown, Shield, Clock, Percent } from 'lucide-react'

const Hero = () => {
  const scrollToCatalog = () => {
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })
  }

  const features = [
    {
      icon: Shield,
      title: 'Только лицензированные МФО',
      description: 'Все организации имеют действующие лицензии ЦБ РФ'
    },
    {
      icon: Clock,
      title: 'Быстрое одобрение',
      description: 'Решение по заявке за 5-15 минут'
    },
    {
      icon: Percent,
      title: 'Выгодные условия',
      description: 'Сравните ставки и выберите лучшее предложение'
    }
  ]

  return (
    <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Главный заголовок */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Каталог МФО России
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Найдите лучшие условия для получения микрозайма. 
            Сравните предложения от ведущих микрофинансовых организаций.
          </p>

          {/* Статистика */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="text-3xl font-bold text-primary mb-2">12+</div>
              <div className="text-sm text-muted-foreground">Проверенных МФО</div>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="text-3xl font-bold text-primary mb-2">0.5%</div>
              <div className="text-sm text-muted-foreground">Минимальная ставка</div>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="text-3xl font-bold text-primary mb-2">120К ₽</div>
              <div className="text-sm text-muted-foreground">Максимальная сумма</div>
            </div>
          </div>

          {/* Кнопка действия */}
          <Button 
            size="lg" 
            className="mb-16 text-lg px-8 py-6"
            onClick={scrollToCatalog}
          >
            Выбрать МФО
            <ArrowDown className="ml-2 w-5 h-5" />
          </Button>

          {/* Преимущества */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/5 rounded-full blur-xl"></div>
    </section>
  )
}

export default Hero

