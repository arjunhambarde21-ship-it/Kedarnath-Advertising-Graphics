import {
  MessageCircle,
  Lightbulb,
  PenTool,
  Send,
  Handshake,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Megaphone,
  BarChart3,
  Layers3,
  ShieldCheck,
} from 'lucide-react'

import result1 from '../assets/political/result-1.jpeg'
import result2 from '../assets/political/result-2.jpeg'

import assembly1 from '../assets/political/assembly-1.png'

import municipal1 from '../assets/political/municipal-1.png'
import municipal2 from '../assets/political/municipal-2.png'
import municipal3 from '../assets/political/municipal-3.png'
import municipal4 from '../assets/political/municipal-4.png'

import travels1 from '../assets/brand/travels-agency-result-1.png'
import travels2 from '../assets/brand/travels-agency-result-2.png'
import travels3 from '../assets/brand/travels-agency-result-3.png'


import summerCamp1 from '../assets/brand/summer-camp-result.png'



import logo1 from '../assets/logos/a.png'
import logo2 from '../assets/logos/bahirji-school.png'
import logo3 from '../assets/logos/bhosale-homeopathy.png'
import logo4 from '../assets/logos/dasatwar-dental.png'
import logo5 from '../assets/logos/deshpande-logo.png'
import logo6 from '../assets/logos/global-english-school.png'
import logo7 from '../assets/logos/golden-tea.png'
import logo8 from '../assets/logos/logo-1.png'
import logo9 from '../assets/logos/logo-copy.png'
import logo10 from '../assets/logos/logo-png.png'
import logo11 from '../assets/logos/logo.png'
import logo12 from '../assets/logos/marathi-asmita.png'
import logo13 from '../assets/logos/master-wadewala.png'
import logo14 from '../assets/logos/narayana-incorporation.png'
import logo15 from '../assets/logos/saa-dance-studio.png'
import logo16 from '../assets/logos/satpute-logo.png'
import logo17 from '../assets/logos/shikari-coaching-classes.png'
import logo18 from '../assets/logos/shivkrupa-travels.png'
import logo19 from '../assets/logos/shri-shiddeshwar-clinic.png'
import logo20 from '../assets/logos/yash-classes.png'

export const brand = {
  name: 'Kedarnath Advertising & Graphics',
  short: 'Kedarnath ADG',
  tagline: 'Premium creative studio for brands, printing, and campaigns.',
  location: 'Basmath (Vasmat), Hingoli, Maharashtra',
  address: 'Basmath (Vasmat), Hingoli district, Maharashtra 431512',
  phone: '+91 99216 13113',
  whatsapp: '919921613113',
  email: 'arjunhambarde21@gmail.com',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=Basmath%20(Vasmat)%2C%20Hingoli%2C%20Maharashtra',
}

export const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: '20+', label: 'Client logos showcased' },
  { value: '5', label: 'Core service pillars' },
  { value: '2', label: 'Portfolio categories' },
  { value: '24/7', label: 'Fast support flow' },
]

export const services = [
  {
    id: 'social-media',
    title: 'Social Media Management',
    short:
      'Monthly content systems for businesses that need a strong and consistent online presence.',
    bullets: [
      'Monthly content planning',
      'Creative post systems',
      'Brand consistency',
      'Platform-ready formats',
    ],
    accent: 'from-sky-500/15 to-cyan-500/10',
    icon: Layers3,
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    short:
      'High-conversion ad creatives and campaign support built for lead generation and reach.',
    bullets: [
      'Meta ad creatives',
      'Lead generation assets',
      'Campaign support',
      'Result-focused visuals',
    ],
    accent: 'from-emerald-500/15 to-teal-500/10',
    icon: BarChart3,
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    short:
      'Premium content for reels, posters, banners, social media, and commercial promotion.',
    bullets: [
      'Poster design',
      'Short-form content',
      'Reels creative support',
      'Commercial graphics',
    ],
    accent: 'from-violet-500/15 to-fuchsia-500/10',
    icon: Sparkles,
  },
  {
    id: 'festival-design',
    title: 'Festival Designs',
    short:
      'Fast-turnaround festival creatives and local event promotional visuals.',
    bullets: [
      'Festival posters',
      'Tribute designs',
      'Event creatives',
      'Celebration branding',
    ],
    accent: 'from-amber-500/15 to-orange-500/10',
    icon: Megaphone,
  },
  {
    id: 'political-design',
    title: 'Political Campaign Design',
    short:
      'Professional election, rally, and leader promotion creative systems.',
    bullets: [
      'Political creatives',
      'Election campaigns',
      'Rally visuals',
      'Leader branding kits',
    ],
    accent: 'from-rose-500/15 to-red-500/10',
    icon: ShieldCheck,
  },
]

export const serviceDetails = {
  'social-media': {
    title: 'Social Media Management',
    description:
      'Complete social media management solutions for businesses and local brands.',
    list: [
      'Monthly post planning',
      'Creative design system',
      'Caption guidance',
      'Audience-focused branding',
    ],
  },
  'performance-marketing': {
    title: 'Performance Marketing',
    description:
      'Ad creative systems focused on conversions, engagement, and growth.',
    list: [
      'Meta campaign creatives',
      'Lead generation visuals',
      'Campaign asset support',
      'Performance-ready graphics',
    ],
  },
  'content-creation': {
    title: 'Content Creation',
    description:
      'Professional creative content for digital and print communication.',
    list: ['Reel creatives', 'Social media graphics', 'Poster systems', 'Print-ready exports'],
  },
  'festival-design': {
    title: 'Festival Designs',
    description:
      'Festival and occasion-based visuals designed with fast delivery.',
    list: ['Festival creatives', 'Tribute posts', 'Event posters', 'Celebration campaigns'],
  },
  'political-design': {
    title: 'Political Campaign Design',
    description:
      'Political campaign visuals for leaders, elections, rallies, and public communication.',
    list: ['Election posters', 'Political banners', 'Rally creatives', 'Leader branding'],
  },
}

export const portfolioTabs = [
  { id: 'political', label: 'Political Campaigns' },
  { id: 'commercial', label: 'Brand & Commercial' },
]

export const politicalPortfolio = [
  {
    title: 'Election Campaign Result',
    type: 'Political Advertising',
    tag: 'Result-oriented output',
    context: 'Result-oriented election campaign creatives and visual communication.',
    image: result1,
    images: [result1, result2],
  },
  {
    title: 'Assembly Election 2024',
    type: 'Political Campaign',
    tag: 'Assembly election creative',
    context: 'Focused assembly election communication built for strong public recall and clean visibility.',
    image: assembly1,
    images: [assembly1],
  },
  {
    title: 'Municipal Election 2025',
    type: 'Political Campaign',
    tag: 'Municipal election system',
    context: 'Local municipal election creatives built for public trust, fast recognition, and campaign clarity.',
    image: municipal1,
    images: [municipal1, municipal2, municipal3, municipal4],
  },
]

export const commercialPortfolio = [
  {
    title: 'Tour & Travel Advertising Result',
    type: 'Commercial Campaign',
    tag: 'Enquiry-driving ad',
    context: 'Advertising visuals built for reach, trust, and enquiry generation.',
    result: 'Balanced layouts that support a premium business image while still pushing action and response.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80',
    images: [travels1, travels2, travels3],
  },
  {
    title: 'Summer Camp Admission Campaign',
    type: 'Admission Campaign',
    tag: 'High-CTA hierarchy',
    context: 'Professional admission creatives with strong CTA hierarchy and youth appeal.',
    result: 'Clear messaging, warm visual energy, and a structured hierarchy for fast conversion.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9a2?auto=format&fit=crop&w=1200&q=80',
    images: [ summerCamp1 ],
  },
]

export const processSteps = [
  {
    title: 'Understand Requirement',
    description: 'We learn the business goals, campaign needs, and audience expectations.',
    icon: MessageCircle,
  },
  {
    title: 'Concept & Strategy',
    description: 'Creative direction and communication planning are structured carefully.',
    icon: Lightbulb,
  },
  {
    title: 'Design & Execution',
    description: 'Professional graphics and campaigns are designed with attention to quality.',
    icon: PenTool,
  },
  {
    title: 'Delivery',
    description: 'Final files are optimized and delivered for social media and print usage.',
    icon: Send,
  },
  {
    title: 'Support & Revision',
    description: 'Ongoing support and revisions help maintain consistent quality.',
    icon: Handshake,
  },
]

export const whyChooseUs = [
  {
    title: 'Fast Communication',
    description: 'Quick support flow for urgent business and campaign requirements.',
  },
  {
    title: 'Local Business Understanding',
    description: 'Strong understanding of local audience behavior and market communication.',
  },
  {
    title: 'Professional Creative Quality',
    description: 'Clean, polished, and modern design systems for digital and print media.',
  },
  {
    title: 'Flexible Service Packages',
    description: 'Custom solutions based on business goals and campaign scale.',
  },
  {
    title: 'Reliable Delivery',
    description: 'On-time delivery with professional revision and support workflow.',
  },
  {
    title: 'Print + Digital + Political Expertise',
    description: 'A complete creative solution for branding, printing, advertising, and political campaigns.',
  },
]

export const aboutPoints = [
  {
    title: 'Local Creative Studio',
    text: 'Based in Basmath / Vasmat, Kedarnath Advertising & Graphics supports local businesses and campaigns with premium design services.',
  },
  {
    title: 'Commercial + Political Expertise',
    text: 'The studio works across commercial branding, social media, advertising, printing, and political communication.',
  },
  {
    title: 'Growth-Oriented Structure',
    text: 'The website and design systems are structured for future scalability and backend integration.',
  },
  {
    title: 'Mobile-First Experience',
    text: 'Every section is optimized for fast loading and smooth performance on mobile devices.',
  },
]

export const logoMarks = [
  { name: 'A Logo', image: logo1 },
  { name: 'Bahiri School', image: logo2 },
  { name: 'Bhosale Homeopathy', image: logo3 },
  { name: 'Dasatwar Dental', image: logo4 },
  { name: 'Deshpande Logo', image: logo5 },
  { name: 'Global English School', image: logo6 },
  { name: 'Golden Tea', image: logo7 },
  { name: 'Logo One', image: logo8 },
  { name: 'Logo Copy', image: logo9 },
  { name: 'Logo PNG', image: logo10 },
  { name: 'Main Logo', image: logo11 },
  { name: 'Marathi Asmita', image: logo12 },
  { name: 'Master Wadewala', image: logo13 },
  { name: 'Narayana Incorporation', image: logo14 },
  { name: 'SAA Dance Studio', image: logo15 },
  { name: 'Satpute Logo', image: logo16 },
  { name: 'Shikari Coaching Classes', image: logo17 },
  { name: 'Shivkrupa Travels', image: logo18 },
  { name: 'Shri Shiddeshwar Clinic', image: logo19 },
  { name: 'Yash Classes', image: logo20 },
]

export const logos = logoMarks.map((item) => item.name)

export const faqs = [
  {
    q: 'What services does the studio provide?',
    a: 'The studio provides social media management, performance marketing, political campaign design, branding, printing, and content creation.',
  },
  {
    q: 'Can portfolio items be updated later?',
    a: 'Yes. The structure is data-driven and easy to extend with new projects and galleries.',
  },
  {
    q: 'Is the website mobile friendly?',
    a: 'Yes. The entire website is built with a mobile-first responsive system.',
  },
  {
    q: 'Can backend or admin panel support be added later?',
    a: 'Yes. The architecture is future-ready for backend integration.',
  },
]

export const contactMethods = [
  {
    title: 'Call Us',
    value: '+91 99216 13113',
    href: 'tel:+919921613113',
    icon: Phone,
  },
  {
    title: 'WhatsApp',
    value: '+91 99216 13113',
    href: 'https://wa.me/919921613113',
    icon: MessageCircle,
  },
  {
    title: 'Email',
    value: 'arjunhambarde21@gmail.com',
    href: 'mailto:arjunhambarde21@gmail.com',
    icon: Mail,
  },
  {
    title: 'Location',
    value: 'Basmath (Vasmat), Hingoli, Maharashtra',
    href: 'https://www.google.com/maps/search/?api=1&query=Basmath%20(Vasmat)%2C%20Hingoli%2C%20Maharashtra',
    icon: MapPin,
  },
]

export const process = processSteps
export const logoMarksData = logoMarks
export const contact = {
  phone: brand.phone,
  whatsapp: brand.whatsapp,
  email: brand.email,
  address: brand.address,
}