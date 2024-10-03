// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
    // Select the main carousel element and all carousel items
    const carousel = document.querySelector(".carouselTestimony");
    const items = document.querySelectorAll(".carousel-item");
    // Select the left and right navigation arrows
    const leftArrow = document.querySelector(".carousel-arrow.left");
    const rightArrow = document.querySelector(".carousel-arrow.right");
  
    // Initialize the carousel with the second item (index 1) as the center item
    let currentIndex = 1;
  
    // Function to update the carousel's position and appearance
    function updateCarousel() {
      // Get the width of a single item and the container
      const itemWidth = items[0].offsetWidth;
      const containerWidth = document.querySelector(
        ".carousel-container-testimony"
      ).offsetWidth;
      // Get the width of the center item (which may be different from other items)
      const centerItemWidth = items[currentIndex].offsetWidth;
      // Calculate the offset to center the current item
      const offset = (containerWidth - centerItemWidth) / 2;
  
      // Calculate the total translation needed to bring the current item to the center
      let translateX = 0;
      for (let i = 0; i < currentIndex; i++) {
        translateX -=
          items[i].offsetWidth +
          parseInt(window.getComputedStyle(items[i]).marginLeft) * 2;
      }
      // Add the centering offset
      translateX += offset;
  
      // Apply the translation to the carousel
      carousel.style.transform = `translateX(${translateX}px)`;
  
      // Update the 'center' class on carousel items
      items.forEach((item, index) => {
        item.classList.remove("center");
        if (index === currentIndex) {
          item.classList.add("center");
        }
      });
  
      // Disable left arrow if at the start, right arrow if at the end
      leftArrow.classList.toggle("disabled", currentIndex === 0);
      rightArrow.classList.toggle("disabled", currentIndex === items.length - 1);
    }
  
    // Event listener for the left arrow: move carousel left if not at the start
    leftArrow.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });
  
    // Event listener for the right arrow: move carousel right if not at the end
    rightArrow.addEventListener("click", () => {
      if (currentIndex < items.length - 1) {
        currentIndex++;
        updateCarousel();
      }
    });
  
    // Initial update to set the correct starting position
    updateCarousel();
  
    // Update carousel on window resize to maintain correct positioning
    window.addEventListener("resize", updateCarousel);
  });
  
  //
  //                           POP UP
  //
  // New JavaScript for popup functionality
  document.addEventListener("DOMContentLoaded", () => {
    const carouselItems = document.querySelectorAll(".carousel-item");
    const popupOverlay = document.querySelector(".popup-overlay-testimony");
    const popupImage = popupOverlay.querySelector("img");
    const closePopup = document.querySelector(".close-popup-testimony");
    const closePopup2 = document.querySelector(".popup-overlay-testimony");
  
    carouselItems.forEach((item) => {
      item.addEventListener("click", () => {
        const imgSrc = item.querySelector("img").src;
        popupImage.src = imgSrc;
        popupOverlay.style.display = "flex";
      });
    });
  
    closePopup.addEventListener("click", () => {
      popupOverlay.style.display = "none";
    });
  
    closePopup2.addEventListener("click", () => {
      popupOverlay.style.display = "none";
    });
  
    popupOverlay.addEventListener("click", (e) => {
      if (e.target === popupOverlay) {
        popupOverlay.style.display = "none";
      }
    });
  });
  