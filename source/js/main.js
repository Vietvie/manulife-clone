const header = document.querySelector('.header-container');
console.log(header)
const headerLogo = header.querySelector('.header-image');
console.log(headerLogo);

document.onscroll = function() {
    if (window.scrollY > 0) {
        header.classList.add('header--scrolled');
        headerLogo.classList.add('header-image--scrolled');
    } else {
        header.classList.remove('header--scrolled');
        headerLogo.classList.remove('header-image--scrolled');

    }
}