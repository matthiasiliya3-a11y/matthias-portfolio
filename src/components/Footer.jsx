import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, Instagram, Facebook, Twitter, Smartphone } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hello@matthias.dev', label: 'Email' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Smartphone, href: 'https://wa.me/2348000000000', label: 'WhatsApp' },
  ]

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <footer className="glass-effect-lg border-t border-light-border dark:border-premium-white/10 mt-20">
      <div className="container max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1"
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">Matthias Z. Iliya</span>
            </h3>
            <p className="text-sm text-light-text-secondary dark:text-premium-white/70 mb-4">
              Creative technologist crafting premium digital experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-light-text-secondary dark:text-premium-white/70 hover:text-subtle-blue dark:hover:text-subtle-blue transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hello@matthias.dev"
                  className="text-sm text-light-text-secondary dark:text-premium-white/70 hover:text-subtle-blue dark:hover:text-subtle-blue transition-colors"
                >
                  hello@matthias.dev
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2348000000000"
                  className="text-sm text-light-text-secondary dark:text-premium-white/70 hover:text-subtle-blue dark:hover:text-subtle-blue transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4">Follow</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center hover:bg-subtle-blue/20 dark:hover:bg-subtle-blue/20 transition-all"
                    title={social.label}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-light-border dark:border-premium-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-light-text-secondary/75 dark:text-premium-white/50">
              © {currentYear} Matthias Z. Iliya. All rights reserved.
            </p>
            <p className="text-xs text-light-text-secondary/75 dark:text-premium-white/50">
              Crafted with precision and passion.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
