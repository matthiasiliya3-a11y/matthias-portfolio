import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import {
  Zap,
  Smartphone,
  Palette,
  Box,
  Sparkles,
  Layers,
  Brush,
  Lightbulb,
} from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Zap,
      title: 'Website Development',
      description: 'High-performance, fully responsive websites built with modern technologies.',
      benefits: [
        'Custom Design Implementation',
        'Mobile-First Approach',
        'SEO Optimization',
        'Fast Loading Speed',
        'Secure & Scalable',
        'Analytics Integration',
      ],
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      benefits: [
        'iOS & Android Apps',
        'Cross-Platform Solutions',
        'Real-Time Syncing',
        'Offline Functionality',
        'Push Notifications',
        'App Store Optimization',
      ],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces focused on exceptional user experiences.',
      benefits: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Accessibility Design',
        'Design Systems',
        'User Testing',
      ],
    },
    {
      icon: Box,
      title: '3D Design & Visualization',
      description: 'Stunning 3D models and interactive 3D experiences for products.',
      benefits: [
        '3D Modeling',
        'Product Visualization',
        'Interactive 3D Web',
        'Rendering & Animation',
        'AR Integration',
        'Virtual Showrooms',
      ],
    },
    {
      icon: Sparkles,
      title: 'Motion Graphics',
      description: 'Cinematic animations and motion design that captivates audiences.',
      benefits: [
        'Animated Videos',
        'Motion Design',
        'Video Editing',
        'Visual Effects',
        'Brand Animation',
        'Social Media Content',
      ],
    },
    {
      icon: Brush,
      title: 'Brand Design',
      description: 'Comprehensive brand identity and visual language systems.',
      benefits: [
        'Logo Design',
        'Brand Guidelines',
        'Color Palette',
        'Typography System',
        'Brand Assets',
        'Marketing Materials',
      ],
    },
    {
      icon: Layers,
      title: 'Product Design',
      description: 'Complete product strategy from concept to market-ready design.',
      benefits: [
        'Product Strategy',
        'User Flow Design',
        'Interactive Prototypes',
        'Usability Testing',
        'Design Iterations',
        'Product Launch',
      ],
    },
    {
      icon: Lightbulb,
      title: 'Digital Experience Design',
      description: 'Comprehensive digital solutions that blend technology and creativity.',
      benefits: [
        'Experience Strategy',
        'Multi-Platform Design',
        'Interaction Design',
        'Performance Optimization',
        'Data Visualization',
        'Analytics & Insights',
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
              Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-premium-white/70 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your unique needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white dark:bg-gradient-to-b dark:from-premium-black dark:to-graphite/20">
        <div className="container max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
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
                  className="group glass-effect p-8 rounded-xl dark:hover:bg-white/10 hover:bg-black/5 transition-all text-black dark:text-white"
                  whileHover={{ y: -5 }}
                >
                  {/* Icon */}
                  <div className="mb-6 inline-block p-4 glass-effect rounded-lg group-hover:bg-subtle-blue/20 transition-colors">
                    <Icon size={32} className="text-subtle-blue" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-display font-bold mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-premium-white/70 mb-6">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-2 mb-8">
                    <p className="text-sm font-semibold text-subtle-blue mb-3">
                      What's Included:
                    </p>
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-premium-white/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-subtle-blue" />
                        {benefit}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="flex items-center gap-2 text-subtle-blue font-semibold group-hover:gap-3 transition-all">
                    Get Started
                    <ArrowRight size={18} />
                  </button>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Pricing Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-20 pt-20 border-t border-premium-white/10"
          >
            <h2 className="text-4xl font-display font-bold text-center mb-12">
              Flexible Pricing Options
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Starter',
                  price: 'Custom',
                  description: 'Perfect for small projects and individuals',
                  features: ['1-2 Week Turnaround', 'Unlimited Revisions', 'Full Source Code'],
                },
                {
                  name: 'Professional',
                  price: 'Custom',
                  description: 'Best for growing businesses',
                  features: [
                    '2-4 Week Turnaround',
                    'Advanced Features',
                    'Analytics Setup',
                    'Ongoing Support',
                  ],
                  featured: true,
                },
                {
                  name: 'Enterprise',
                  price: 'Custom',
                  description: 'For large-scale projects',
                  features: [
                    'Custom Timeline',
                    'Dedicated Team',
                    'Regular Updates',
                    '3 Months Support',
                  ],
                },
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`rounded-xl p-8 transition-all ${
                    plan.featured
                      ? 'glass-effect-lg border-2 border-subtle-blue scale-105'
                      : 'glass-effect'
                  }`}
                  whileHover={{ y: -5 }}
                >
                  {plan.featured && (
                    <div className="text-center mb-4">
                      <span className="text-xs font-bold text-subtle-blue uppercase tracking-widest">
                        Recommended
                      </span>
                    </div>
                  )}

                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-premium-white/70 text-sm mb-4">
                    {plan.description}
                  </p>
                  <p className="text-3xl font-bold text-subtle-blue mb-6">
                    {plan.price}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-subtle-blue" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.featured
                      ? 'btn-primary'
                      : 'glass-effect hover:bg-white/10'
                  }`}>
                    Let's Talk
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-20 pt-20 border-t border-premium-white/10"
          >
            <h2 className="text-4xl font-display font-bold text-center mb-12">
              My Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: 1, title: 'Discovery', desc: 'Understanding your needs' },
                { step: 2, title: 'Strategy', desc: 'Planning the solution' },
                { step: 3, title: 'Design & Build', desc: 'Creating your vision' },
                { step: 4, title: 'Launch', desc: 'Going live with support' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="glass-effect p-6 rounded-xl text-center h-full flex flex-col justify-center">
                    <div className="text-4xl font-bold text-subtle-blue mb-3">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-premium-white/70">{item.desc}</p>
                  </div>

                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-subtle-blue to-transparent transform -translate-y-1/2" />
                  )}
                </motion.div>
              ))}
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
              Ready to get started?
            </h2>
            <p className="text-xl text-premium-white/70 mb-8">
              Let's discuss your project and find the perfect solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-premium btn-primary">Schedule a Call</button>
              <button className="btn-premium btn-secondary">Send Requirements</button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
