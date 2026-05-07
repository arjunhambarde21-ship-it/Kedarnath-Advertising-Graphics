import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsStrip from './components/StatsStrip'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import WhyChooseUs from './components/WhyChooseUs'
import LogoMarquee from './components/LogoMarquee'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <Services />
        <Portfolio />
        <Process />
        <WhyChooseUs />
        <LogoMarquee />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
