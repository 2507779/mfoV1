import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Shield, FileText, AlertTriangle } from 'lucide-react'

const LegalPages = ({ type, isOpen, onClose }) => {
  const getContent = () => {
    switch (type) {
      case 'disclaimer':
        return {
          title: 'Дисклеймер',
          icon: AlertTriangle,
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Общие положения</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Данный веб-сайт "Каталог МФО России" является информационным ресурсом, 
                  предназначенным для ознакомления пользователей с условиями предоставления 
                  микрозаймов различными микрофинансовыми организациями (МФО) Российской Федерации.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3">Отказ от ответственности</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Администрация сайта не является микрофинансовой организацией и не предоставляет 
                  займы или кредиты. Мы выступаем исключительно в качестве информационного посредника, 
                  предоставляющего сравнительную информацию о различных МФО.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Все займы оформляются напрямую между заемщиком и выбранной микрофинансовой 
                  организацией. Администрация сайта не несет ответственности за условия займов, 
                  качество обслуживания, действия или бездействие МФО.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3">Актуальность информации</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Мы прилагаем все усилия для поддержания актуальности представленной информации, 
                  однако не можем гарантировать ее полную точность и своевременность обновления. 
                  Условия займов могут изменяться МФО без предварительного уведомления.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3">Рекомендации</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Перед оформлением займа обязательно изучите все условия договора на официальном 
                  сайте выбранной МФО. Убедитесь в наличии у организации действующей лицензии 
                  Центрального банка Российской Федерации. Оценивайте свои финансовые возможности 
                  и не берите займы, которые не сможете своевременно погасить.
                </p>
              </div>

              <Separator />

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-yellow-800 dark:text-yellow-200">
                    <strong>Внимание:</strong> Микрозаймы предоставляются под высокие проценты. 
                    Несвоевременное погашение может привести к дополнительным расходам и ухудшению 
                    кредитной истории.
                  </div>
                </div>
              </div>
            </div>
          )
        }

      case 'privacy':
        return {
          title: 'Политика конфиденциальности',
          icon: Shield,
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">1. Общие положения</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Настоящая Политика конфиденциальности определяет порядок обработки и защиты 
                  персональных данных пользователей веб-сайта "Каталог МФО России". 
                  Использование сайта означает согласие с условиями данной политики.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3">2. Сбор информации</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Мы можем собирать следующие типы информации:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li>• Техническая информация (IP-адрес, тип браузера, операционная система)</li>
                  <li>• Информация о посещениях (страницы, время посещения, источник перехода)</li>
                  <li>• Пользовательские предпочтения (выбранная тема, настройки фильтров)</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3">3. Использование информации</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Собранная информация используется для:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li>• Улучшения функциональности и удобства использования сайта</li>
                  <li>• Анализа статистики посещений и поведения пользователей</li>
                  <li>• Обеспечения безопасности и предотвращения мошенничества</li>
                  <li>• Соблюдения требований законодательства</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3">4. Cookies и аналогичные технологии</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Сайт использует файлы cookie для сохранения пользовательских настроек 
                  (например, выбранной темы) и улучшения работы сервиса. Вы можете 
                  отключить cookie в настройках браузера, однако это может повлиять 
                  на функциональность сайта.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3">5. Передача данных третьим лицам</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Мы не продаем, не обмениваем и не передаем персональные данные третьим лицам 
                  без согласия пользователя, за исключением случаев, предусмотренных 
                  законодательством Российской Федерации.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3">6. Безопасность данных</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Мы принимаем необходимые технические и организационные меры для защиты 
                  персональных данных от неправомерного доступа, изменения, раскрытия или уничтожения.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3">7. Права пользователей</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Пользователи имеют право на доступ к своим персональным данным, их исправление 
                  или удаление. Для реализации этих прав обращайтесь к администрации сайта.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3">8. Изменения в политике</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Мы оставляем за собой право вносить изменения в данную политику конфиденциальности. 
                  Актуальная версия всегда доступна на данной странице.
                </p>
              </div>

              <div className="text-sm text-muted-foreground">
                Дата последнего обновления: 18 декабря 2024 года
              </div>
            </div>
          )
        }

      case 'terms':
        return {
          title: 'Пользовательское соглашение',
          icon: FileText,
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">1. Предмет соглашения</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Настоящее Пользовательское соглашение регулирует отношения между администрацией 
                  веб-сайта "Каталог МФО России" и пользователями сайта. Использование сайта 
                  означает полное согласие с условиями данного соглашения.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3">2. Права и обязанности пользователей</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Пользователи имеют право:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-4 mb-4">
                  <li>• Бесплатно использовать информационные сервисы сайта</li>
                  <li>• Получать актуальную информацию о МФО</li>
                  <li>• Оставлять отзывы о работе с МФО</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Пользователи обязуются:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li>• Не использовать сайт в противоправных целях</li>
                  <li>• Не размещать недостоверную или оскорбительную информацию</li>
                  <li>• Соблюдать требования законодательства РФ</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3">3. Ограничение ответственности</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Администрация сайта не несет ответственности за решения, принятые пользователями 
                  на основе информации, размещенной на сайте. Все риски, связанные с использованием 
                  информации, пользователь принимает на себя.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3">4. Интеллектуальная собственность</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Все материалы сайта, включая дизайн, тексты, изображения и программный код, 
                  являются объектами интеллектуальной собственности и защищены законодательством РФ.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3">5. Изменение условий</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Администрация оставляет за собой право изменять условия соглашения. 
                  Пользователи будут уведомлены о существенных изменениях.
                </p>
              </div>
            </div>
          )
        }

      default:
        return null
    }
  }

  const content = getContent()
  if (!content) return null

  const IconComponent = content.icon

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2 text-xl">
            <IconComponent className="w-6 h-6" />
            <span>{content.title}</span>
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="max-h-[70vh] pr-4">
          {content.content}
        </ScrollArea>

        <div className="flex justify-end pt-4 border-t">
          <Button onClick={onClose}>
            Закрыть
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default LegalPages

