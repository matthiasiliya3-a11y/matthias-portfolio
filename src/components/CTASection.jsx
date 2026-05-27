import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <section className="section">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-effect-lg p-12 md:p-16 rounded-2xl text-center relative overflow-hidden"
        >
          {/* Background Animation */}
          <motion.div
            className="absolute inset-0 -z-10"
            animate={{
              background: [
                'radial-gradient(circle at 0% 0%, rgba(0, 113, 227, 0.1) 0%, transparent 100%)',
                'radial-gradient(circle at 100% 100%, rgba(0, 113, 227, 0.1) 0%, transparent 100%)',
                'radial-gradient(circle at 0% 0%, rgba(0, 113, 227, 0.1) 0%, transparent 100%)',
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          />

          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-black dark:text-white">
            Ready to start your next project?
          </h2>
          <p className="text-xl text-gray-600 dark:text-premium-white/70 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create something extraordinary. Whether you need a stunning website, mobile app, or complete brand transformation, I'm here to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-premium btn-primary flex items-center justify-center gap-2 group text-lg"
            >
              Start Your Project
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/2348000000000"
              className="btn-premium btn-secondary flex items-center justify-center gap-2 text-lg"
            >
              Chat on WhatsApp
              <ArrowRight size={20} />
            </a>
          </div>

          {/* Quick Info */}
          <motion.div
            className="mt-12 pt-8 border-t border-gray-300 dark:border-premium-white/10 grid grid-cols-1 md:grid-cols-3 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div>
              <p className="text-sm text-gray-600 dark:text-premium-white/60 mb-1">Response Time</p>
              <p className="font-semibold text-black dark:text-white">24 Hours</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-premium-white/60 mb-1">Availability</p>
              <p className="font-semibold text-black dark:text-white">Full-Time</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-premium-white/60 mb-1">Location</p>
              <p className="font-semibold text-black dark:text-white">Remote / Abuja</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
