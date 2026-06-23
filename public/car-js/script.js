//toggle menu button
function toggleMenu(){
    const menu = document.querySelector('.menu')
    const nav = document.querySelector('.nav')
    menu.classList.toggle('active')
    nav.classList.toggle('active')

}

//Change the background video when click on the gallery images
function changeVideo(name){
       const banner = document.querySelector('.banner');
       const bgVideoList = document.querySelectorAll('.bg-video');
       const trailers = document.querySelectorAll('.trailer');
       const models = document.querySelectorAll('.model');

const syncVideo = (video, isActive) => {
    if (isActive) {
        video.currentTime = 0;
        const playPromise = video.play();
        if (playPromise && playPromise.catch) playPromise.catch(() => {});
    } else {
        video.pause();
    }
};

if (banner) {
    banner.classList.remove('is-switching');
    void banner.offsetWidth;
    banner.classList.add('is-switching');
    window.clearTimeout(banner._switchTimer);
    banner._switchTimer = window.setTimeout(() => {
        banner.classList.remove('is-switching');
    }, 650);
}

//javascript higher order array function forEach
//This is easier to do data mapping
bgVideoList.forEach(video => {
    video.classList.remove('active');
    if(video.classList.contains(name)){
        video.classList.add('active');
    }
    syncVideo(video, video.classList.contains('active'));
});
models.forEach(model => {
    model.classList.remove('active');
    if(model.classList.contains(name)){
        model.classList.add('active');
    }
});

//mapping trailer video change
trailers.forEach(video => {
    video.classList.remove('active');
    if(video.classList.contains(name)){
        video.classList.add('active');
    }
    syncVideo(video, video.classList.contains('active'));
});

}

//Change the play and pause button on click event
function togglePlay() {
    const play = document.querySelector('.play')
    const pause = document.querySelector('.pause')
    play.classList.toggle('active')
    pause.classList.toggle('active')
}

/* Video Play and Pause */
function pauseVideo(){
    const bgVideoList = document.querySelectorAll('.bg-video');
    bgVideoList.forEach(video => {
        video.pause();
    });
    togglePlay();
}

function playVideo(){
    const bgVideoList = document.querySelectorAll('.bg-video');
    bgVideoList.forEach(video => {
        if(video.classList.contains('active')){
            const playPromise = video.play();
            if (playPromise && playPromise.catch) playPromise.catch(() => {});
        }
    });
    togglePlay();
}

function syncInitialVideos(){
    document.querySelectorAll('.bg-video, .trailer').forEach(video => {
        video.preload = video.classList.contains('active') ? 'metadata' : 'none';
        if(video.classList.contains('active')){
            const playPromise = video.play();
            if (playPromise && playPromise.catch) playPromise.catch(() => {});
        }else{
            video.pause();
        }
    });
}

function focusCarousel(direction = 'next'){
    const carousel = document.querySelector('.carousel');
    if(!carousel) return;

    const gallery = carousel.closest('.gallery');
    if(gallery){
        gallery.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    if(window.M && window.M.Carousel){
        let instance = window.M.Carousel.getInstance(carousel);
        if(!instance){
            const created = window.M.Carousel.init(carousel);
            instance = Array.isArray(created) ? created[0] : created;
        }

        if(instance){
            if(direction === 'prev'){
                instance.prev();
            }else{
                instance.next();
            }
        }
    }
}

window.addEventListener('message', (event) => {
    if(event.origin !== window.location.origin) return;
    if(event.data?.type === 'FOCUS_CAROUSEL'){
        focusCarousel('next');
    }
});

document.addEventListener('DOMContentLoaded', syncInitialVideos);

