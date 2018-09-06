const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const menuItems = document.querySelectorAll('.nav-item');

menuBtn.addEventListener('click',toggleMenu);
let menuShow = false;
function toggleMenu(){
    if (!menuShow){
        menuBtn.classList.add('close');
        menuNav.classList.add('show');
        menu.classList.add('show');
        menuBranding.classList.add('show');
        menuItems.forEach(function(item){
            item.classList.add('show')
        });
        menuShow = true;
    } else {
        menuBtn.classList.remove('close');
        menuNav.classList.remove('show');
        menu.classList.remove('show');
        menuBranding.classList.remove('show');
        menuItems.forEach(function(item){
            item.classList.remove('show')
        });
        menuShow = false;
    }

}