// B-M Business Scripts

const params = new URLSearchParams(window.location.search);

const demoType =
  params.get('demo') || 'hairdresser';

const demoFile =
  demoType === 'accountant'
    ? 'data/accountant_demo.json'
    : 'data/hairdresser_demo.json';

const nomeUrl = params.get('nome') || '';
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

const hoursJsonUrl =
  params.get('hoursJson') || '';

const servicesJsonUrl =
  params.get('servicesJson') || '';

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

    if (data.category === 'accountant') {
  document.body.classList.add('accountant-theme');
}

    // HERO
    const businessNameElement =
      document.getElementById('business-name');

    const businessTaglineElement =
      document.getElementById('business-tagline');

    const businessSubtitleElement =
      document.getElementById('business-subtitle');

    // CONTATTI
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

    const locationAddress =
      document.getElementById(
        'location-address'
      );

    const mapsLink =
      document.getElementById('maps-link');

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

    // HERO
    if (businessNameElement) {
      businessNameElement.textContent =
        nomeUrl || data.business?.name || '';
    }

    if (businessTaglineElement) {
      businessTaglineElement.textContent =
        data.business?.tagline || '';
    }

    if (businessSubtitleElement) {
      businessSubtitleElement.textContent =
        data.business?.subtitle || '';
    }

    // TELEFONO
    const phone =
      telefonoUrl ||
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
      data.contacts?.whatsapp?.trim() || '';

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
      emailUrl ||
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
      sitoUrl ||
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

    // REVIEWS
    const reviews = data.reviews || {};

    if (
      reviewsCard &&
      reviewsScore &&
      reviewsCount &&
      reviewsProvider
    ) {
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

          reviewsCard.style.cursor =
            'pointer';
        } else {
          reviewsCard.removeAttribute(
            'href'
          );

          reviewsCard.style.cursor =
            'default';
        }

        reviewsCard.style.display = '';
      } else {
        reviewsCard.style.display = 'none';
      }
    }

   // MAPS
const location = data.location || {};

const businessLocationName =
  nomeUrl ||
  location.businessName?.trim() ||
  '';

const address =
  mapsUrl ||
  location.address?.trim() ||
  '';

const googleMapsLink =
  address
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
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

    const social = {
  instagram: instagramUrl || data.social?.instagram || '',
  facebook: facebookUrl || data.social?.facebook || '',
  tiktok: tiktokUrl || data.social?.tiktok || '',
  youtube: youtubeUrl || data.social?.youtube || '',
  linkedin: linkedinUrl || data.social?.linkedin || '',
  x: xUrl || data.social?.x || '',
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

const platforms = {
  booking:
    bookingUrl ||
    data.platforms?.booking ||
    '',

  tripadvisor:
    tripadvisorUrl ||
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

const servicesJsonUrl =
  params.get('servicesJson') || '';

  let services =
  Array.isArray(data.services)
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

    const mainAction =
      data.mainAction || {};

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

const gallery =
  Array.isArray(data.gallery)
    ? data.gallery
    : [];

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

let hours = data.hours || {};

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