import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Testimonials from './pages/Testimonials'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

function App() {
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0)
  }, [])

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-light-bg dark:bg-premium-black text-light-text dark:text-premium-white flex flex-col transition-colors duration-300">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/services" element={<Services />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
