// B-M Business Scripts

const params = new URLSearchParams(window.location.search);
const supportedLangs = ['it', 'en', 'es', 'fr', 'de'];

const requestedLang = params.get('lang') || 'it';

const currentLang = supportedLangs.includes(requestedLang)
  ? requestedLang
  : 'it';

const translations = {
  it: {
    about: 'Chi siamo',
    whyChooseUs: 'Perché sceglierci',
    services: 'I nostri servizi',
    servicesSubtitle: 'Trattamenti pensati per ogni esigenza',
    gallery: 'I nostri lavori',
    gallerySubtitle: 'Alcuni dei nostri risultati',
    reviews: 'Google Reviews',
    reviewsSubtitle: 'La fiducia dei nostri clienti',
    readGoogleReviews: 'Leggi le recensioni su Google',
    reviewsWord: 'recensioni',
    hours: 'Orari',
    hoursSubtitle: 'Quando puoi trovarci',
    monday: 'Lunedì',
    tuesday: 'Martedì',
    wednesday: 'Mercoledì',
    thursday: 'Giovedì',
    friday: 'Venerdì',
    saturday: 'Sabato',
    sunday: 'Domenica',
    closed: 'Chiuso',
    location: 'Dove siamo',
    locationSubtitle: 'Vieni a trovarci',
    openMaps: 'Apri in Google Maps',
    contacts: 'Contatti',
    phone: 'Telefono',
    whatsappWrite: 'Scrivici ora',
    email: 'Email',
    website: 'Sito Web',
    onlinePresence: 'Presenza online',
    social: 'Social',
    platforms: 'Portali',
    delivery: 'Delivery',
    share: 'Condividi',
    shareTitle: 'Ti è piaciuta questa attività?',
    shareText:
      'Aiutaci a farci conoscere. Condividi questa pagina con amici e familiari.',
    sharePage: '📤 Condividi la pagina',
    discover: 'Scopri',
    linkCopied: '✅ Link copiato',
    saveContact: '👤 Salva contatto',
    bookNow: 'Prenota ora',
    photo: 'Foto',
    of: 'di',
    rights: 'Tutti i diritti riservati.'
  },

  en: {
    about: 'About us',
    whyChooseUs: 'Why choose us',
    services: 'Our services',
    servicesSubtitle: 'Treatments designed for every need',
    gallery: 'Our work',
    gallerySubtitle: 'Some of our results',
    reviews: 'Google Reviews',
    reviewsSubtitle: 'The trust of our customers',
    readGoogleReviews: 'Read reviews on Google',
    reviewsWord: 'reviews',
    hours: 'Opening hours',
    hoursSubtitle: 'When you can find us',
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
    closed: 'Closed',
    location: 'Where we are',
    locationSubtitle: 'Come and visit us',
    openMaps: 'Open in Google Maps',
    contacts: 'Contacts',
    phone: 'Phone',
    whatsappWrite: 'Message us now',
    email: 'Email',
    website: 'Website',
    onlinePresence: 'Online presence',
    social: 'Social',
    platforms: 'Platforms',
    delivery: 'Delivery',
    share: 'Share',
    shareTitle: 'Did you like this business?',
    shareText:
      'Help us spread the word. Share this page with friends and family.',
    sharePage: '📤 Share this page',
    discover: 'Discover',
    linkCopied: '✅ Link copied',
    saveContact: '👤 Save contact',
    bookNow: 'Book now',
    photo: 'Photo',
    of: 'of',
    rights: 'All rights reserved.'
  },

  es: {
    about: 'Quiénes somos',
    whyChooseUs: 'Por qué elegirnos',
    services: 'Nuestros servicios',
    servicesSubtitle: 'Tratamientos pensados para cada necesidad',
    gallery: 'Nuestros trabajos',
    gallerySubtitle: 'Algunos de nuestros resultados',
    reviews: 'Reseñas de Google',
    reviewsSubtitle: 'La confianza de nuestros clientes',
    readGoogleReviews: 'Lee las reseñas en Google',
    reviewsWord: 'reseñas',
    hours: 'Horarios',
    hoursSubtitle: 'Cuándo puedes encontrarnos',
    monday: 'Lunes',
    tuesday: 'Martes',
    wednesday: 'Miércoles',
    thursday: 'Jueves',
    friday: 'Viernes',
    saturday: 'Sábado',
    sunday: 'Domingo',
    closed: 'Cerrado',
    location: 'Dónde estamos',
    locationSubtitle: 'Ven a visitarnos',
    openMaps: 'Abrir en Google Maps',
    contacts: 'Contactos',
    phone: 'Teléfono',
    whatsappWrite: 'Escríbenos ahora',
    email: 'Correo electrónico',
    website: 'Sitio web',
    onlinePresence: 'Presencia online',
    social: 'Redes sociales',
    platforms: 'Portales',
    delivery: 'Delivery',
    share: 'Compartir',
    shareTitle: '¿Te ha gustado esta actividad?',
    shareText:
      'Ayúdanos a darnos a conocer. Comparte esta página con amigos y familiares.',
    sharePage: '📤 Compartir la página',
    discover: 'Descubre',
    linkCopied: '✅ Enlace copiado',
    saveContact: '👤 Guardar contacto',
    bookNow: 'Reservar ahora',
    photo: 'Foto',
    of: 'de',
    rights: 'Todos los derechos reservados.'
  },

  fr: {
    about: 'À propos de nous',
    whyChooseUs: 'Pourquoi nous choisir',
    services: 'Nos services',
    servicesSubtitle: 'Des prestations pensées pour chaque besoin',
    gallery: 'Nos réalisations',
    gallerySubtitle: 'Quelques-uns de nos résultats',
    reviews: 'Avis Google',
    reviewsSubtitle: 'La confiance de nos clients',
    readGoogleReviews: 'Lire les avis sur Google',
    reviewsWord: 'avis',
    hours: 'Horaires',
    hoursSubtitle: 'Quand nous trouver',
    monday: 'Lundi',
    tuesday: 'Mardi',
    wednesday: 'Mercredi',
    thursday: 'Jeudi',
    friday: 'Vendredi',
    saturday: 'Samedi',
    sunday: 'Dimanche',
    closed: 'Fermé',
    location: 'Où nous sommes',
    locationSubtitle: 'Venez nous rendre visite',
    openMaps: 'Ouvrir dans Google Maps',
    contacts: 'Contacts',
    phone: 'Téléphone',
    whatsappWrite: 'Écrivez-nous maintenant',
    email: 'E-mail',
    website: 'Site web',
    onlinePresence: 'Présence en ligne',
    social: 'Réseaux sociaux',
    platforms: 'Portails',
    delivery: 'Livraison',
    share: 'Partager',
    shareTitle: 'Cette activité vous a plu ?',
    shareText:
      'Aidez-nous à nous faire connaître. Partagez cette page avec vos amis et votre famille.',
    sharePage: '📤 Partager la page',
    discover: 'Découvrez',
    linkCopied: '✅ Lien copié',
    saveContact: '👤 Enregistrer le contact',
    bookNow: 'Réserver maintenant',
    photo: 'Photo',
    of: 'de',
    rights: 'Tous droits réservés.'
  },

  de: {
    about: 'Über uns',
    whyChooseUs: 'Warum Sie uns wählen sollten',
    services: 'Unsere Dienstleistungen',
    servicesSubtitle: 'Angebote für jeden Bedarf',
    gallery: 'Unsere Arbeiten',
    gallerySubtitle: 'Einige unserer Ergebnisse',
    reviews: 'Google-Bewertungen',
    reviewsSubtitle: 'Das Vertrauen unserer Kunden',
    readGoogleReviews: 'Bewertungen auf Google lesen',
    reviewsWord: 'Bewertungen',
    hours: 'Öffnungszeiten',
    hoursSubtitle: 'Wann Sie uns erreichen können',
    monday: 'Montag',
    tuesday: 'Dienstag',
    wednesday: 'Mittwoch',
    thursday: 'Donnerstag',
    friday: 'Freitag',
    saturday: 'Samstag',
    sunday: 'Sonntag',
    closed: 'Geschlossen',
    location: 'Wo Sie uns finden',
    locationSubtitle: 'Besuchen Sie uns',
    openMaps: 'In Google Maps öffnen',
    contacts: 'Kontakte',
    phone: 'Telefon',
    whatsappWrite: 'Schreiben Sie uns jetzt',
    email: 'E-Mail',
    website: 'Webseite',
    onlinePresence: 'Online-Präsenz',
    social: 'Soziale Netzwerke',
    platforms: 'Portale',
    delivery: 'Lieferung',
    share: 'Teilen',
    shareTitle: 'Hat Ihnen dieses Unternehmen gefallen?',
    shareText:
      'Helfen Sie uns, bekannter zu werden. Teilen Sie diese Seite mit Freunden und Familie.',
    sharePage: '📤 Seite teilen',
    discover: 'Entdecken Sie',
    linkCopied: '✅ Link kopiert',
    saveContact: '👤 Kontakt speichern',
    bookNow: 'Jetzt buchen',
    photo: 'Foto',
    of: 'von',
    rights: 'Alle Rechte vorbehalten.'
  }
};

const t = translations[currentLang];

const SUPABASE_URL =
  'https://zsnalortmeuhxwiimwsp.supabase.co';

const SUPABASE_PUBLISHABLE_KEY =
  'sb_publishable_MfwDSdwXEMtqKy4aFwu2Iw_jIHMhnY4';

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

const businessSlug = params.get('slug') || '';

const demoType = params.get('demo') || 'hairdresser';

let categoriaUrl =
  (params.get('categoria') || '').toLowerCase();

const themeIdUrl =
  params.get('themeId') || '';

const demoFiles = {
  hairdresser: 'data/hairdresser_demo.json',
  accountant: 'data/accountant_demo.json',
  artisan: 'data/artisan_demo.json',
  restaurant: 'data/restaurant_demo.json',
  hotel: 'data/hotel_demo.json',
  beauty: 'data/beauty_demo.json',
  fitness: 'data/fitness_demo.json',
  retail: 'data/retail_demo.json',
  nature: 'data/nature_demo.json',
};

const demoFile =
  demoFiles[demoType] || demoFiles.hairdresser;

  console.log('DEMO RICHIESTA:', demoType);
  console.log('FILE CARICATO:', demoFile);

const nomeUrl = params.get('nome') || '';
const isGeneratedProfile =
  nomeUrl.trim() !== '';
const descrizioneUrl = params.get('descrizione') || '';
const telefonoUrl = params.get('telefono') || '';
const emailUrl = params.get('email') || '';
const sitoUrl = params.get('sito') || '';
const instagramUrl =
  params.get('instagram') || '';

const facebookUrl =
  params.get('facebook') || '';

const tiktokUrl =
  params.get('tiktok') || '';

const youtubeUrl =
  params.get('youtube') || '';

const linkedinUrl =
  params.get('linkedin') || '';

const xUrl =
  params.get('x') || '';

const bookingUrl =
  params.get('booking') || '';

const tripadvisorUrl =
  params.get('tripadvisor') || '';

const whatsappUrl =
  params.get('whatsapp') || '';

const mapsUrl =
  params.get('maps') || '';

const reviewsUrl =
  params.get('reviews') || '';

const hoursJsonUrl =
  params.get('hoursJson') || '';

const servicesJsonUrl =
  params.get('servicesJson') || '';

const galleryJsonUrl =
  params.get('galleryJson') || '';

async function loadBusinessFromSupabase(slug) {
  const { data, error } = await supabaseClient
    .from('businesses')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error(
      'Errore Supabase:',
      error
    );

    throw new Error(
      'Attività non trovata oppure non pubblicata'
    );
  }

  console.log(
    'ATTIVITÀ CARICATA DA SUPABASE:',
    data
  );

  return data;
}

async function loadBusinessData() {
  try {

    let data;

    if (businessSlug) {
      const businessRow =
        await loadBusinessFromSupabase(
          businessSlug
        );

      data = businessRow.profile_data || {};

      console.log(
        'DATI PROFILO SUPABASE:',
        data
      );

      data.business = {
        ...(data.business || {}),
        name:
          data.business?.name ||
          businessRow.business_name ||
          '',
      };

      data.category =
        data.category ||
        businessRow.category ||
        '';

        data.theme =
  data.theme ||
  businessRow.theme_id ||
  '';

    if (businessSlug && data.category) {
  const categoryMap = {
    'Artigiano': 'artisan',
    'Idraulico': 'artisan',
    'Elettricista': 'artisan',
    'Falegname': 'artisan',
    'Serramentista': 'artisan',
    'Imbianchino': 'artisan',
    'Muratore': 'artisan',
    'Giardiniere': 'nature',

    'Ristorante': 'food',
    'Pizzeria': 'food',
    'Bar': 'food',

    'Hotel': 'hospitality',
    'B&B': 'hospitality',

    'Negozio': 'retail',

    'Studio medico': 'medical',
    'Studio dentistico': 'medical',

    'Avvocato': 'professional',
    'Commercialista': 'professional',
    'Agenzia immobiliare': 'real-estate',

    'Parrucchiere': 'hairdresser',
    'Barbiere': 'barber',
    'Estetista': 'beauty',
    'Palestra': 'fitness',

    'Altro - Blu dinamico': 'generic-1',
    'Altro - Rosa elegante': 'generic-2',
    'Altro - Neutro minimal': 'generic-3',
    'Altro - Verde moderno': 'generic-4',
  };

  categoriaUrl =
    categoryMap[data.category] ||
    'generic-3';
}

      console.log(
        'DATI PROFILO SUPABASE:',
        data
      );

    } else {
      const response = await fetch(
        `${demoFile}?v=5`
      );

      if (!response.ok) {
        throw new Error(
          'Impossibile caricare il file JSON'
        );
      }

      data = await response.json();

      console.log(
        'DATI DEMO O URL:',
        data
      );
    }

    // Rimuove eventuali temi precedenti
    document.body.classList.remove(
      'hairdresser-theme',
      'accountant-theme',
      'artisan-theme',
      'restaurant-theme',
      'hotel-theme',
      'beauty-theme',
      'fitness-theme',
      'retail-theme',
      'nature-theme'
    );

    // Applica automaticamente il tema corretto
    if (data.category) {
      document.body.classList.add(
        `${String(data.category)
          .replace(/\s+/g, '-')
          .toLowerCase()}-theme`
      );
    }

// Rimuove eventuali temi colore già presenti
document.body.classList.remove(
  'theme-ocean',
  'theme-green-sage',
  'theme-pink-blush',
  'theme-graphite'
);

// Converte i nomi ricevuti dalla app
// nei nomi utilizzati dal CSS
const themeMap = {
  blueOcean: 'ocean',
  blue_ocean: 'ocean',

  greenSage: 'green-sage',
  green_sage: 'green-sage',

  pinkBlush: 'pink-blush',
  pink_blush: 'pink-blush',

  graphite: 'graphite'
};

let selectedTheme =
  themeMap[themeIdUrl] ||
  data.theme ||
  'ocean';

// Il Barbiere utilizza sempre Blu Ocean
if (
  categoriaUrl === 'barber' ||
  categoriaUrl === 'professional'
) {
  selectedTheme = 'ocean';
}

if (categoriaUrl === 'artisan') {
  selectedTheme = 'artisan';
}

if (categoriaUrl === 'food') {
  selectedTheme = 'food';
}

if (categoriaUrl === 'hospitality') {
  selectedTheme = 'hospitality';
}


if (categoriaUrl === 'medical') {
  selectedTheme = 'medical';
}

if (categoriaUrl === 'nature') {
  selectedTheme = 'nature';
}

if (categoriaUrl === 'hairdresser') {
  selectedTheme = 'pink-blush';
}

if (categoriaUrl === 'beauty') {
  selectedTheme = 'beauty';
}

if (categoriaUrl === 'fitness') {
  selectedTheme = 'fitness';
}

if (categoriaUrl === 'retail') {
  selectedTheme = 'retail';
}

if (categoriaUrl === 'generic-1') {
  selectedTheme = 'ocean';
}

if (categoriaUrl === 'generic-2') {
  selectedTheme = 'pink-blush';
}

if (categoriaUrl === 'generic-3') {
  selectedTheme = 'graphite';
}

if (categoriaUrl === 'generic-4') {
  selectedTheme = 'green-sage';
}

document.body.classList.add(
  `theme-${selectedTheme}`
);

// HERO STYLE
const heroElement =
  document.getElementById('hero');

const categoryHeroMap = {
  altro: 'generic-1',
  hairdresser: 'elegance',
  barber: 'barber-ocean',
  professional: 'office',
  'real-estate': 'real-estate',
  artisan: 'artisan',
  food: 'food',
  hospitality: 'hospitality',
  medical: 'medical',
  nature: 'nature',
  beauty: 'beauty',
  fitness: 'fitness',
  retail: 'retail',
  'generic-1': 'generic-1',
  'generic-2': 'generic-2',
  'generic-3': 'generic-3',
  'generic-4': 'generic-4',
};


let heroStyle =
  categoryHeroMap[categoriaUrl] ||
  data.heroStyle ||
  'elegance';

if (heroElement) {
  heroElement.style.backgroundImage =
    `url("images/themes/${heroStyle}.png")`;
}

    // HERO
    const businessNameElement =
      document.getElementById('business-name');

    const businessTaglineElement =
      document.getElementById('business-tagline');

    const businessSubtitleElement =
      document.getElementById('business-subtitle');

    const aboutLabel =
      document.getElementById('about-label');

    const whyChooseUsTitle =
      document.getElementById('why-choose-us-title'); 
      
    const servicesLabel =
      document.getElementById('services-label');

    const servicesSubtitle =
      document.getElementById('services-subtitle');

    const galleryLabel =
      document.getElementById('gallery-label');

    const gallerySubtitle =
      document.getElementById('gallery-subtitle');

    const reviewsLabel =
      document.getElementById('reviews-label');

    const reviewsSubtitle =
      document.getElementById('reviews-subtitle');

    const hoursLabel =
     document.getElementById('hours-label');

    const hoursSubtitle =
     document.getElementById('hours-subtitle');

    const locationLabel =
     document.getElementById('location-label');

    const locationSubtitle =
     document.getElementById('location-subtitle'); 

    const aboutTitle =
      document.getElementById('about-title');

    const aboutDescription =
      document.getElementById(
      'about-description'
   );

    const aboutBenefits =
      document.getElementById(
      'about-benefits'
   );

   const contactsLabel =
     document.getElementById('contacts-label');

   const phoneTitle =
     document.getElementById('phone-title');

   const emailTitle =
     document.getElementById('email-title');

   const websiteTitle =
     document.getElementById('website-title');


    // CONTATTI

    const contactsSection =
      document.getElementById('contacts-section');

    const phoneCard =
      document.getElementById('phone-card');

    const phoneText =
      document.getElementById('phone-text');

    const whatsappCard =
      document.getElementById('whatsapp-card');

    const whatsappText =
      document.getElementById('whatsapp-text');

    const emailCard =
      document.getElementById('email-card');

    const emailText =
      document.getElementById('email-text');

    const websiteCard =
      document.getElementById('website-card');

    const websiteText =
      document.getElementById('website-text');

    // REVIEWS

    const reviewsSection =
      document.getElementById('reviews-section');

    const reviewsCard =
      document.getElementById('reviews-card');

    const reviewsScore =
      document.getElementById('reviews-score');

    const reviewsCount =
      document.getElementById('reviews-count');

    const reviewsProvider =
      document.getElementById('reviews-provider');

    // MAPS
    const locationBusinessName =
      document.getElementById(
        'location-business-name'
      );

    const locationSection =
      document.getElementById('location-section');

    const locationAddress =
      document.getElementById(
        'location-address'
      );

    const mapsLink =
      document.getElementById('maps-link');

    const googleMapFrame =
      document.getElementById('google-map-frame');

    const onlineSection =
      document.getElementById('online-section');

    const onlineLabel =
      document.getElementById('online-label');

    const socialTitle =
      document.getElementById('social-title');

    const socialLinksContainer =
      document.getElementById(
      'social-links-container'
      );

    const platformsGroup =
      document.getElementById('platforms-group');

    const instagramLink =
      document.getElementById('instagram-link');

    const facebookLink =
      document.getElementById('facebook-link');

    const tiktokLink =
      document.getElementById('tiktok-link');

    const youtubeLink =
      document.getElementById('youtube-link');

    const linkedinLink =
      document.getElementById('linkedin-link');

    const xLink =
      document.getElementById('x-link');

    const platformsTitle =
      document.getElementById('platforms-title');

    const bookingLink =
      document.getElementById('booking-link');

    const tripadvisorLink =
      document.getElementById('tripadvisor-link');

     const trivagoLink =
      document.getElementById('trivago-link');

    const mioDottoreLink =
      document.getElementById('miodottore-link');

    const glovoLink =
      document.getElementById('glovo-link');

    const justEatLink =
      document.getElementById('justeat-link');

    const servicesSection =
      document.getElementById('services-section');

    const servicesGrid =
      document.getElementById('services-grid');

    const gallerySection =
      document.getElementById('gallery-section');

    const galleryGrid =
      document.getElementById('gallery-grid');

    const hoursSection =
      document.getElementById('hours-section');

    const hoursCard =
      document.getElementById('hours-card');

    const shareLabel =
      document.getElementById('share-label');

    const shareTitle =
      document.getElementById('share-title');

    const shareText =
      document.getElementById('share-text');  

    const shareButton =
      document.getElementById('share-button');

    const saveContactButton =
      document.getElementById(
      'save-contact-button'
    ); 

    const footerRights =
      document.getElementById('footer-rights');

    const categoryContentMap = {
 hairdresser: {
  it: {
    subtitle:
      'Parrucchiere professionale per tagli, colore e trattamenti su misura.',
    title:
      'Eleganza, stile e cura dei dettagli',
    description:
      'Un salone moderno pensato per offrire servizi personalizzati e professionali.',
    benefits: [
      'Consulenza personalizzata',
      'Prodotti professionali',
      'Ambiente elegante e rilassante',
    ],
  },

  en: {
    subtitle:
      'Professional hair salon for cuts, color and customized treatments.',
    title:
      'Elegance, style and attention to detail',
    description:
      'A modern salon designed to offer personalized and professional services.',
    benefits: [
      'Personalized consultation',
      'Professional products',
      'Elegant and relaxing environment',
    ],
  },

  es: {
    subtitle:
      'Peluquería profesional para cortes, color y tratamientos personalizados.',
    title:
      'Elegancia, estilo y atención al detalle',
    description:
      'Un salón moderno pensado para ofrecer servicios personalizados y profesionales.',
    benefits: [
      'Asesoramiento personalizado',
      'Productos profesionales',
      'Ambiente elegante y relajante',
    ],
  },

  fr: {
    subtitle:
      'Salon de coiffure professionnel pour coupes, couleur et soins personnalisés.',
    title:
      'Élégance, style et souci du détail',
    description:
      'Un salon moderne conçu pour offrir des services personnalisés et professionnels.',
    benefits: [
      'Conseils personnalisés',
      'Produits professionnels',
      'Ambiance élégante et relaxante',
    ],
  },

  de: {
    subtitle:
      'Professioneller Friseursalon für Schnitte, Farbe und individuelle Behandlungen.',
    title:
      'Eleganz, Stil und Liebe zum Detail',
    description:
      'Ein moderner Salon für individuelle und professionelle Dienstleistungen.',
    benefits: [
      'Individuelle Beratung',
      'Professionelle Produkte',
      'Elegantes und entspannendes Ambiente',
    ],
  },
},

 barber: {
  it: {
    subtitle:
      'Tagli, barba e stile per uomo e bambino.',
    title:
      'Stile, precisione e cura personale',
    description:
      'Un ambiente moderno dedicato alla cura dei capelli, della barba e dello stile maschile.',
    benefits: [
      'Tagli personalizzati',
      'Cura di barba e capelli',
      'Ambiente moderno e accogliente',
    ],
  },

  en: {
    subtitle:
      'Haircuts, beard care and style for men and children.',
    title:
      'Style, precision and personal care',
    description:
      'A modern environment dedicated to hair, beard care and men’s style.',
    benefits: [
      'Personalized haircuts',
      'Beard and hair care',
      'Modern and welcoming environment',
    ],
  },

  es: {
    subtitle:
      'Cortes, cuidado de la barba y estilo para hombres y niños.',
    title:
      'Estilo, precisión y cuidado personal',
    description:
      'Un ambiente moderno dedicado al cuidado del cabello, la barba y el estilo masculino.',
    benefits: [
      'Cortes personalizados',
      'Cuidado de barba y cabello',
      'Ambiente moderno y acogedor',
    ],
  },

  fr: {
    subtitle:
      'Coupes, entretien de la barbe et style pour hommes et enfants.',
    title:
      'Style, précision et soin personnel',
    description:
      'Un espace moderne dédié aux cheveux, à la barbe et au style masculin.',
    benefits: [
      'Coupes personnalisées',
      'Soin de la barbe et des cheveux',
      'Ambiance moderne et accueillante',
    ],
  },

  de: {
    subtitle:
      'Haarschnitte, Bartpflege und Styling für Männer und Kinder.',
    title:
      'Stil, Präzision und persönliche Pflege',
    description:
      'Ein modernes Ambiente rund um Haarpflege, Bartpflege und Herrenstyling.',
    benefits: [
      'Individuelle Haarschnitte',
      'Bart- und Haarpflege',
      'Modernes und einladendes Ambiente',
    ],
  },
},

 professional: {
  it: {
    subtitle:
      'Consulenza professionale e assistenza su misura.',
    title:
      'Competenza, affidabilità e attenzione',
    description:
      'Un servizio professionale pensato per accompagnare ogni cliente con precisione e disponibilità.',
    benefits: [
      'Consulenza personalizzata',
      'Competenza e affidabilità',
      'Assistenza continua',
    ],
  },

  en: {
    subtitle:
      'Professional consulting and tailored assistance.',
    title:
      'Expertise, reliability and attention',
    description:
      'A professional service designed to support every client with precision and availability.',
    benefits: [
      'Personalized consulting',
      'Expertise and reliability',
      'Ongoing assistance',
    ],
  },

  es: {
    subtitle:
      'Asesoramiento profesional y asistencia personalizada.',
    title:
      'Competencia, fiabilidad y atención',
    description:
      'Un servicio profesional pensado para acompañar a cada cliente con precisión y disponibilidad.',
    benefits: [
      'Asesoramiento personalizado',
      'Competencia y fiabilidad',
      'Asistencia continua',
    ],
  },

  fr: {
    subtitle:
      'Conseil professionnel et accompagnement sur mesure.',
    title:
      'Compétence, fiabilité et attention',
    description:
      'Un service professionnel conçu pour accompagner chaque client avec précision et disponibilité.',
    benefits: [
      'Conseil personnalisé',
      'Compétence et fiabilité',
      'Accompagnement continu',
    ],
  },

  de: {
    subtitle:
      'Professionelle Beratung und individuelle Betreuung.',
    title:
      'Kompetenz, Zuverlässigkeit und Aufmerksamkeit',
    description:
      'Ein professioneller Service, der jeden Kunden präzise und zuverlässig begleitet.',
    benefits: [
      'Individuelle Beratung',
      'Kompetenz und Zuverlässigkeit',
      'Kontinuierliche Betreuung',
    ],
  },
},

  'real-estate': {
  it: {
    subtitle:
      'Consulenza immobiliare per vendere, acquistare e valorizzare ogni immobile.',
    title:
      'La soluzione giusta per ogni immobile',
    description:
      'Un servizio immobiliare completo per accompagnare ogni cliente nella vendita, nell’acquisto e nella valutazione della proprietà.',
    benefits: [
      'Consulenza personalizzata',
      'Valutazione e assistenza',
      'Supporto in ogni fase',
    ],
  },

  en: {
    subtitle:
      'Real estate consulting to sell, buy and enhance every property.',
    title:
      'The right solution for every property',
    description:
      'A complete real estate service to support every client through selling, buying and property valuation.',
    benefits: [
      'Personalized consulting',
      'Valuation and assistance',
      'Support at every stage',
    ],
  },

  es: {
    subtitle:
      'Asesoramiento inmobiliario para vender, comprar y valorizar cada inmueble.',
    title:
      'La solución adecuada para cada inmueble',
    description:
      'Un servicio inmobiliario completo para acompañar a cada cliente en la venta, compra y valoración de su propiedad.',
    benefits: [
      'Asesoramiento personalizado',
      'Valoración y asistencia',
      'Apoyo en cada etapa',
    ],
  },

  fr: {
    subtitle:
      'Conseil immobilier pour vendre, acheter et valoriser chaque bien.',
    title:
      'La solution adaptée à chaque bien immobilier',
    description:
      'Un service immobilier complet pour accompagner chaque client dans la vente, l’achat et l’évaluation de son bien.',
    benefits: [
      'Conseil personnalisé',
      'Évaluation et assistance',
      'Accompagnement à chaque étape',
    ],
  },

  de: {
    subtitle:
      'Immobilienberatung für Verkauf, Kauf und optimale Bewertung jeder Immobilie.',
    title:
      'Die richtige Lösung für jede Immobilie',
    description:
      'Ein umfassender Immobilienservice, der jeden Kunden beim Verkauf, Kauf und bei der Bewertung seiner Immobilie begleitet.',
    benefits: [
      'Individuelle Beratung',
      'Bewertung und Unterstützung',
      'Begleitung in jeder Phase',
    ],
  },
},

 artisan: {
  it: {
    subtitle:
      'Soluzioni artigianali e interventi professionali eseguiti con cura.',
    title:
      'Esperienza, precisione e qualità',
    description:
      'Competenza artigianale, attrezzature professionali e attenzione ai dettagli per offrire soluzioni affidabili e personalizzate.',
    benefits: [
      'Interventi su misura',
      'Attrezzature professionali',
      'Affidabilità e cura dei dettagli',
    ],
  },

  en: {
    subtitle:
      'Craftsmanship solutions and professional services carried out with care.',
    title:
      'Experience, precision and quality',
    description:
      'Skilled craftsmanship, professional equipment and attention to detail to provide reliable and customized solutions.',
    benefits: [
      'Tailored services',
      'Professional equipment',
      'Reliability and attention to detail',
    ],
  },

  es: {
    subtitle:
      'Soluciones artesanales y servicios profesionales realizados con cuidado.',
    title:
      'Experiencia, precisión y calidad',
    description:
      'Experiencia artesanal, equipos profesionales y atención al detalle para ofrecer soluciones fiables y personalizadas.',
    benefits: [
      'Servicios a medida',
      'Equipos profesionales',
      'Fiabilidad y atención al detalle',
    ],
  },

  fr: {
    subtitle:
      'Solutions artisanales et interventions professionnelles réalisées avec soin.',
    title:
      'Expérience, précision et qualité',
    description:
      'Savoir-faire artisanal, équipements professionnels et souci du détail pour offrir des solutions fiables et personnalisées.',
    benefits: [
      'Interventions sur mesure',
      'Équipements professionnels',
      'Fiabilité et souci du détail',
    ],
  },

  de: {
    subtitle:
      'Handwerkliche Lösungen und professionelle Arbeiten mit größter Sorgfalt.',
    title:
      'Erfahrung, Präzision und Qualität',
    description:
      'Handwerkliches Können, professionelle Ausrüstung und Liebe zum Detail für zuverlässige und individuelle Lösungen.',
    benefits: [
      'Individuelle Lösungen',
      'Professionelle Ausrüstung',
      'Zuverlässigkeit und Liebe zum Detail',
    ],
  },
},

food: {
  it: {
    subtitle:
      'Sapori autentici, qualità e accoglienza.',
    title:
      'Gusto, qualità e passione',
    description:
      'Un ambiente accogliente dove ingredienti selezionati e cura del servizio creano un’esperienza da ricordare.',
    benefits: [
      'Ingredienti selezionati',
      'Preparazioni curate',
      'Ambiente accogliente',
    ],
  },

  en: {
    subtitle:
      'Authentic flavors, quality and hospitality.',
    title:
      'Taste, quality and passion',
    description:
      'A welcoming environment where selected ingredients and attentive service create a memorable experience.',
    benefits: [
      'Selected ingredients',
      'Carefully prepared dishes',
      'Welcoming atmosphere',
    ],
  },

  es: {
    subtitle:
      'Sabores auténticos, calidad y hospitalidad.',
    title:
      'Sabor, calidad y pasión',
    description:
      'Un ambiente acogedor donde ingredientes seleccionados y un servicio cuidado crean una experiencia para recordar.',
    benefits: [
      'Ingredientes seleccionados',
      'Preparaciones cuidadas',
      'Ambiente acogedor',
    ],
  },

  fr: {
    subtitle:
      'Saveurs authentiques, qualité et accueil.',
    title:
      'Goût, qualité et passion',
    description:
      'Un cadre accueillant où des ingrédients sélectionnés et un service soigné créent une expérience mémorable.',
    benefits: [
      'Ingrédients sélectionnés',
      'Préparations soignées',
      'Ambiance accueillante',
    ],
  },

  de: {
    subtitle:
      'Authentische Aromen, Qualität und Gastfreundschaft.',
    title:
      'Geschmack, Qualität und Leidenschaft',
    description:
      'Ein einladendes Ambiente, in dem ausgewählte Zutaten und aufmerksamer Service ein unvergessliches Erlebnis schaffen.',
    benefits: [
      'Ausgewählte Zutaten',
      'Sorgfältige Zubereitung',
      'Einladendes Ambiente',
    ],
  },
},

hospitality: {
  it: {
    subtitle:
      'Accoglienza, comfort e attenzione per ogni ospite.',
    title:
      'Il piacere di sentirsi a casa',
    description:
      'Un ambiente curato e accogliente, pensato per offrire soggiorni piacevoli, comfort e un servizio attento a ogni esigenza.',
    benefits: [
      'Ambienti confortevoli',
      'Accoglienza personalizzata',
      'Cura di ogni dettaglio',
    ],
  },

  en: {
    subtitle:
      'Hospitality, comfort and attention for every guest.',
    title:
      'The pleasure of feeling at home',
    description:
      'A welcoming and carefully designed environment created to offer pleasant stays, comfort and attentive service for every need.',
    benefits: [
      'Comfortable spaces',
      'Personalized hospitality',
      'Attention to every detail',
    ],
  },

  es: {
    subtitle:
      'Hospitalidad, confort y atención para cada huésped.',
    title:
      'El placer de sentirse como en casa',
    description:
      'Un ambiente cuidado y acogedor, pensado para ofrecer estancias agradables, confort y un servicio atento a cada necesidad.',
    benefits: [
      'Espacios confortables',
      'Atención personalizada',
      'Cuidado de cada detalle',
    ],
  },

  fr: {
    subtitle:
      'Accueil, confort et attention pour chaque hôte.',
    title:
      'Le plaisir de se sentir comme chez soi',
    description:
      'Un cadre soigné et accueillant, conçu pour offrir des séjours agréables, du confort et un service attentif à chaque besoin.',
    benefits: [
      'Espaces confortables',
      'Accueil personnalisé',
      'Souci de chaque détail',
    ],
  },

  de: {
    subtitle:
      'Gastfreundschaft, Komfort und Aufmerksamkeit für jeden Gast.',
    title:
      'Das Gefühl, zu Hause zu sein',
    description:
      'Ein gepflegtes und einladendes Ambiente für angenehme Aufenthalte, hohen Komfort und einen aufmerksamen Service für jeden Bedarf.',
    benefits: [
      'Komfortable Räumlichkeiten',
      'Persönliche Betreuung',
      'Liebe zum Detail',
    ],
  },
},

medical: {
  it: {
    subtitle:
      'Professionalità, attenzione e cura della persona.',
    title:
      'La tua salute al centro',
    description:
      'Uno studio moderno e accogliente, dedicato alla prevenzione, alla cura e al benessere di ogni paziente.',
    benefits: [
      'Assistenza personalizzata',
      'Ambienti moderni e curati',
      'Attenzione a ogni esigenza',
    ],
  },

  en: {
    subtitle:
      'Professionalism, attention and personal care.',
    title:
      'Your health at the center',
    description:
      'A modern and welcoming practice dedicated to prevention, care and the well-being of every patient.',
    benefits: [
      'Personalized care',
      'Modern and well-maintained facilities',
      'Attention to every need',
    ],
  },

  es: {
    subtitle:
      'Profesionalidad, atención y cuidado de la persona.',
    title:
      'Tu salud en el centro',
    description:
      'Un centro moderno y acogedor, dedicado a la prevención, el cuidado y el bienestar de cada paciente.',
    benefits: [
      'Atención personalizada',
      'Espacios modernos y cuidados',
      'Atención a cada necesidad',
    ],
  },

  fr: {
    subtitle:
      'Professionnalisme, attention et soin de la personne.',
    title:
      'Votre santé au cœur de nos priorités',
    description:
      'Un cabinet moderne et accueillant, dédié à la prévention, aux soins et au bien-être de chaque patient.',
    benefits: [
      'Prise en charge personnalisée',
      'Espaces modernes et soignés',
      'Attention portée à chaque besoin',
    ],
  },

  de: {
    subtitle:
      'Professionalität, Aufmerksamkeit und persönliche Betreuung.',
    title:
      'Ihre Gesundheit im Mittelpunkt',
    description:
      'Eine moderne und einladende Praxis für Prävention, Behandlung und das Wohlbefinden jedes Patienten.',
    benefits: [
      'Individuelle Betreuung',
      'Moderne und gepflegte Räumlichkeiten',
      'Aufmerksamkeit für jedes Anliegen',
    ],
  },
},

nature: {
  it: {
    subtitle:
      'Cura, bellezza e armonia per ogni spazio verde.',
    title:
      'Diamo vita ai tuoi spazi verdi',
    description:
      'Servizi professionali per la progettazione, la manutenzione e la valorizzazione di giardini e aree verdi.',
    benefits: [
      'Interventi personalizzati',
      'Cura professionale del verde',
      'Soluzioni per ogni spazio',
    ],
  },

  en: {
    subtitle:
      'Care, beauty and harmony for every green space.',
    title:
      'Bringing your green spaces to life',
    description:
      'Professional services for the design, maintenance and enhancement of gardens and green spaces.',
    benefits: [
      'Customized services',
      'Professional garden care',
      'Solutions for every space',
    ],
  },

  es: {
    subtitle:
      'Cuidado, belleza y armonía para cada espacio verde.',
    title:
      'Damos vida a tus espacios verdes',
    description:
      'Servicios profesionales para el diseño, mantenimiento y mejora de jardines y espacios verdes.',
    benefits: [
      'Servicios personalizados',
      'Cuidado profesional de zonas verdes',
      'Soluciones para cada espacio',
    ],
  },

  fr: {
    subtitle:
      'Soin, beauté et harmonie pour chaque espace vert.',
    title:
      'Donnons vie à vos espaces verts',
    description:
      'Des services professionnels pour la conception, l’entretien et la mise en valeur des jardins et espaces verts.',
    benefits: [
      'Interventions personnalisées',
      'Entretien professionnel des espaces verts',
      'Solutions pour chaque espace',
    ],
  },

  de: {
    subtitle:
      'Pflege, Schönheit und Harmonie für jede Grünfläche.',
    title:
      'Wir bringen Ihre Grünflächen zum Leben',
    description:
      'Professionelle Dienstleistungen für die Gestaltung, Pflege und Aufwertung von Gärten und Grünflächen.',
    benefits: [
      'Individuelle Lösungen',
      'Professionelle Grünpflege',
      'Lösungen für jede Fläche',
    ],
  },
},

beauty: {
  it: {
    subtitle:
      'Bellezza, benessere e cura dedicata a te.',
    title:
      'Il tuo momento di bellezza e relax',
    description:
      'Trattamenti estetici personalizzati, eseguiti con professionalità e attenzione in un ambiente elegante e accogliente.',
    benefits: [
      'Trattamenti personalizzati',
      'Prodotti professionali',
      'Benessere e cura dei dettagli',
    ],
  },

  en: {
    subtitle:
      'Beauty, wellness and care dedicated to you.',
    title:
      'Your moment of beauty and relaxation',
    description:
      'Personalized beauty treatments performed with professionalism and care in an elegant and welcoming environment.',
    benefits: [
      'Personalized treatments',
      'Professional products',
      'Well-being and attention to detail',
    ],
  },

  es: {
    subtitle:
      'Belleza, bienestar y cuidado dedicados a ti.',
    title:
      'Tu momento de belleza y relajación',
    description:
      'Tratamientos estéticos personalizados, realizados con profesionalidad y atención en un ambiente elegante y acogedor.',
    benefits: [
      'Tratamientos personalizados',
      'Productos profesionales',
      'Bienestar y atención al detalle',
    ],
  },

  fr: {
    subtitle:
      'Beauté, bien-être et soins rien que pour vous.',
    title:
      'Votre moment de beauté et de détente',
    description:
      'Des soins esthétiques personnalisés, réalisés avec professionnalisme et attention dans un cadre élégant et accueillant.',
    benefits: [
      'Soins personnalisés',
      'Produits professionnels',
      'Bien-être et souci du détail',
    ],
  },

  de: {
    subtitle:
      'Schönheit, Wohlbefinden und Pflege für Sie.',
    title:
      'Ihr Moment für Schönheit und Entspannung',
    description:
      'Individuelle Schönheitsbehandlungen mit Professionalität und Sorgfalt in einem eleganten und einladenden Ambiente.',
    benefits: [
      'Individuelle Behandlungen',
      'Professionelle Produkte',
      'Wohlbefinden und Liebe zum Detail',
    ],
  },
},

fitness: {
  it: {
    subtitle:
      'Energia, allenamento e risultati.',
    title:
      'Supera i tuoi limiti',
    description:
      'Un ambiente moderno e attrezzato, pensato per accompagnarti nel tuo percorso di allenamento e aiutarti a raggiungere i tuoi obiettivi.',
    benefits: [
      'Attrezzature moderne',
      'Allenamenti personalizzati',
      'Ambiente energico e motivante',
    ],
  },

  en: {
    subtitle:
      'Energy, training and results.',
    title:
      'Push beyond your limits',
    description:
      'A modern and well-equipped environment designed to support your training journey and help you achieve your goals.',
    benefits: [
      'Modern equipment',
      'Personalized training',
      'Energetic and motivating environment',
    ],
  },

  es: {
    subtitle:
      'Energía, entrenamiento y resultados.',
    title:
      'Supera tus límites',
    description:
      'Un ambiente moderno y equipado, pensado para acompañarte en tu entrenamiento y ayudarte a alcanzar tus objetivos.',
    benefits: [
      'Equipamiento moderno',
      'Entrenamientos personalizados',
      'Ambiente enérgico y motivador',
    ],
  },

  fr: {
    subtitle:
      'Énergie, entraînement et résultats.',
    title:
      'Dépassez vos limites',
    description:
      'Un espace moderne et équipé, conçu pour vous accompagner dans votre entraînement et vous aider à atteindre vos objectifs.',
    benefits: [
      'Équipements modernes',
      'Entraînements personnalisés',
      'Ambiance dynamique et motivante',
    ],
  },

  de: {
    subtitle:
      'Energie, Training und Ergebnisse.',
    title:
      'Überwinden Sie Ihre Grenzen',
    description:
      'Ein modernes und gut ausgestattetes Umfeld, das Sie auf Ihrem Trainingsweg begleitet und Ihnen hilft, Ihre Ziele zu erreichen.',
    benefits: [
      'Moderne Ausstattung',
      'Individuelles Training',
      'Energiegeladene und motivierende Atmosphäre',
    ],
  },
},

retail: {
  it: {
    subtitle:
      'Qualità, scelta e attenzione per ogni cliente.',
    title:
      'Tutto ciò che cerchi, con un servizio in più',
    description:
      'Un punto di riferimento accogliente e professionale, dove trovare prodotti selezionati e un servizio attento alle tue esigenze.',
    benefits: [
      'Prodotti selezionati',
      'Assistenza personalizzata',
      'Qualità e cortesia',
    ],
  },

  en: {
    subtitle:
      'Quality, choice and attention for every customer.',
    title:
      'Everything you are looking for, with something more',
    description:
      'A welcoming and professional place where you can find selected products and attentive service tailored to your needs.',
    benefits: [
      'Selected products',
      'Personalized assistance',
      'Quality and courtesy',
    ],
  },

  es: {
    subtitle:
      'Calidad, variedad y atención para cada cliente.',
    title:
      'Todo lo que buscas, con un servicio adicional',
    description:
      'Un espacio acogedor y profesional donde encontrarás productos seleccionados y un servicio atento a tus necesidades.',
    benefits: [
      'Productos seleccionados',
      'Atención personalizada',
      'Calidad y amabilidad',
    ],
  },

  fr: {
    subtitle:
      'Qualité, choix et attention pour chaque client.',
    title:
      'Tout ce que vous recherchez, avec un service en plus',
    description:
      'Un espace accueillant et professionnel où vous trouverez des produits sélectionnés et un service attentif à vos besoins.',
    benefits: [
      'Produits sélectionnés',
      'Service personnalisé',
      'Qualité et courtoisie',
    ],
  },

  de: {
    subtitle:
      'Qualität, Auswahl und Aufmerksamkeit für jeden Kunden.',
    title:
      'Alles, was Sie suchen, mit einem besonderen Service',
    description:
      'Ein einladender und professioneller Ort mit ausgewählten Produkten und einem auf Ihre Bedürfnisse abgestimmten Service.',
    benefits: [
      'Ausgewählte Produkte',
      'Individuelle Beratung',
      'Qualität und Freundlichkeit',
    ],
  },
},

 generic: {
  it: {
    subtitle:
      'Servizi professionali pensati per ogni esigenza.',
    title:
      'Professionalità e attenzione al cliente',
    description:
      'Soluzioni personalizzate e un servizio attento, affidabile e professionale.',
    benefits: [
      'Servizio personalizzato',
      'Professionalità',
      'Assistenza al cliente',
    ],
  },

  en: {
    subtitle:
      'Professional services designed for every need.',
    title:
      'Professionalism and customer care',
    description:
      'Customized solutions and attentive, reliable and professional service.',
    benefits: [
      'Personalized service',
      'Professionalism',
      'Customer support',
    ],
  },

  es: {
    subtitle:
      'Servicios profesionales pensados para cada necesidad.',
    title:
      'Profesionalidad y atención al cliente',
    description:
      'Soluciones personalizadas y un servicio atento, fiable y profesional.',
    benefits: [
      'Servicio personalizado',
      'Profesionalidad',
      'Atención al cliente',
    ],
  },

  fr: {
    subtitle:
      'Des services professionnels adaptés à chaque besoin.',
    title:
      'Professionnalisme et attention au client',
    description:
      'Des solutions personnalisées et un service attentif, fiable et professionnel.',
    benefits: [
      'Service personnalisé',
      'Professionnalisme',
      'Accompagnement client',
    ],
  },

  de: {
    subtitle:
      'Professionelle Dienstleistungen für jeden Bedarf.',
    title:
      'Professionalität und Kundenorientierung',
    description:
      'Individuelle Lösungen und ein aufmerksamer, zuverlässiger und professioneller Service.',
    benefits: [
      'Individueller Service',
      'Professionalität',
      'Kundenbetreuung',
    ],
  },
},
};

const effectiveCategory =
  categoriaUrl ||
  data.category ||
  'generic';

const categoryGroup =
  categoryContentMap[effectiveCategory] ||
  categoryContentMap.generic;

const categoryContent =
  categoryGroup[currentLang] ||
  categoryGroup.it ||
  categoryGroup;

// HERO

if (businessNameElement) {
  businessNameElement.textContent =
    nomeUrl.trim() ||
    data.business?.name?.trim() ||
    '';
}

if (businessTaglineElement) {
  const tagline =
    businessSlug || isGeneratedProfile
      ? ''
      : data.business?.tagline?.trim() || '';

  businessTaglineElement.textContent =
    tagline;

  businessTaglineElement.style.display =
    tagline ? '' : 'none';
}

if (businessSubtitleElement) {
  const subtitle =
    (isGeneratedProfile || businessSlug)
      ? (
          descrizioneUrl.trim() ||
          data.business?.subtitle?.trim() ||
          categoryContent.subtitle ||
          ''
        )
      : (
          categoryContent.subtitle ||
          ''
        );

  businessSubtitleElement.textContent =
    subtitle;

  businessSubtitleElement.style.display =
    subtitle ? '' : 'none';
}

if (aboutLabel) {
  aboutLabel.textContent = t.about;
}

if (whyChooseUsTitle) {
  whyChooseUsTitle.textContent = t.whyChooseUs;
}

if (servicesLabel) {
  servicesLabel.textContent = t.services;
}

if (servicesSubtitle) {
  servicesSubtitle.textContent = t.servicesSubtitle;
}

if (galleryLabel) {
  galleryLabel.textContent = t.gallery;
}

if (gallerySubtitle) {
  gallerySubtitle.textContent = t.gallerySubtitle;
}

if (reviewsLabel) {
  reviewsLabel.textContent = t.reviews;
}

if (reviewsSubtitle) {
  reviewsSubtitle.textContent = t.reviewsSubtitle;
}

if (hoursLabel) {
  hoursLabel.textContent = t.hours;
}

if (hoursSubtitle) {
  hoursSubtitle.textContent = t.hoursSubtitle;
}

if (locationLabel) {
  locationLabel.textContent = t.location;
}

if (locationSubtitle) {
  locationSubtitle.textContent = t.locationSubtitle;
}

if (mapsLink) {
  mapsLink.textContent = t.openMaps;
}

if (contactsLabel) {
  contactsLabel.textContent = t.contacts;
}

if (phoneTitle) {
  phoneTitle.textContent = t.phone;
}

if (whatsappText) {
  whatsappText.textContent = t.whatsappWrite;
}

if (emailTitle) {
  emailTitle.textContent = t.email;
}

if (websiteTitle) {
  websiteTitle.textContent = t.website;
}

if (onlineLabel) {
  onlineLabel.textContent = t.onlinePresence;
}

if (socialTitle) {
  socialTitle.textContent = t.social;
}

if (platformsTitle) {
  platformsTitle.textContent = t.platforms;
}

if (shareLabel) {
  shareLabel.textContent = t.share;
}

if (shareTitle) {
  shareTitle.textContent = t.shareTitle;
}

if (shareText) {
  shareText.textContent = t.shareText;
}

if (shareButton) {
  shareButton.textContent = t.sharePage;
}

if (saveContactButton) {
  saveContactButton.textContent = t.saveContact;
}

if (footerRights) {
  footerRights.textContent = t.rights;
}

if (aboutTitle) {
  aboutTitle.textContent =
    categoryContent.title;
}

if (aboutDescription) {
  aboutDescription.textContent =
    (isGeneratedProfile || businessSlug)
      ? (data.description?.trim() || categoryContent.description)
      : categoryContent.description;
}

if (aboutBenefits) {
  aboutBenefits.innerHTML = '';

  categoryContent.benefits.forEach(
    (benefit) => {
      const item =
        document.createElement('li');

      item.textContent = benefit;

      aboutBenefits.appendChild(item);
    }
  );
}

// TELEFONO
      const phone =
      telefonoUrl.trim() ||
      data.phone?.trim() ||
      data.contacts?.phone?.trim() ||
      '';

    if (phoneCard && phoneText) {
      if (phone) {
        phoneText.textContent = phone;

        phoneCard.href =
          `tel:${phone.replace(/\s+/g, '')}`;

        phoneCard.style.display = '';
      } else {
        phoneCard.style.display = 'none';
      }
    }

    // WHATSAPP
     const whatsapp =
     whatsappUrl.trim() ||
     data.whatsapp?.trim() ||
     data.contacts?.whatsapp?.trim() ||
     '';

    if (whatsappCard && whatsappText) {
      if (whatsapp) {
        const whatsappNumber =
          whatsapp.replace(/\D/g, '');

        whatsappText.textContent =
           t.whatsappWrite;

        whatsappCard.href =
          `https://wa.me/${whatsappNumber}`;

        whatsappCard.target = '_blank';
        whatsappCard.rel =
          'noopener noreferrer';

        whatsappCard.style.display = '';
      } else {
        whatsappCard.style.display = 'none';
      }
    }

    // EMAIL
       const email =
       emailUrl.trim() ||
       data.email?.trim() ||
       data.contacts?.email?.trim() ||
       '';

    if (emailCard && emailText) {
      if (email) {
        emailText.textContent = email;
        emailCard.href = `mailto:${email}`;
        emailCard.style.display = '';
      } else {
        emailCard.style.display = 'none';
      }
    }

    // SITO WEB
    const website =
    sitoUrl.trim() ||
    data.website?.trim() ||
    data.contacts?.website?.trim() ||
    '';

    if (websiteCard && websiteText) {
      if (website) {
        const websiteUrl =
          website.startsWith('http://') ||
          website.startsWith('https://')
            ? website
            : `https://${website}`;

        websiteText.textContent =
          website.replace(/^https?:\/\//, '');

        websiteCard.href = websiteUrl;
        websiteCard.target = '_blank';
        websiteCard.rel =
          'noopener noreferrer';

        websiteCard.style.display = '';
      } else {
        websiteCard.style.display = 'none';
      }
    }

    const hasContacts =
  phone !== '' ||
  whatsapp !== '' ||
  email !== '' ||
  website !== '';

if (contactsSection) {
  contactsSection.style.display =
    hasContacts ? '' : 'none';
}

    // REVIEWS
const reviews = data.reviews || {};

if (
  reviewsSection &&
  reviewsCard &&
  reviewsScore &&
  reviewsCount &&
  reviewsProvider
) {
  if (isGeneratedProfile || businessSlug) {

    // Pagina reale generata dalla app
   const reviewsLink =
  reviewsUrl.trim() ||
  data.googleReviews?.trim() ||
  '';

   if (reviewsLink) {
      reviewsCard.href = reviewsLink;
      reviewsCard.target = '_blank';
      reviewsCard.rel = 'noopener noreferrer';

      reviewsScore.textContent = '';
      reviewsCount.textContent =
      t.readGoogleReviews;
      reviewsProvider.textContent = 'Google';

      reviewsSection.style.display = '';
      reviewsCard.style.display = '';
    } else {
      reviewsSection.style.display = 'none';
    }
  } else {
    
    // Pagina dimostrativa
    if (reviews.enabled) {
      reviewsScore.textContent =
        reviews.score || '';

      reviewsCount.textContent =
  reviews.count
    ? `${reviews.count} ${t.reviewsWord}`
    : '';

      reviewsProvider.textContent =
        reviews.provider || 'Google';

      if (reviews.link) {
        reviewsCard.href = reviews.link;
        reviewsCard.target = '_blank';
        reviewsCard.rel =
          'noopener noreferrer';
      }

      reviewsSection.style.display = '';
      reviewsCard.style.display = '';
    } else {
      reviewsSection.style.display = 'none';
    }
  }
}

   // MAPS
const location = data.location || {};

const businessLocationName =
  nomeUrl ||
  location.businessName?.trim() ||
  '';

const address =
  mapsUrl.trim() ||
  data.googleMaps?.trim() ||
  location.address?.trim() ||
  '';

const googleMapsLink =
  address
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
    : isGeneratedProfile
      ? ''
      : location.mapsLink?.trim() || '';

if (locationBusinessName) {
  locationBusinessName.textContent =
    businessLocationName;
}

if (locationAddress) {
  locationAddress.textContent =
    address;
}

if (mapsLink) {
  if (googleMapsLink) {
    mapsLink.href = googleMapsLink;
    mapsLink.target = '_blank';
    mapsLink.rel =
      'noopener noreferrer';

    mapsLink.style.cursor =
      'pointer';

    mapsLink.style.display = '';
  } else {
    mapsLink.removeAttribute('href');
    mapsLink.style.cursor = 'default';
    mapsLink.style.display = 'none';
  }
}

if (googleMapFrame) {
  if (address) {
    googleMapFrame.src =
      `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

    googleMapFrame.style.display = '';
  } else {
    googleMapFrame.style.display = 'none';
  }
}

if (locationSection) {
  locationSection.style.display =
    address ? '' : 'none';
}

const social = {
  instagram:
    instagramUrl.trim() ||
    data.instagram?.trim() ||
    data.social?.instagram?.trim() ||
    '',

  facebook:
    facebookUrl.trim() ||
    data.facebook?.trim() ||
    data.social?.facebook?.trim() ||
    '',

  tiktok:
    tiktokUrl.trim() ||
    data.tiktok?.trim() ||
    data.social?.tiktok?.trim() ||
    '',

  youtube:
    youtubeUrl.trim() ||
    data.youtube?.trim() ||
    data.social?.youtube?.trim() ||
    '',

  linkedin:
    linkedinUrl.trim() ||
    data.linkedin?.trim() ||
    data.social?.linkedin?.trim() ||
    '',

  x:
    xUrl.trim() ||
    data.x?.trim() ||
    data.social?.x?.trim() ||
    '',
};

function setSocialLink(
  element,
  value,
  platform = ''
) {
  if (!element) return;

  const text =
    (value || '').trim();

  if (!text) {
    element.style.display = 'none';
    return;
  }

  let url = text;

  if (
    !url.startsWith('http://') &&
    !url.startsWith('https://')
  ) {
    const username =
      url.replace(/^@/, '');

    const platformUrls = {
      instagram:
        `https://www.instagram.com/${username}`,
      facebook:
        `https://www.facebook.com/${username}`,
      tiktok:
        `https://www.tiktok.com/@${username}`,
      youtube:
        `https://www.youtube.com/@${username}`,
      linkedin:
        `https://www.linkedin.com/in/${username}`,
      x:
        `https://x.com/${username}`,
    };

    url =
      platformUrls[platform] ||
      `https://${username}`;
  }

  element.href = url;
  element.target = '_blank';
  element.rel = 'noopener noreferrer';
  element.style.display = '';
}

setSocialLink(
  instagramLink,
  social.instagram,
  'instagram'
);

setSocialLink(
  facebookLink,
  social.facebook,
  'facebook'
);

setSocialLink(
  tiktokLink,
  social.tiktok,
  'tiktok'
);

setSocialLink(
  youtubeLink,
  social.youtube,
  'youtube'
);

setSocialLink(
  linkedinLink,
  social.linkedin,
  'linkedin'
);

setSocialLink(
  xLink,
  social.x,
  'x'
);

const hasSocialLinks =
  Object.values(social).some(
    (value) => value.trim() !== ''
  );

if (socialTitle) {
  socialTitle.style.display =
    hasSocialLinks ? '' : 'none';
}

if (socialLinksContainer) {
  socialLinksContainer.style.display =
    hasSocialLinks ? '' : 'none';
}

const platforms = {
  booking:
    bookingUrl.trim() ||
    data.booking?.trim() ||
    data.platforms?.booking?.trim() ||
    '',

  tripadvisor:
    tripadvisorUrl.trim() ||
    data.tripadvisor?.trim() ||
    data.platforms?.tripadvisor?.trim() ||
    '',

  trivago:
    data.trivago?.trim() ||
    '',


  mioDottore:
    data.mioDottore?.trim() ||
    '',

  glovo:
    data.glovo?.trim() ||
    '',

  justEat:
    data.justEat?.trim() ||
    '',
    
 
};

setSocialLink(
  bookingLink,
  platforms.booking
);

setSocialLink(
  tripadvisorLink,
  platforms.tripadvisor
);

setSocialLink(
  trivagoLink,
  platforms.trivago
);

setSocialLink(
  mioDottoreLink,
  platforms.mioDottore
);

setSocialLink(
  glovoLink,
  platforms.glovo
);

setSocialLink(
  justEatLink,
  platforms.justEat
);


const hasPlatforms =
  Object.values(platforms).some(
    (value) => value.trim() !== ''
  );

if (platformsTitle) {
  const hasDelivery =
    platforms.glovo.trim() !== '' ||
    platforms.justEat.trim() !== '';

  platformsTitle.textContent =
    hasDelivery ? t.delivery : t.platforms;
}

if (platformsGroup) {
  platformsGroup.style.display =
    hasPlatforms ? '' : 'none';
}

if (onlineSection) {
  onlineSection.style.display =
    hasSocialLinks || hasPlatforms
      ? ''
      : 'none';
}

const servicesJsonUrl =
  params.get('servicesJson') || '';

let services = [];

if (Array.isArray(data.services)) {
  services = data.services;
} else if (data.servicesJson) {
  try {
    const decodedServices =
      JSON.parse(data.servicesJson);

    if (Array.isArray(decodedServices)) {
      services = decodedServices;
    }
  } catch (error) {
    console.error(
      'Errore nella lettura dei servizi Supabase:',
      error
    );
  }
}

if (servicesJsonUrl) {
  try {
    const decodedServices =
      JSON.parse(servicesJsonUrl);

    if (Array.isArray(decodedServices)) {
      services = decodedServices;
    }
  } catch (error) {
    console.error(
      'Errore nella lettura dei servizi:',
      error
    );
  }
}

    const demoServicesMap = {
        hairdresser: {
              it: [
      {
        icon: '✂️',
        title: 'Taglio Uomo',
        description:
          'Tagli moderni, classici e personalizzati per ogni stile.',
      },
      {
        icon: '💇‍♀️',
        title: 'Taglio Donna',
        description:
          'Tagli su misura, piega e consulenza per valorizzare il viso.',
      },
      {
        icon: '🎨',
        title: 'Colore e Trattamenti',
        description:
          'Colorazioni professionali, trattamenti nutrienti e cura del capello.',
      },
     ],
         en: [
      {
        icon: '✂️',
        title: 'Men’s Haircut',
        description:
          'Modern, classic and personalized cuts for every style.',
      },
      {
        icon: '💇‍♀️',
        title: 'Women’s Haircut',
        description:
          'Tailored cuts, styling and consultation to enhance your features.',
      },
      {
        icon: '🎨',
        title: 'Color and Treatments',
        description:
          'Professional coloring, nourishing treatments and hair care.',
      },
     ],
         es: [
      {
        icon: '✂️',
        title: 'Corte de Hombre',
        description:
          'Cortes modernos, clásicos y personalizados para cada estilo.',
      },
      {
        icon: '💇‍♀️',
        title: 'Corte de Mujer',
        description:
          'Cortes a medida, peinado y asesoramiento para realzar el rostro.',
      },
      {
        icon: '🎨',
        title: 'Color y Tratamientos',
        description:
          'Coloraciones profesionales, tratamientos nutritivos y cuidado del cabello.',
      },
     ],
         fr: [
      {
        icon: '✂️',
        title: 'Coupe Homme',
        description:
          'Coupes modernes, classiques et personnalisées pour chaque style.',
      },
      {
        icon: '💇‍♀️',
        title: 'Coupe Femme',
        description:
          'Coupes sur mesure, coiffage et conseils pour mettre le visage en valeur.',
      },
      {
        icon: '🎨',
        title: 'Couleur et Soins',
        description:
          'Colorations professionnelles, soins nourrissants et entretien des cheveux.',
      },
     ],
         de: [
      {
        icon: '✂️',
        title: 'Herrenhaarschnitt',
        description:
          'Moderne, klassische und individuelle Schnitte für jeden Stil.',
      },
      {
        icon: '💇‍♀️',
        title: 'Damenhaarschnitt',
        description:
          'Individuelle Schnitte, Styling und Beratung zur Betonung der Gesichtszüge.',
      },
      {
        icon: '🎨',
        title: 'Farbe und Behandlungen',
        description:
          'Professionelle Colorationen, pflegende Behandlungen und Haarpflege.',
      },
     ],
    },
  };

  if (
  !isGeneratedProfile &&
  !businessSlug &&
  demoServicesMap[effectiveCategory]
) {
  services =
    demoServicesMap[effectiveCategory][currentLang] ||
    demoServicesMap[effectiveCategory].it;
}

if (servicesGrid) {
  servicesGrid.innerHTML = '';

  services.forEach((service) => {
    const serviceCard =
      document.createElement('div');

    serviceCard.className =
      'service-card';

    const serviceIcon =
      document.createElement('div');

    serviceIcon.className =
      'service-icon';

const category =
  (data.category || '').toLowerCase();

let defaultServiceIcon = '🛠️';

if (
  category === 'ristorante' ||
  category === 'pizzeria' ||
  category === 'bar'
) {
  defaultServiceIcon = '🍽️';

} else if (
  category === 'hotel' ||
  category === 'b&b'
) {
  defaultServiceIcon = '🏨';

} else if (
  category === 'studio dentistico'
) {
  defaultServiceIcon = '🦷';

} else if (
  category === 'studio medico'
) {
  defaultServiceIcon = '🩺';

} else if (
  category === 'parrucchiere' ||
  category === 'barbiere'
) {
  defaultServiceIcon = '✂️';

} else if (
  category === 'estetista'
) {
  defaultServiceIcon = '✨';

} else if (
  category === 'palestra'
) {
  defaultServiceIcon = '🏋️';

} else if (
  category === 'giardiniere'
) {
  defaultServiceIcon = '🌿';

} else if (
  category === 'avvocato' ||
  category === 'notaio'
) {
  defaultServiceIcon = '⚖️';

} else if (
  category === 'commercialista'
) {
  defaultServiceIcon = '📊';

} else if (
  category === 'agenzia immobiliare'
) {
  defaultServiceIcon = '🏠';

} else if (
  category === 'negozio'
) {
  defaultServiceIcon = '🛍️';

} else if (
  category.startsWith('altro -')
) {
  defaultServiceIcon = '⭐';
}

serviceIcon.textContent =
  service.icon || defaultServiceIcon;

    const serviceTitle =
      document.createElement('h3');

    serviceTitle.textContent =
      service.title || '';

    const serviceDescription =
      document.createElement('p');

    serviceDescription.textContent =
      service.description || '';

let mainAction =
  data.mainAction || {};

  if (
  !isGeneratedProfile &&
  !businessSlug &&
  mainAction.text === 'Prenota ora'
) {
  mainAction = {
    ...mainAction,
    text: t.bookNow,
  };
}

if (isGeneratedProfile || businessSlug) {
  const selectedAction =
    data.primaryAction?.trim() ||
    t.bookNow;

  const whatsappNumber =
    whatsapp.replace(/\D/g, '');

  const phoneNumber =
    phone.replace(/\s+/g, '');

  const websiteUrl =
    website
      ? (
          website.startsWith('http://') ||
          website.startsWith('https://')
            ? website
            : `https://${website}`
        )
      : '';

  switch (selectedAction) {
    case 'Chiama ora':
      mainAction = phoneNumber
        ? {
            text: 'Chiama ora',
            link: `tel:${phoneNumber}`,
          }
        : {};
      break;

    case 'WhatsApp':
      mainAction = whatsappNumber
        ? {
            text: 'WhatsApp',
            link:
              `https://wa.me/${whatsappNumber}`,
          }
        : {};
      break;

    case 'Visita il sito':
      mainAction = websiteUrl
        ? {
            text: 'Visita il sito',
            link: websiteUrl,
          }
        : {};
      break;

    case 'Richiedi preventivo':
      mainAction = whatsappNumber
        ? {
            text: 'Richiedi preventivo',
            link:
              `https://wa.me/${whatsappNumber}`,
          }
        : phoneNumber
          ? {
              text: 'Richiedi preventivo',
              link: `tel:${phoneNumber}`,
            }
          : {};
      break;

    case 'Richiedi appuntamento':
      mainAction = whatsappNumber
        ? {
            text: 'Richiedi appuntamento',
            link:
              `https://wa.me/${whatsappNumber}`,
          }
        : phoneNumber
          ? {
              text: 'Richiedi appuntamento',
              link: `tel:${phoneNumber}`,
            }
          : {};
      break;

    case 'Contattaci':
      mainAction = whatsappNumber
        ? {
            text: 'Contattaci',
            link:
              `https://wa.me/${whatsappNumber}`,
          }
        : phoneNumber
          ? {
              text: 'Contattaci',
              link: `tel:${phoneNumber}`,
            }
          : {};
      break;

    case 'Scopri di più':
      mainAction = websiteUrl
        ? {
            text: 'Scopri di più',
            link: websiteUrl,
          }
        : {};
      break;

    default:
      mainAction = whatsappNumber
        ? {
            text: selectedAction,
            link:
              `https://wa.me/${whatsappNumber}`,
          }
        : phoneNumber
          ? {
              text: selectedAction,
              link: `tel:${phoneNumber}`,
            }
          : {};
  }
}

    const serviceButton =
      document.createElement('a');

    serviceButton.className =
      'service-link';

    serviceButton.textContent =
      mainAction.text || '';

    if (mainAction.link) {
      serviceButton.href =
        mainAction.link;

      serviceButton.target =
        '_blank';

      serviceButton.rel =
        'noopener noreferrer';
    } else {
      serviceButton.style.display =
        'none';
    }

    serviceCard.appendChild(
      serviceIcon
    );

    serviceCard.appendChild(
      serviceTitle
    );

    serviceCard.appendChild(
      serviceDescription
    );

    serviceCard.appendChild(
      serviceButton
    );

    servicesGrid.appendChild(
      serviceCard
    );
  });
}

if (servicesSection) {
  servicesSection.style.display =
    services.length > 0 ? '' : 'none';
}

let gallery = [];

if (Array.isArray(data.gallery)) {
  gallery = data.gallery;
} else if (data.galleryJson) {
  try {
    const decodedGallery =
      JSON.parse(data.galleryJson);

    if (Array.isArray(decodedGallery)) {
      gallery = decodedGallery;
    }
  } catch (error) {
    console.error(
      'Errore nella lettura della gallery Supabase:',
      error
    );
  }
}
if (galleryJsonUrl) {
  try {
    const decodedGallery =
      JSON.parse(galleryJsonUrl);

    if (Array.isArray(decodedGallery)) {
      gallery = decodedGallery;
    }
  } catch (error) {
    console.error(
      'Errore nella lettura della gallery:',
      error
    );
  }
}

if (gallerySection && galleryGrid) {
  galleryGrid.innerHTML = '';

  if (gallery.length > 0) {
    gallery.forEach((imagePath, index) => {
      const galleryItem =
        document.createElement('div');

      galleryItem.className =
        'gallery-item';

      const galleryImage =
        document.createElement('img');

      galleryImage.src = imagePath;

      galleryImage.alt =
        `${t.photo} ${index + 1} ${t.of} ${data.business?.name || ''}`;

      galleryImage.loading =
        'lazy';

      galleryItem.appendChild(
        galleryImage
      );

      galleryGrid.appendChild(
        galleryItem
      );
    });

    gallerySection.style.display = '';
  } else {
    gallerySection.style.display = 'none';
  }
}

const hoursJsonUrl =
  params.get('hoursJson') || '';

let hours = {};

if (
  data.hours &&
  typeof data.hours === 'object'
) {
  hours = data.hours;
} else if (data.hoursJson) {
  try {
    const decodedHours =
      JSON.parse(data.hoursJson);

    if (
      decodedHours &&
      typeof decodedHours === 'object'
    ) {
      hours = decodedHours;
    }
  } catch (error) {
    console.error(
      'Errore nella lettura degli orari Supabase:',
      error
    );
  }
}

if (hoursJsonUrl) {
  try {
    const decodedHours =
      JSON.parse(hoursJsonUrl);

    if (
      decodedHours &&
      typeof decodedHours === 'object'
    ) {
      hours = decodedHours;
    }
  } catch (error) {
    console.error(
      'Errore nella lettura degli orari:',
      error
    );
  }
}

const days = [
  ['monday', t.monday],
  ['tuesday', t.tuesday],
  ['wednesday', t.wednesday],
  ['thursday', t.thursday],
  ['friday', t.friday],
  ['saturday', t.saturday],
  ['sunday', t.sunday],
];

if (hoursSection && hoursCard) {
  hoursCard.innerHTML = '';

  const availableDays = days.filter(
    ([key]) => hours[key]
  );

  if (availableDays.length > 0) {
    availableDays.forEach(([key, label]) => {
      const hourRow =
        document.createElement('div');

      hourRow.className =
        'hour-row';

      const dayName =
        document.createElement('span');

      dayName.textContent =
        label;

      const dayHours =
        document.createElement('strong');

      const daySchedule =
        hours[key];

      let value = '';
      let isClosed = false;

      if (
        typeof daySchedule === 'string'
      ) {
        const normalizedValue =
          daySchedule.trim().toLowerCase();

        isClosed =
          normalizedValue === 'chiuso';

        value =
          isClosed
            ? t.closed
            : daySchedule.trim();

      } else if (
        daySchedule &&
        typeof daySchedule === 'object'
      ) {
        if (
          daySchedule.open === false
        ) {
          value = t.closed;
          isClosed = true;

        } else if (
          daySchedule.type === 'split'
        ) {
          value =
            `${daySchedule.start1 || ''} - ${daySchedule.end1 || ''}` +
            ` / ${daySchedule.start2 || ''} - ${daySchedule.end2 || ''}`;

        } else {
          value =
            `${daySchedule.start1 || ''} - ${daySchedule.end1 || ''}`;
        }
      }

      dayHours.textContent =
        value;

      if (isClosed) {
        dayHours.className =
          'closed';
      }

      hourRow.appendChild(
        dayName
      );

      hourRow.appendChild(
        dayHours
      );

      hoursCard.appendChild(
        hourRow
      );
    });

    hoursSection.style.display = '';

  } else {
    hoursSection.style.display = 'none';
  }
}

console.log(
  'Dati JSON caricati:',
  data
);

   // CONDIVIDI PAGINA

if (shareButton) {
  shareButton.addEventListener(
    'click',
    async (event) => {
      event.preventDefault();

      const shareTitle =
        nomeUrl ||
        data.business?.name ||
        'B-M Business';

      const shareData = {
        title: shareTitle,
        text: `${t.discover} ${shareTitle}`,
        url: window.location.href,
      };

      try {
        if (navigator.share) {
          await navigator.share(
            shareData
          );
        } else if (
          navigator.clipboard
        ) {
          await navigator.clipboard.writeText(
            window.location.href
          );

          const originalText =
            shareButton.textContent;

          shareButton.textContent =
            t.linkCopied;

          setTimeout(() => {
            shareButton.textContent =
              originalText;
          }, 2000);

        } else {
          window.prompt(
            'Copia questo link:',
            window.location.href
          );
        }
      } catch (error) {
        if (
          error.name !== 'AbortError'
        ) {
          console.error(
            'Errore durante la condivisione:',
            error
          );
        }
      }
    }
  );
}

// SALVA CONTATTO VCARD
if (saveContactButton) {
  const contactName =
    nomeUrl ||
    data.business?.name ||
    '';

  const contactPhone =
    phone || whatsapp || '';

  const hasContactData =
    contactPhone ||
    email ||
    website ||
    address;

  if (
  (isGeneratedProfile || businessSlug) &&
  contactName &&
  hasContactData
) {
  
    saveContactButton.style.display = '';

    saveContactButton.addEventListener(
      'click',
      (event) => {
        event.preventDefault();

        function escapeVCard(value) {
          return String(value || '')
            .replace(/\\/g, '\\\\')
            .replace(/\n/g, '\\n')
            .replace(/;/g, '\\;')
            .replace(/,/g, '\\,');
        }

        const vCardLines = [
          'BEGIN:VCARD',
          'VERSION:3.0',
          `FN:${escapeVCard(contactName)}`,
          `ORG:${escapeVCard(contactName)}`,
        ];

        if (contactPhone) {
          vCardLines.push(
            `TEL;TYPE=CELL:${escapeVCard(contactPhone)}`
          );
        }

        if (email) {
          vCardLines.push(
            `EMAIL;TYPE=INTERNET:${escapeVCard(email)}`
          );
        }

        if (website) {
          vCardLines.push(
            `URL;TYPE=WORK:${escapeVCard(website)}`
          );
        }

        if (address) {
          vCardLines.push(
            `ADR;TYPE=WORK:;;${escapeVCard(address)};;;;`
          );
        }

        vCardLines.push(
          `URL:${escapeVCard(window.location.href)}`
        );

        if (descrizioneUrl) {
          vCardLines.push(
            `NOTE:${escapeVCard(descrizioneUrl)}`
          );
        }

        vCardLines.push('END:VCARD');

        const vCardContent =
          vCardLines.join('\r\n');

        const blob = new Blob(
          [vCardContent],
          {
            type:
              'text/vcard;charset=utf-8',
          }
        );

        const downloadUrl =
          URL.createObjectURL(blob);

        const downloadLink =
          document.createElement('a');

        const safeFileName =
          contactName
            .replace(
              /[^a-zA-Z0-9À-ÿ_-]/g,
              '_'
            )
            .replace(/_+/g, '_');

        downloadLink.href = downloadUrl;
        downloadLink.download =
          `${safeFileName || 'contatto'}.vcf`;

        document.body.appendChild(
          downloadLink
        );

        downloadLink.click();
        downloadLink.remove();

        setTimeout(() => {
          URL.revokeObjectURL(downloadUrl);
        }, 1000);
      }
    );
  } else {
    saveContactButton.style.display =
      'none';
  }
}

    console.log(
      'Dati ricevuti dall’URL:',
      {
        nomeUrl,
        descrizioneUrl,
        telefonoUrl,
        emailUrl,
        sitoUrl,
        hoursJsonUrl,
      }
    );
  } catch (error) {
    console.error(
      'Errore nel caricamento dei dati:',
      error
    );
  }
}

loadBusinessData();