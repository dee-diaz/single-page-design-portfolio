const slider = document.querySelector('.slider');
const btnPrev = document.querySelector('.slider-controls__btn_prev');
const btnNext = document.querySelector('.slider-controls__btn_next');
const slideCount = slider.querySelectorAll('.slider__img').length;
const slides = document.querySelectorAll('.slider__img');
let slideWidth = 630;
let currentPosition = -630;
const mediaQuery = window.matchMedia('(max-width: 575px)');


btnPrev.addEventListener('click', () => {
    slide('prev');
});

btnNext.addEventListener('click', () => {
    slide('next');
})


function slide(direction) {
    if (direction === 'prev') {
        currentPosition += slideWidth;
        if (currentPosition > 0) {
        currentPosition = -slideWidth * (slideCount - 3);
    }
    } else if (direction === 'next') {
        currentPosition -= slideWidth;
        if (currentPosition < -slideWidth * (slideCount - 3)) {
        currentPosition = 0;
    }
    }

    if (mediaQuery.matches) {
        slideWidth = 270;
    }

    slider.style.transform = `translateX(${currentPosition}px)`;
}