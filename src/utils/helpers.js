// Utility functions for common operations

/**
 * Smooth scroll to element
 */
export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

/**
 * Format date
 */
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Truncate text
 */
export const truncateText = (text, length) => {
  if (text.length <= length) return text
  return text.substring(0, length) + '...'
}

/**
 * Check if device is mobile
 */
export const isMobile = () => {
  return window.innerWidth < 768
}

/**
 * Debounce function
 */
export const debounce = (func, delay) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

/**
 * Throttle function
 */
export const throttle = (func, delay) => {
  let lastCall = 0
  return (...args) => {
    const now = Date.now()
    if (now - lastCall >= delay) {
      lastCall = now
      func(...args)
    }
  }
}

/**
 * Copy to clipboard
 */
export const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text)
}

/**
 * Get contrasting color
 */
export const getContrastColor = (hexColor) => {
  const r = parseInt(hexColor.substr(1, 2), 16)
  const g = parseInt(hexColor.substr(3, 2), 16)
  const b = parseInt(hexColor.substr(5, 2), 16)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000
  return brightness > 155 ? '#000000' : '#ffffff'
}

/**
 * Validate email
 */
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

/**
 * Format number with commas
 */
export const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

/**
 * Get random item from array
 */
export const getRandomItem = (array) => {
  return array[Math.floor(Math.random() * array.length)]
}

/**
 * Delay function (for promises)
 */
export const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Merge objects deeply
 */
export const mergeObjects = (obj1, obj2) => {
  return {
    ...obj1,
    ...obj2,
  }
}

/**
 * Get initials from name
 */
export const getInitials = (name) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}
