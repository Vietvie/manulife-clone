const header = document.querySelector('.header-container');
console.log(header)
const headerLogo = header.querySelector('.header-image');
console.log(headerLogo);
const headerLogin = header.querySelector('.header-container__login');
console.log(headerLogin);
const headerSubLogin = header.querySelector('.sublogin');
console.log(headerSubLogin);

document.onscroll = function() {
    if (window.scrollY > 0) {
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
}