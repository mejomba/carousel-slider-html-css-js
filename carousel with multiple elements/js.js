const left = document.querySelector('.left');
const right = document.querySelector('.right');
const track = document.querySelector('.track');

let carouselWidth = document.querySelector('.carousel-container').offsetWidth;
let index = 0;
let sumOfRight = 0;
let sumOfLeft = 0;


window.addEventListener('resize', () => {
   carouselWidth = document.querySelector('.carousel-container').offsetWidth;
});

right.addEventListener('click', function () {
    index++;
    left.classList.add('show');
    sumOfRight = sumOfRight + carouselWidth;

    if ((sumOfRight + carouselWidth) < track.offsetWidth) {
        track.style.transform = track.style.transform + `translate(-${carouselWidth}px)`;
    } else {
        track.style.transform = `translate(-${track.offsetWidth - carouselWidth}px)`;
    }

    if (track.offsetWidth - (index * carouselWidth) < carouselWidth) {
        right.classList.add('hide');
    }
});

left.addEventListener('click', function () {
    sumOfLeft = sumOfRight - carouselWidth;

    if (sumOfLeft >= carouselWidth) {
        track.style.transform = track.style.transform + `translate(${carouselWidth}px)`;

    } else {
        track.style.transform = `translate(-${0}px)`;
    }

    index--;
    right.classList.remove('hide');
    sumOfRight -= carouselWidth;
    if (index === 0) {
        left.classList.remove('show');
    }
});