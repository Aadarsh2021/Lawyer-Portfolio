'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()

  const quickLinks = [
    { href: '#home', label: t('home') },
    { href: '#about', label: t('about') },
    { href: '#services', label: t('services') },
    { href: '#contact', label: t('contact') }
  ]

  const legalServices = [
    'Criminal Law',
    'Service Matters', 
    'Consumer Forum'
  ]

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              {t('advocate_supriya')} - <span className="text-gray-900 dark:text-white">Best Patna Lawyer</span>
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6 max-w-md">
              {t('expert_legal_services_footer')}
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  Patna High Court, Gate No. 5, Ladies Lounge, Patna, Bihar
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <a 
                  href="tel:+918340635154" 
                  className="text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline"
                >
                  +91 8340635154
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <a 
                  href="mailto:supriyachoudhary88@gmail.com" 
                  className="text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline"
                >
                  supriyachoudhary88@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('quick_links')}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Services */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('legal_services_footer')}
            </h4>
            <ul className="space-y-2">
              {legalServices.map((service, index) => (
                <li key={index}>
                  <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-xs sm:text-sm text-blue-700 dark:text-blue-300 font-medium">
                🏛️ {t('all_cases_handled')}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center sm:text-left">
              © 2024 {t('advocate_supriya')}. {t('all_rights_reserved')}
            </p>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center sm:text-right">
              {t('all_cases_handled')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
