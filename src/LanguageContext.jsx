import { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    heroTag: "|| श्री स्वामी समर्थ ||",
    heroTitle1: "Shravani",
    heroTitle2: "Tiffin Services",
    heroSubtitle: "Homely Food",
    heroSubtitleHighlight: "Divine Blessings",
    heroBtn: "Request a Tiffin",
    
    menuTitle: "Our Divine",
    menuTitleHighlight: "Menu",
    menuSub: "Authentic, hygienic, and prepared with love.",
    menuVeg: "Vegetarian",
    menuNonVeg: "Non-Vegetarian",
    menuSpecial: "Special",

    areaTitle: "Our Service",
    areaTitleHighlight: "Areas",
    areaSub: "Fresh, hot tiffins delivered right to your doorstep in pure Pune style.",

    contactTitle: "Book Your",
    contactTitleHighlight: "Divine Meal",
    contactSub: "Fill out the form to request a tiffin. We will connect with you via WhatsApp or Call to confirm details.",
    contactName: "Your Name",
    contactMobile: "Mobile Number",
    contactArea: "Delivery Area",
    contactSelectArea: "Select an area",
    contactMessage: "Message (Optional)",
    contactBtn: "Book via WhatsApp",
    
    primaryContact: "Primary Contact",
    alternateContact: "Alternate Contact"
  },
  mr: {
    heroTag: "|| श्री स्वामी समर्थ ||",
    heroTitle1: "श्रावणी",
    heroTitle2: "टिफिन सेंटर",
    heroSubtitle: "घरगुती जेवण",
    heroSubtitleHighlight: "उत्तम चव",
    heroBtn: "टिफिन बुक करा",
    
    menuTitle: "आमचा",
    menuTitleHighlight: "मेनू",
    menuSub: "उत्तम चवीचे आणि आरोग्यदायी घरगुती जेवण.",
    menuVeg: "शाकाहारी",
    menuNonVeg: "मांसाहारी",
    menuSpecial: "विशेष",

    areaTitle: "आमची सेवा",
    areaTitleHighlight: "येथे उपलब्ध",
    areaSub: "पुण्याच्या मध्यवस्तीत गरमागरम टिफिन वेळेवर पोहोचवण्याची हमी.",

    contactTitle: "तुमचा टिफिन",
    contactTitleHighlight: "बुक करा",
    contactSub: "टिफिन सुरू करण्यासाठी फॉर्म भरा. आम्ही तुमच्याशी व्हॉट्सॲप किंवा कॉलवर संपर्क करू.",
    contactName: "तुमचे नाव",
    contactMobile: "मोबाईल नंबर",
    contactArea: "डिलिव्हरी एरिया",
    contactSelectArea: "एरिया निवडा",
    contactMessage: "संदेश (पर्यायी)",
    contactBtn: "व्हॉट्सॲपवरून बुक करा",
    
    primaryContact: "मुख्य संपर्क",
    alternateContact: "पर्यायी संपर्क"
  },
  hi: {
    heroTag: "|| श्री स्वामी समर्थ ||",
    heroTitle1: "श्रावणी",
    heroTitle2: "टिफिन सर्विसेस",
    heroSubtitle: "घरेलू भोजन",
    heroSubtitleHighlight: "ईश्वरीय आशीर्वाद",
    heroBtn: "टिफिन बुक करें",
    
    menuTitle: "हमारा",
    menuTitleHighlight: "मेनू",
    menuSub: "स्वादिष्ट, शुद्ध और घर जैसा खाना।",
    menuVeg: "शाकाहारी",
    menuNonVeg: "मांसाहारी",
    menuSpecial: "विशेष",

    areaTitle: "हमारी सेवा",
    areaTitleHighlight: "के क्षेत्र",
    areaSub: "आपके दरवाजे तक गरमागरम टिफिन की डिलीवरी।",

    contactTitle: "अपना टिफिन",
    contactTitleHighlight: "बुक करें",
    contactSub: "टिफिन बुक करने के लिए फॉर्म भरें। हम व्हाट्सएप या कॉल के माध्यम से आपसे संपर्क करेंगे।",
    contactName: "आपका नाम",
    contactMobile: "मोबाइल नंबर",
    contactArea: "डिलीवरी का क्षेत्र",
    contactSelectArea: "क्षेत्र चुनें",
    contactMessage: "संदेश (वैकल्पिक)",
    contactBtn: "व्हाट्सएप द्वारा बुक करें",
    
    primaryContact: "प्राथमिक संपर्क",
    alternateContact: "वैकल्पिक संपर्क"
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
