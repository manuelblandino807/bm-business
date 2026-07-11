// B-M Business Scripts
const params = new URLSearchParams(window.location.search);

const nome = params.get('nome') || '';
const descrizione = params.get('descrizione') || '';
const telefono = params.get('telefono') || '';
const email = params.get('email') || '';
const sito = params.get('sito') || '';

console.log({
  nome,
  descrizione,
  telefono,
  email,
  sito,
});