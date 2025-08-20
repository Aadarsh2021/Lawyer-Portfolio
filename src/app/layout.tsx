import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Patna High Court - Best Patna Lawyer Advocate Supriya | #1 Criminal, Service & Consumer Law Expert',
  description: 'Best Patna Lawyer - Advocate Supriya is the TOP RANKED legal expert in Patna High Court. Specializing in Criminal Law, Service Matters & Consumer Forum. 7+ years experience, 250+ cases won. #1 Patna Lawyer for legal consultation. Free consultation available.',
  keywords: 'best patna lawyer, top patna advocate, patna high court lawyer, criminal lawyer patna, service matter lawyer patna, consumer forum lawyer patna, best advocate patna, patna legal expert, supreme court lawyer patna, high court advocate patna, best lawyer in patna, top advocate patna, patna criminal lawyer, patna service lawyer, patna consumer lawyer, best legal expert patna, patna high court advocate, number 1 lawyer patna, best law firm patna, patna lawyer consultation, legal services patna, advocate supriya patna, supriya lawyer patna',
  authors: [{ name: 'Advocate Supriya - Best Patna Lawyer' }],
  creator: 'Advocate Supriya',
  publisher: 'Advocate Supriya Legal Services',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      openGraph: {
      title: 'Patna High Court - Best Patna Lawyer Advocate Supriya | #1 Legal Expert',
    description: 'Best Patna Lawyer - Advocate Supriya is the #1 legal expert in Patna High Court. Specializing in Criminal, Service & Consumer Law. 7+ years experience, 250+ cases won. Top ranked lawyer in Patna.',
    type: 'website',
    url: 'https://lawyer-mu-ecru.vercel.app',
    siteName: 'Advocate Supriya - Best Patna Lawyer',
    locale: 'en_IN',
    images: [
      {
        url: '/Photo.jpg',
        width: 1200,
        height: 630,
        alt: 'Best Patna Lawyer - Advocate Supriya - Top Legal Expert in Patna High Court',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patna High Court - Best Patna Lawyer Advocate Supriya | #1 Legal Expert',
    description: 'Top ranked legal expert in Patna High Court. Specializing in Criminal, Service & Consumer Law. Best lawyer in Patna.',
    images: ['/Photo.jpg'],
  },
  alternates: {
    canonical: 'https://lawyer-mu-ecru.vercel.app',
  },
  category: 'Legal Services',
  classification: 'Lawyer',
  other: {
    'geo.region': 'IN-BR',
    'geo.placename': 'Patna, Bihar',
    'geo.position': '25.5941;85.1376',
    'ICBM': '25.5941, 85.1376',
    'google-site-verification': 'your-verification-code',
    'msvalidate.01': 'your-bing-verification-code',
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
        
        {/* Additional SEO Tags */}
        <meta name="language" content="English, Hindi" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="coverage" content="worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="true" />
        
        {/* Local Business Tags */}
        <meta name="geo.region" content="IN-BR" />
        <meta name="geo.placename" content="Patna, Bihar" />
        <meta name="geo.position" content="25.5941;85.1376" />
        <meta name="ICBM" content="25.5941, 85.1376" />
        
        {/* Social Media Tags */}
        <meta property="og:site_name" content="Patna High Court - Advocate Supriya Legal Services" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:site" content="@advocatesupriya" />
        <meta name="twitter:creator" content="@advocatesupriya" />
        
        {/* Google Analytics - G-HHVS97YJNP */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HHVS97YJNP"></script>
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-HHVS97YJNP');` }} />
        
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="oNXSNTCT8bkYSdN_2lQTvlmsE72LjNPWKF9uNIR5ZxY" />
        
        {/* Bing Webmaster Tools Verification */}
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        
        {/* Preload Critical Resources */}
        <link rel="icon" href="/Photo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/Photo.jpg" />
        <link rel="preload" href="/Photo.jpg" as="image" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Patna High Court - Best Patna Lawyer Advocate Supriya",
              "alternateName": "Patna High Court Lawyer, Best Patna Lawyer, Top Patna Advocate, Number 1 Lawyer in Patna",
              "description": "Best Patna Lawyer - Advocate Supriya is the TOP RANKED legal expert in Patna High Court specializing in Criminal Law, Service Matters, and Consumer Forum cases. 7+ years experience, 250+ cases won.",
              "url": "https://lawyer-mu-ecru.vercel.app",
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
                "description": "TOP RANKED legal expert with 7+ years of experience in Patna High Court",
                "knowsAbout": ["Criminal Law", "Service Matters", "Consumer Forum", "Patna High Court", "Legal Consultation", "Court Representation"],
                "hasCredential": "Bar Council of India",
                "alumniOf": "Law College",
                "award": "250+ Cases Won, Best Patna Lawyer",
                "sameAs": [
                  "https://lawyer-mu-ecru.vercel.app"
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
                "reviewBody": "Best Patna Lawyer - Advocate Supriya helped me win my consumer case at Patna High Court. Her expertise and dedication are exceptional. She is truly the number 1 lawyer in Patna."
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "500"
              },
              "serviceType": "Legal Services",
              "category": "Lawyer",
              "keywords": "best patna lawyer, top patna advocate, patna high court lawyer, criminal lawyer patna, number 1 lawyer patna, best advocate patna",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://lawyer-mu-ecru.vercel.app"
              }
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
              "name": "Patna High Court - Advocate Supriya Legal Services",
              "alternateName": "Patna High Court Lawyer, Best Patna Lawyer Services, Top Legal Expert in Patna",
              "url": "https://lawyer-mu-ecru.vercel.app",
              "logo": "https://lawyer-mu-ecru.vercel.app/Photo.jpg",
              "description": "Best Patna Lawyer - Advocate Supriya Legal Services. Top ranked legal expert in Patna High Court specializing in Criminal Law, Service Matters, and Consumer Forum.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-8340635154",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              },
              "sameAs": [
                "https://lawyer-mu-ecru.vercel.app"
              ],
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
              }
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
