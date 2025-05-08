// Eerste slider (ongewijzigd)
document.addEventListener('DOMContentLoaded', function() {
    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');

    next.addEventListener('click', function() {
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').appendChild(items[0]);
    });

    prev.addEventListener('click', function() {
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').prepend(items[items.length - 1]);
    });
});

// Tweede slider
// Selecteer de benodigde elementen
const swiperWrapper = document.querySelector('.swiper-wrapper');
const prevButton = document.querySelector('.swiper-button-prev2');
const nextButton = document.querySelector('.swiper-button-next2');

// Variabele om de huidige positie bij te houden
let currentIndex = 0;

// Eventlistener voor de vorige knop
prevButton.addEventListener('click', () => {
    const slides = document.querySelectorAll('.swiper-slide');
    const slideWidth = slides[0].offsetWidth + 20; // Breedte van de slide + marge
    currentIndex = Math.max(currentIndex - 1, 0); // Zorgt ervoor dat de index niet negatief wordt
    swiperWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
});

// Eventlistener voor de volgende knop
nextButton.addEventListener('click', () => {
    const slides = document.querySelectorAll('.swiper-slide');
    const slideWidth = slides[0].offsetWidth + 20; // Breedte van de slide + marge
    currentIndex = Math.min(currentIndex + 1, slides.length - 1); // Zorgt ervoor dat de index niet buiten bereik gaat
    swiperWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
});