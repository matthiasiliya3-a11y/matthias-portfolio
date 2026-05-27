import { motion } from 'framer-motion'

export default function TechStack() {
  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Firebase', category: 'Backend' },
    { name: 'Three.js', category: '3D' },
    { name: 'Blender', category: 'Design' },
    { name: 'Figma', category: 'Design' },
    { name: 'Adobe Suite', category: 'Design' },
    { name: 'Framer Motion', category: 'Animation' },
    { name: 'Git', category: 'Tools' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'AWS', category: 'Cloud' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section className="section bg-white dark:bg-premium-black">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-black dark:text-white">
            Tech Stack
          </h2>
          <p className="text-xl text-gray-600 dark:text-premium-white/70 max-w-2xl mx-auto">
            Tools and technologies I work with daily
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5 }}
              className="glass-effect px-6 py-3 rounded-full cursor-pointer dark:hover:bg-white/10 transition-all"
            >
              <p className="font-semibold text-sm text-black dark:text-white">{tech.name}</p>
              <p className="text-xs text-subtle-blue">{tech.category}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="glass-effect p-8 rounded-xl text-center">
            <p className="text-4xl font-bold text-subtle-blue mb-2">8+</p>
            <p className="text-gray-600 dark:text-premium-white/70">Years of Experience</p>
          </div>
          <div className="glass-effect p-8 rounded-xl text-center">
            <p className="text-4xl font-bold text-subtle-blue mb-2">50+</p>
            <p className="text-gray-600 dark:text-premium-white/70">Projects Delivered</p>
          </div>
          <div className="glass-effect p-8 rounded-xl text-center">
            <p className="text-4xl font-bold text-subtle-blue mb-2">30+</p>
            <p className="text-gray-600 dark:text-premium-white/70">Satisfied Clients</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
