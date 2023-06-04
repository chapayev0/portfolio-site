$(document).ready(function(){
            
    $(".owl-carousel").owlCarousel({
      
      items: 1, // Number of items to display
      loop: true, // Loop through the slides
      nav: true, // Display navigation arrows
      dots: true, // Display navigation dots
      autoplay: true, // Autoplay the carousel
      autoplayTimeout: 3000 // Autoplay interval in milliseconds
    });
    
    document.getElementById("emailForm").reset();
  });