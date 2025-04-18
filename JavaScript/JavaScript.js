// JavaScript Document
document.addEventListener('DOMContentLoaded', () => {

  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slider img');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  
  // Initialize the current slide index
  let currentIndex = 0;
  const totalSlides = slides.length;
  
  // Handle Next button click
  nextButton.addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
      updateSliderPosition();
    }
  });
  
  // Handle Prev button click
  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSliderPosition();
    }
  });
  
  // Update slider position
  function updateSliderPosition() {
    const slideWidth = slides[0].clientWidth; // Get width of one slide
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
  
  });