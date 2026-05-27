import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      text: "Matthias exceeded all our expectations with his attention to detail and creative approach. He transformed our digital presence completely and delivered on time.",
      author: 'Sarah Johnson',
      role: 'CEO & Founder',
      company: 'Tech Startup Inc',
      image: '👩‍💼',
      rating: 5,
    },
    {
      text: "Working with Matthias was a game-changer. His expertise in both design and development is rare and invaluable. He understands the business side too.",
      author: 'Michael Chen',
      role: 'Product Manager',
      company: 'Digital Solutions Co',
      image: '👨‍💻',
      rating: 5,
    },
    {
      text: "The quality of work, professionalism, and communication were outstanding. Highly recommend for any serious project. Best investment we made this year.",
      author: 'Emma Williams',
      role: 'Creative Director',
      company: 'Creative Agency Pro',
      image: '👩‍🎨',
      rating: 5,
    },
    {
      text: "Matthias delivered a stunning website that increased our conversions by 40%. His understanding of UX and performance optimization is exceptional.",
      author: 'David Smith',
      role: 'Founder',
      company: 'E-commerce Plus',
      image: '👨‍🔬',
      rating: 5,
    },
    {
      text: "The mobile app Matthias developed is smooth, intuitive, and users love it. He managed the entire development process professionally.",
      author: 'Lisa Anderson',
      role: 'CTO',
      company: 'Mobile Innovations',
      image: '👩‍💻',
      rating: 5,
    },
    {
      text: "Exceptional work on our brand redesign. Matthias brought our vision to life with creativity and technical excellence. Highly professional!",
      author: 'James Wilson',
      role: 'Marketing Lead',
      company: 'Global Brands Ltd',
      image: '👨‍💼',
      rating: 5,
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

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
              Client Testimonials
            </h1>
            <p className="text-xl text-gray-600 dark:text-premium-white/70 max-w-2xl mx-auto">
              What my clients and collaborators say about working together
            </p>
          </motion.div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="section bg-white dark:bg-gradient-to-b dark:from-premium-black dark:to-graphite/20">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-effect-lg p-8 md:p-12 rounded-2xl"
            key={currentIndex}
          >
            {/* Main Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star size={24} className="fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-2xl md:text-3xl font-display leading-relaxed text-black dark:text-white">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="text-4xl">
                  {testimonials[currentIndex].image}
                </div>
                <div>
                  <p className="font-bold text-lg text-black dark:text-white">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-gray-600 dark:text-premium-white/70">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-sm text-subtle-blue">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Controls */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-300 dark:border-premium-white/10">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-subtle-blue w-8'
                        : 'bg-gray-300 dark:bg-premium-white/30 hover:bg-gray-400 dark:hover:bg-premium-white/50'
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={prevSlide}
                  className="p-3 glass-effect rounded-lg hover:bg-subtle-blue/20 transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-3 glass-effect rounded-lg hover:bg-subtle-blue/20 transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Counter */}
            <p className="text-center text-sm text-premium-white/60 mt-6">
              {currentIndex + 1} of {testimonials.length}
            </p>
          </motion.div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="section">
        <div className="container max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4">
              All Testimonials
            </h2>
            <p className="text-xl text-premium-white/70 max-w-2xl mx-auto">
              Complete client feedback
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-effect p-8 rounded-xl hover:bg-white/10 transition-all"
                whileHover={{ y: -5 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-premium-white/80 mb-6 italic min-h-20">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="text-3xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-xs text-premium-white/60">{testimonial.role}</p>
                    <p className="text-xs text-subtle-blue">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-gradient-to-b from-premium-black to-graphite/20">
        <div className="container max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { number: '30+', label: 'Happy Clients' },
              { number: '50+', label: 'Projects Delivered' },
              { number: '100%', label: 'Satisfaction Rate' },
              { number: '8+', label: 'Years Experience' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-effect p-8 rounded-xl text-center"
              >
                <p className="text-4xl font-bold text-subtle-blue mb-2">
                  {stat.number}
                </p>
                <p className="text-premium-white/70">{stat.label}</p>
              </motion.div>
            ))}
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
              Ready to join satisfied clients?
            </h2>
            <p className="text-xl text-premium-white/70 mb-8">
              Start your project today and experience the difference quality makes.
            </p>
            <button className="btn-premium btn-primary">
              Get Started Now
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
