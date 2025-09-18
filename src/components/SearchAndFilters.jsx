import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Search, Filter, ChevronDown, X } from 'lucide-react'

const SearchAndFilters = ({ 
  searchTerm, 
  setSearchTerm, 
  filters, 
  setFilters, 
  onReset,
  sortBy,
  setSortBy 
}) => {
  const [filtersOpen, setFiltersOpen] = useState(false)

  const handleAmountChange = (value) => {
    setFilters(prev => ({
      ...prev,
      amount: value[0]
    }))
  }

  const handleRateChange = (value) => {
    setFilters(prev => ({
      ...prev,
      maxRate: value[0]
    }))
  }

  const handleTermChange = (value) => {
    setFilters(prev => ({
      ...prev,
      term: value[0]
    }))
  }

  const handleRatingChange = (value) => {
    setFilters(prev => ({
      ...prev,
      minRating: value[0]
    }))
  }

  const activeFiltersCount = Object.values(filters).filter(value => 
    value !== null && value !== undefined && value !== ''
  ).length

  return (
    <div className="space-y-4">
      {/* Поиск и сортировка */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Поиск */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Поиск МФО по названию..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Сортировка */}
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Сортировка" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rating">По рейтингу</SelectItem>
            <SelectItem value="rate">По процентной ставке</SelectItem>
            <SelectItem value="amount">По максимальной сумме</SelectItem>
            <SelectItem value="name">По названию</SelectItem>
          </SelectContent>
        </Select>

        {/* Кнопка фильтров */}
        <Button
          variant="outline"
          onClick={() => setFiltersOpen(!filtersOpen)}
          className="relative"
        >
          <Filter className="w-4 h-4 mr-2" />
          Фильтры
          {activeFiltersCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {activeFiltersCount}
            </span>
          )}
          <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${filtersOpen ? 'rotate-180' : ''}`} />
        </Button>
      </div>

      {/* Панель фильтров */}
      <Collapsible open={filtersOpen} onOpenChange={setFiltersOpen}>
        <CollapsibleContent>
          <Card>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Фильтры</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onReset}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4 mr-1" />
                  Сбросить
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Сумма займа */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">
                    Сумма займа: до {filters.amount?.toLocaleString() || 120000} ₽
                  </Label>
                  <Slider
                    value={[filters.amount || 120000]}
                    onValueChange={handleAmountChange}
                    max={120000}
                    min={1000}
                    step={5000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1 000 ₽</span>
                    <span>120 000 ₽</span>
                  </div>
                </div>

                {/* Процентная ставка */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">
                    Ставка: до {filters.maxRate || 3}% в день
                  </Label>
                  <Slider
                    value={[filters.maxRate || 3]}
                    onValueChange={handleRateChange}
                    max={3}
                    min={0.5}
                    step={0.1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>0.5%</span>
                    <span>3%</span>
                  </div>
                </div>

                {/* Срок займа */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">
                    Срок: до {filters.term || 60} дней
                  </Label>
                  <Slider
                    value={[filters.term || 60]}
                    onValueChange={handleTermChange}
                    max={60}
                    min={5}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>5 дней</span>
                    <span>60 дней</span>
                  </div>
                </div>

                {/* Рейтинг */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">
                    Рейтинг: от {filters.minRating || 3}
                  </Label>
                  <Slider
                    value={[filters.minRating || 3]}
                    onValueChange={handleRatingChange}
                    max={5}
                    min={3}
                    step={0.1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>3.0</span>
                    <span>5.0</span>
                  </div>
                </div>
              </div>

              {/* Дополнительные фильтры */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Год основания</Label>
                  <Select 
                    value={filters.yearFounded || ''} 
                    onValueChange={(value) => setFilters(prev => ({ ...prev, yearFounded: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Любой год" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Любой год</SelectItem>
                      <SelectItem value="2020">С 2020 года</SelectItem>
                      <SelectItem value="2015">С 2015 года</SelectItem>
                      <SelectItem value="2010">С 2010 года</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Особенности</Label>
                  <Select 
                    value={filters.feature || ''} 
                    onValueChange={(value) => setFilters(prev => ({ ...prev, feature: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Все МФО" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Все МФО</SelectItem>
                      <SelectItem value="first-free">Первый займ бесплатно</SelectItem>
                      <SelectItem value="bad-credit">Работают с плохой КИ</SelectItem>
                      <SelectItem value="fast-approval">Быстрое одобрение</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

export default SearchAndFilters

