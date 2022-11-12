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
console.log(customerSelectLink);
customerSelectLink.onclick = function(e) {
    e.preventDefault();
}