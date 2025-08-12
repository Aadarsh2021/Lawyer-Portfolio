'use client'

import { motion } from 'framer-motion'
import { Clock, IndianRupee, CheckCircle } from 'lucide-react'

const Consultation = () => {
  const packages = [
    {
      icon: Clock,
      duration: '30 Minutes',
      price: '₹500',
      features: [
        'Initial case discussion',
        'Legal advice',
        'Case strategy',
        'Document review'
      ],
      delay: 0.2
    },
    {
      icon: Clock,
      duration: '1 Hour',
      price: '₹1500',
      features: [
        'Detailed case analysis',
        'Comprehensive legal advice',
        'Document preparation guidance',
        'Court procedure explanation',
        'Follow-up consultation'
      ],
      delay: 0.4
    }
  ]

  return (
    <section id="consultation" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100 relative"
        >
          Consultation Charges
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded"></div>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto"
        >
          Get expert legal consultation from Advocate Supriya. All consultations are conducted 
          at Patna High Court with professional expertise and personalized attention.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: pkg.delay }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <pkg.icon className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {pkg.duration}
                </h3>
                <div className="flex items-center justify-center space-x-2">
                  <IndianRupee className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                    {pkg.price}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all duration-300 inline-block"
                >
                  Book Consultation
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800 max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-4">
              🏛️ Office Location
            </h4>
            <p className="text-blue-700 dark:text-blue-300 text-lg">
              All consultations and case handling takes place at <strong>Patna High Court, Gate No. 5, Ladies Lounge, Patna, Bihar</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Consultation
