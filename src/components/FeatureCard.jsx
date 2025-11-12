import { motion } from 'framer-motion'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function FeatureCard({ icon: Icon, title, description, accent = 'teal' }) {
  const accentMap = {
    teal: 'text-teal-600 bg-teal-50 ring-teal-100',
    blue: 'text-blue-600 bg-blue-50 ring-blue-100',
    green: 'text-emerald-600 bg-emerald-50 ring-emerald-100',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="group relative h-full"
    >
      <div
        className={classNames(
          'h-full rounded-2xl border border-teal-100/70 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-200',
          'ring-1 ring-inset ring-white/0'
        )}
      >
        <div className="flex items-start gap-4">
          <div
            className={classNames(
              'inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1',
              accentMap[accent] || accentMap.teal
            )}
          >
            {Icon ? <Icon className="h-6 w-6" strokeWidth={2.4} /> : null}
          </div>
          <div className="min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 tracking-tight">
              {title}
            </h3>
            {description ? (
              <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                {description}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
