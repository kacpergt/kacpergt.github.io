const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const successMessage = document.getElementById('successMessage');
const buttonsDiv = document.querySelector('.buttons');
const h1 = document.querySelector('h1');

// Funkcja, która przesuwa przycisk "Nie" w losowe miejsce na ekranie
function moveNoButton() {
    // Obliczamy losowe współrzędne w granicach okna przeglądarki (z zapasem na wielkość przycisku)
    const maxX = window.innerWidth - noBtn.offsetWidth - 50;
    const maxY = window.innerHeight - noBtn.offsetHeight - 50;

    const randomX = Math.max(20, Math.floor(Math.random() * maxX));
    const randomY = Math.max(20, Math.floor(Math.random() * maxY));

    noBtn.style.position = 'fixed';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

// 1. Ucieczka przy najechaniu myszką (dla komputerów)
noBtn.addEventListener('mouseover', moveNoButton);

// 2. Ucieczka przy dotknięciu ekranu (dla telefonów i tabletów)
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Zapobiega domyślnemu kliknięciu w tym miejscu
    moveNoButton();
});

// Zabezpieczenie (gdyby ktoś mimo wszystko spróbował kliknąć)
noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    moveNoButton();
});

// Co się dzieje po kliknięciu "Tak"
yesBtn.addEventListener('click', () => {
    h1.style.display = 'none';
    buttonsDiv.style.display = 'none';
    noBtn.style.display = 'none';
    successMessage.classList.remove('hidden');
});
