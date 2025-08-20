'use client'

import { motion } from 'framer-motion'
import { Scale, Cog, Shield } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const Services = () => {
  const { t } = useLanguage()

  const services = [
    {
      icon: Scale,
      title: t('criminal_law'),
      description: t('criminal_description'),
      delay: 0.2
    },
    {
      icon: Cog,
      title: t('service_matters'),
      description: t('service_description'),
      delay: 0.4
    },
    {
      icon: Shield,
      title: t('consumer_forum'),
      description: t('consumer_description'),
      delay: 0.6
    }
  ]

  return (
    <section id="services" className="py-16 sm:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-800 dark:text-gray-100 relative"
        >
          {t('legal_services')} - <span className="text-blue-600 dark:text-blue-400">Patna High Court</span>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded"></div>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: service.delay }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 sm:p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                {service.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6">
                {service.description}
              </p>

              <div className="p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-xs sm:text-sm text-blue-700 dark:text-blue-300 font-medium">
                  🏛️ {t('patna_high_court_note')}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
