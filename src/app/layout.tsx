import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Best Patna Lawyer - Advocate Supriya | Top Criminal, Service & Consumer Law Expert',
  description: 'Best Patna Lawyer - Advocate Supriya is the top legal expert in Patna High Court. Specializing in Criminal Law, Service Matters & Consumer Forum. 7+ years experience, 250+ cases won. #1 Patna Lawyer for legal consultation.',
  keywords: 'best patna lawyer, top patna advocate, patna high court lawyer, criminal lawyer patna, service matter lawyer patna, consumer forum lawyer patna, best advocate patna, patna legal expert, supreme court lawyer patna, high court advocate patna',
  authors: [{ name: 'Advocate Supriya - Best Patna Lawyer' }],
  creator: 'Advocate Supriya',
  publisher: 'Advocate Supriya Legal Services',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  openGraph: {
    title: 'Best Patna Lawyer - Advocate Supriya | Top Legal Expert',
    description: 'Best Patna Lawyer - Advocate Supriya is the #1 legal expert in Patna High Court. Specializing in Criminal, Service & Consumer Law. 7+ years experience.',
    type: 'website',
    url: 'https://advocatesupriya.com',
    siteName: 'Advocate Supriya - Best Patna Lawyer',
    locale: 'en_IN',
    images: [
      {
        url: '/Photo.jpg',
        width: 1200,
        height: 630,
        alt: 'Best Patna Lawyer - Advocate Supriya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Patna Lawyer - Advocate Supriya',
    description: 'Top legal expert in Patna High Court. Specializing in Criminal, Service & Consumer Law.',
    images: ['/Photo.jpg'],
  },
  alternates: {
    canonical: 'https://advocatesupriya.com',
  },
  category: 'Legal Services',
  classification: 'Lawyer',
  other: {
    'geo.region': 'IN-BR',
    'geo.placename': 'Patna, Bihar',
    'geo.position': '25.5941;85.1376',
    'ICBM': '25.5941, 85.1376',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Advocate Supriya" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* SEO Meta Tags */}
        <meta name="author" content="Advocate Supriya - Best Patna Lawyer" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Advocate Supriya - Best Patna Lawyer",
              "alternateName": "Best Patna Lawyer, Top Patna Advocate",
              "description": "Best Patna Lawyer - Advocate Supriya is the top legal expert in Patna High Court specializing in Criminal Law, Service Matters, and Consumer Forum cases.",
              "url": "https://advocatesupriya.com",
              "telephone": "+91-8340635154",
              "email": "supriyachoudhary88@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Patna High Court, Gate No. 5, Ladies Lounge",
                "addressLocality": "Patna",
                "addressRegion": "Bihar",
                "postalCode": "800001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 25.5941,
                "longitude": 85.1376
              },
              "openingHours": "Mo-Fr 09:00-18:00",
              "priceRange": "₹500-₹1500",
              "currenciesAccepted": "INR",
              "paymentAccepted": "Cash, Online Transfer",
              "areaServed": {
                "@type": "City",
                "name": "Patna"
              },
              "serviceArea": {
                "@type": "City",
                "name": "Patna"
              },
              "provider": {
                "@type": "Person",
                "name": "Advocate Supriya",
                "jobTitle": "Best Patna Lawyer",
                "description": "Top legal expert with 7+ years of experience in Patna High Court",
                "knowsAbout": ["Criminal Law", "Service Matters", "Consumer Forum", "Patna High Court"],
                "hasCredential": "Bar Council of India",
                "alumniOf": "Law College",
                "award": "250+ Cases Won",
                "sameAs": [
                  "https://advocatesupriya.com"
                ]
              },
              "review": {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Rajesh Kumar"
                },
                "reviewBody": "Best Patna Lawyer - Advocate Supriya helped me win my consumer case at Patna High Court. Her expertise and dedication are exceptional."
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "500"
              },
              "serviceType": "Legal Services",
              "category": "Lawyer",
              "keywords": "best patna lawyer, top patna advocate, patna high court lawyer, criminal lawyer patna"
            })
          }}
        />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Advocate Supriya Legal Services",
              "alternateName": "Best Patna Lawyer Services",
              "url": "https://advocatesupriya.com",
              "logo": "https://advocatesupriya.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-8340635154",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              },
              "sameAs": [
                "https://advocatesupriya.com"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
