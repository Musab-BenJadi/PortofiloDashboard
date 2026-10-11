import { ref, watch } from 'vue'

const messages = {
  en: {
    app: { skip: 'Skip to content' },
    nav: {
      home: 'Home', about: 'About', skills: 'Skills', projects: 'Projects',
      services: 'Services', contact: 'Contact', contactMe: 'Contact Me',
      switchLanguage: 'العربية', primary: 'Primary', mobile: 'Mobile', openMenu: 'Open menu', closeMenu: 'Close menu',
      github: 'GitHub profile', linkedin: 'LinkedIn profile',
    },
    hero: {
      availability: 'Available for web development projects',
      headline: 'I build modern web applications that solve real business problems.',
      description: 'Web application developer specializing in Laravel, Vue.js, Inertia.js, and Tailwind CSS. I build scalable dashboards, SaaS platforms, business systems, and REST APIs.',
      viewProjects: 'View my projects', workTogether: "Let's work together",
      backend: 'Backend', frontend: 'Frontend', focus: 'Focus', fullStack: 'Full-stack apps',
    },
    about: {
      title: 'About me',
      description: 'I focus on building complete web applications, not static websites. That means thinking through the backend architecture and the interface people actually touch, together, from the first data model to the last click.',
      stats: [
        { value: 'Several', label: 'Web applications' },
        { value: 'Full-stack', label: 'Technologies' },
        { value: 'Ongoing', label: 'Projects' },
        { value: 'Laravel + Vue', label: 'Development focus' },
      ],
      focusHeading: 'What I work with, end to end',
      focusAreas: ['Backend architecture', 'Frontend interfaces', 'REST APIs', 'Authentication & authorization', 'Role and permission systems', 'Dashboards', 'Database design', 'SaaS architecture', 'Responsive UI'],
    },
    skills: {
      kicker: 'Skills & technology stack', title: 'Tools I build with',
      groups: [
        { label: 'Backend', description: 'Application logic, data, and access control.' },
        { label: 'Frontend', description: 'Interfaces people actually use every day.' },
        { label: 'Tools', description: 'How the work gets versioned, built, and shipped.' },
      ],
    },
    services: {
      kicker: 'Services', title: 'What I can build',
      items: [
        { title: 'Custom Web Applications', description: 'Business applications tailored to specific workflows and requirements, not squeezed into a generic template.' },
        { title: 'Admin Dashboards', description: 'Modern dashboards for managing users, data, operations, and reports across a growing business.' },
        { title: 'SaaS Platforms', description: 'Multi-tenant applications with subscriptions, roles, permissions, and architecture built to scale.' },
        { title: 'REST APIs', description: 'Secure, well-documented APIs for web applications, mobile apps, and third-party integrations.' },
        { title: 'Laravel + Vue Development', description: 'Full-stack applications using Laravel on the backend and Vue 3 on the frontend, wired together cleanly.' },
        { title: 'Database & System Architecture', description: 'Well-structured relational databases and maintainable application architecture that stays readable as it grows.' },
      ],
    },
    projects: {
      kicker: 'Featured projects', title: "Things I've built", featured: 'Featured',
      viewCode: 'View code', liveDemo: 'Live demo',
      items: [
        { description: 'A wedding services platform with an administrative dashboard for managing vendors, services, and subscriptions.', features: ['Vendor management', 'Service management', 'Categories', 'Subscriptions', 'Role-based permissions', 'Media management', 'Administrative dashboard'] },
        { description: 'A delivery management platform consisting of a web dashboard and a mobile application ecosystem.', features: ['Delivery management', 'Store management', 'Delivery representatives', 'Customers', 'Order tracking', 'Delivery statuses', 'Administrative dashboard'] },
      ],
    },
    process: {
      kicker: 'How I work', title: 'Development process',
      steps: [
        { title: 'Understand', description: 'Understand the business requirements, the users, and how the work actually needs to flow.' },
        { title: 'Plan', description: 'Design the architecture, database, permissions, and overall application structure.' },
        { title: 'Build', description: 'Develop the backend, frontend, APIs, and the business logic that ties them together.' },
        { title: 'Test', description: 'Test functionality, responsiveness, validation, and security before anything ships.' },
        { title: 'Deploy', description: 'Prepare the application for production and get it deployed and running.' },
      ],
    },
    build: {
      kicker: 'What I build', title: 'Systems I can develop',
      types: ['SaaS Platforms', 'Admin Dashboards', 'Delivery Platforms', 'REST APIs', 'Multi-tenant Applications', 'Custom Web Applications'],
    },
    contact: {
      title: 'Have a project in mind?',
      description: "Tell me what you're building, and let's discuss how I can turn the idea into a reliable web application.",
      name: 'Name', email: 'Email', projectType: 'Project type', message: 'Message',
      namePlaceholder: 'Your name', emailPlaceholder: 'you@example.com',
      subject: 'Subject',
      subjectPlaceholder: 'Subject',
      selectType: 'Select a project type', messagePlaceholder: 'What are you building?',
      projectTypes: ['Custom web application', 'Admin dashboard', 'SaaS platform', 'REST API', 'Something else'],
      sending: 'Sending…', send: 'Send message', sent: 'Message sent.',
      thanks: "Thanks for reaching out — I'll get back to you soon.",
      formNote: "This form isn't connected to a backend yet.",
    },
    footer: {
      tagline: 'Web Application Development with Laravel + Vue.js + Tailwind CSS',
      rights: '© 2026 Musab Jadi. All rights reserved.',
      github: 'GitHub profile', linkedin: 'LinkedIn profile', email: 'Send an email',
    },
  },
  ar: {
    app: { skip: 'انتقل إلى المحتوى' },
    nav: {
      home: 'الرئيسية', about: 'نبذة عني', skills: 'المهارات', projects: 'المشاريع',
      services: 'الخدمات', contact: 'تواصل', contactMe: 'تواصل معي',
      switchLanguage: 'English', primary: 'التنقل الرئيسي', mobile: 'التنقل للجوال', openMenu: 'فتح القائمة', closeMenu: 'إغلاق القائمة',
      github: 'حساب GitHub', linkedin: 'حساب LinkedIn',
    },
    hero: {
      availability: 'متاح لتنفيذ مشاريع تطوير الويب',
      headline: 'أطوّر تطبيقات ويب حديثة تحل مشكلات الأعمال الحقيقية.',
      description: 'مطوّر تطبيقات ويب متخصص في Laravel وVue.js وInertia.js وTailwind CSS. أبني لوحات تحكم قابلة للتوسع، ومنصات SaaS، وأنظمة أعمال، وواجهات REST API.',
      viewProjects: 'استعرض مشاريعي', workTogether: 'لنعمل معًا',
      backend: 'الخلفية', frontend: 'الواجهة الأمامية', focus: 'التخصص', fullStack: 'تطبيقات متكاملة',
    },
    about: {
      title: 'نبذة عني',
      description: 'أركّز على بناء تطبيقات ويب متكاملة، لا مواقع ثابتة. وهذا يعني تصميم بنية الخادم والواجهة التي يستخدمها الناس معًا، بدءًا من نموذج البيانات الأول وحتى آخر نقرة.',
      stats: [
        { value: 'متعددة', label: 'تطبيقات ويب' },
        { value: 'متكاملة', label: 'تقنيات' },
        { value: 'مستمرة', label: 'مشاريع' },
        { value: 'Laravel + Vue', label: 'مجال التطوير' },
      ],
      focusHeading: 'ما أعمل عليه من البداية إلى النهاية',
      focusAreas: ['هندسة الخوادم', 'واجهات المستخدم', 'واجهات REST API', 'المصادقة والتفويض', 'الأدوار والصلاحيات', 'لوحات التحكم', 'تصميم قواعد البيانات', 'هندسة منصات SaaS', 'واجهات متجاوبة'],
    },
    skills: {
      kicker: 'المهارات والتقنيات', title: 'الأدوات التي أستخدمها',
      groups: [
        { label: 'الخلفية', description: 'منطق التطبيق والبيانات والتحكم في الوصول.' },
        { label: 'الواجهة الأمامية', description: 'واجهات يستخدمها الناس كل يوم.' },
        { label: 'الأدوات', description: 'أدوات إدارة الإصدارات والبناء والنشر.' },
      ],
    },
    services: {
      kicker: 'الخدمات', title: 'ما يمكنني تطويره',
      items: [
        { title: 'تطبيقات ويب مخصصة', description: 'تطبيقات أعمال مصممة وفق سير العمل والمتطلبات الخاصة، دون حشرها في قالب عام.' },
        { title: 'لوحات تحكم إدارية', description: 'لوحات حديثة لإدارة المستخدمين والبيانات والعمليات والتقارير مع نمو الأعمال.' },
        { title: 'منصات SaaS', description: 'تطبيقات متعددة المستأجرين مع الاشتراكات والأدوار والصلاحيات وبنية قابلة للتوسع.' },
        { title: 'واجهات REST API', description: 'واجهات API آمنة وموثقة لتطبيقات الويب والجوال والتكامل مع الخدمات الخارجية.' },
        { title: 'تطوير Laravel وVue', description: 'تطبيقات متكاملة تستخدم Laravel للخلفية وVue 3 للواجهة الأمامية ببنية مترابطة وواضحة.' },
        { title: 'قواعد البيانات وهندسة الأنظمة', description: 'قواعد بيانات علائقية منظمة وبنية تطبيقات سهلة الصيانة والقراءة مع نموها.' },
      ],
    },
    projects: {
      kicker: 'مشاريع مختارة', title: 'أعمال أنجزتها', featured: 'مشروع مميز',
      viewCode: 'عرض الكود', liveDemo: 'نسخة تجريبية',
      items: [
        { description: 'منصة لخدمات الأفراح مع لوحة تحكم إدارية لإدارة مقدمي الخدمات والخدمات والاشتراكات.', features: ['إدارة مقدمي الخدمات', 'إدارة الخدمات', 'التصنيفات', 'الاشتراكات', 'صلاحيات حسب الأدوار', 'إدارة الوسائط', 'لوحة تحكم إدارية'] },
        { description: 'منصة لإدارة التوصيل تتكون من لوحة تحكم ويب ومنظومة تطبيقات للهواتف.', features: ['إدارة التوصيل', 'إدارة المتاجر', 'مندوبو التوصيل', 'العملاء', 'تتبع الطلبات', 'حالات التوصيل', 'لوحة تحكم إدارية'] },
      ],
    },
    process: {
      kicker: 'آلية العمل', title: 'مراحل التطوير',
      steps: [
        { title: 'الفهم', description: 'فهم متطلبات العمل والمستخدمين وكيفية سير العمليات فعليًا.' },
        { title: 'التخطيط', description: 'تصميم بنية التطبيق وقاعدة البيانات والصلاحيات وهيكله العام.' },
        { title: 'التطوير', description: 'بناء الخادم والواجهة وواجهات API ومنطق الأعمال الذي يربط بينها.' },
        { title: 'الاختبار', description: 'اختبار الوظائف والتجاوب والتحقق والأمان قبل الإطلاق.' },
        { title: 'النشر', description: 'تجهيز التطبيق للإنتاج ونشره والتأكد من تشغيله.' },
      ],
    },
    build: {
      kicker: 'ما أبنيه', title: 'أنظمة يمكنني تطويرها',
      types: ['منصات SaaS', 'لوحات تحكم إدارية', 'منصات توصيل', 'واجهات REST API', 'تطبيقات متعددة المستأجرين', 'تطبيقات ويب مخصصة'],
    },
    contact: {
      title: 'هل لديك مشروع؟',
      description: 'أخبرني بما تعمل عليه، ولنناقش كيف أحوّل فكرتك إلى تطبيق ويب موثوق.',
      name: 'الاسم', email: 'البريد الإلكتروني', projectType: 'نوع المشروع', message: 'الرسالة',
      namePlaceholder: 'اسمك', emailPlaceholder: 'you@example.com',
      subject: 'الموضوع',
      subjectPlaceholder: 'موضوع الرسالة',
      selectType: 'اختر نوع المشروع', messagePlaceholder: 'ما الذي تعمل على تطويره؟',
      projectTypes: ['تطبيق ويب مخصص', 'لوحة تحكم إدارية', 'منصة SaaS', 'واجهة REST API', 'شيء آخر'],
      sending: 'جارٍ الإرسال…', send: 'إرسال الرسالة', sent: 'تم إرسال الرسالة.',
      thanks: 'شكرًا لتواصلك، سأرد عليك قريبًا.',
      formNote: 'هذا النموذج غير متصل بخادم لإرسال الرسائل حتى الآن.',
    },
    footer: {
      tagline: 'تطوير تطبيقات الويب باستخدام Laravel وVue.js وTailwind CSS',
      rights: '© 2026 Musab Jadi. جميع الحقوق محفوظة.',
      github: 'حساب GitHub', linkedin: 'حساب LinkedIn', email: 'إرسال بريد إلكتروني',
    },
  },
}

function getInitialLocale() {
  try {
    return localStorage.getItem('portfolio-locale') === 'ar' ? 'ar' : 'en'
  } catch {
    return 'en'
  }
}

export const locale = ref(getInitialLocale())
export const isArabic = ref(locale.value === 'ar')

function syncDocument(language) {
  isArabic.value = language === 'ar'
  document.documentElement.lang = language
  document.documentElement.dir = isArabic.value ? 'rtl' : 'ltr'
  try {
    localStorage.setItem('portfolio-locale', language)
  } catch {
  }
}

watch(locale, syncDocument, { immediate: true })

export function setLocale(language) {
  locale.value = language === 'ar' ? 'ar' : 'en'
}

export function useLocale() {
  function t(path) {
    return path.split('.').reduce((value, key) => value?.[key], messages[locale.value]) ?? path
  }

  return { locale, isArabic, setLocale, t }
}