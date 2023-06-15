let navbar = document.querySelector('.navbar');
let solar_system = document.querySelector('.solar-system');
let menu = document.querySelector('.navbar .menu');

window.addEventListener('scroll', function() {
    if (solar_system.getBoundingClientRect().top < (window.innerHeight/8) && author.getBoundingClientRect().top > (window.innerHeight/2)) {
        navbar.style.background = 'none';
    }
    else {
        if (this.window.scrollY < (this.window.innerHeight/2)) {
            navbar.style.background = 'none';
        }
        else {
            navbar.style.background = 'black';
        }
    }
});

function openMenu() {
    menu.classList.toggle('activated');
    document.querySelector('.navbar > a').classList.toggle('button-activated');
}