import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  Mail,
  Smartphone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  Send,
} from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
      setSubmitted(false)
    }, 2000)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@matthias.dev',
      link: 'mailto:hello@matthias.dev',
      description: 'Send me an email',
    },
    {
      icon: Smartphone,
      title: 'WhatsApp',
      value: '+234 800 000 0000',
      link: 'https://wa.me/2348000000000',
      description: 'Chat on WhatsApp',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Abuja, Nigeria',
      link: '#',
      description: 'Based in Abuja',
    },
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
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
              Let's Get In Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-premium-white/70 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how I can help bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section bg-white dark:bg-gradient-to-b dark:from-premium-black dark:to-graphite/20">
        <div className="container max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.a
                  key={index}
                  href={method.link}
                  variants={itemVariants}
                  className="glass-effect p-8 rounded-xl dark:hover:bg-white/10 hover:bg-black/5 transition-all group text-black dark:text-white"
                  whileHover={{ y: -5 }}
                >
                  <div className="p-4 glass-effect rounded-lg w-fit mb-4 group-hover:bg-subtle-blue/20 transition-colors">
                    <Icon size={32} className="text-subtle-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                  <p className="text-subtle-blue font-semibold mb-1">
                    {method.value}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-premium-white/70">
                    {method.description}
                  </p>
                </motion.a>
              )
            })}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center py-12 border-t border-gray-300 dark:border-premium-white/10"
          >
            <p className="text-gray-600 dark:text-premium-white/70 mb-6">
              Follow me on social media
            </p>
            <div className="flex gap-3 justify-center">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg glass-effect flex items-center justify-center hover:bg-subtle-blue/20 transition-all group"
                    title={social.label}
                  >
                    <Icon
                      size={24}
                      className="group-hover:text-subtle-blue transition-colors"
                    />
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4">
              Send Me a Message
            </h2>
            <p className="text-xl text-premium-white/70">
              I'll get back to you within 24 hours
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="glass-effect-lg p-8 md:p-12 rounded-2xl space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-premium-white placeholder-premium-white/40 focus:outline-none focus:border-subtle-blue transition-colors"
                  placeholder="Your name"
                />
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-premium-white placeholder-premium-white/40 focus:outline-none focus:border-subtle-blue transition-colors"
                  placeholder="your@email.com"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-premium-white placeholder-premium-white/40 focus:outline-none focus:border-subtle-blue transition-colors"
                  placeholder="+234 800 000 0000"
                />
              </motion.div>

              {/* Subject */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-premium-white placeholder-premium-white/40 focus:outline-none focus:border-subtle-blue transition-colors"
                  placeholder="Project topic"
                />
              </motion.div>
            </div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-premium-white placeholder-premium-white/40 focus:outline-none focus:border-subtle-blue transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full btn-premium btn-primary flex items-center justify-center gap-2 group text-lg"
              whileHover={{ scale: submitted ? 1 : 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={submitted}
            >
              {submitted ? (
                <>
                  <span>✓ Message Sent!</span>
                </>
              ) : (
                <>
                  Send Message
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </motion.button>

            <p className="text-center text-sm text-premium-white/60">
              * Required fields
            </p>
          </motion.form>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="section bg-gradient-to-b from-premium-black to-graphite/20">
        <div className="container max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold mb-4">
              Ready to Start?
            </h2>
            <p className="text-xl text-premium-white/70 max-w-2xl mx-auto">
              Multiple ways to connect and discuss your project
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.a
              href="https://wa.me/2348000000000"
              variants={itemVariants}
              className="glass-effect p-8 rounded-xl hover:bg-white/10 transition-all text-center group"
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold mb-2">Quick Chat</h3>
              <p className="text-premium-white/70 text-sm mb-4">
                Start a conversation on WhatsApp
              </p>
              <span className="text-subtle-blue font-semibold group-hover:gap-2 transition-all">
                Open WhatsApp →
              </span>
            </motion.a>

            <motion.a
              href="mailto:hello@matthias.dev?subject=Project%20Inquiry"
              variants={itemVariants}
              className="glass-effect p-8 rounded-xl hover:bg-white/10 transition-all text-center group"
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold mb-2">Send Email</h3>
              <p className="text-premium-white/70 text-sm mb-4">
                Detailed project discussion
              </p>
              <span className="text-subtle-blue font-semibold">
                Send Email →
              </span>
            </motion.a>

            <motion.div
              variants={itemVariants}
              className="glass-effect p-8 rounded-xl hover:bg-white/10 transition-all text-center group"
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-bold mb-2">Schedule Call</h3>
              <p className="text-premium-white/70 text-sm mb-4">
                Book a video call
              </p>
              <button className="text-subtle-blue font-semibold">
                Schedule →
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                q: 'What is your typical project timeline?',
                a: 'Most projects take 2-8 weeks depending on complexity. We discuss timelines during the initial consultation.',
              },
              {
                q: 'Do you offer ongoing support?',
                a: 'Yes! I offer various support packages including maintenance, updates, and optimization.',
              },
              {
                q: 'What is your pricing structure?',
                a: 'Pricing varies based on project scope, complexity, and requirements. I provide custom quotes after understanding your needs.',
              },
              {
                q: 'Do you work with remote teams?',
                a: 'Absolutely! I work with clients worldwide and prefer remote collaboration for flexibility and efficiency.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-effect p-6 rounded-xl hover:bg-white/10 transition-all"
              >
                <h3 className="font-bold text-lg mb-2 text-subtle-blue">
                  {faq.q}
                </h3>
                <p className="text-premium-white/80 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
