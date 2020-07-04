const slider = document.querySelector(".slider");

const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const indicatorParents = document.querySelector('.slider-controls ul');
let sectionIndex = 0;
let numberOfSlide = 10;


document.querySelectorAll('.slider-controls li').forEach(function (indicator, ind) {
    indicator.addEventListener('click', function () {
        sectionIndex = ind;
        document.querySelector('.slider-controls .selected').classList.remove('selected');
        indicator.classList.add('selected');
        slider.style.transform = 'translate(' + (sectionIndex) * -100/numberOfSlide +'%)';
    });
});

rightArrow.addEventListener('click', function () {
    sectionIndex = (sectionIndex < numberOfSlide-1) ? sectionIndex + 1 : numberOfSlide-1;
    document.querySelector('.slider-controls .selected').classList.remove('selected');
    indicatorParents.children[sectionIndex].classList.add('selected');
    slider.style.transform = 'translate(' + (sectionIndex) * -100/numberOfSlide +'%)';
});

leftArrow.addEventListener('click', function () {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    document.querySelector('.slider-controls .selected').classList.remove('selected');
    indicatorParents.children[sectionIndex].classList.add('selected');
    slider.style.transform = 'translate(' + (sectionIndex) * -100/numberOfSlide +'%)';
});