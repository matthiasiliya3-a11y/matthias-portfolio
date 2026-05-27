import { motion } from 'framer-motion'
import {
  Code,
  Smartphone,
  Palette,
  Box,
  Sparkles,
  Layers,
  Video,
  Zap,
} from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Development',
      icon: Code,
      skills: [
        { name: 'Frontend Development', level: 95 },
        { name: 'Backend Development', level: 90 },
        { name: 'Mobile App Development', level: 92 },
        { name: 'Responsive Web Development', level: 98 },
      ],
    },
    {
      category: 'Design',
      icon: Palette,
      skills: [
        { name: 'UI/UX Design', level: 94 },
        { name: 'Product Design', level: 91 },
        { name: 'Brand Design', level: 89 },
        { name: 'Web Design', level: 96 },
      ],
    },
    {
      category: 'Creative',
      icon: Sparkles,
      skills: [
        { name: '3D Design', level: 85 },
        { name: 'Motion Graphics', level: 88 },
        { name: 'Video Editing', level: 84 },
        { name: 'Creative Direction', level: 92 },
      ],
    },
    {
      category: 'Tools & Technologies',
      icon: Zap,
      skills: [
        { name: 'React & Next.js', level: 97 },
        { name: 'Figma & Adobe Suite', level: 95 },
        { name: 'Three.js & Blender', level: 87 },
        { name: 'Node.js & Databases', level: 91 },
      ],
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
              Skills & Expertise
            </h1>
            <p className="text-xl text-gray-600 dark:text-premium-white/70 max-w-2xl mx-auto">
              A comprehensive overview of my technical and creative capabilities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="section bg-white dark:bg-gradient-to-b dark:from-premium-black dark:to-graphite/20">
        <div className="container max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="space-y-8"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 glass-effect rounded-lg">
                      <Icon size={32} className="text-subtle-blue" />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-black dark:text-white">
                      {category.category}
                    </h2>
                  </div>

                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-semibold text-lg text-black dark:text-white">{skill.name}</h3>
                          <span className="text-subtle-blue font-bold">{skill.level}%</span>
                        </div>
                        <motion.div
                          className="w-full h-2 glass-effect rounded-full overflow-hidden"
                          whileInView={{ opacity: 1 }}
                          initial={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <motion.div
                            className="h-full bg-gradient-to-r from-subtle-blue to-purple-600"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1.5,
                              ease: 'easeOut',
                              delay: 0.2,
                            }}
                            viewport={{ once: true }}
                          />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-20 pt-20 border-t border-gray-300 dark:border-premium-white/10"
          >
            <h3 className="text-3xl font-display font-bold mb-8 text-center text-black dark:text-white">
              Additional Competencies
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {[
                'Project Management',
                'Team Leadership',
                'Client Communication',
                'Agile Methodology',
                'Performance Optimization',
                'SEO Optimization',
                'Accessibility (A11y)',
                'Cloud Deployment',
                'Version Control (Git)',
                'API Integration',
                'Database Design',
                'Responsive Design',
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-effect px-6 py-3 rounded-full cursor-pointer text-black dark:text-white"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proficiency Levels */}
      <section className="section bg-gradient-to-b from-gray-50 to-white dark:from-transparent dark:to-transparent">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold mb-4 text-black dark:text-white">
              Proficiency Levels
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { label: 'Expert', description: '90-100%', color: 'from-green-500' },
              { label: 'Advanced', description: '75-89%', color: 'from-blue-500' },
              { label: 'Proficient', description: '60-74%', color: 'from-purple-500' },
            ].map((level, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-effect p-8 rounded-xl text-center text-black dark:text-white"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-2xl font-bold mb-2">{level.label}</h3>
                <p className="text-gray-600 dark:text-premium-white/70">{level.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
