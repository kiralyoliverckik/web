document.addEventListener('DOMContentLoaded', function() {
    // Hero Slideshow
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.slide-dots');
    const prevBtn = document.querySelector('.slide-prev');
    const nextBtn = document.querySelector('.slide-next');
    let currentSlide = 0;
    let slideInterval;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slide-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.slide-dot');

    // Next slide function
    function nextSlide() {
        goToSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    }

    // Previous slide function
    function prevSlide() {
        goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    }

    // Go to specific slide
    function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        currentSlide = index;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
        
        // Reset the timer when manually changing slides
        resetInterval();
    }

    // Reset the autoplay interval
    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }

    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Start autoplay
    resetInterval();

    // Pause on hover
    const slideshow = document.querySelector('.hero-slideshow');
    slideshow.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slideshow.addEventListener('mouseleave', resetInterval);
});
