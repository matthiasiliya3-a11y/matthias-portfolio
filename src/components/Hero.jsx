import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowRight, Download } from 'lucide-react'
import { Link } from 'react-router-dom'
import profileImage from '../assets/images/matthias-profile.png?url'

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)

  const titles = [
    'Full-Stack Developer',
    'UI/UX Designer',
    'Mobile App Developer',
    'Motion Graphics Designer',
    '3D Visual Designer',
    'Creative Technologist'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="min-h-screen relative overflow-hidden pt-20 pb-10 flex items-center">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute w-96 h-96 bg-subtle-blue rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{
            x: [0, -100, 50, 0],
            y: [0, 100, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ bottom: '10%', right: '10%' }}
        />
      </div>

      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="space-y-4">
              <motion.div
                variants={itemVariants}
                className="inline-block"
              >
                <span className="text-sm font-semibold text-subtle-blue glass-effect px-4 py-2">
                  Welcome to my portfolio
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight"
              >
                Matthias Z.
                <br />
                <span className="gradient-text">Iliya</span>
              </motion.h1>

              {/* Rotating Title */}
              <motion.div
                className="h-20 flex items-center"
                variants={itemVariants}
              >
                <motion.h2
                  key={titleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl font-display text-light-text-secondary dark:text-premium-white/80"
                >
                  {titles[titleIndex]}
                </motion.h2>
              </motion.div>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-light-text-secondary dark:text-premium-white/70 max-w-lg leading-relaxed"
            >
              I craft premium digital experiences that blend creativity with cutting-edge technology. From stunning interfaces to powerful applications, let's build something extraordinary together.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link
                to="/contact"
                className="btn-premium btn-primary flex items-center justify-center gap-2 group"
              >
                Hire Me
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/projects"
                className="btn-premium btn-secondary flex items-center justify-center gap-2"
              >
                View Projects
                <ArrowRight size={20} />
              </Link>
              <button className="btn-premium btn-secondary flex items-center justify-center gap-2">
                <Download size={20} />
                Resume
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex gap-8 pt-8 border-t border-light-border dark:border-premium-white/10"
            >
              <div>
                <p className="text-3xl font-bold text-subtle-blue">50+</p>
                <p className="text-sm text-light-text-secondary dark:text-premium-white/60">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-subtle-blue">30+</p>
                <p className="text-sm text-light-text-secondary dark:text-premium-white/60">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-subtle-blue">8+</p>
                <p className="text-sm text-light-text-secondary dark:text-premium-white/60">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image Area */}
          <motion.div
            variants={itemVariants}
            className="relative h-full min-h-500px flex items-center justify-center"
          >
            {/* Ambient Glow Layer - Premium Apple-style */}
            <motion.div
              className="absolute w-80 h-80 bg-gradient-to-r from-subtle-blue/40 to-purple-600/30 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <div className="relative w-full aspect-square max-w-sm">
              {/* Animated Gradient Glow Background */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-subtle-blue/50 via-purple-600/30 to-transparent blur-2xl"
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Main Glassmorphism Glow Container - Circular */}
              <motion.div
                className="absolute inset-0 glass-effect-lg rounded-full"
                animate={{
                  scale: [1, 1.03, 1],
                  boxShadow: [
                    '0 0 30px rgba(0, 113, 227, 0.3), inset 0 0 30px rgba(0, 113, 227, 0.1)',
                    '0 0 60px rgba(0, 113, 227, 0.5), inset 0 0 40px rgba(0, 113, 227, 0.2)',
                    '0 0 30px rgba(0, 113, 227, 0.3), inset 0 0 30px rgba(0, 113, 227, 0.1)',
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {/* Profile Image - Circular */}
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <div className="absolute inset-0 rounded-full border border-white/15" />
                  <img 
                    src={profileImage} 
                    alt="Matthias Profile" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </motion.div>

              {/* Premium Floating Elements */}
              <motion.div
                className="absolute -top-10 -right-10 w-20 h-20 glass-effect rounded-2xl flex items-center justify-center backdrop-blur-md z-10 border border-white/10"
                animate={{ 
                  y: [0, -24, 0],
                  rotate: [0, 12, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-2xl drop-shadow-lg">⚡</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-10 -left-10 w-20 h-20 glass-effect rounded-2xl flex items-center justify-center backdrop-blur-md z-10 border border-white/10"
                animate={{ 
                  y: [0, 24, 0],
                  rotate: [0, -12, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <span className="text-2xl drop-shadow-lg">✨</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
