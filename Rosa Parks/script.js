document.querySelectorAll('.zoomable').forEach(function(image) {
    image.addEventListener('click', function() {
        this.classList.toggle('enlarged');
    });
});

ScrollReveal().reveal('.timeline-item', { 
    delay: 200, 
    distance: '100px', 
    origin: 'bottom', 
    interval: 500,
    reset: true  
});

ScrollReveal().reveal('.achievements-list', {
    delay: 200,
    distance: '100px',
    interval: 500,
    reset: true,
    origin: (index) => {
        return index % 2 === 0 ? 'left' : 'right';
    }
});

