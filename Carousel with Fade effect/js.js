let numberOfSlides = 4;
const right = document.querySelector('.right');
const left = document.querySelector('.left');

const slider = document.querySelector('.slider');

let sectionIndex = 0;
function reset() {
    for (let i=0; i<slider.children.length; i++) {
        slider.children[i].style.opacity = 0;
        slider.children[i].style.zIndex = 0;
    }
}
right.addEventListener('click', function () {
    reset();
    sectionIndex = (sectionIndex < numberOfSlides-1) ? sectionIndex + 1 : numberOfSlides-1;
    slider.children[sectionIndex].style.zIndex = 1;
    slider.children[sectionIndex].style.opacity = 1;
});
left.addEventListener('click', function () {
    reset();
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    slider.children[sectionIndex].style.zIndex = 1;
    slider.children[sectionIndex].style.opacity = 1;
});