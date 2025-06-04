document.addEventListener('DOMContentLoaded', function() {
    const mainVideo = document.getElementById('mainVideo');
    const thumbs = document.querySelectorAll('.video__thumb');
    
    thumbs.forEach(thumb => {
        thumb.addEventListener('click', function() {
            const videoId = this.getAttribute('data-video-id');
            mainVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&rel=0`;
            thumbs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
});