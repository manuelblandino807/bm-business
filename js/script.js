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
    foodServicesSubtitle: 'Le nostre proposte, pensate per ogni gusto',
    artisanServicesSubtitle: 'Soluzioni professionali per ogni esigenza',
    professionalServicesSubtitle: 'Soluzioni professionali pensate per ogni esigenza',
    fitnessServicesSubtitle: 'Servizi pensati per ogni obiettivo',
    natureServicesSubtitle: 'Soluzioni professionali per la cura dei tuoi spazi verdi',
    hospitalityServicesSubtitle: 'Servizi pensati per rendere speciale ogni soggiorno',
    retailServicesSubtitle: 'Prodotti e servizi pensati per ogni esigenza',
    genericServicesSubtitle: 'Soluzioni pensate per ogni esigenza',   
    gallery: 'I nostri lavori',
    gallerySubtitle: 'Alcuni dei nostri risultati',
    productsGallery: 'I nostri prodotti',
    productsGallerySubtitle: 'Ecco alcuni dei nostri prodotti',
    menu: 'Menù',
    viewMenu: '📄 Visualizza menù',   
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
    foodServicesSubtitle: 'Our proposals, designed for every taste',
    artisanServicesSubtitle: 'Professional solutions for every need',
    professionalServicesSubtitle: 'Professional solutions tailored to every need',
    fitnessServicesSubtitle: 'Services designed for every goal',
    natureServicesSubtitle: 'Professional solutions for the care of your green spaces',
    hospitalityServicesSubtitle: 'Services designed to make every stay special',
    retailServicesSubtitle: 'Products and services for every need',
    genericServicesSubtitle: 'Solutions designed for every need',
    gallery: 'Our work',
    gallerySubtitle: 'Some of our results',
    productsGallery: 'Our products',
    productsGallerySubtitle: 'Discover some of our products',
    menu: 'Menu',
    viewMenu: '📄 View menu', 
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
    foodServicesSubtitle: 'Nuestras propuestas, pensadas para todos los gustos',
    artisanServicesSubtitle: 'Soluciones profesionales para cada necesidad',
    professionalServicesSubtitle: 'Soluciones profesionales pensadas para cada necesidad',
    fitnessServicesSubtitle: 'Servicios pensados para cada objetivo',
    natureServicesSubtitle: 'Soluciones profesionales para el cuidado de tus espacios verdes',
    hospitalityServicesSubtitle: 'Servicios pensados para hacer especial cada estancia',
    retailServicesSubtitle: 'Productos y servicios pensados para cada necesidad',
    genericServicesSubtitle: 'Soluciones pensadas para cada necesidad',
    gallery: 'Nuestros trabajos',
    gallerySubtitle: 'Algunos de nuestros resultados',
    productsGallery: 'Nuestros productos',
    productsGallerySubtitle: 'Descubre algunos de nuestros productos',
    menu: 'Menú',
    viewMenu: '📄 Ver menú',
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
    foodServicesSubtitle: 'Nos propositions, pensées pour tous les goûts',
    artisanServicesSubtitle: 'Des solutions professionnelles pour chaque besoin',
    professionalServicesSubtitle: 'Des solutions professionnelles pensées pour chaque besoin',
    fitnessServicesSubtitle: 'Des services pensés pour chaque objectif',
    natureServicesSubtitle: 'Des solutions professionnelles pour l’entretien de vos espaces verts',
    hospitalityServicesSubtitle: 'Des services pensés pour rendre chaque séjour spécial',
    retailServicesSubtitle: 'Des produits et services pensés pour chaque besoin',
    genericServicesSubtitle: 'Des solutions pensées pour chaque besoin',   
    gallery: 'Nos réalisations',
    gallerySubtitle: 'Quelques-uns de nos résultats',
    productsGallery: 'Nos produits',
    productsGallerySubtitle: 'Découvrez quelques-uns de nos produits',
    menu: 'Menu',
    viewMenu: '📄 Voir le menu',
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
    foodServicesSubtitle: 'Unsere Angebote für jeden Geschmack',
    artisanServicesSubtitle: 'Professionelle Lösungen für jeden Bedarf',
    professionalServicesSubtitle: 'Professionelle Lösungen für jeden Bedarf',
    fitnessServicesSubtitle: 'Angebote für jedes Ziel',
    natureServicesSubtitle: 'Professionelle Lösungen für die Pflege Ihrer Grünflächen',
    hospitalityServicesSubtitle: 'Services für einen besonderen Aufenthalt',
    retailServicesSubtitle: 'Produkte und Services für jeden Bedarf',
    genericServicesSubtitle: 'Lösungen für jeden Bedarf',
    gallery: 'Unsere Arbeiten',
    gallerySubtitle: 'Einige unserer Ergebnisse',
    productsGallery: 'Unsere Produkte',
    productsGallerySubtitle: 'Entdecken Sie einige unserer Produkte',
    menu: 'Menü',
    viewMenu: '📄 Menü ansehen',
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

const menuUrl =
  params.get('menuUrl') || '';

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
    'Idraulico': 'plumber',
    'Elettricista': 'electrician',
    'Falegname': 'artisan',
    'Serramentista': 'window-installer',
    'Imbianchino': 'painter',
    'Muratore': 'bricklayer',
    'Giardiniere': 'nature',

    'Ristorante': 'food',
    'Pizzeria': 'food',
    'Bar': 'bar',

    'Officina': 'workshop',
    'Meccanico': 'workshop',
    'Officina / Meccanico': 'workshop',

    'Hotel': 'hospitality',
    'B&B': 'hospitality',

    'Negozio': 'retail',

    'Studio medico': 'medical',
    'Studio dentistico': 'medical',
    'Farmacia': 'pharmacy',

    'Avvocato': 'professional',
    'Commercialista': 'professional',
    'Agenzia immobiliare': 'real-estate',

    'Parrucchiere': 'hairdresser',
    'Barbiere': 'barber',
    'Estetista': 'beauty',
    'Palestra': 'fitness',

    'Ambulante / Mercato': 'market',
    'Trasporti leggeri / Padroncino': 'transport',
    'Ferramenta': 'hardware',
    'Assistenza tecnica / Informatica': 'technology',

    'Associazione': 'association',
    'Impresa di pulizie': 'cleaning',
    'Fotografo': 'photographer',

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
    // Personalizza nome e icona della pagina per l'attività
    const businessPageName =
      nomeUrl.trim() ||
      data.business?.name?.trim() ||
      'B-M Business';

    const businessPageLogo = String(
      data.logoPath ||
      data.logoUrl ||
      data.business?.logo ||
      ''
    ).trim();

    document.title = businessPageName;

    if (businessPageLogo) {
      const favicon =
        document.getElementById('page-favicon');

      const appleTouchIcon =
        document.getElementById('page-apple-touch-icon');

      if (favicon) {
        favicon.href = businessPageLogo;
      }

      if (appleTouchIcon) {
        appleTouchIcon.href = businessPageLogo;
      }
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
    if (
  data.category &&
  !params.get('categoria')
) {
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

if (
  categoriaUrl === 'plumber' ||
  categoriaUrl === 'painter'
) {
  selectedTheme = 'medical';
}

if (
  categoriaUrl === 'electrician' ||
  categoriaUrl === 'window-installer'
) {
  selectedTheme = 'ocean';
}

if (categoriaUrl === 'bricklayer') {
  selectedTheme = 'artisan';
}

if (
  categoriaUrl === 'food' ||
  categoriaUrl === 'bar'
) {
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

if (
  categoriaUrl === 'retail' ||
  categoriaUrl === 'transport'
) {
  selectedTheme = 'retail';
}

if (categoriaUrl === 'market') {
  selectedTheme = 'green-sage';
}

if (categoriaUrl === 'hardware') {
  selectedTheme = 'graphite';
}

if (categoriaUrl === 'technology') {
  selectedTheme = 'ocean';
}

if (categoriaUrl === 'pharmacy') {
  selectedTheme = 'medical';
}

if (categoriaUrl === 'workshop') {
  selectedTheme = 'food';
}

if (categoriaUrl === 'association') {
  selectedTheme = 'ocean';
}

if (categoriaUrl === 'cleaning') {
  selectedTheme = 'beauty';
}

if (categoriaUrl === 'photographer') {
  selectedTheme = 'graphite';
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
  plumber: 'plumber',
  electrician: 'electrician',
  painter: 'painter',
  'window-installer': 'window-installer',
  bricklayer: 'bricklayer',
  pharmacy: 'pharmacy',
  workshop: 'workshop',
  association: 'association',
  cleaning: 'cleaning',
  photographer: 'photographer',
  food: 'food',
  bar: 'bar',
  hospitality: 'hospitality',
  medical: 'medical',
  nature: 'nature',
  beauty: 'beauty',
  fitness: 'fitness',
  retail: 'retail',
  transport: 'transport',
  market: 'market',
  hardware: 'hardware',
  technology: 'technology',
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

pharmacy: {
  it: {
    subtitle:
      'Salute, benessere e consulenza ogni giorno.',
    title:
      'La tua salute, la nostra attenzione',
    description:
      'Farmaci, prodotti per il benessere e consulenza professionale per accompagnarti nella cura e nella prevenzione quotidiana.',
    servicesSubtitle:
      'Servizi dedicati alla salute e al benessere',
    benefits: [
      'Consulenza professionale',
      'Prodotti selezionati',
      'Attenzione alle tue esigenze',
    ],
  },

  en: {
    subtitle:
      'Health, wellness and advice every day.',
    title:
      'Your health, our priority',
    description:
      'Medicines, wellness products and professional advice to support your everyday care and prevention needs.',
    servicesSubtitle:
      'Services dedicated to health and wellness',
    benefits: [
      'Professional advice',
      'Selected products',
      'Attention to your needs',
    ],
  },

  es: {
    subtitle:
      'Salud, bienestar y asesoramiento cada día.',
    title:
      'Tu salud, nuestra prioridad',
    description:
      'Medicamentos, productos para el bienestar y asesoramiento profesional para acompañarte en el cuidado y la prevención diaria.',
    servicesSubtitle:
      'Servicios dedicados a la salud y al bienestar',
    benefits: [
      'Asesoramiento profesional',
      'Productos seleccionados',
      'Atención a tus necesidades',
    ],
  },

  fr: {
    subtitle:
      'Santé, bien-être et conseils au quotidien.',
    title:
      'Votre santé, notre priorité',
    description:
      'Médicaments, produits de bien-être et conseils professionnels pour vous accompagner dans vos soins et votre prévention au quotidien.',
    servicesSubtitle:
      'Des services dédiés à la santé et au bien-être',
    benefits: [
      'Conseils professionnels',
      'Produits sélectionnés',
      'Attention à vos besoins',
    ],
  },

  de: {
    subtitle:
      'Gesundheit, Wohlbefinden und Beratung jeden Tag.',
    title:
      'Ihre Gesundheit, unsere Priorität',
    description:
      'Arzneimittel, Gesundheitsprodukte und professionelle Beratung für Ihre tägliche Vorsorge und Ihr Wohlbefinden.',
    servicesSubtitle:
      'Leistungen für Gesundheit und Wohlbefinden',
    benefits: [
      'Professionelle Beratung',
      'Ausgewählte Produkte',
      'Aufmerksamkeit für Ihre Bedürfnisse',
    ],
  },
},

association: {
  it: {
    subtitle:
      'Insieme per creare valore e nuove opportunità.',
    title:
      'Persone, idee e partecipazione',
    description:
      'Un punto di incontro aperto e accogliente, dove condividere esperienze, sviluppare progetti e costruire nuove opportunità per la comunità.',
    servicesSubtitle:
      'Attività e iniziative per soci e comunità',
    benefits: [
      'Accoglienza e partecipazione',
      'Attività e progetti condivisi',
      'Impegno per la comunità',
    ],
  },

  en: {
    subtitle:
      'Together to create value and new opportunities.',
    title:
      'People, ideas and participation',
    description:
      'An open and welcoming meeting place where people can share experiences, develop projects and create new opportunities for the community.',
    servicesSubtitle:
      'Activities and initiatives for members and the community',
    benefits: [
      'Welcome and participation',
      'Shared activities and projects',
      'Commitment to the community',
    ],
  },

  es: {
    subtitle:
      'Juntos para crear valor y nuevas oportunidades.',
    title:
      'Personas, ideas y participación',
    description:
      'Un punto de encuentro abierto y acogedor donde compartir experiencias, desarrollar proyectos y crear nuevas oportunidades para la comunidad.',
    servicesSubtitle:
      'Actividades e iniciativas para socios y comunidad',
    benefits: [
      'Acogida y participación',
      'Actividades y proyectos compartidos',
      'Compromiso con la comunidad',
    ],
  },

  fr: {
    subtitle:
      'Ensemble pour créer de la valeur et de nouvelles opportunités.',
    title:
      'Personnes, idées et participation',
    description:
      'Un lieu de rencontre ouvert et accueillant pour partager des expériences, développer des projets et créer de nouvelles opportunités pour la communauté.',
    servicesSubtitle:
      'Activités et initiatives pour les membres et la communauté',
    benefits: [
      'Accueil et participation',
      'Activités et projets partagés',
      'Engagement pour la communauté',
    ],
  },

  de: {
    subtitle:
      'Gemeinsam Werte und neue Möglichkeiten schaffen.',
    title:
      'Menschen, Ideen und Beteiligung',
    description:
      'Ein offener und einladender Treffpunkt, um Erfahrungen auszutauschen, Projekte zu entwickeln und neue Möglichkeiten für die Gemeinschaft zu schaffen.',
    servicesSubtitle:
      'Aktivitäten und Initiativen für Mitglieder und Gemeinschaft',
    benefits: [
      'Willkommen und Beteiligung',
      'Gemeinsame Aktivitäten und Projekte',
      'Engagement für die Gemeinschaft',
    ],
  },
},

cleaning: {
  it: {
    subtitle:
      'Pulizie professionali per ambienti curati, igienizzati e accoglienti.',
    title:
      'Pulizia, igiene e attenzione ai dettagli',
    description:
      'Servizi di pulizia affidabili e personalizzati per case, uffici, condomini e attività commerciali.',
    servicesSubtitle:
      'Servizi di pulizia per ogni ambiente',
    benefits: [
      'Interventi personalizzati',
      'Prodotti e attrezzature professionali',
      'Puntualità e affidabilità',
    ],
  },

  en: {
    subtitle:
      'Professional cleaning for tidy, sanitized and welcoming spaces.',
    title:
      'Cleanliness, hygiene and attention to detail',
    description:
      'Reliable and customized cleaning services for homes, offices, apartment buildings and businesses.',
    servicesSubtitle:
      'Cleaning services for every environment',
    benefits: [
      'Customized services',
      'Professional products and equipment',
      'Punctuality and reliability',
    ],
  },

  es: {
    subtitle:
      'Limpieza profesional para espacios cuidados, higienizados y acogedores.',
    title:
      'Limpieza, higiene y atención al detalle',
    description:
      'Servicios de limpieza fiables y personalizados para hogares, oficinas, comunidades y actividades comerciales.',
    servicesSubtitle:
      'Servicios de limpieza para cada espacio',
    benefits: [
      'Servicios personalizados',
      'Productos y equipos profesionales',
      'Puntualidad y fiabilidad',
    ],
  },

  fr: {
    subtitle:
      'Nettoyage professionnel pour des espaces soignés, assainis et accueillants.',
    title:
      'Propreté, hygiène et souci du détail',
    description:
      'Des services de nettoyage fiables et personnalisés pour les maisons, bureaux, copropriétés et locaux commerciaux.',
    servicesSubtitle:
      'Services de nettoyage pour chaque environnement',
    benefits: [
      'Services personnalisés',
      'Produits et équipements professionnels',
      'Ponctualité et fiabilité',
    ],
  },

  de: {
    subtitle:
      'Professionelle Reinigung für gepflegte, hygienische und einladende Räume.',
    title:
      'Sauberkeit, Hygiene und Liebe zum Detail',
    description:
      'Zuverlässige und individuelle Reinigungsleistungen für Wohnungen, Büros, Wohnanlagen und Gewerberäume.',
    servicesSubtitle:
      'Reinigungsleistungen für jeden Bereich',
    benefits: [
      'Individuelle Leistungen',
      'Professionelle Produkte und Ausrüstung',
      'Pünktlichkeit und Zuverlässigkeit',
    ],
  },
},

photographer: {
  it: {
    subtitle:
      'Fotografia professionale per raccontare persone, eventi e attività.',
    title:
      'Immagini autentiche, emozioni da ricordare',
    description:
      'Servizi fotografici personalizzati per ritratti, eventi, aziende e prodotti, curati in ogni dettaglio.',
    servicesSubtitle:
      'Servizi fotografici per ogni occasione',
    benefits: [
      'Stile personalizzato',
      'Attrezzatura professionale',
      'Cura di ogni dettaglio',
    ],
  },

  en: {
    subtitle:
      'Professional photography to tell the story of people, events and businesses.',
    title:
      'Authentic images, emotions to remember',
    description:
      'Customized photography services for portraits, events, businesses and products, with attention to every detail.',
    servicesSubtitle:
      'Photography services for every occasion',
    benefits: [
      'Personalized style',
      'Professional equipment',
      'Attention to every detail',
    ],
  },

  es: {
    subtitle:
      'Fotografía profesional para contar historias de personas, eventos y actividades.',
    title:
      'Imágenes auténticas, emociones para recordar',
    description:
      'Servicios fotográficos personalizados para retratos, eventos, empresas y productos, cuidados en cada detalle.',
    servicesSubtitle:
      'Servicios fotográficos para cada ocasión',
    benefits: [
      'Estilo personalizado',
      'Equipo profesional',
      'Atención a cada detalle',
    ],
  },

  fr: {
    subtitle:
      'Photographie professionnelle pour raconter les personnes, les événements et les activités.',
    title:
      'Des images authentiques, des émotions à retenir',
    description:
      'Des services photographiques personnalisés pour les portraits, événements, entreprises et produits, avec une attention portée à chaque détail.',
    servicesSubtitle:
      'Services photographiques pour chaque occasion',
    benefits: [
      'Style personnalisé',
      'Équipement professionnel',
      'Souci de chaque détail',
    ],
  },

  de: {
    subtitle:
      'Professionelle Fotografie für Menschen, Veranstaltungen und Unternehmen.',
    title:
      'Authentische Bilder, unvergessliche Emotionen',
    description:
      'Individuelle Fotoservices für Porträts, Veranstaltungen, Unternehmen und Produkte mit Liebe zum Detail.',
    servicesSubtitle:
      'Fotoservices für jeden Anlass',
    benefits: [
      'Individueller Stil',
      'Professionelle Ausrüstung',
      'Liebe zum Detail',
    ],
  },
},

workshop: {
  it: {
    subtitle:
      'Manutenzione, riparazioni e assistenza professionale per il tuo veicolo.',
    title:
      'Competenza e sicurezza su strada',
    description:
      'Esperienza, attrezzature professionali e attenzione ai dettagli per mantenere ogni veicolo efficiente, affidabile e sicuro.',
    servicesSubtitle:
      'Servizi professionali per la cura del tuo veicolo',
    benefits: [
      'Diagnosi accurate',
      'Interventi professionali',
      'Affidabilità e puntualità',
    ],
  },

  en: {
    subtitle:
      'Professional maintenance, repairs and assistance for your vehicle.',
    title:
      'Expertise and safety on the road',
    description:
      'Experience, professional equipment and attention to detail to keep every vehicle efficient, reliable and safe.',
    servicesSubtitle:
      'Professional services for your vehicle',
    benefits: [
      'Accurate diagnostics',
      'Professional repairs',
      'Reliability and punctuality',
    ],
  },

  es: {
    subtitle:
      'Mantenimiento, reparaciones y asistencia profesional para tu vehículo.',
    title:
      'Experiencia y seguridad en la carretera',
    description:
      'Experiencia, equipos profesionales y atención al detalle para mantener cada vehículo eficiente, fiable y seguro.',
    servicesSubtitle:
      'Servicios profesionales para el cuidado de tu vehículo',
    benefits: [
      'Diagnósticos precisos',
      'Intervenciones profesionales',
      'Fiabilidad y puntualidad',
    ],
  },

  fr: {
    subtitle:
      'Entretien, réparations et assistance professionnelle pour votre véhicule.',
    title:
      'Expertise et sécurité sur la route',
    description:
      'Expérience, équipements professionnels et souci du détail pour maintenir chaque véhicule performant, fiable et sûr.',
    servicesSubtitle:
      'Des services professionnels pour votre véhicule',
    benefits: [
      'Diagnostics précis',
      'Interventions professionnelles',
      'Fiabilité et ponctualité',
    ],
  },

  de: {
    subtitle:
      'Professionelle Wartung, Reparaturen und Unterstützung für Ihr Fahrzeug.',
    title:
      'Kompetenz und Sicherheit auf der Straße',
    description:
      'Erfahrung, professionelle Ausrüstung und Sorgfalt für ein leistungsfähiges, zuverlässiges und sicheres Fahrzeug.',
    servicesSubtitle:
      'Professionelle Leistungen für Ihr Fahrzeug',
    benefits: [
      'Präzise Diagnose',
      'Professionelle Reparaturen',
      'Zuverlässigkeit und Pünktlichkeit',
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

const categoryContentAliases = {};

const contentCategory =
  categoryContentAliases[effectiveCategory] ||
  effectiveCategory;

const artisanSubcategories = [
  'plumber',
  'electrician',
  'painter',
  'window-installer',
  'bricklayer',
  'workshop',
];

const categoryGroup =
  categoryContentMap[contentCategory] ||
  (
    artisanSubcategories.includes(effectiveCategory)
      ? categoryContentMap.artisan
      : categoryContentMap.generic
  );
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
let subtitleText = t.servicesSubtitle;

if (
  effectiveCategory === 'pharmacy' ||
  effectiveCategory === 'workshop' ||
  effectiveCategory === 'association' ||
  effectiveCategory === 'cleaning' ||
  effectiveCategory === 'photographer'
) {
  subtitleText =
    categoryContent.servicesSubtitle ||
    t.servicesSubtitle;
} else if (effectiveCategory === 'food') {
    subtitleText = t.foodServicesSubtitle;
  } else if (
  effectiveCategory === 'artisan' ||
  artisanSubcategories.includes(effectiveCategory)
) {
  subtitleText = t.artisanServicesSubtitle;
  } else if (
   effectiveCategory === 'professional' ||
   effectiveCategory === 'real-estate' ||
   effectiveCategory === 'technology'
) {
  subtitleText = t.professionalServicesSubtitle;
  } else if (effectiveCategory === 'fitness') {
    subtitleText = t.fitnessServicesSubtitle;
  } else if (effectiveCategory === 'nature') {
    subtitleText = t.natureServicesSubtitle;
  } else if (effectiveCategory === 'hospitality') {
    subtitleText = t.hospitalityServicesSubtitle;
  } else if (
    effectiveCategory === 'retail' ||
    effectiveCategory === 'market' ||
    effectiveCategory === 'hardware'
  ) {
  subtitleText = t.retailServicesSubtitle;
  } else if (
    effectiveCategory === 'generic-1' ||
    effectiveCategory === 'generic-2' ||
    effectiveCategory === 'generic-3' ||
    effectiveCategory === 'generic-4'
  ) {
    subtitleText = t.genericServicesSubtitle;
  }

  servicesSubtitle.textContent = subtitleText;
}

const usesProductGallery =
  effectiveCategory === 'market' ||
  effectiveCategory === 'hardware';

if (galleryLabel) {
  galleryLabel.textContent = usesProductGallery
      ? t.productsGallery
      : t.gallery;
}

if (gallerySubtitle) {
  gallerySubtitle.textContent = usesProductGallery
      ? t.productsGallerySubtitle
      : t.gallerySubtitle;
}

const menuLabel =
  document.getElementById('menu-label');

const menuLinkText =
  document.getElementById('menu-link');

if (menuLabel) {
  menuLabel.textContent = t.menu;
}

if (menuLinkText) {
  menuLinkText.textContent = t.viewMenu;
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

    pharmacy: {
      it: [
        {
          icon: '🩺',
          title: 'Misurazione della pressione',
          description:
            'Controllo della pressione arteriosa eseguito direttamente in farmacia.',
        },
        {
          icon: '🧪',
          title: 'Test e servizi di prevenzione',
          description:
            'Servizi e controlli dedicati alla prevenzione e al monitoraggio della salute.',
        },
        {
          icon: '💊',
          title: 'Prodotti per salute e benessere',
          description:
            'Una selezione di prodotti farmaceutici, integratori e articoli per il benessere.',
        },
        {
          icon: '⚕️',
          title: 'Consulenza farmaceutica',
          description:
            'Consigli professionali e assistenza nella scelta dei prodotti più adatti.',
        },
      ],

      en: [
        {
          icon: '🩺',
          title: 'Blood pressure measurement',
          description:
            'Blood pressure checks carried out directly at the pharmacy.',
        },
        {
          icon: '🧪',
          title: 'Prevention tests and services',
          description:
            'Services and checks dedicated to prevention and health monitoring.',
        },
        {
          icon: '💊',
          title: 'Health and wellness products',
          description:
            'A selection of medicines, supplements and wellness products.',
        },
        {
          icon: '⚕️',
          title: 'Pharmaceutical advice',
          description:
            'Professional advice and assistance in choosing the most suitable products.',
        },
      ],

      es: [
        {
          icon: '🩺',
          title: 'Medición de la presión arterial',
          description:
            'Control de la presión arterial realizado directamente en la farmacia.',
        },
        {
          icon: '🧪',
          title: 'Pruebas y servicios de prevención',
          description:
            'Servicios y controles dedicados a la prevención y al seguimiento de la salud.',
        },
        {
          icon: '💊',
          title: 'Productos para la salud y el bienestar',
          description:
            'Una selección de medicamentos, suplementos y productos para el bienestar.',
        },
        {
          icon: '⚕️',
          title: 'Asesoramiento farmacéutico',
          description:
            'Asesoramiento profesional para elegir los productos más adecuados.',
        },
      ],

      fr: [
        {
          icon: '🩺',
          title: 'Mesure de la tension artérielle',
          description:
            'Contrôle de la tension artérielle effectué directement en pharmacie.',
        },
        {
          icon: '🧪',
          title: 'Tests et services de prévention',
          description:
            'Services et contrôles consacrés à la prévention et au suivi de la santé.',
        },
        {
          icon: '💊',
          title: 'Produits de santé et de bien-être',
          description:
            'Une sélection de médicaments, compléments et produits de bien-être.',
        },
        {
          icon: '⚕️',
          title: 'Conseils pharmaceutiques',
          description:
            'Conseils professionnels pour choisir les produits les mieux adaptés.',
        },
      ],

      de: [
        {
          icon: '🩺',
          title: 'Blutdruckmessung',
          description:
            'Blutdruckkontrolle direkt in der Apotheke.',
        },
        {
          icon: '🧪',
          title: 'Tests und Vorsorgeleistungen',
          description:
            'Leistungen und Kontrollen zur Vorsorge und Überwachung der Gesundheit.',
        },
        {
          icon: '💊',
          title: 'Gesundheits- und Wellnessprodukte',
          description:
            'Eine Auswahl an Arzneimitteln, Nahrungsergänzungsmitteln und Wellnessprodukten.',
        },
        {
          icon: '⚕️',
          title: 'Pharmazeutische Beratung',
          description:
            'Professionelle Beratung bei der Auswahl der passenden Produkte.',
        },
            ],
    },

    workshop: {
      it: [
        {
          icon: '🔧',
          title: 'Tagliando e manutenzione',
          description:
            'Controlli periodici e manutenzione per mantenere il veicolo efficiente e sicuro.',
        },
        {
          icon: '💻',
          title: 'Diagnosi elettronica',
          description:
            'Controllo elettronico professionale per individuare guasti e anomalie.',
        },
        {
          icon: '🚗',
          title: 'Freni e pneumatici',
          description:
            'Controllo e sostituzione di freni e pneumatici per una guida più sicura.',
        },
        {
          icon: '⚙️',
          title: 'Riparazioni meccaniche',
          description:
            'Interventi professionali sul motore e sui principali componenti del veicolo.',
        },
      ],

      en: [
        {
          icon: '🔧',
          title: 'Servicing and maintenance',
          description:
            'Regular checks and maintenance to keep your vehicle efficient and safe.',
        },
        {
          icon: '💻',
          title: 'Electronic diagnostics',
          description:
            'Professional electronic checks to identify faults and malfunctions.',
        },
        {
          icon: '🚗',
          title: 'Brakes and tyres',
          description:
            'Inspection and replacement of brakes and tyres for safer driving.',
        },
        {
          icon: '⚙️',
          title: 'Mechanical repairs',
          description:
            'Professional repairs for the engine and the main vehicle components.',
        },
      ],

      es: [
        {
          icon: '🔧',
          title: 'Revisión y mantenimiento',
          description:
            'Controles periódicos y mantenimiento para mantener el vehículo eficiente y seguro.',
        },
        {
          icon: '💻',
          title: 'Diagnóstico electrónico',
          description:
            'Control electrónico profesional para detectar averías y anomalías.',
        },
        {
          icon: '🚗',
          title: 'Frenos y neumáticos',
          description:
            'Control y sustitución de frenos y neumáticos para una conducción más segura.',
        },
        {
          icon: '⚙️',
          title: 'Reparaciones mecánicas',
          description:
            'Intervenciones profesionales en el motor y los principales componentes del vehículo.',
        },
      ],

      fr: [
        {
          icon: '🔧',
          title: 'Révision et entretien',
          description:
            'Contrôles périodiques et entretien pour maintenir le véhicule performant et sûr.',
        },
        {
          icon: '💻',
          title: 'Diagnostic électronique',
          description:
            'Contrôle électronique professionnel pour identifier les pannes et anomalies.',
        },
        {
          icon: '🚗',
          title: 'Freins et pneumatiques',
          description:
            'Contrôle et remplacement des freins et pneumatiques pour une conduite plus sûre.',
        },
        {
          icon: '⚙️',
          title: 'Réparations mécaniques',
          description:
            'Interventions professionnelles sur le moteur et les principaux composants du véhicule.',
        },
      ],

      de: [
        {
          icon: '🔧',
          title: 'Inspektion und Wartung',
          description:
            'Regelmäßige Kontrollen und Wartung für ein leistungsfähiges und sicheres Fahrzeug.',
        },
        {
          icon: '💻',
          title: 'Elektronische Diagnose',
          description:
            'Professionelle elektronische Prüfung zur Erkennung von Fehlern und Störungen.',
        },
        {
          icon: '🚗',
          title: 'Bremsen und Reifen',
          description:
            'Kontrolle und Austausch von Bremsen und Reifen für mehr Sicherheit.',
        },
        {
          icon: '⚙️',
          title: 'Mechanische Reparaturen',
          description:
            'Professionelle Reparaturen am Motor und an den wichtigsten Fahrzeugkomponenten.',
        },
            ],
    },

    association: {
      it: [
        {
          icon: '📅',
          title: 'Eventi e incontri',
          description:
            'Incontri, appuntamenti e occasioni di partecipazione aperti ai soci e alla comunità.',
        },
        {
          icon: '🤝',
          title: 'Progetti e iniziative',
          description:
            'Attività condivise per sviluppare idee, collaborazioni e nuove opportunità.',
        },
        {
          icon: '👥',
          title: 'Supporto ai soci',
          description:
            'Informazioni, assistenza e servizi dedicati alle esigenze degli associati.',
        },
        {
          icon: '❤️',
          title: 'Volontariato e comunità',
          description:
            'Iniziative solidali e attività concrete a sostegno del territorio e delle persone.',
        },
      ],

      en: [
        {
          icon: '📅',
          title: 'Events and meetings',
          description:
            'Meetings, appointments and opportunities for members and the community to participate.',
        },
        {
          icon: '🤝',
          title: 'Projects and initiatives',
          description:
            'Shared activities to develop ideas, collaborations and new opportunities.',
        },
        {
          icon: '👥',
          title: 'Member support',
          description:
            'Information, assistance and services dedicated to the needs of members.',
        },
        {
          icon: '❤️',
          title: 'Volunteering and community',
          description:
            'Charitable initiatives and practical activities supporting people and the local area.',
        },
      ],

      es: [
        {
          icon: '📅',
          title: 'Eventos y encuentros',
          description:
            'Encuentros, citas y oportunidades de participación para socios y comunidad.',
        },
        {
          icon: '🤝',
          title: 'Proyectos e iniciativas',
          description:
            'Actividades compartidas para desarrollar ideas, colaboraciones y nuevas oportunidades.',
        },
        {
          icon: '👥',
          title: 'Apoyo a los socios',
          description:
            'Información, asistencia y servicios dedicados a las necesidades de los asociados.',
        },
        {
          icon: '❤️',
          title: 'Voluntariado y comunidad',
          description:
            'Iniciativas solidarias y actividades de apoyo al territorio y a las personas.',
        },
      ],

      fr: [
        {
          icon: '📅',
          title: 'Événements et rencontres',
          description:
            'Rencontres, rendez-vous et occasions de participation pour les membres et la communauté.',
        },
        {
          icon: '🤝',
          title: 'Projets et initiatives',
          description:
            'Activités partagées pour développer des idées, des collaborations et de nouvelles opportunités.',
        },
        {
          icon: '👥',
          title: 'Soutien aux membres',
          description:
            'Informations, assistance et services consacrés aux besoins des adhérents.',
        },
        {
          icon: '❤️',
          title: 'Bénévolat et communauté',
          description:
            'Initiatives solidaires et activités concrètes au service du territoire et des personnes.',
        },
      ],

      de: [
        {
          icon: '📅',
          title: 'Veranstaltungen und Treffen',
          description:
            'Treffen, Termine und Möglichkeiten zur Beteiligung für Mitglieder und Gemeinschaft.',
        },
        {
          icon: '🤝',
          title: 'Projekte und Initiativen',
          description:
            'Gemeinsame Aktivitäten zur Entwicklung von Ideen, Kooperationen und neuen Möglichkeiten.',
        },
        {
          icon: '👥',
          title: 'Unterstützung für Mitglieder',
          description:
            'Informationen, Unterstützung und Leistungen für die Bedürfnisse der Mitglieder.',
        },
        {
          icon: '❤️',
          title: 'Ehrenamt und Gemeinschaft',
          description:
            'Solidarische Initiativen und konkrete Aktivitäten für Menschen und die Region.',
        },
      ],
    },
        cleaning: {
      it: [
        {
          icon: '🏠',
          title: 'Pulizia di case e appartamenti',
          description:
            'Servizi accurati e personalizzati per mantenere ogni ambiente domestico pulito e accogliente.',
        },
        {
          icon: '🏢',
          title: 'Pulizia di uffici e negozi',
          description:
            'Interventi professionali per uffici, negozi e attività commerciali.',
        },
        {
          icon: '🧹',
          title: 'Pulizia di condomini',
          description:
            'Pulizia periodica di scale, ingressi e spazi comuni condominiali.',
        },
        {
          icon: '✨',
          title: 'Pulizie straordinarie',
          description:
            'Pulizie approfondite dopo lavori, traslochi o per esigenze particolari.',
        },
      ],

      en: [
        {
          icon: '🏠',
          title: 'Home and apartment cleaning',
          description:
            'Accurate and customized services to keep every home clean and welcoming.',
        },
        {
          icon: '🏢',
          title: 'Office and shop cleaning',
          description:
            'Professional cleaning services for offices, shops and businesses.',
        },
        {
          icon: '🧹',
          title: 'Apartment building cleaning',
          description:
            'Regular cleaning of stairs, entrances and shared areas.',
        },
        {
          icon: '✨',
          title: 'Deep cleaning',
          description:
            'Thorough cleaning after renovation work, moving or for special requirements.',
        },
      ],

      es: [
        {
          icon: '🏠',
          title: 'Limpieza de casas y apartamentos',
          description:
            'Servicios cuidadosos y personalizados para mantener cada hogar limpio y acogedor.',
        },
        {
          icon: '🏢',
          title: 'Limpieza de oficinas y tiendas',
          description:
            'Servicios profesionales para oficinas, tiendas y actividades comerciales.',
        },
        {
          icon: '🧹',
          title: 'Limpieza de comunidades',
          description:
            'Limpieza periódica de escaleras, entradas y zonas comunes.',
        },
        {
          icon: '✨',
          title: 'Limpiezas extraordinarias',
          description:
            'Limpiezas profundas después de obras, mudanzas o para necesidades especiales.',
        },
      ],

      fr: [
        {
          icon: '🏠',
          title: 'Nettoyage de maisons et appartements',
          description:
            'Des services soignés et personnalisés pour garder chaque logement propre et accueillant.',
        },
        {
          icon: '🏢',
          title: 'Nettoyage de bureaux et commerces',
          description:
            'Des interventions professionnelles pour les bureaux, commerces et locaux professionnels.',
        },
        {
          icon: '🧹',
          title: 'Nettoyage de copropriétés',
          description:
            'Nettoyage régulier des escaliers, entrées et parties communes.',
        },
        {
          icon: '✨',
          title: 'Nettoyages exceptionnels',
          description:
            'Nettoyage approfondi après des travaux, un déménagement ou pour des besoins particuliers.',
        },
      ],

      de: [
        {
          icon: '🏠',
          title: 'Reinigung von Wohnungen und Häusern',
          description:
            'Gründliche und individuelle Leistungen für ein sauberes und einladendes Zuhause.',
        },
        {
          icon: '🏢',
          title: 'Reinigung von Büros und Geschäften',
          description:
            'Professionelle Reinigung für Büros, Geschäfte und Gewerberäume.',
        },
        {
          icon: '🧹',
          title: 'Reinigung von Wohnanlagen',
          description:
            'Regelmäßige Reinigung von Treppenhäusern, Eingängen und Gemeinschaftsbereichen.',
        },
        {
          icon: '✨',
          title: 'Sonderreinigungen',
          description:
            'Gründliche Reinigung nach Renovierungen, Umzügen oder für besondere Anforderungen.',
        },
      ],
    },
        photographer: {
      it: [
        {
          icon: '📸',
          title: 'Ritratti e servizi fotografici',
          description:
            'Servizi personalizzati per ritratti individuali, di coppia, famiglia e professionali.',
        },
        {
          icon: '🎉',
          title: 'Eventi e cerimonie',
          description:
            'Fotografie autentiche per raccontare matrimoni, cerimonie, feste ed eventi speciali.',
        },
        {
          icon: '🏢',
          title: 'Fotografia aziendale',
          description:
            'Immagini professionali per aziende, attività, collaboratori e comunicazione online.',
        },
        {
          icon: '🛍️',
          title: 'Fotografia di prodotto',
          description:
            'Fotografie curate per valorizzare prodotti, cataloghi, menu e contenuti promozionali.',
        },
      ],

      en: [
        {
          icon: '📸',
          title: 'Portraits and photo shoots',
          description:
            'Customized photography for individual, couple, family and professional portraits.',
        },
        {
          icon: '🎉',
          title: 'Events and ceremonies',
          description:
            'Authentic photography to capture weddings, ceremonies, parties and special events.',
        },
        {
          icon: '🏢',
          title: 'Business photography',
          description:
            'Professional images for businesses, teams and online communication.',
        },
        {
          icon: '🛍️',
          title: 'Product photography',
          description:
            'Carefully crafted images to showcase products, catalogues, menus and promotional content.',
        },
      ],

      es: [
        {
          icon: '📸',
          title: 'Retratos y sesiones fotográficas',
          description:
            'Servicios personalizados para retratos individuales, de pareja, familiares y profesionales.',
        },
        {
          icon: '🎉',
          title: 'Eventos y ceremonias',
          description:
            'Fotografías auténticas para contar bodas, ceremonias, fiestas y eventos especiales.',
        },
        {
          icon: '🏢',
          title: 'Fotografía corporativa',
          description:
            'Imágenes profesionales para empresas, equipos y comunicación digital.',
        },
        {
          icon: '🛍️',
          title: 'Fotografía de producto',
          description:
            'Imágenes cuidadas para valorizar productos, catálogos, menús y contenidos promocionales.',
        },
      ],

      fr: [
        {
          icon: '📸',
          title: 'Portraits et séances photo',
          description:
            'Des services personnalisés pour les portraits individuels, de couple, de famille et professionnels.',
        },
        {
          icon: '🎉',
          title: 'Événements et cérémonies',
          description:
            'Des photographies authentiques pour raconter mariages, cérémonies, fêtes et événements spéciaux.',
        },
        {
          icon: '🏢',
          title: 'Photographie d’entreprise',
          description:
            'Des images professionnelles pour les entreprises, les équipes et la communication numérique.',
        },
        {
          icon: '🛍️',
          title: 'Photographie de produits',
          description:
            'Des images soignées pour valoriser produits, catalogues, menus et contenus promotionnels.',
        },
      ],

      de: [
        {
          icon: '📸',
          title: 'Porträts und Fotoshootings',
          description:
            'Individuelle Fotoshootings für Einzelpersonen, Paare, Familien und berufliche Porträts.',
        },
        {
          icon: '🎉',
          title: 'Veranstaltungen und Feiern',
          description:
            'Authentische Fotografie für Hochzeiten, Feiern, Feste und besondere Ereignisse.',
        },
        {
          icon: '🏢',
          title: 'Unternehmensfotografie',
          description:
            'Professionelle Bilder für Unternehmen, Teams und die digitale Kommunikation.',
        },
        {
          icon: '🛍️',
          title: 'Produktfotografie',
          description:
            'Sorgfältig gestaltete Bilder für Produkte, Kataloge, Speisekarten und Werbeinhalte.',
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

      const category = (
      businessSlug && data.category
        ? data.category
        : categoriaUrl || data.category || ''
    ).toLowerCase();

    let defaultServiceIcon = '🛠️';

if (
  category === 'ristorante' ||
  category === 'pizzeria'
) {
  defaultServiceIcon = '🍽️';

} else if (category === 'bar') {
  defaultServiceIcon = '☕';

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
  category === 'farmacia' ||
  category === 'pharmacy'
) {
    defaultServiceIcon = '⚕️';

} else if (
  category === 'officina' ||
  category === 'meccanico' ||
  category === 'officina / meccanico' ||
  category === 'workshop'
) {
  defaultServiceIcon = '🔧';

 } else if (
  category === 'associazione' ||
  category === 'association'
) {
  defaultServiceIcon = '🤝';

} else if (
  category === 'impresa di pulizie' ||
  category === 'cleaning'
) {
  defaultServiceIcon = '🧹';

} else if (
  category === 'fotografo' ||
  category === 'photographer'
) {
  defaultServiceIcon = '📸';



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
  category === 'ambulante / mercato'
) {
  defaultServiceIcon = '🏪';

} else if (
  category === 'trasporti leggeri / padroncino'
) {
  defaultServiceIcon = '🚚';

} else if (
  category === 'ferramenta'
) {
  defaultServiceIcon = '🔧';

} else if (
  category === 'assistenza tecnica / informatica'
) {
  defaultServiceIcon = '💻';

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

const effectiveMenuUrl =
  menuUrl ||
  data.menuUrl ||
  '';

const menuSection =
  document.getElementById('menu-section');

const menuLink =
  document.getElementById('menu-link');

if (
  menuSection &&
  menuLink &&
  effectiveCategory === 'food' &&
  effectiveMenuUrl
) {
  menuLink.href = effectiveMenuUrl;
  menuSection.style.display = '';
} else if (menuSection) {
  menuSection.style.display = 'none';
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