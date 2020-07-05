let numberOfSlides = 4;

const right = document.querySelector('.right');
const left = document.querySelector('.left');
const carousel = document.querySelector('.carousel');
const slider = document.querySelector('.slider');

let sectionIndex = 0;

function reset() {
    for (let i=0; i<slider.children.length; i++) {
        slider.children[i].style.opacity = 0;
        slider.children[i].style.zIndex = 0;
    }
}

let intervalId = 0;

function startShow() {
    intervalId = setInterval(function () {
        reset();
        sectionIndex = (sectionIndex < numberOfSlides-1) ? sectionIndex + 1 : 0;
        setSection();
    }, 5000);
}
startShow();

carousel.addEventListener('mouseover', function () {
    clearInterval(intervalId);
});

carousel.addEventListener('mouseout', function () {
    startShow();
});

function setSection() {
    slider.children[sectionIndex].style.zIndex = 2;
    slider.children[sectionIndex].style.opacity = 1;
}
right.addEventListener('click', function (e) {
    reset();
    sectionIndex = (sectionIndex < numberOfSlides-1) ? sectionIndex + 1 : numberOfSlides-1;
    slider.children[sectionIndex].style.zIndex = 2;
    slider.children[sectionIndex].style.opacity = 1;
});
left.addEventListener('click', function () {
    reset();
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    slider.children[sectionIndex].style.zIndex = 2;
    slider.children[sectionIndex].style.opacity = 1;
});