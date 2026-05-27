import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function TestimonialsPreview() {
  const testimonials = [
    {
      text: "Matthias exceeded all our expectations. His attention to detail and creative approach transformed our digital presence completely.",
      author: 'Sarah Johnson',
      company: 'Tech Startup Inc',
      rating: 5,
    },
    {
      text: "Working with Matthias was a game-changer. His expertise in both design and development is rare and invaluable.",
      author: 'Michael Chen',
      company: 'Digital Solutions Co',
      rating: 5,
    },
    {
      text: "The quality of work, professionalism, and communication were outstanding. Highly recommend for any serious project.",
      author: 'Emma Williams',
      company: 'Creative Agency Pro',
      rating: 5,
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
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
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 dark:text-premium-white/70 max-w-2xl mx-auto">
            What my clients say about working together
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-effect p-8 rounded-xl text-black dark:text-white"
              whileHover={{ y: -5 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 dark:text-premium-white/80 mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-600 dark:text-premium-white/60">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
