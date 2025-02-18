import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      beAnAgent: "Be an Agent",
      findAgents: "Find Agents",
      about: "About us",
      contact: "Contact us!",
      title: "Why choose woc?",
      subtitle: "It's simple",
      image1:
        "Woc prioritizes agents' happiness with fair pay and a supportive work environment for delivering top-quality service.",
      image2:
        "Happy agents lead to satisfied customers, creating lasting loyalty.",
      image3:
        "Exceptional support elevates your brand and keeps customers coming back.",
      expertise: "Expertise on",
      exp1: "Telecommunications",
      exp2: "Streaming services",
      exp3: "Gaming",
      exp4: "Internet Banking",
      workTogether: "Let's work together.",
    },
  },
  el: {
    translation: {
      home: "Αρχική",
      beAnAgent: "Γίνε Agent",
      findAgents: "Βρες Agents",
      about: "Πληροφορίες για εμάς",
      contact: "Στείλε μας!",
      title: "Γιατί να επιλέξεις woc;",
      subtitle: "Είναι απλό",
      image1:
        "Η woc δίνει προτεραιότητα στην ευτυχία των συνεργατών, προσφέροντας δίκαιες αμοιβές και ένα υποστηρικτικό εργασιακό περιβάλλον για την παροχή υπηρεσιών υψηλής ποιότητας.",
      image2:
        "Ευτυχισμένοι συνεργάτες οδηγούν σε ικανοποιημένους πελάτες, δημιουργώντας μακροχρόνια αφοσίωση.",
      image3:
        "Η εξαιρετική υποστήριξη αναβαθμίζει το brand σας και κρατά τους πελάτες να επιστρέφουν.",
      expertise: "Εξειδίκευση σε",
      exp1: "Τηλεπικοινωνίες",
      exp2: "Υπηρεσίες streaming",
      exp3: "Παιχνίδια",
      exp4: "Τραπεζικές υπηρεσίες",
      workTogether: "Ας συνεργαστούμε.",
    },
  },
  de: {
    translation: {
      home: "Startseite",
      beAnAgent: "Werde ein Agent",
      findAgents: "Finde Agenten",
      about: "Über uns",
      contact: "Kontaktiere uns!",
      title: "Warum woc wählen?",
      subtitle: "Es ist einfach",
      image1:
        "Woc priorisiert das Wohlbefinden der Mitarbeiter durch faire Bezahlung und ein unterstützendes Arbeitsumfeld, um erstklassigen Service zu gewährleisten.",
      image2:
        "Glückliche Mitarbeiter führen zu zufriedenen Kunden und schaffen dauerhafte Loyalität.",
      image3:
        "Hervorragender Support hebt Ihre Marke hervor und sorgt dafür, dass Kunden immer wieder zurückkehren.",
      expertise: "Fachwissen in",
      exp1: "Telekommunikation",
      exp2: "Streaming-Dienste",
      exp3: "Gaming",
      exp4: "Internet-Banking",
      workTogether: "Lassen Sie uns zusammenarbeiten.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
