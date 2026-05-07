import { motion, useReducedMotion } from 'framer-motion'
import { stats } from '../data/siteData'

export default function StatsStrip() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="section-anchor border-y border-white/6 bg-white/[0.03]">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 shadow-glow"
            >
              <div className="text-2xl font-semibold text-white">{item.value}</div>
              <div className="mt-1 text-sm text-slate-300">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}