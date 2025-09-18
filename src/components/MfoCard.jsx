import { useState } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Star, Phone, ExternalLink, Calendar, Shield } from 'lucide-react'

const MfoCard = ({ mfo, onDetailsClick }) => {
  const [isHovered, setIsHovered] = useState(false)

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : i < rating
            ? 'fill-yellow-200 text-yellow-200'
            : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <Card
      className={`transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${
        isHovered ? 'ring-2 ring-primary/20' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onDetailsClick(mfo)}
    >
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={mfo.logo}
              alt={`${mfo.name} логотип`}
              className="w-16 h-8 object-contain rounded"
            />
            <div>
              <h3 className="font-semibold text-lg text-foreground">{mfo.name}</h3>
              <div className="flex items-center space-x-1 mt-1">
                {renderStars(mfo.rating)}
                <span className="text-sm text-muted-foreground ml-2">
                  {mfo.rating}
                </span>
              </div>
            </div>
          </div>
          <Badge variant="secondary" className="text-xs">
            <Shield className="w-3 h-3 mr-1" />
            Лиц. {mfo.license}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Основные параметры займа */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-muted/50 rounded-lg p-3">
            <div className="text-sm text-muted-foreground">Сумма</div>
            <div className="font-semibold text-primary">{mfo.amount}</div>
          </div>
          <div className="bg-muted/50 rounded-lg p-3">
            <div className="text-sm text-muted-foreground">Ставка</div>
            <div className="font-semibold text-primary">{mfo.rate}</div>
          </div>
          <div className="bg-muted/50 rounded-lg p-3">
            <div className="text-sm text-muted-foreground">Срок</div>
            <div className="font-semibold text-primary">{mfo.term}</div>
          </div>
        </div>

        {/* Преимущества */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">Преимущества:</h4>
          <ul className="space-y-1">
            {mfo.advantages.slice(0, 3).map((advantage, index) => (
              <li key={index} className="text-sm flex items-start">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                {advantage}
              </li>
            ))}
          </ul>
        </div>

        {/* Дополнительная информация */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="w-3 h-3 mr-1" />
            С {mfo.yearFounded} года
          </div>
          <div className="flex items-center">
            <Phone className="w-3 h-3 mr-1" />
            {mfo.phone}
          </div>
        </div>

        {/* Кнопки действий */}
        <div className="flex space-x-2 pt-2">
          <Button 
            className="flex-1" 
            onClick={(e) => {
              e.stopPropagation()
              window.open(mfo.website, '_blank')
            }}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Получить займ
          </Button>
          <Button 
            variant="outline" 
            onClick={(e) => {
              e.stopPropagation()
              onDetailsClick(mfo)
            }}
          >
            Подробнее
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default MfoCard

