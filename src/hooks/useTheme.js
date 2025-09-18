import { useState, useEffect } from 'react'

export const useTheme = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Проверяем сохраненную тему в localStorage
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      return savedTheme === 'dark'
    }
    // Если нет сохраненной темы, используем системную
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    // Применяем тему к документу
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
    // Сохраняем выбор пользователя
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
  }

  return { darkMode, toggleDarkMode }
}

