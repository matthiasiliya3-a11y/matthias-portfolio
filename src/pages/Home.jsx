import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import TechStack from '../components/TechStack'
import ServicesPreview from '../components/ServicesPreview'
import TestimonialsPreview from '../components/TestimonialsPreview'
import CTASection from '../components/CTASection'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <TechStack />
      <ServicesPreview />
      <TestimonialsPreview />
      <CTASection />
    </motion.div>
  )
}
