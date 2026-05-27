import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  Zap,
  Smartphone,
  Palette,
  Box,
  Sparkles,
  Layers,
} from 'lucide-react'

export default function ServicesPreview() {
  const services = [
    {
      icon: Zap,
      title: 'Website Development',
      description: 'High-performance, responsive websites built with modern technologies.',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user interfaces focused on exceptional experiences.',
    },
    {
      icon: Box,
      title: '3D Design',
      description: 'Stunning 3D visualizations and interactive 3D experiences.',
    },
    {
      icon: Sparkles,
      title: 'Motion Graphics',
      description: 'Cinematic animations and motion design that captivates.',
    },
    {
      icon: Layers,
      title: 'Brand Design',
      description: 'Comprehensive brand identity and visual language systems.',
    },
  ]

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
  }

  return (
    <section className="section">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-black dark:text-white">
            Services & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-premium-white/70 max-w-2xl mx-auto">
            Comprehensive solutions for all your digital needs
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group glass-effect p-8 rounded-xl dark:hover:bg-white/10 hover:bg-black/5 transition-all duration-300 cursor-pointer text-black dark:text-white"
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 inline-block p-3 glass-effect rounded-lg group-hover:bg-subtle-blue/20 transition-colors">
                  <Icon size={28} className="text-subtle-blue" />
                </div>
                <h3 className="text-xl font-display font-bold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-premium-white/70">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="btn-premium btn-primary inline-flex items-center gap-2 group"
          >
            Explore All Services
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
