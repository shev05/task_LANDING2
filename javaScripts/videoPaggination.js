let currentReviewVideo = 0;
const reviewsVideo = document.querySelectorAll('.video__next');
const dotsVideo = document.querySelectorAll('.video__dot');
const totalReviewsVideo = reviews.length;

function showReviewVideo(index) {
    reviewsVideo.forEach(review => {
        review.classList.remove('active');
    });
    
    reviewsVideo[index]?.classList.add('active');
    
    dotsVideo?.forEach(dot => dot.classList.remove('active'));
    dotsVideo[index]?.classList.add('active');
    
    currentReviewVideo = index;
}

function nextReviewVideo() {
    let nextIndex = currentReviewVideo + 1;
    if (nextIndex >= totalReviewsVideo) nextIndex = 0;
    showReviewVideo(nextIndex);
}

function prevReviewVideo() {
    let prevIndex = currentReviewVideo - 1;
    if (prevIndex < 0) prevIndex = totalReviewsVideo - 1;
    showReviewVideo(prevIndex);
}

function goToReviewVideo(index) {
    showReviewVideo(index);
}

showReviewVideo(0);