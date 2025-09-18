import { useState, useMemo } from 'react'
import MfoCard from './MfoCard'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const MfoList = ({ mfos, onMfoDetailsClick }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  const paginatedMfos = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return mfos.slice(startIndex, startIndex + itemsPerPage)
  }, [mfos, currentPage])

  const totalPages = Math.ceil(mfos.length / itemsPerPage)

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (mfos.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold mb-2">МФО не найдены</h3>
        <p className="text-muted-foreground">
          Попробуйте изменить параметры поиска или фильтры
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Результаты поиска */}
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">
          Найдено {mfos.length} МФО
        </p>
        <p className="text-sm text-muted-foreground">
          Страница {currentPage} из {totalPages}
        </p>
      </div>

      {/* Сетка карточек МФО */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedMfos.map((mfo) => (
          <MfoCard
            key={mfo.id}
            mfo={mfo}
            onDetailsClick={onMfoDetailsClick}
          />
        ))}
      </div>

      {/* Пагинация */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center space-x-2 pt-6">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-4 h-4" />
            Назад
          </Button>

          <div className="flex space-x-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => handlePageChange(page)}
                className="w-10"
              >
                {page}
              </Button>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Вперед
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  )
}

export default MfoList

