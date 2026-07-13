// B-M Business Scripts

const params = new URLSearchParams(window.location.search);

const nomeUrl = params.get('nome') || '';
const descrizioneUrl = params.get('descrizione') || '';
const telefonoUrl = params.get('telefono') || '';
const emailUrl = params.get('email') || '';
const sitoUrl = params.get('sito') || '';

async function loadBusinessData() {
  try {
    const response = await fetch(
      'data/hairdresser_demo.json?v=4'
    );

    if (!response.ok) {
      throw new Error(
        'Impossibile caricare il file JSON'
      );
    }

    const data = await response.json();

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
      location.businessName?.trim() || '';

    const address =
      location.address?.trim() || '';

    const googleMapsLink =
      location.mapsLink?.trim() || '';

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