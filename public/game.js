// Létrehozunk egy változót, amely tárolja az adatokat
let cardsData = null;
const card = document.getElementById('card');
const nextButton = document.getElementById('next');
const languageButton = document.getElementById('language-switch');
const side = document.getElementById('side');
const frontCard = document.getElementById('font-card');
const backCard = document.getElementById('back-card');
let language = 'english';
let activeCard;

card.addEventListener('click', () => {
  card.classList.toggle('flipped');
});

nextButton.addEventListener('click', () => {
  pickNextWord();
});

languageButton.addEventListener('click', () => {
  changeLanguage();
});

// Loading kezelése
const loadingElement = document.getElementById('loading');
const containerElement = document.getElementById('container');

// Kezdetben csak a loading látszik
loadingElement.style.display = 'block';
containerElement.style.display = 'none';

// Loading szöveg beállítása
loadingElement.textContent = 'Betöltés...';

// Ha betöltődött az adat, megfordítjuk a megjelenítést
const showContent = () => {
  loadingElement.style.display = 'none';
  containerElement.style.display = 'flex';
};




// Aszinkron függvény létrehozása az adatok lekérésére és elmentésére
async function fetchCardsData() {

  try {
    const response = await fetch('/api/cards'); // vagy 'data.json', ha a JSON fájl közvetlenül érhető el
    cardsData = await response.json();

    // Most már hozzáférhetünk a cardsData-hoz
    console.log(cardsData); // Kiírja a teljes adatot a konzolra
    console.log(cardsData.length);
    const random = Math.floor(Math.random() * cardsData.length);
    activeCard = cardsData[random];
    if (language == 'english') {
      frontCard.textContent = activeCard.english;
      backCard.textContent = activeCard.hungarian;
    } else {
      frontCard.textContent = activeCard.hungarian;
      backCard.textContent = activeCard.english;
    }
    showContent();
  } catch (error) {
    console.error('Hiba történt az adatok lekérésekor:', error);
  }
}

// Hívjuk meg a fetchCardsData függvényt
fetchCardsData();

pickNextWord = () => {
  card.classList.remove('flipped');
  console.log(language);

  setTimeout(() => {
    const random = Math.floor(Math.random() * cardsData.length);
    activeCard = cardsData[random];
    if (language == 'english') {
      frontCard.textContent = activeCard.english;
      backCard.textContent = activeCard.hungarian;
    } else {
      frontCard.textContent = activeCard.hungarian;
      backCard.textContent = activeCard.english;
    }
  }, 200);

};

changeLanguage = () => {
  if (language == 'english') {
    language = 'hungarian';
    languageButton.textContent = "Angol";
    frontCard.textContent = activeCard.hungarian;
    backCard.textContent = activeCard.english;
    console.log(activaCard);

  } else {
    language == 'english';
    languageButton.textContent = "Magyar";
    frontCard.textContent = activeCard.english;
    backCard.textContent = activeCard.hungarian;
  }
};