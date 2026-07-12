// B-M Business Scripts

const params = new URLSearchParams(window.location.search);

const nomeUrl = params.get('nome') || '';
const descrizioneUrl = params.get('descrizione') || '';
const telefonoUrl = params.get('telefono') || '';
const emailUrl = params.get('email') || '';
const sitoUrl = params.get('sito') || '';

async function loadBusinessData() {
  try {
    const response = await fetch('data/hairdresser_demo.json');

    if (!response.ok) {
      throw new Error('Impossibile caricare il file JSON');
    }

    const data = await response.json();

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