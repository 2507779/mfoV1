import { useState, useMemo } from 'react'

export const useMfoFilters = (mfos) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('rating')
  const [filters, setFilters] = useState({
    amount: null,
    maxRate: null,
    term: null,
    minRating: null,
    yearFounded: '',
    feature: ''
  })

  const filteredAndSortedMfos = useMemo(() => {
    let result = [...mfos]

    // Поиск по названию
    if (searchTerm) {
      result = result.filter(mfo =>
        mfo.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Фильтрация по сумме
    if (filters.amount) {
      result = result.filter(mfo => mfo.maxAmount >= filters.amount)
    }

    // Фильтрация по процентной ставке
    if (filters.maxRate) {
      result = result.filter(mfo => mfo.minRate <= filters.maxRate)
    }

    // Фильтрация по сроку
    if (filters.term) {
      result = result.filter(mfo => mfo.maxTerm >= filters.term)
    }

    // Фильтрация по рейтингу
    if (filters.minRating) {
      result = result.filter(mfo => mfo.rating >= filters.minRating)
    }

    // Фильтрация по году основания
    if (filters.yearFounded) {
      const year = parseInt(filters.yearFounded)
      result = result.filter(mfo => mfo.yearFounded >= year)
    }

    // Фильтрация по особенностям
    if (filters.feature) {
      switch (filters.feature) {
        case 'first-free':
          result = result.filter(mfo => 
            mfo.advantages.some(advantage => 
              advantage.toLowerCase().includes('0%') || 
              advantage.toLowerCase().includes('бесплатно')
            )
          )
          break
        case 'bad-credit':
          result = result.filter(mfo => 
            mfo.advantages.some(advantage => 
              advantage.toLowerCase().includes('кредитной истории') ||
              advantage.toLowerCase().includes('плохой ки') ||
              advantage.toLowerCase().includes('без проверки')
            )
          )
          break
        case 'fast-approval':
          result = result.filter(mfo => 
            mfo.advantages.some(advantage => 
              advantage.toLowerCase().includes('быстр') ||
              advantage.toLowerCase().includes('минут')
            )
          )
          break
      }
    }

    // Сортировка
    switch (sortBy) {
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'rate':
        result.sort((a, b) => a.minRate - b.minRate)
        break
      case 'amount':
        result.sort((a, b) => b.maxAmount - a.maxAmount)
        break
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        break
    }

    return result
  }, [mfos, searchTerm, filters, sortBy])

  const resetFilters = () => {
    setSearchTerm('')
    setFilters({
      amount: null,
      maxRate: null,
      term: null,
      minRating: null,
      yearFounded: '',
      feature: ''
    })
    setSortBy('rating')
  }

  return {
    searchTerm,
    setSearchTerm,
    sortBy,
    setSortBy,
    filters,
    setFilters,
    filteredAndSortedMfos,
    resetFilters
  }
}

