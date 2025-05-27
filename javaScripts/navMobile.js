document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navUl = document.querySelector('.header__naviganion nav ul');
    
    burgerMenu.addEventListener('click', function() {
        this.classList.toggle('open');
        navUl.classList.toggle('show');
    });
});