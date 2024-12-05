// Elementtien valinnat

const cards = document.querySelectorAll('.card');
let flippedCards = [];
let matchedCards = [];
let moves = 0;
let timer;
let timeElapsed = 0;

 

// Käynnistä peli

shuffleCards();


// Korttien käsittely

cards.forEach(card => {
card.addEventListener('click', () => {
    if (!card.classList.contains('flipped') && flippedCards.length < 2) {
        flipCard(card);
        flippedCards.push(card);
    if (flippedCards.length === 2) {
        checkMatch();
            }
        }
    });
});

 

// Käännä kortti

function flipCard(card) {
    card.classList.add('flipped');

}

 

// Tarkista, onko pari löytynyt

function checkMatch() {
    const [card1, card2] = flippedCards;
    const id1 = card1.id;
    const id2 = card2.id;

 

    if (id1 === id2) {
        // Kortit ovat pari
        matchedCards.push(card1, card2);
        flippedCards = [];
        checkGameOver();

    } else {

        // Ei pari, käännä takaisin

        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
        }, 1000);

    }
    updateMoves();
}

 

// Sekoituskortit

function shuffleCards() {
    const grid = document.querySelector('.grid');
    const cardsArray = Array.from(cards);
    const shuffled = cardsArray.sort(() => Math.random() - 0.5);

 

    shuffled.forEach(card => {
        grid.appendChild(card);
    });

}

 
// Pelin uudelleenkäynnistys

function restart() {
    matchedCards = [];
    flippedCards = [];
    moves = 0;
    timeElapsed = 0;
    clearInterval(timer);
    updateMoves();
    resetTimer();
    cards.forEach(card => {
    card.classList.remove('flipped');

    });
    shuffleCards();

}
// Päivitä siirtojen määrä

function updateMoves() {
    moves++;
    document.querySelector('.sidebox h3:nth-of-type(2)').textContent = `Kortteja napautettu: ${moves}`;
}

// Tarkista, onko peli ohi

function checkGameOver() {
    if (matchedCards.length === cards.length) {
        alert(`Onneksi olkoon! Suoritit pelin ${moves} siirrolla.`);
        restart();
    }

}

 
// Ajan seuranta

function startTimer() {
    const timeDisplay = document.querySelector('.sidebox h3:first-of-type');
    timer = setInterval(() => {
        timeElapsed++;
        const minutes = Math.floor(timeElapsed / 60);
        const seconds = timeElapsed % 60;
        timeDisplay.textContent = `Aika: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }, 1000);

}
function resetTimer() {
    timeElapsed = 0;
    clearInterval(timer);
    startTimer();
}

// Aloita ajastin, kun peli käynnistyy
startTimer();