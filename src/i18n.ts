import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      sabarat: 'SABARAT',
      tagline: 'Marketing & Content Creation',
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      join: 'Join Us',
      follow_us: 'Follow Us',
      hero_title: 'Elevate Your Brand',
      hero_subtitle: 'Innovative marketing strategies and cutting-edge content creation to make your brand stand out.',
      get_started: 'Get Started',
      our_services: 'Our Services',
      digital_marketing: 'Digital Marketing',
      digital_marketing_desc: 'Data-driven campaigns that deliver real results.',
      content_creation: 'Content Creation',
      content_creation_desc: 'Engaging visuals and copy that tell your story.',
      brand_strategy: 'Brand Strategy',
      brand_strategy_desc: 'Building strong, memorable brand identities.',
      social_media: 'Social Media Management',
      social_media_desc: 'Grow your audience and engage with your community.',
      video_production: 'Video Production',
      video_production_desc: 'High-quality video content that captures attention.',
      copywriting: 'Copywriting',
      copywriting_desc: 'Persuasive words that convert visitors into loyal customers.',
      join_us_title: 'Join Our Creators Network',
      join_us_subtitle: 'Are you a talented creator? We want you on our team.',
      name: 'Full Name',
      specialization: 'Specialization',
      field: 'Field of Expertise',
      bio: 'Short Bio',
      submit: 'Submit Application',
      submit_success: 'Application submitted successfully!',
      contact_title: 'Get In Touch',
      contact_subtitle: 'Ready to transform your brand? Let\'s talk.',
      message: 'Message',
      send: 'Send Message',
      about_title: 'Who We Are',
      about_p1: 'SABARAT is a forward-thinking marketing and content creation agency.',
      about_p2: 'We blend creativity with technology to build immersive brand experiences.',
      all_rights_reserved: 'All rights reserved.'
    }
  },
  ar: {
    translation: {
      sabarat: 'سَبَرْت',
      tagline: 'للتسويق وصناعة المحتوى',
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      join: 'انضم إلينا',
      follow_us: 'تابعنا',
      hero_title: 'ارتقِ بعلامتك التجارية',
      hero_subtitle: 'استراتيجيات تسويق مبتكرة وصناعة محتوى متطورة لتمييز علامتك التجارية.',
      get_started: 'ابدأ الآن',
      our_services: 'خدماتنا المميزة',
      digital_marketing: 'التسويق الرقمي',
      digital_marketing_desc: 'حملات مبنية على البيانات لتحقيق نتائج حقيقية.',
      content_creation: 'صناعة المحتوى',
      content_creation_desc: 'مرئيات ونصوص جذابة تروي قصة علامتك.',
      brand_strategy: 'استراتيجية العلامة التجارية',
      brand_strategy_desc: 'بناء هويات قوية لا تُنسى لعلامتك التجارية.',
      social_media: 'إدارة منصات التواصل الاجتماعي',
      social_media_desc: 'تنمية جمهورك وبناء تفاعل حقيقي مع مجتمعك.',
      video_production: 'الإنتاج المرئي',
      video_production_desc: 'محتوى مرئي عالي الجودة يجذب الانتباه.',
      copywriting: 'الكتابة الإبداعية',
      copywriting_desc: 'نصوص مقنعة تحول الزوار إلى عملاء مخلصين.',
      join_us_title: 'انضم لشبكة صناع المحتوى',
      join_us_subtitle: 'هل أنت صانع محتوى موهوب؟ نريدك في فريقنا.',
      name: 'الاسم الكامل',
      specialization: 'التخصص',
      field: 'المجال',
      bio: 'نبذة عنك',
      submit: 'إرسال الطلب',
      submit_success: 'تم إرسال الطلب بنجاح!',
      contact_title: 'تواصل معنا',
      contact_subtitle: 'هل أنت مستعد لتحويل علامتك التجارية؟ دعنا نتحدث.',
      message: 'الرسالة',
      send: 'إرسال الرسالة',
      about_title: 'من نحن',
      about_p1: 'سَبَرْت هي وكالة تسويق وصناعة محتوى برؤية مستقبلية.',
      about_p2: 'نمزج الإبداع بالتكنولوجيا لبناء تجارب غامرة للعلامات التجارية.',
      all_rights_reserved: 'جميع الحقوق محفوظة.'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
