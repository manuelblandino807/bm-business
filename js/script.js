// B-M Business Scripts

const params = new URLSearchParams(window.location.search);

const nomeUrl = params.get('nome') || '';
const descrizioneUrl = params.get('descrizione') || '';
const telefonoUrl = params.get('telefono') || '';
const emailUrl = params.get('email') || '';
const sitoUrl = params.get('sito') || '';

async function loadBusinessData() {
  try {
    const response = await fetch('data/hairdresser_demo.json?v=3');

    if (!response.ok) {
      throw new Error('Impossibile caricare il file JSON');
    }

    const data = await response.json();

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

    const businessNameElement =
      document.getElementById('business-name');

    const businessTaglineElement =
      document.getElementById('business-tagline');

    const businessSubtitleElement =
      document.getElementById('business-subtitle');

    if (businessNameElement) {
      businessNameElement.textContent =
        data.business.name || nomeUrl;
    }

    if (businessTaglineElement) {
      businessTaglineElement.textContent =
        data.business.tagline;
    }

    if (businessSubtitleElement) {
      businessSubtitleElement.textContent =
        data.business.subtitle;
    }

    const phone =
      data.contacts?.phone?.trim() || '';

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

    const whatsapp =
      data.contacts?.whatsapp?.trim() || '';

    if (whatsappCard && whatsappText) {
      if (whatsapp) {
    const whatsappNumber =
      whatsapp.replace(/\D/g, '');

    whatsappText.textContent = 'Scrivici ora';

    whatsappCard.href =
      `https://wa.me/${whatsappNumber}`;

    whatsappCard.target = '_blank';
    whatsappCard.rel = 'noopener noreferrer';
    whatsappCard.style.display = '';
  } else {
    whatsappCard.style.display = 'none';
  }
}

const email =
  data.contacts?.email?.trim() || '';

if (emailCard && emailText) {
  if (email) {
    emailText.textContent = email;
    emailCard.href = `mailto:${email}`;
    emailCard.style.display = '';
  } else {
    emailCard.style.display = 'none';
  }
}

const website =
  data.contacts?.website?.trim() || '';

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
    websiteCard.rel = 'noopener noreferrer';
    websiteCard.style.display = '';
  } else {
    websiteCard.style.display = 'none';
  }
}

    console.log('Dati JSON caricati:', data);

    console.log('Dati ricevuti dall’URL:', {
      nomeUrl,
      descrizioneUrl,
      telefonoUrl,
      emailUrl,
      sitoUrl,
    });
  } catch (error) {
    console.error(
      'Errore nel caricamento dei dati:',
      error
    );
  }
}

loadBusinessData();