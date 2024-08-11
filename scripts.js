// jQuery Animation //

let collapsible = document.querySelectorAll('.collapsible');
collapsible.forEach((item) =>
{
    item.addEventListener('click', function (){
        this.classList.toggle('collapsible--expanded')
    })
})


// Slider Section //

let activeSlideNumber = 1;

let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');

let hideActiveSlide = () => {
    let activeElement = document.querySelector('.active');
    activeElement.classList.remove('active');
}

let showSlide = (slideNumber) => {
    hideActiveSlide();
    document.querySelector('#slide'+slideNumber).classList.add('active');
}

let showNextSlide = () => {
    if (activeSlideNumber === 7) {
        activeSlideNumber = 1;
    } else {
        activeSlideNumber = activeSlideNumber + 1;
    }
    showSlide(activeSlideNumber);
}

let showPreviousSlide = () => {
    if (activeSlideNumber === 1) {
        activeSlideNumber = 7;
    } else {
        activeSlideNumber = activeSlideNumber - 1;
    }
    showSlide(activeSlideNumber);
}

for(let i = 1; i <= 7; i++) {
    let showSlideI = () => {
        activeSlideNumber = i;
        showSlide(i);
    }
    document.querySelector('#dot'+i).addEventListener('click', showSlideI);
}

arrowRight.addEventListener('click', showNextSlide);
arrowLeft.addEventListener('click', showPreviousSlide);