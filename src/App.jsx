import { useState } from 'react'
import './App.css'

// Компоненты
import Header from './components/Header'
import Hero from './components/Hero'
import SearchAndFilters from './components/SearchAndFilters'
import MfoList from './components/MfoList'
import MfoModal from './components/MfoModal'
import ReviewsCarousel from './components/ReviewsCarousel'
import LegalPages from './components/LegalPages'

// Хуки
import { useTheme } from './hooks/useTheme'
import { useMfoFilters } from './hooks/useMfoFilters'

// Данные
import mfoData from './data/mfo-data.json'
import reviewsData from './data/reviews.json'

function App() {
  const { darkMode, toggleDarkMode } = useTheme()
  const {
    searchTerm,
    setSearchTerm,
    sortBy,
    setSortBy,
    filters,
    setFilters,
    filteredAndSortedMfos,
    resetFilters
  } = useMfoFilters(mfoData)

  const [selectedMfo, setSelectedMfo] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [legalPageType, setLegalPageType] = useState(null)
  const [isLegalPageOpen, setIsLegalPageOpen] = useState(false)

  const handleMfoDetailsClick = (mfo) => {
    setSelectedMfo(mfo)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedMfo(null)
  }

  const handleLegalPageOpen = (type) => {
    setLegalPageType(type)
    setIsLegalPageOpen(true)
  }

  const handleLegalPageClose = () => {
    setIsLegalPageOpen(false)
    setLegalPageType(null)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Заголовок */}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Главный баннер */}
      <Hero />

      {/* Основной контент */}
      <main className="container mx-auto px-4 py-12">
        {/* Каталог МФО */}
        <section id="catalog" className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Каталог МФО</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Выберите подходящую микрофинансовую организацию из нашего каталога. 
              Используйте фильтры для поиска оптимальных условий займа.
            </p>
          </div>

          {/* Поиск и фильтры */}
          <SearchAndFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filters={filters}
            setFilters={setFilters}
            onReset={resetFilters}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />

          {/* Список МФО */}
          <MfoList
            mfos={filteredAndSortedMfos}
            onMfoDetailsClick={handleMfoDetailsClick}
          />
        </section>
      </main>

      {/* Отзывы */}
      <ReviewsCarousel reviews={reviewsData} />

      {/* Дополнительная информация */}
      <section id="about" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">О нашем каталоге</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-4">Почему выбирают нас?</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Только лицензированные МФО</li>
                  <li>✓ Актуальная информация о условиях</li>
                  <li>✓ Удобные фильтры для поиска</li>
                  <li>✓ Честные отзывы клиентов</li>
                  <li>✓ Бесплатное использование сервиса</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Как это работает?</h3>
                <ol className="space-y-2 text-muted-foreground">
                  <li>1. Выберите подходящие условия займа</li>
                  <li>2. Сравните предложения разных МФО</li>
                  <li>3. Изучите отзывы других клиентов</li>
                  <li>4. Перейдите на сайт выбранной МФО</li>
                  <li>5. Оформите займ напрямую у организации</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer id="contacts" className="bg-background border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">МФО</span>
                </div>
                <span className="font-bold text-lg">Каталог МФО</span>
              </div>
              <p className="text-muted-foreground">
                Ваш надежный помощник в выборе микрофинансовой организации. 
                Сравнивайте условия и находите лучшие предложения.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Полезные ссылки</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#catalog" className="hover:text-foreground transition-colors">Каталог МФО</a></li>
                <li><a href="#reviews" className="hover:text-foreground transition-colors">Отзывы</a></li>
                <li><a href="#about" className="hover:text-foreground transition-colors">О нас</a></li>
                <li>
                  <button 
                    onClick={() => handleLegalPageOpen('privacy')}
                    className="hover:text-foreground transition-colors text-left"
                  >
                    Политика конфиденциальности
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Юридическая информация</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <button 
                    onClick={() => handleLegalPageOpen('disclaimer')}
                    className="hover:text-foreground transition-colors text-left"
                  >
                    Дисклеймер
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleLegalPageOpen('terms')}
                    className="hover:text-foreground transition-colors text-left"
                  >
                    Пользовательское соглашение
                  </button>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                Мы не являемся кредитором и не предоставляем займы. 
                Наш сервис помогает сравнить условия различных МФО.
              </p>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Каталог МФО России. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Модальное окно МФО */}
      <MfoModal
        mfo={selectedMfo}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Юридические страницы */}
      <LegalPages
        type={legalPageType}
        isOpen={isLegalPageOpen}
        onClose={handleLegalPageClose}
      />
    </div>
  )
}

export default App

