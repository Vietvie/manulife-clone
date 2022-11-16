//Header Scroll
const header = document.querySelector('.header-container');
console.log(header)
const headerLogo = header.querySelector('.header-image');
console.log(headerLogo);
const headerLogin = header.querySelector('.header-container__login');
console.log(headerLogin);
const headerSubLogin = header.querySelector('.sublogin');
console.log(headerSubLogin);

let oldScroll = 0;
document.onscroll = function() {
    if (window.scrollY - oldScroll > 0) {
        header.classList.add('header--scrolled');
        headerLogo.classList.add('header-image--scrolled');
        headerLogin.classList.add('header-login--scrolled')
        headerSubLogin.classList.add('sublogin--scrolled')
    } else {
        header.classList.remove('header--scrolled');
        headerLogo.classList.remove('header-image--scrolled');
        headerLogin.classList.remove('header-login--scrolled')
        headerSubLogin.classList.remove('sublogin--scrolled')
    }

    if (window.scrollY > 0) {
        header.classList.add('header--scrolled');
        headerLogo.classList.add('header-image--scrolled');
    } else {
        header.classList.remove('header--scrolled');
        headerLogo.classList.remove('header-image--scrolled');
    }


    oldScroll = window.scrollY;
};

var counterSlider = 1;

setInterval(() => {
    document.getElementById('radio' + counterSlider).checked = true;
    counterSlider++;
    if (counterSlider > 4) {
        counterSlider = 1;
    }
}, 5000);


//Customer selector
const customerSelectLink = document.querySelector('.customer-select__right--selectbox');
customerSelectLink.onclick = function(e) {
    e.preventDefault();
    customerSelectLink.querySelector('.customer__right-selectbox-submenu').style.display = 'block';
}

customerSelectLink.onblur = function(e) {
    e.preventDefault()
    customerSelectLink.querySelector('.customer__right-selectbox-submenu').style.display = 'none';
}

//Feature Slider

let pressed = false;
let startX = 0;
const featureContentContainerSs = document.querySelectorAll('.feature-slider-moblie');

featureContentContainerSs.forEach(function(item) {
    item.addEventListener('mousedown', function(e) {
        pressed = true;
        startX = e.clientX
        console.log(startX)
    })
    
    item.addEventListener('mouseleave', function(e) {
        pressed = false;
    })
    
    window.addEventListener('mouseup', function(e) {
        pressed = false;
    })
    
    item.addEventListener('mousemove', function(e) {
        if (!pressed) {
            return
        }
        this.scrollLeft += startX - e.clientX;
    }) 
})

//Footer mobile

const footerList = document.querySelectorAll('.footer-container__r1--list');

footerList.forEach(function(item) {
    item.onclick = function() {
        let ulStyle = window.getComputedStyle(item.querySelector('ul')).display;
        let iconElement = item.querySelector('i')
        console.log(iconElement)
        if (ulStyle === 'none') {
            item.querySelector('ul').style.display = 'block';
            iconElement.style.transform = 'translateY(-50%) rotateX(180deg)'
        } else {
            item.querySelector('ul').style.display = 'none';
            iconElement.style.transform = 'translateY(-50%)'
        }
    }

})

//Menu Mobile
const mobileMenu = document.querySelector('.navbar-left-menu')
const moblieIconMenu = document.querySelector('.header__mobile-menu')
let currentWidth = window.innerWidth
console.log(currentWidth)
let counter = 0
document.body.classList.toggle('lock-scroll')

if (currentWidth < 768) {
    moblieIconMenu.onclick = function(e) {
        if (counter % 2 === 0) {
            counter++
            mobileMenu.style.transform = 'translateX(0)'
        } else {
            counter++
            mobileMenu.style.transform = 'translateX(100%)'
        }
        console.log(counter)
    }
} else {
    mobileMenu.style.transform = 'translateX(0)'
}