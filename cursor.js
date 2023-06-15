let cursor = document.querySelector('.cursor');
let blob = document.querySelector('.blob');
let planet = document.querySelector('.solar-system .planet');
let author = document.querySelector('.author');
let footer = document.querySelector('.footer');
let links = document.querySelectorAll('a');


window.addEventListener('mousemove', function(e) {
    cursor.animate({
        top:e.pageY + 'px',
        left:e.pageX + 'px'
    }, {duration:1000, fill:'forwards'});
    blob.animate({
        top:e.pageY + 'px',
        left:e.pageX + 'px'
    }, {duration:7000, fill:'forwards'});
});

window.addEventListener('mousemove', function(e) {
    bg_left = e.pageX/300;
    bg_top = e.pageY/300;
    planet.style.backgroundPosition = bg_left + '% ' + bg_top + '%'; 
});

window.addEventListener('scroll', function() {
    if (author.getBoundingClientRect().top < (window.innerHeight)) {
        blob.classList.add('author-color');
    }
    else {
        blob.classList.remove('author-color');
    }
    if (footer.getBoundingClientRect().top < (window.innerHeight/10)) {
        blob.style.display = 'none';
    }
    else {
        blob.style.display = 'block';
    }
});

links.forEach(link => {
    link.addEventListener('mouseenter', (e) => {
        cursor.style.opacity = 0;
      })
      
    link.addEventListener('mouseleave', (e) => {
        cursor.style.opacity = 1;
      })
});
