
// Changes the style of the header when the user scrolls

window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        header.style.backdropFilter = 'blur(10px)';
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        header.style.borderBottom = '2px solid rgba(255, 255, 255, 0.1)';
    } else {
        header.style.backdropFilter = 'none';
        header.style.backgroundColor = 'transparent';
        header.style.borderBottom = 'none';
    }
});

// Set video_bg to the height of the hero section

function setVideoBGHeight() {
    var video_bg = document.querySelector('#video-bg');
    var hero = document.querySelector('#hero');
    video_bg.style.height = hero.offsetHeight + 'px';
}

window.addEventListener('load', function () {
    setVideoBGHeight();
});

window.addEventListener('resize', function () {
    setVideoBGHeight();
});

