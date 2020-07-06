const slider = document.querySelector('.slider');
const carousel = document.querySelector('.carousel');
const right = document.querySelector('.right');
const left = document.querySelector('.left');
var jahat;
let slideNumber = 4;

left.addEventListener('click', function () {
    if (jahat === -1) {
        slider.appendChild(slider.firstElementChild);
        jahat = 1;
    }
    jahat = 1;
    carousel.style.justifyContent = 'flex-end';
    slider.style.transform = 'translate('+ (100/slideNumber)+'%)';
});

right.addEventListener('click', function () {
    jahat = -1;
    carousel.style.justifyContent = 'flex-start';
    slider.style.transform = 'translate('+ (-100/slideNumber)+'%)';
});

slider.addEventListener('transitionend', function () {
    if (jahat === -1) {
        slider.appendChild(slider.firstElementChild);
    } else if (jahat === 1) {
        slider.prepend(slider.lastElementChild);
    }

    slider.style.transition = 'none';
    slider.style.transform = 'translate(0)';
    setTimeout(function () {
        slider.style.transition = 'all 0.5s';
    });
});