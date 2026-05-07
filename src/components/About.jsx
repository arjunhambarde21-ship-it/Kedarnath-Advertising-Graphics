import { motion, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { brand } from '../data/siteData'

const words = "We believe in clear, trustworthy communication.".split(' ')

const wordColors = [
  'text-white',
  'text-[#FCE300]',
  'text-white',
  'text-[#FCE300]',
  'text-white',
  'text-white',
  'text-white',
]

export default function About() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          // title="Local studio, premium output"
          description={`${brand.name} helps brands and campaigns communicate with clarity.`}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Left: word-by-word animated tagline */}
          <Reveal>
            <motion.div
              className="text-3xl font-semibold leading-snug sm:text-4xl lg:text-5xl"
              initial={reduceMotion ? false : 'hidden'}
              animate={reduceMotion ? undefined : 'show'}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
              }}
            >
              {words.map((word, index) => (
                <motion.span
                  key={word + '-' + index}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                  }}
                  className={`inline-block mr-2 ${wordColors[index % wordColors.length]}`}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </Reveal>

          {/* Right: simple descriptive text */}
          <Reveal delay={0.15}>
            <div className="space-y-4">
              <p className="text-base leading-7 text-white/70 sm:text-lg">
                We bridge the gap between professional creative work and the real-world needs of
                businesses, political leaders, and local brands. Every visual is crafted to be
                understood instantly – on mobile, in print, and in the field.
              </p>
              <p className="text-base leading-7 text-white/70 sm:text-lg">
                Based in Basmath, our studio is built on fast communication, reliable delivery,
                and a genuine understanding of regional audiences. No jargon, just work that
                speaks clearly.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}