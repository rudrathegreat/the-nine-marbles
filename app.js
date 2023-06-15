let hero = document.querySelector('.hero');
let about = document.getElementById('section-2');
let overlay_about = document.querySelector('.about .overlay');
let about_h1 = document.querySelector('.about h1');
let about_caption = document.querySelector('.about .caption');
let cover = document.querySelector('.book img');

window.addEventListener('scroll', function() {
    bg_scale = 150 - (window.scrollY/20);
    blur_effect = window.scrollY/150;
    hero.animate({
        backgroundSize: bg_scale + "%",
        filter: "blur(" + blur_effect + "px)"
    }, {duration:2000, fill:'forwards'});
});

window.addEventListener('scroll', function() {
    bg_scale = 100 + (window.scrollY/20);
    blur_effect = 3-(window.scrollY/200);
    opacity = ((window.scrollY-850)/500);
    about.animate({
        backgroundSize: bg_scale + "%",
        filter: "blur(" + blur_effect + "px)"
    }, {duration:2000, fill:'forwards'});
    overlay_about.animate({
        opacity: opacity
    }, {duration:2000, fill:'forwards'});
});

window.addEventListener('scroll', function() {
    scale = 1.2-((window.scrollY-(2*window.innerHeight)+300)/2000);
    if (scale > 1.2) {
        scale = 1.2;
    }
    if (scale < 1) {
        scale = 1;
    }
    cover.animate({
        transform:"scale("+scale+")"
    }, {duration:2000, fill:'forwards'});
});

var hoverDistort = new hoverEffect({
    parent: document.querySelector('.wrapper'),
    intensity: 0.3,
    image1: 'img_bw.jpg',
    image2: 'img_color.jpg',
    displacementImage: '14.jpg',
    imagesRatio: 7 / 5,
});

function showAboutCaption() {
    about_h1.style.opacity = 0;
    about_caption.style.opacity= 1;
}

function hideAboutCaption() {
    about_h1.style.opacity = 1;
    about_caption.style.opacity= 0;
}

