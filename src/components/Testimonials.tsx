'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      content: 'Advocate Supriya helped me win my consumer case at Patna High Court. Her expertise and dedication are exceptional.',
      rating: 5,
      delay: 0.2
    },
    {
      name: 'Priya Singh',
      role: 'Government Employee',
      content: 'Outstanding service in my service matter case. Advocate Supriya knows the legal system perfectly and fights for justice.',
      rating: 5,
      delay: 0.4
    },
    {
      name: 'Amit Patel',
      role: 'Individual Client',
      content: 'Professional, honest, and results-oriented. My criminal case was handled with utmost care at Patna High Court.',
      rating: 5,
      delay: 0.6
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100 relative"
        >
          Client Testimonials
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded"></div>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: testimonial.delay }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800 max-w-3xl mx-auto">
            <h4 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-4">
              🏛️ Why Choose Advocate Supriya?
            </h4>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Expertise</h5>
                <p className="text-sm text-blue-700 dark:text-blue-300">7+ years of legal experience</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Location</h5>
                <p className="text-sm text-blue-700 dark:text-blue-300">Patna High Court office</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">💼</span>
                </div>
                <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Results</h5>
                <p className="text-sm text-blue-700 dark:text-blue-300">500+ cases won</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
