import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Star, 
  Phone, 
  ExternalLink, 
  Calendar, 
  Shield, 
  CreditCard, 
  Clock, 
  Percent,
  CheckCircle,
  Info
} from 'lucide-react'

const MfoModal = ({ mfo, isOpen, onClose }) => {
  if (!mfo) return null

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : i < rating
            ? 'fill-yellow-200 text-yellow-200'
            : 'text-gray-300'
        }`}
      />
    ))
  }

  const infoItems = [
    {
      icon: CreditCard,
      label: 'Сумма займа',
      value: `${mfo.minAmount?.toLocaleString()} - ${mfo.maxAmount?.toLocaleString()} ₽`
    },
    {
      icon: Percent,
      label: 'Процентная ставка',
      value: `${mfo.minRate}% - ${mfo.maxRate}% в день`
    },
    {
      icon: Clock,
      label: 'Срок займа',
      value: `${mfo.minTerm} - ${mfo.maxTerm} дней`
    },
    {
      icon: Calendar,
      label: 'Год основания',
      value: mfo.yearFounded
    },
    {
      icon: Shield,
      label: 'Лицензия ЦБ РФ',
      value: mfo.license
    },
    {
      icon: Phone,
      label: 'Телефон поддержки',
      value: mfo.phone
    }
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start space-x-4">
            <img
              src={mfo.logo}
              alt={`${mfo.name} логотип`}
              className="w-20 h-10 object-contain rounded"
            />
            <div className="flex-1">
              <DialogTitle className="text-2xl font-bold">{mfo.name}</DialogTitle>
              <div className="flex items-center space-x-2 mt-2">
                <div className="flex items-center space-x-1">
                  {renderStars(mfo.rating)}
                </div>
                <span className="text-lg font-semibold">{mfo.rating}</span>
                <Badge variant="secondary">
                  <Shield className="w-3 h-3 mr-1" />
                  Лицензированная МФО
                </Badge>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Описание */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Info className="w-5 h-5 mr-2" />
              О компании
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {mfo.description}
            </p>
          </div>

          <Separator />

          {/* Основные параметры */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Условия займа</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {infoItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                  <item.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Преимущества */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Преимущества
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {mfo.advantages.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{advantage}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Быстрые факты */}
          <div className="bg-primary/5 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3">Быстрые факты</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">{mfo.rating}</div>
                <div className="text-xs text-muted-foreground">Рейтинг</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">{mfo.maxAmount?.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">Макс. сумма ₽</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">{mfo.minRate}%</div>
                <div className="text-xs text-muted-foreground">Мин. ставка</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">{mfo.maxTerm}</div>
                <div className="text-xs text-muted-foreground">Макс. срок дн.</div>
              </div>
            </div>
          </div>

          {/* Кнопки действий */}
          <div className="flex space-x-3 pt-4">
            <Button 
              className="flex-1" 
              onClick={() => window.open(mfo.website, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Перейти на сайт МФО
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.open(`tel:${mfo.phone}`, '_self')}
            >
              <Phone className="w-4 h-4 mr-2" />
              Позвонить
            </Button>
          </div>

          {/* Предупреждение */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <div className="flex items-start space-x-2">
              <Info className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Внимание:</strong> Перед оформлением займа внимательно изучите все условия договора. 
                Помните о своевременном погашении задолженности во избежание штрафов и пеней.
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default MfoModal

