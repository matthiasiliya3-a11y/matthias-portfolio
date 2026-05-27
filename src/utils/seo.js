// SEO metadata for each page

export const seoMetadata = {
  home: {
    title: 'Matthias Z. Iliya | Full-Stack Developer & Creative Technologist',
    description: 'Premium portfolio of Matthias Z. Iliya - Full-Stack Web Developer, UI/UX Designer, Mobile App Developer, and Creative Technologist.',
    keywords: 'full-stack developer, UI/UX designer, mobile app developer, creative technologist, web development, design',
    ogTitle: 'Matthias Z. Iliya | Full-Stack Developer & Creative Technologist',
    ogDescription: 'Premium portfolio showcasing innovative digital solutions and creative projects',
    ogImage: 'https://matthias-portfolio.com/og-home.jpg',
  },
  skills: {
    title: 'Skills & Expertise | Matthias Z. Iliya',
    description: 'Comprehensive overview of technical and creative skills including development, design, and creative technologies.',
    keywords: 'skills, expertise, development, design, technologies, programming',
    ogTitle: 'Skills & Expertise | Matthias Z. Iliya',
    ogDescription: 'Full overview of professional skills and technical expertise',
    ogImage: 'https://matthias-portfolio.com/og-skills.jpg',
  },
  projects: {
    title: 'Portfolio Projects | Matthias Z. Iliya',
    description: 'Showcase of completed projects including web development, mobile apps, 3D design, and motion graphics.',
    keywords: 'projects, portfolio, web development, mobile apps, design, case studies',
    ogTitle: 'Portfolio Projects | Matthias Z. Iliya',
    ogDescription: 'Browse completed projects and case studies',
    ogImage: 'https://matthias-portfolio.com/og-projects.jpg',
  },
  services: {
    title: 'Services | Matthias Z. Iliya',
    description: 'Professional services including website development, mobile apps, UI/UX design, and creative branding.',
    keywords: 'services, web development, UI/UX design, mobile apps, 3D design, branding',
    ogTitle: 'Services | Matthias Z. Iliya',
    ogDescription: 'Comprehensive digital solutions and creative services',
    ogImage: 'https://matthias-portfolio.com/og-services.jpg',
  },
  testimonials: {
    title: 'Testimonials | Matthias Z. Iliya',
    description: 'Client testimonials and reviews from satisfied customers and collaborators.',
    keywords: 'testimonials, reviews, client feedback, case studies, success stories',
    ogTitle: 'Testimonials | Matthias Z. Iliya',
    ogDescription: 'What clients say about working with Matthias',
    ogImage: 'https://matthias-portfolio.com/og-testimonials.jpg',
  },
  resume: {
    title: 'Resume & Experience | Matthias Z. Iliya',
    description: 'Professional resume, work experience, education, and certifications.',
    keywords: 'resume, CV, experience, education, certifications, work history',
    ogTitle: 'Resume & Experience | Matthias Z. Iliya',
    ogDescription: 'Professional background and career highlights',
    ogImage: 'https://matthias-portfolio.com/og-resume.jpg',
  },
  contact: {
    title: 'Contact | Matthias Z. Iliya',
    description: 'Get in touch for project inquiries, collaboration, or to discuss your digital needs.',
    keywords: 'contact, email, phone, inquiry, collaboration, hire',
    ogTitle: 'Contact | Matthias Z. Iliya',
    ogDescription: "Let's discuss your project and create something amazing",
    ogImage: 'https://matthias-portfolio.com/og-contact.jpg',
  },
}

/**
 * Update meta tags for a page
 */
export const updateMetaTags = (pageKey) => {
  const metadata = seoMetadata[pageKey]
  if (!metadata) return

  // Update title
  document.title = metadata.title

  // Update or create description meta tag
  let descTag = document.querySelector('meta[name="description"]')
  if (!descTag) {
    descTag = document.createElement('meta')
    descTag.name = 'description'
    document.head.appendChild(descTag)
  }
  descTag.content = metadata.description

  // Update or create keywords meta tag
  let keywordsTag = document.querySelector('meta[name="keywords"]')
  if (!keywordsTag) {
    keywordsTag = document.createElement('meta')
    keywordsTag.name = 'keywords'
    document.head.appendChild(keywordsTag)
  }
  keywordsTag.content = metadata.keywords

  // Update OG tags
  let ogTitle = document.querySelector('meta[property="og:title"]')
  if (!ogTitle) {
    ogTitle = document.createElement('meta')
    ogTitle.setAttribute('property', 'og:title')
    document.head.appendChild(ogTitle)
  }
  ogTitle.content = metadata.ogTitle

  let ogDesc = document.querySelector('meta[property="og:description"]')
  if (!ogDesc) {
    ogDesc = document.createElement('meta')
    ogDesc.setAttribute('property', 'og:description')
    document.head.appendChild(ogDesc)
  }
  ogDesc.content = metadata.ogDescription

  let ogImage = document.querySelector('meta[property="og:image"]')
  if (!ogImage) {
    ogImage = document.createElement('meta')
    ogImage.setAttribute('property', 'og:image')
    document.head.appendChild(ogImage)
  }
  ogImage.content = metadata.ogImage
}

/**
 * Generate schema markup for JSON-LD
 */
export const generatePersonSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Matthias Z. Iliya',
    url: 'https://matthias-portfolio.com',
    email: 'hello@matthias.dev',
    jobTitle: 'Full-Stack Developer & Creative Technologist',
    knowsAbout: [
      'Web Development',
      'Mobile Development',
      'UI/UX Design',
      '3D Design',
      'Motion Graphics',
      'Creative Technology',
    ],
  }
}

/**
 * Generate schema markup for Organization
 */
export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Matthias Z. Iliya',
    url: 'https://matthias-portfolio.com',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'hello@matthias.dev',
      telephone: '+234-800-000-0000',
    },
    sameAs: [
      'https://github.com/matthias',
      'https://linkedin.com/in/matthias',
      'https://instagram.com/matthias',
    ],
  }
}
