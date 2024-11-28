const fs = require('fs');

try {
  // JSON fájl beolvasása szinkron módon
  const jsonData = fs.readFileSync('english_hungarian_words.json', 'utf8');

  // JSON tartalom konvertálása JavaScript objektummá
  const cards = JSON.parse(jsonData);

  // A kártyák exportálása
  module.exports = cards;
} catch (error) {
  console.error('Hiba történt a fájl beolvasása során:', error.message);
  module.exports = []; // Üres tömböt exportálunk hiba esetén
}