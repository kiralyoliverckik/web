document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.slide-dots');
    const prevBtn = document.querySelector('.slide-prev');
    const nextBtn = document.querySelector('.slide-next');
    let currentSlide = 0;
    let slideInterval;

    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slide-dot');
        if (index == 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.slide-dot');

    function nextSlide() {
        goToSlide(currentSlide == slides.length - 1 ? 0 : currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide == 0 ? slides.length - 1 : currentSlide - 1);
    }

    function goToSlide(index) {
      slides.forEach(slide => {
        slide.classList.remove('active');
        slide.classList.forEach(className => {
          if (className.startsWith('slide-')) {
            slide.classList.remove(className);
          }
        });
      });
      
      slides[index].classList.add('active', `slide-${index + 1}`);
      currentSlide = index;
    }

    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    resetInterval();

    const slideshow = document.querySelector('.hero-slideshow');
    slideshow.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slideshow.addEventListener('mouseleave', resetInterval);
});
