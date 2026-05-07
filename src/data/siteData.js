import {
  MessageCircle, Lightbulb, PenTool, Send, Handshake,
  Phone, Mail, MapPin, Sparkles, Megaphone, BarChart3,
  Layers3, ShieldCheck
} from 'lucide-react'

// Political & Commercial images
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

// All 20 client logos
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

// Main data exports
export const brand = {
  name: 'Kedarnath Advertising & Graphics',
  short: 'Kedarnath ADG',
  location: 'Basmath, Hingoli, Maharashtra',
  phone: '+91 99216 13113',
  whatsapp: '919921613113',
  email: 'arjunhambarde21@gmail.com',
}

export const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const services = [
  {
    id: 'social-media',
    title: 'Social Media Management',
    short: 'Monthly content that keeps your brand professional.',
    accent: 'from-[#1E1A69] to-[#2D29A0]',
    icon: Layers3,
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    short: 'Ad creatives that generate leads & sales.',
    accent: 'from-[#1E1A69] to-[#2D29A0]',
    icon: BarChart3,
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    short: 'Reels, posters & brand graphics.',
    accent: 'from-[#1E1A69] to-[#2D29A0]',
    icon: Sparkles,
  },
  {
    id: 'festival-design',
    title: 'Festival Designs',
    short: 'Festival & event visuals with fast delivery.',
    accent: 'from-[#1E1A69] to-[#2D29A0]',
    icon: Megaphone,
  },
  {
    id: 'political-design',
    title: 'Political Campaign Design',
    short: 'Election, rally & leader branding.',
    accent: 'from-[#1E1A69] to-[#2D29A0]',
    icon: ShieldCheck,
  },
]

export const portfolioTabs = [
  { id: 'political', label: 'Political Campaigns' },
  { id: 'commercial', label: 'Brand & Commercial' },
]

export const politicalPortfolio = [
  {
    title: 'Election Result Campaign',
    type: 'Political Advertising',
    context: 'High‑impact result communication.',
    images: [result1, result2],
  },
  {
    title: 'Assembly Election 2024',
    type: 'Political Campaign',
    context: 'Clean recall & public trust.',
    images: [assembly1],
  },
  {
    title: 'Municipal Election 2025',
    type: 'Political Campaign',
    context: 'Fast recognition & clarity.',
    images: [municipal1, municipal2, municipal3, municipal4],
  },
]

export const commercialPortfolio = [
  {
    title: 'Tour & Travel Ads',
    type: 'Commercial Campaign',
    context: 'Enquiry‑driven advertising visuals.',
    images: [travels1, travels2, travels3],
  },
  {
    title: 'Summer Camp Admission',
    type: 'Admission Campaign',
    context: 'Youth appeal with strong CTA.',
    images: [summerCamp1],
  },
]

export const processSteps = [
  { title: 'Understand', description: 'We learn your goals.', icon: MessageCircle },
  { title: 'Concept', description: 'Creative direction planned.', icon: Lightbulb },
  { title: 'Design', description: 'Professional execution.', icon: PenTool },
  { title: 'Deliver', description: 'Optimised for use.', icon: Send },
  { title: 'Support', description: 'Ongoing revision help.', icon: Handshake },
]

export const aboutPoints = [
  { title: 'Local Studio', text: 'Based in Basmath, supporting nearby businesses.' },
  { title: 'Dual Expertise', text: 'Commercial & political creative under one roof.' },
  { title: 'Mobile‑First', text: 'Every design works perfectly on mobile.' },
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

export const contactMethods = [
  { title: 'Call', value: brand.phone, href: `tel:${brand.phone.replace(/\D/g, '')}`, icon: Phone },
  { title: 'WhatsApp', value: brand.phone, href: `https://wa.me/${brand.whatsapp}`, icon: MessageCircle },
  { title: 'Email', value: brand.email, href: `mailto:${brand.email}`, icon: Mail },
  { title: 'Location', value: brand.location, href: '#', icon: MapPin },
]