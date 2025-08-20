'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'hi'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation dictionary
const translations = {
  en: {
    // Header
    'home': 'Home',
    'about': 'About',
    'services': 'Services',
    'consultation': 'Consultation',
    'contact': 'Contact',
    
    // Hero Section
    'advocate': 'Advocate',
    'expert_legal_services': 'Expert Legal Services with 7+ Years of Experience',
    'hero_description': 'Specializing in Criminal Law, Service Matters, and Consumer Forum cases. All cases handled at Patna High Court. Providing expert legal consultation and representation to ensure justice for our clients.',
    'get_consultation': 'Get Consultation',
    'our_services': 'Our Services',
    
    // About Section
    'about_me': 'About Me',
    'advocate_supriya': 'Advocate Supriya',
    'about_description_1': 'With over 7 years of experience in the legal field, I am committed to provide exceptional legal services to my clients. Since my office is located at Patna High Court, I handle all cases there with complete dedication and expertise.',
    'about_description_2': 'I believe in building strong relationships with my clients based on trust, transparency, and results. Every case is handled with the utmost care and attention to detail at Patna High Court.',
    'years_experience': 'Years Experience',
    'cases_won': 'Cases Won',
    'happy_clients': 'Happy Clients',
    
    // Services Section
    'legal_services': 'Legal Services',
    'criminal_law': 'Criminal Law',
    'service_matters': 'Service Matters',
    'consumer_forum': 'Consumer Forum',
    'criminal_description': 'Expert representation in criminal cases at Patna High Court. Handling all types of criminal matters with dedication and expertise.',
    'service_description': 'Specialized in service law cases including government employment disputes, promotions, and service benefits at Patna High Court.',
    'consumer_description': 'Expert representation in consumer protection cases, ensuring clients\' rights are protected at Patna High Court.',
    'patna_high_court_note': 'All cases handled at Patna High Court',
    
    // Consultation Section
    'consultation_charges': 'Consultation Charges',
    'consultation_description': 'Get expert legal consultation from Advocate Supriya. All consultations are conducted at Patna High Court with professional expertise and personalized attention.',
    'minutes_30': '30 Minutes',
    'hour_1': '1 Hour',
    'initial_case_discussion': 'Initial case discussion',
    'legal_advice': 'Legal advice',
    'case_strategy': 'Case strategy',
    'document_review': 'Document review',
    'detailed_case_analysis': 'Detailed case analysis',
    'comprehensive_legal_advice': 'Comprehensive legal advice',
    'document_preparation': 'Document preparation guidance',
    'court_procedure': 'Court procedure explanation',
    'follow_up': 'Follow-up consultation',
    'book_consultation': 'Book Consultation',
    'office_location': 'Office Location',
    'office_description': 'All consultations and case handling takes place at Patna High Court, Gate No. 5, Ladies Lounge, Patna, Bihar',
    
    // Testimonials Section
    'client_testimonials': 'Client Testimonials',
    'testimonial_1': 'Advocate Supriya helped me win my consumer case at Patna High Court. Her expertise and dedication are exceptional.',
    'testimonial_2': 'Outstanding service in my service matter case. Advocate Supriya knows the legal system perfectly and fights for justice.',
    'testimonial_3': 'Professional, honest, and results-oriented. My criminal case was handled with utmost care at Patna High Court.',
    'business_owner': 'Business Owner',
    'government_employee': 'Government Employee',
    'individual_client': 'Individual Client',
    'why_choose': 'Why Choose Advocate Supriya?',
    'expertise': 'Expertise',
    'location': 'Location',
    'results': 'Results',
    'expertise_desc': '7+ years of legal experience',
    'location_desc': 'Patna High Court office',
    'results_desc': '250+ cases won',
    
    // Contact Section
    'contact_us': 'Contact Us',
    'contact_description': 'Ready to discuss your legal case? Contact Advocate Supriya for expert consultation at Patna High Court. We\'re here to help you get the justice you deserve.',
    'get_in_touch': 'Get in Touch',
    'phone': 'Phone',
    'email': 'Email',
    'office_address': 'Office Address',
    'working_hours': 'Working Hours',
    'send_message': 'Send Message',
    'full_name': 'Full Name',
    'phone_number': 'Phone Number',
    'subject': 'Subject',
    'message': 'Message',
    'enter_full_name': 'Enter your full name',
    'enter_email': 'Enter your email',
    'enter_phone': 'Enter your phone number',
    'select_subject': 'Select a subject',
    'describe_issue': 'Describe your legal issue or question...',
    'consultation_note': 'Consultation Charges',
    'consultation_note_desc': '₹500 for 30 minutes, ₹1500 for 1 hour. All consultations at Patna High Court.',
    
    // Footer
    'expert_legal_services_footer': 'Expert legal services with over 7 years of experience. Specializing in Criminal Law, Service Matters, and Consumer Forum cases at Patna High Court.',
    'quick_links': 'Quick Links',
    'legal_services_footer': 'Legal Services',
    'legal_consultation': 'Legal Consultation',
    'court_representation': 'Court Representation',
    'all_rights_reserved': 'All rights reserved',
    'all_cases_handled': 'All cases handled at Patna High Court'
  },
  hi: {
    // Header
    'home': 'होम',
    'about': 'परिचय',
    'services': 'सेवाएं',
    'consultation': 'परामर्श',
    'contact': 'संपर्क',
    
    // Hero Section
    'advocate': 'वकील',
    'expert_legal_services': '7+ वर्षों के अनुभव के साथ विशेषज्ञ कानूनी सेवाएं',
    'hero_description': 'आपराधिक कानून, सेवा मामलों और उपभोक्ता फोरम के मामलों में विशेषज्ञता। सभी मामले पटना उच्च न्यायालय में संभाले जाते हैं। न्याय सुनिश्चित करने के लिए विशेषज्ञ कानूनी परामर्श और प्रतिनिधित्व प्रदान करना।',
    'get_consultation': 'परामर्श लें',
    'our_services': 'हमारी सेवाएं',
    
    // About Section
    'about_me': 'मेरे बारे में',
    'advocate_supriya': 'वकील सुप्रिया',
    'about_description_1': 'कानूनी क्षेत्र में 7+ वर्षों के अनुभव के साथ, मैं अपने ग्राहकों को असाधारण कानूनी सेवाएं प्रदान करने के लिए प्रतिबद्ध हूं। चूंकि मेरा कार्यालय पटना उच्च न्यायालय में स्थित है, मैं वहां सभी मामलों को पूर्ण समर्पण और विशेषज्ञता के साथ संभालती हूं।',
    'about_description_2': 'मैं विश्वास, पारदर्शिता और परिणामों के आधार पर अपने ग्राहकों के साथ मजबूत संबंध बनाने में विश्वास रखती हूं। हर मामले को पटना उच्च न्यायालय में सर्वोच्च देखभाल और विस्तार से ध्यान के साथ संभाला जाता है।',
    'years_experience': 'वर्षों का अनुभव',
    'cases_won': 'जीते गए मामले',
    'happy_clients': 'संतुष्ट ग्राहक',
    
    // Services Section
    'legal_services': 'कानूनी सेवाएं',
    'criminal_law': 'आपराधिक कानून',
    'service_matters': 'सेवा मामले',
    'consumer_forum': 'उपभोक्ता फोरम',
    'criminal_description': 'पटना उच्च न्यायालय में आपराधिक मामलों में विशेषज्ञ प्रतिनिधित्व। सभी प्रकार के आपराधिक मामलों को समर्पण और विशेषज्ञता के साथ संभालना।',
    'service_description': 'सरकारी रोजगार विवाद, पदोन्नति और सेवा लाभ सहित सेवा कानून के मामलों में विशेषज्ञता। पटना उच्च न्यायालय में।',
    'consumer_description': 'उपभोक्ता संरक्षण मामलों में ग्राहकों का प्रतिनिधित्व, उनके अधिकारों की सुरक्षा सुनिश्चित करना पटना उच्च न्यायालय में।',
    'patna_high_court_note': 'सभी मामले पटना उच्च न्यायालय में संभाले जाते हैं',
    
    // Consultation Section
    'consultation_charges': 'परामर्श शुल्क',
    'consultation_description': 'वकील सुप्रिया से विशेषज्ञ कानूनी परामर्श प्राप्त करें। सभी परामर्श पटना उच्च न्यायालय में पेशेवर विशेषज्ञता और व्यक्तिगत ध्यान के साथ आयोजित किए जाते हैं।',
    'minutes_30': '30 मिनट',
    'hour_1': '1 घंटा',
    'initial_case_discussion': 'प्रारंभिक मामले की चर्चा',
    'legal_advice': 'कानूनी सलाह',
    'case_strategy': 'मामले की रणनीति',
    'document_review': 'दस्तावेज समीक्षा',
    'detailed_case_analysis': 'विस्तृत मामले का विश्लेषण',
    'comprehensive_legal_advice': 'व्यापक कानूनी सलाह',
    'document_preparation': 'दस्तावेज तैयारी मार्गदर्शन',
    'court_procedure': 'अदालत प्रक्रिया की व्याख्या',
    'follow_up': 'अनुवर्ती परामर्श',
    'book_consultation': 'परामर्श बुक करें',
    'office_location': 'कार्यालय स्थान',
    'office_description': 'सभी परामर्श और मामले का संचालन पटना उच्च न्यायालय, गेट नंबर 5, लेडीज लाउंज, पटना, बिहार में होता है',
    
    // Testimonials Section
    'client_testimonials': 'ग्राहक प्रशंसापत्र',
    'testimonial_1': 'वकील सुप्रिया ने मुझे पटना उच्च न्यायालय में अपना उपभोक्ता मामला जीतने में मदद की। उनकी विशेषज्ञता और समर्पण असाधारण हैं।',
    'testimonial_2': 'मेरे सेवा मामले में उत्कृष्ट सेवा। वकील सुप्रिया कानूनी प्रणाली को पूरी तरह से जानती हैं और न्याय के लिए लड़ती हैं।',
    'testimonial_3': 'पेशेवर, ईमानदार और परिणाम-उन्मुख। मेरे आपराधिक मामले को पटना उच्च न्यायालय में सर्वोच्च देखभाल के साथ संभाला गया।',
    'business_owner': 'व्यवसाय मालिक',
    'government_employee': 'सरकारी कर्मचारी',
    'individual_client': 'व्यक्तिगत ग्राहक',
    'why_choose': 'वकील सुप्रिया को क्यों चुनें?',
    'expertise': 'विशेषज्ञता',
    'location': 'स्थान',
    'results': 'परिणाम',
    'expertise_desc': '7+ वर्षों का कानूनी अनुभव',
    'location_desc': 'पटना उच्च न्यायालय कार्यालय',
    'results_desc': '250+ जीते गए मामले',
    
    // Contact Section
    'contact_us': 'संपर्क करें',
    'contact_description': 'अपने कानूनी मामले पर चर्चा करने के लिए तैयार हैं? पटना उच्च न्यायालय में विशेषज्ञ परामर्श के लिए वकील सुप्रिया से संपर्क करें। हम आपको न्याय दिलाने में मदद करने के लिए यहां हैं।',
    'get_in_touch': 'संपर्क में आएं',
    'phone': 'फोन',
    'email': 'ईमेल',
    'office_address': 'कार्यालय का पता',
    'working_hours': 'कार्य समय',
    'send_message': 'संदेश भेजें',
    'full_name': 'पूरा नाम',
    'phone_number': 'फोन नंबर',
    'subject': 'विषय',
    'message': 'संदेश',
    'enter_full_name': 'अपना पूरा नाम दर्ज करें',
    'enter_email': 'अपना ईमेल दर्ज करें',
    'enter_phone': 'अपना फोन नंबर दर्ज करें',
    'select_subject': 'एक विषय चुनें',
    'describe_issue': 'अपने कानूनी मुद्दे या प्रश्न का वर्णन करें...',
    'consultation_note': 'परामर्श शुल्क',
    'consultation_note_desc': '₹500 for 30 minutes, ₹1500 for 1 hour. All consultations at Patna High Court.',
    
    // Footer
    'expert_legal_services_footer': '7+ वर्षों के अनुभव के साथ विशेषज्ञ कानूनी सेवाएं। आपराधिक कानून, सेवा मामलों और उपभोक्ता फोरम के मामलों में विशेषज्ञता। पटना उच्च न्यायालय में।',
    'quick_links': 'त्वरित लिंक',
    'legal_services_footer': 'कानूनी सेवाएं',
    'legal_consultation': 'कानूनी परामर्श',
    'court_representation': 'अदालत प्रतिनिधित्व',
    'all_rights_reserved': 'सर्वाधिकार सुरक्षित',
    'all_cases_handled': 'सभी मामले पटना उच्च न्यायालय में संभाले जाते हैं'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage: handleLanguageChange, 
      t 
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
