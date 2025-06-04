document.addEventListener('DOMContentLoaded', function() {
    const comparisonLine = document.getElementById('comparisonLine');
    const overlay = document.querySelector('.explore__image--overlay');
    let isDragging = false;

    function handleMove(clientX) {
        const container = comparisonLine.parentElement;
        const containerRect = container.getBoundingClientRect();
        let x = clientX - containerRect.left;
        
        x = Math.max(0, Math.min(x, containerRect.width));
        
        const percentage = (x / containerRect.width) * 100;
        
        comparisonLine.style.left = percentage + '%';
        overlay.style.width = percentage + '%';
    }

    comparisonLine.addEventListener('mousedown', function(e) {
        isDragging = true;
        e.preventDefault();
    });

    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        handleMove(e.clientX);
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
    });

    comparisonLine.addEventListener('touchstart', function(e) {
        isDragging = true;
        e.preventDefault();
    }, { passive: false });

    document.addEventListener('touchmove', function(e) {
        if (!isDragging) return;
        handleMove(e.touches[0].clientX);
        e.preventDefault();
    }, { passive: false });

    document.addEventListener('touchend', function() {
        isDragging = false;
    });

    document.addEventListener('touchmove', function(e) {
        if (isDragging) {
            e.preventDefault();
        }
    }, { passive: false });
});