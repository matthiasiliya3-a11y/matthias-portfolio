import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X, ArrowRight } from 'lucide-react'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Tech Startup Landing Page',
      category: 'web',
      description: 'Modern, responsive landing page for a tech startup with interactive animations.',
      image: '🌐',
      tags: ['React', 'Tailwind', 'Framer Motion'],
      year: '2024',
    },
    {
      id: 2,
      title: 'Mobile Fitness App',
      category: 'mobile',
      description: 'Full-featured iOS and Android fitness tracking application with real-time data sync.',
      image: '📱',
      tags: ['React Native', 'Firebase', 'Mobile'],
      year: '2024',
    },
    {
      id: 3,
      title: '3D Product Visualization',
      category: '3d',
      description: 'Interactive 3D product visualizer for e-commerce platform using Three.js.',
      image: '🎯',
      tags: ['Three.js', 'WebGL', '3D'],
      year: '2023',
    },
    {
      id: 4,
      title: 'Brand Animation Suite',
      category: 'motion',
      description: 'Cinematic brand motion graphics and animated video content.',
      image: '✨',
      tags: ['After Effects', 'Cinema 4D', 'Motion'],
      year: '2024',
    },
    {
      id: 5,
      title: 'E-commerce Platform',
      category: 'web',
      description: 'Complete e-commerce solution with payment integration and admin dashboard.',
      image: '🛍️',
      tags: ['Next.js', 'MongoDB', 'Stripe'],
      year: '2023',
    },
    {
      id: 6,
      title: 'SaaS Dashboard',
      category: 'web',
      description: 'Analytics dashboard for SaaS platform with real-time data visualization.',
      image: '📊',
      tags: ['React', 'Chart.js', 'Node.js'],
      year: '2024',
    },
    {
      id: 7,
      title: 'Social Media App',
      category: 'mobile',
      description: 'Social networking app with real-time messaging and media sharing.',
      image: '💬',
      tags: ['Flutter', 'Firebase', 'Mobile'],
      year: '2023',
    },
    {
      id: 8,
      title: 'UI/UX Design System',
      category: 'design',
      description: 'Comprehensive design system with component library and documentation.',
      image: '🎨',
      tags: ['Figma', 'Design System'],
      year: '2024',
    },
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'Design' },
    { id: '3d', label: '3D & Motion' },
  ]

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'all' || project.category === activeFilter
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-20 flex items-center">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-black dark:text-white">
              Portfolio Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-premium-white/70 max-w-2xl mx-auto">
              A showcase of my recent work and creative endeavors
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="section pt-0">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            className="flex flex-wrap gap-3 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeFilter === category.id
                    ? 'bg-subtle-blue text-white shadow-glow'
                    : 'glass-effect text-black dark:text-white dark:hover:bg-white/10 hover:bg-black/5'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeFilter}
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  exit="exit"
                  layoutId={`project-${project.id}`}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer"
                  whileHover={{ y: -10 }}
                >
                  <div className="glass-effect rounded-xl overflow-hidden h-full flex flex-col">
                    {/* Image Area */}
                    <div className="relative h-48 bg-gradient-to-br from-subtle-blue/20 to-purple-600/20 flex items-center justify-center overflow-hidden">
                      <motion.div
                        className="text-6xl"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.image}
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 dark:from-premium-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 w-full">
                          <p className="text-sm font-semibold text-subtle-blue">
                            Click to view
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 flex flex-col">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-subtle-blue transition-colors text-black dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-premium-white/70 flex-1 mb-4">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 2).map((tag, index) => (
                          <span
                            key={index}
                            className="text-xs bg-subtle-blue/20 text-subtle-blue px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <p className="text-xs text-gray-500 dark:text-premium-white/50">{project.year}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 dark:bg-premium-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="glass-effect-lg rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              layoutId={`project-${selectedProject.id}`}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 glass-effect rounded-lg hover:bg-white/10 transition-colors z-10"
              >
                <X size={24} />
              </button>

              {/* Content */}
              <div className="p-8">
                <div className="text-7xl mb-6 text-center">{selectedProject.image}</div>

                <h2 className="text-4xl font-display font-bold mb-4 text-black dark:text-white">
                  {selectedProject.title}
                </h2>

                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm px-4 py-2 glass-effect rounded-full text-black dark:text-white">
                    {selectedProject.year}
                  </span>
                  <span className="text-sm px-4 py-2 glass-effect rounded-full capitalize text-black dark:text-white">
                    {selectedProject.category}
                  </span>
                </div>

                <p className="text-lg text-gray-700 dark:text-premium-white/80 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="mb-8">
                  <h3 className="font-semibold mb-3 text-black dark:text-white">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tags.map((tag, index) => (
                      <span key={index} className="px-4 py-2 glass-effect rounded-lg text-sm text-black dark:text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="btn-premium btn-primary flex items-center gap-2 group w-full justify-center">
                  View Project
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
