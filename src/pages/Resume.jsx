import { motion } from 'framer-motion'
import { Download, ExternalLink } from 'lucide-react'

export default function Resume() {
  const experience = [
    {
      role: 'Senior Full-Stack Developer',
      company: 'Tech Innovations Ltd',
      period: '2022 - Present',
      description: 'Leading frontend and backend development for enterprise applications. Mentoring junior developers and establishing best practices.',
      achievements: [
        'Architected scalable web applications serving 100k+ users',
        'Improved application performance by 60%',
        'Led team of 5 developers to deliver projects 20% ahead of schedule',
      ],
    },
    {
      role: 'Creative Technologist',
      company: 'Digital Design Studio',
      period: '2020 - 2022',
      description: 'Bridged design and development, creating innovative digital experiences with motion graphics and interactive elements.',
      achievements: [
        'Designed and built award-winning digital experiences',
        'Created 3D visualizations for e-commerce platform',
        'Increased client engagement by 150% with animation design',
      ],
    },
    {
      role: 'Full-Stack Web Developer',
      company: 'StartUp Ventures',
      period: '2018 - 2020',
      description: 'Developed full-stack web applications from concept to deployment. Worked with modern technologies and agile methodologies.',
      achievements: [
        'Built 15+ web applications for various clients',
        'Implemented CI/CD pipelines reducing deployment time',
        'Mentored 3 junior developers',
      ],
    },
    {
      role: 'Front-End Developer',
      company: 'Creative Agency',
      period: '2016 - 2018',
      description: 'Created responsive, accessible websites and web applications with focus on user experience.',
      achievements: [
        'Developed 25+ responsive websites',
        'Achieved 95+ Google Lighthouse scores',
        'Built custom component libraries',
      ],
    },
  ]

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      year: '2016',
      highlights: ['GPA: 3.8/4.0', 'Honors Distinction', 'Scholarship Recipient'],
    },
    {
      degree: 'Advanced Diploma in Web Development',
      institution: 'Tech Academy',
      year: '2015',
      highlights: ['Full-Stack Specialization', 'Top Graduate', 'Industry Certification'],
    },
  ]

  const certifications = [
    { name: 'AWS Solutions Architect', issuer: 'Amazon', year: '2023' },
    { name: 'Google Cloud Professional', issuer: 'Google Cloud', year: '2023' },
    { name: 'UX Design Certification', issuer: 'Nielsen Norman Group', year: '2022' },
    { name: 'Advanced JavaScript', issuer: 'Frontend Masters', year: '2022' },
    { name: 'React Advanced Patterns', issuer: 'Epic React', year: '2021' },
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
              Resume & Experience
            </h1>
            <p className="text-xl text-gray-600 dark:text-premium-white/70 max-w-2xl mx-auto mb-8">
              A comprehensive overview of my professional background and accomplishments
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-premium btn-primary inline-flex items-center gap-2"
            >
              <Download size={20} />
              Download Full Resume
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section bg-white dark:bg-gradient-to-b dark:from-premium-black dark:to-graphite/20">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-12 text-black dark:text-white">
              Professional Experience
            </h2>
          </motion.div>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experience.map((job, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-effect p-8 rounded-xl border-l-4 border-subtle-blue dark:hover:bg-white/10 hover:bg-black/5 transition-all"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-black dark:text-white">{job.role}</h3>
                    <p className="text-subtle-blue font-semibold">{job.company}</p>
                  </div>
                  <span className="text-gray-600 dark:text-premium-white/60 font-semibold whitespace-nowrap">
                    {job.period}
                  </span>
                </div>

                <p className="text-gray-700 dark:text-premium-white/80 mb-4">
                  {job.description}
                </p>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-subtle-blue mb-2">
                    Key Achievements:
                  </p>
                  {job.achievements.map((achievement, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-gray-600 dark:text-premium-white/70 text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-subtle-blue mt-2 flex-shrink-0" />
                      {achievement}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-12">
              Education
            </h2>
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-effect p-8 rounded-xl hover:bg-white/10 transition-all"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{edu.degree}</h3>
                    <p className="text-subtle-blue font-semibold">{edu.institution}</p>
                  </div>
                  <span className="text-premium-white/60 font-semibold">
                    {edu.year}
                  </span>
                </div>

                <div className="flex flex-wrap gap-3">
                  {edu.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-subtle-blue/20 text-subtle-blue px-3 py-1 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section bg-gradient-to-b from-premium-black to-graphite/20">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-12">
              Certifications & Credentials
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-effect p-6 rounded-xl flex items-center justify-between hover:bg-white/10 transition-all group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <div>
                  <h3 className="font-bold text-lg">{cert.name}</h3>
                  <p className="text-sm text-premium-white/70">{cert.issuer}</p>
                  <p className="text-xs text-subtle-blue mt-1">{cert.year}</p>
                </div>
                <ExternalLink
                  size={20}
                  className="text-subtle-blue opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="section">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-effect-lg p-12 rounded-2xl"
          >
            <h2 className="text-3xl font-display font-bold mb-8">
              Key Competencies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4 text-subtle-blue">
                  Frontend Development
                </h3>
                <ul className="space-y-2 text-sm text-premium-white/80">
                  <li>✓ React & Next.js</li>
                  <li>✓ TypeScript</li>
                  <li>✓ Tailwind CSS</li>
                  <li>✓ Responsive Design</li>
                  <li>✓ Web Animation</li>
                  <li>✓ Performance Optimization</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4 text-subtle-blue">
                  Backend Development
                </h3>
                <ul className="space-y-2 text-sm text-premium-white/80">
                  <li>✓ Node.js</li>
                  <li>✓ MongoDB & PostgreSQL</li>
                  <li>✓ API Design</li>
                  <li>✓ Firebase</li>
                  <li>✓ Cloud Deployment</li>
                  <li>✓ Database Design</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4 text-subtle-blue">
                  Design & Creative
                </h3>
                <ul className="space-y-2 text-sm text-premium-white/80">
                  <li>✓ UI/UX Design</li>
                  <li>✓ Figma & Adobe Suite</li>
                  <li>✓ 3D Design</li>
                  <li>✓ Motion Graphics</li>
                  <li>✓ Brand Design</li>
                  <li>✓ Prototyping</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              Let's work together
            </h2>
            <p className="text-xl text-premium-white/70 mb-8">
              Ready to discuss your project? Let's connect and create something amazing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-premium btn-primary">Schedule a Call</button>
              <button className="btn-premium btn-secondary">Download Resume</button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
