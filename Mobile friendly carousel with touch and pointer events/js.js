const track = document.querySelector('.track');
const carousel = document.querySelector('.carousel');
let initialPosition = null;
let moving = false;
let transform = 0;
// let mouseLastPosition = 0;
let lastPageX = 0;
let transformValue = 0;

const gestureStart =  (e) => {
   initialPosition = e.pageX;
   moving = true;
   const transformMatrix = window.getComputedStyle(track).getPropertyValue('transform');
   if (transformMatrix !== 'none') {
       transform = parseInt(transformMatrix.split(',')[4].trim());
   }
};

const gestureMove = (e) => {
    if (moving) {

        // const currentPosition = e.pageX;
        const diff = e.pageX - initialPosition;
        if (e.pageX - lastPageX > 0) {
            if (transformValue > 0) {
                return;
            }
        } else {
            if (Math.abs(transformValue) > track.offsetWidth - carousel.offsetWidth ) {
                return;
            }
        }
        transformValue = parseInt(transform) + diff;
        track.style.transform = `translateX(${transformValue}px)`;
    }
    lastPageX = e.pageX;
};

const gestureEnd =  (e) => {
    moving = false;
    console.log(carousel.offsetWidth);
};

if (window.PointerEvent) {
    carousel.addEventListener('pointerdown', gestureStart);

    carousel.addEventListener('pointermove', gestureMove);

    carousel.addEventListener('pointerup',gestureEnd);
} else {
    carousel.addEventListener('touchdown', gestureStart);

    carousel.addEventListener('touchmove', gestureMove);

    carousel.addEventListener('touchup',gestureEnd);

    carousel.addEventListener('mousedown', gestureStart);

    carousel.addEventListener('mousemove', gestureMove);

    carousel.addEventListener('mouseup',gestureEnd);
}
