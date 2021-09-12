const sliderTextHeading = document.querySelector('#slider .text-heading'),
        sliderTextDesc = document.querySelector('.text-descriptions'),
        silder = document.querySelector('#slider')
function chicagoSlider(){
    sliderTextHeading.innerHTML = 'Chicago'
    sliderTextDesc.innerHTML = 'Thank you, Chicago - A night we won\'t forget.'
    silder.setAttribute('style', 'background: url(\'/assets/img/slider/slider1.jpg\') top center / cover  no-repeat;')
}

function newYorkSlider(){
    sliderTextHeading.innerHTML = 'New York'
    sliderTextDesc.innerHTML = 'The atmosphere in New York is lorem ipsum.'
    silder.setAttribute('style', 'background: url(\'/assets/img/slider/slider2.jpg\') top center / cover  no-repeat;')
}

function losAngelesSlider(){
    sliderTextHeading.innerHTML = 'Los Angeles'
    sliderTextDesc.innerHTML = 'We had the best time playing at Venice Beach!'
    silder.setAttribute('style', 'background: url(\'/assets/img/slider/slider3.jpg\') top center / cover  no-repeat;')
}

function slideTransition(){
    setTimeout(() => {
        chicagoSlider()
    }, 1000);
    setTimeout(() => {
        newYorkSlider()
    }, 4000);
    setTimeout(() => {
        losAngelesSlider()
    }, 7000);
}

function slideTransition2(){
    setTimeout(() => {
        chicagoSlider()
    }, 10);
    setTimeout(() => {
        newYorkSlider()
    }, 3000);
    setTimeout(() => {
        losAngelesSlider()
    }, 7000);
}

slideTransition2()

setInterval(() => {
    slideTransition()
}, 9000);

const header = document.getElementById('header')
const navMenus = document.querySelectorAll('.nav-menu')
const menuBtn = document.querySelector('.mobile-menu-btn'),
        menuTab = document.querySelector('#header')

function openCloseMenu (){
    if (header.clientHeight == 46){       
    menuTab.setAttribute('style', 'height: auto;')
    }
    else {
        menuTab.setAttribute('style', 'height: 46px;')
    }
}

function closeMenu(){
    menuTab.setAttribute('style', 'height: 46px;')
}

menuBtn.addEventListener('click',openCloseMenu)

for (const navMenu of navMenus){
    navMenu.addEventListener('click', closeMenu)
}
