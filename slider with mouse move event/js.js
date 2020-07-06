const cardContainer = document.querySelector('.card-container');
const mobileSlider = document.querySelector('.mobile-slider');

let moving = false;
let mouseLastPosition = 0;
let transform = 0;
let lastPageX = 0;
let transformValue = 0;
console.log(mobileSlider.offsetWidth);

cardContainer.addEventListener('mousedown', (e) => {
   moving = true;
   mouseLastPosition = e.pageX;
   transform = window.getComputedStyle(cardContainer)
   .getPropertyValue('transform') !== 'none'
   ? window.getComputedStyle(cardContainer)
   .getPropertyValue('transform').split(',')[4].trim() : 0;

});

cardContainer.addEventListener('mousemove', function (e) {
    // console.log(transform);
    if (moving) {
        const diffX = e.pageX - mouseLastPosition;
        if (e.pageX - lastPageX > 0) {
            if (transformValue > 0) {
                return;
            }
        } else {
            if (Math.abs(transformValue) > cardContainer.offsetWidth - mobileSlider.offsetWidth ) {
                return;
            }
        }
        transformValue = parseInt(transform) + diffX;
        cardContainer.style.transform = `translateX(${transformValue}px)`;
    }
    lastPageX = e.pageX;
});

cardContainer.addEventListener('mouseup', function () {
    console.log(mobileSlider.offsetWidth);

    moving = false;
});