import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme-mode')
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDarkMode(prefersDark)
    }
    setIsLoaded(true)
  }, [])

  // Update document and localStorage when theme changes
  useEffect(() => {
    if (!isLoaded) return

    const htmlElement = document.documentElement
    if (isDarkMode) {
      htmlElement.classList.remove('light')
      htmlElement.classList.add('dark')
      localStorage.setItem('theme-mode', 'dark')
    } else {
      htmlElement.classList.remove('dark')
      htmlElement.classList.add('light')
      localStorage.setItem('theme-mode', 'light')
    }
  }, [isDarkMode, isLoaded])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, isLoaded }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
