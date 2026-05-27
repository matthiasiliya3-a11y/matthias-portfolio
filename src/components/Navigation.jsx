import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { isDarkMode, toggleTheme } = useTheme()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 glass-effect-lg border-b border-light-border dark:border-white/10 transition-colors duration-300">
      <div className="container max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold font-display">
            <span className="gradient-text">MZ</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm font-medium transition-colors hover:text-subtle-blue dark:hover:text-subtle-blue relative group text-light-text dark:text-premium-white"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-subtle-blue to-transparent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            
            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              className="relative w-10 h-10 rounded-lg bg-light-glass dark:bg-glass-effect flex items-center justify-center hover:bg-light-glass-hover dark:hover:bg-white/10 transition-colors border border-light-border dark:border-white/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <motion.div
                initial={false}
                animate={{ 
                  rotate: isDarkMode ? 180 : 0,
                  opacity: isDarkMode ? 0 : 1 
                }}
                transition={{ duration: 0.3 }}
                className="absolute"
              >
                <Sun size={18} className="text-orange-400" />
              </motion.div>
              <motion.div
                initial={false}
                animate={{ 
                  rotate: isDarkMode ? 0 : -180,
                  opacity: isDarkMode ? 1 : 0 
                }}
                transition={{ duration: 0.3 }}
                className="absolute"
              >
                <Moon size={18} className="text-purple-300" />
              </motion.div>
            </motion.button>

            <Link
              to="/contact"
              className="btn-premium btn-primary"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 space-y-4 pb-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block text-sm font-medium hover:text-subtle-blue dark:hover:text-subtle-blue transition-colors text-light-text dark:text-premium-white"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Theme Toggle */}
            <div className="flex items-center justify-between pt-4 border-t border-light-border dark:border-white/10">
              <span className="text-sm font-medium text-light-text dark:text-premium-white">Theme</span>
              <motion.button
                onClick={toggleTheme}
                className="relative w-10 h-10 rounded-lg bg-light-glass dark:bg-glass-effect flex items-center justify-center hover:bg-light-glass-hover dark:hover:bg-white/10 transition-colors border border-light-border dark:border-white/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <motion.div
                  initial={false}
                  animate={{ 
                    rotate: isDarkMode ? 180 : 0,
                    opacity: isDarkMode ? 0 : 1 
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute"
                >
                  <Sun size={18} className="text-orange-400" />
                </motion.div>
                <motion.div
                  initial={false}
                  animate={{ 
                    rotate: isDarkMode ? 0 : -180,
                    opacity: isDarkMode ? 1 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute"
                >
                  <Moon size={18} className="text-purple-300" />
                </motion.div>
              </motion.button>
            </div>

            <Link
              to="/contact"
              className="block btn-premium btn-primary text-center"
              onClick={() => setIsOpen(false)}
            >
              Hire Me
            </Link>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
