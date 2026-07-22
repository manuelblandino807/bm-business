// B-M Business Scripts

const params = new URLSearchParams(window.location.search);

const demoType = params.get('demo') || 'hairdresser';

const categoriaUrl =
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

async function loadBusinessData() {
  try {

    const response = await fetch(
  `${demoFile}?v=5`
);
    if (!response.ok) {
      throw new Error(
        'Impossibile caricare il file JSON'
      );
    }

    const data = await response.json();

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
  document.body.classList.add(`${data.category}-theme`);
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


document.body.classList.add(
  `theme-${selectedTheme}`
);

// HERO STYLE
const heroElement =
  document.getElementById('hero');

const categoryHeroMap = {
  hairdresser: 'elegance',
  barber: 'barber-ocean',
  professional: 'office',
  'real-estate': 'real-estate',
  artisan: 'artisan',
  food: 'food',
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

    const onlineSection =
      document.getElementById('online-section');

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

    const bookingLink =
      document.getElementById('booking-link');

    const tripadvisorLink =
      document.getElementById('tripadvisor-link');

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

    const shareButton =
      document.getElementById('share-button');

    const saveContactButton =
      document.getElementById(
      'save-contact-button'
    ); 

    const categoryContentMap = {
  hairdresser: {
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

  barber: {
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

  professional: {
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

  'real-estate': {
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

  artisan: {
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

food: {
  subtitle:
    'Sapori autentici, qualità e accoglienza.',
  title:
    'Gusto, qualità e passione',
  description:
    'Un ambiente accogliente dove ingredienti selezionati e cura del servizio creano un’esperienza da ricordare.',
  benefits: [
    'Ingredienti selezionati',
    'Preparazioni curate',
    'Ambiente accogliente'
  ]
},

  generic: {
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
};

const categoryContent =
  categoryContentMap[categoriaUrl] ||
  categoryContentMap.generic;

// HERO
if (businessNameElement) {
  businessNameElement.textContent =
    nomeUrl || data.business?.name || '';
}

if (businessTaglineElement) {
  const tagline =
    isGeneratedProfile
      ? ''
      : data.business?.tagline || '';

  businessTaglineElement.textContent =
    tagline;

  businessTaglineElement.style.display =
    tagline ? '' : 'none';
}

if (businessSubtitleElement) {
  businessSubtitleElement.textContent =
    isGeneratedProfile
      ? descrizioneUrl ||
        categoryContent.subtitle
      : data.business?.subtitle || '';
}

if (isGeneratedProfile) {
  if (aboutTitle) {
    aboutTitle.textContent =
      categoryContent.title;
  }

  if (aboutDescription) {
    aboutDescription.textContent =
      categoryContent.description;
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
}

// TELEFONO
    const phone =
  isGeneratedProfile
    ? telefonoUrl.trim()
    : telefonoUrl ||
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
  isGeneratedProfile
    ? whatsappUrl.trim()
    : whatsappUrl ||
      data.contacts?.whatsapp?.trim() ||
      '';

    if (whatsappCard && whatsappText) {
      if (whatsapp) {
        const whatsappNumber =
          whatsapp.replace(/\D/g, '');

        whatsappText.textContent =
          'Scrivici ora';

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
  isGeneratedProfile
    ? emailUrl.trim()
    : emailUrl ||
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
  isGeneratedProfile
    ? sitoUrl.trim()
    : sitoUrl ||
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
  if (isGeneratedProfile) {
    // Pagina reale generata dalla app
    if (reviewsUrl) {
      reviewsCard.href = reviewsUrl;
      reviewsCard.target = '_blank';
      reviewsCard.rel = 'noopener noreferrer';

      reviewsScore.textContent = '';
      reviewsCount.textContent =
        'Leggi le recensioni su Google';
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
          ? `${reviews.count} recensioni`
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
  isGeneratedProfile
    ? mapsUrl.trim()
    : mapsUrl ||
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
if (locationSection) {
  locationSection.style.display =
    address ? '' : 'none';
}

   const social = {
  instagram: isGeneratedProfile
    ? instagramUrl
    : instagramUrl || data.social?.instagram || '',

  facebook: isGeneratedProfile
    ? facebookUrl
    : facebookUrl || data.social?.facebook || '',

  tiktok: isGeneratedProfile
    ? tiktokUrl
    : tiktokUrl || data.social?.tiktok || '',

  youtube: isGeneratedProfile
    ? youtubeUrl
    : youtubeUrl || data.social?.youtube || '',

  linkedin: isGeneratedProfile
    ? linkedinUrl
    : linkedinUrl || data.social?.linkedin || '',

  x: isGeneratedProfile
    ? xUrl
    : xUrl || data.social?.x || '',
};

function setSocialLink(element, url) {
  if (!element) return;

  if (url && url.trim() !== '') {
    element.href = url;
    element.target = '_blank';
    element.rel = 'noopener noreferrer';
    element.style.display = '';
  } else {
    element.style.display = 'none';
  }
}

setSocialLink(instagramLink, social.instagram);
setSocialLink(facebookLink, social.facebook);
setSocialLink(tiktokLink, social.tiktok);
setSocialLink(youtubeLink, social.youtube);
setSocialLink(linkedinLink, social.linkedin);
setSocialLink(xLink, social.x);
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
  booking: isGeneratedProfile
    ? bookingUrl
    : bookingUrl ||
      data.platforms?.booking ||
      '',

  tripadvisor: isGeneratedProfile
    ? tripadvisorUrl
    : tripadvisorUrl ||
      data.platforms?.tripadvisor ||
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

const hasPlatforms =
  Object.values(platforms).some(
    (value) => value.trim() !== ''
  );

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

let services =
  isGeneratedProfile
    ? []
    : Array.isArray(data.services)
      ? data.services
      : [];


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

    serviceIcon.textContent =
      service.icon || '🛠️';

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

if (isGeneratedProfile) {
  const whatsappNumber =
    whatsapp.replace(/\D/g, '');

  const phoneNumber =
    phone.replace(/\s+/g, '');

  if (whatsappNumber) {
    mainAction = {
      text: 'Prenota ora',
      link:
        `https://wa.me/${whatsappNumber}`,
    };
  } else if (phoneNumber) {
    mainAction = {
      text: 'Chiama ora',
      link: `tel:${phoneNumber}`,
    };
  } else {
    mainAction = {};
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

let gallery =
  isGeneratedProfile
    ? []
    : Array.isArray(data.gallery)
      ? data.gallery
      : [];

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
        `Foto ${index + 1} di ${data.business?.name || 'attività'}`;

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

let hours =
  isGeneratedProfile
    ? {}
    : data.hours || {};

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
  ['monday', 'Lunedì'],
  ['tuesday', 'Martedì'],
  ['wednesday', 'Mercoledì'],
  ['thursday', 'Giovedì'],
  ['friday', 'Venerdì'],
  ['saturday', 'Sabato'],
  ['sunday', 'Domenica'],
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

      if (
        typeof daySchedule === 'string'
      ) {
        value =
          daySchedule.trim();
      } else if (
        daySchedule &&
        typeof daySchedule === 'object'
      ) {
        if (
          daySchedule.open === false
        ) {
          value = 'Chiuso';
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

      if (
        value.toLowerCase() === 'chiuso'
      ) {
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
        text:
          `Scopri ${shareTitle}`,
        url: window.location.href,
      };

      try {
        if (navigator.share) {
          await navigator.share(shareData);
        } else if (navigator.clipboard) {
          await navigator.clipboard.writeText(
            window.location.href
          );

          const originalText =
            shareButton.textContent;

          shareButton.textContent =
            '✅ Link copiato';

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
        if (error.name !== 'AbortError') {
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
    isGeneratedProfile &&
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