

$(document).ready(function() {
    // Add click event listener to all shop-galery-controls
    $('.shop-galery-control').click(function() {
      // Remove promo-active class from all controls and images
      $('.promo-active').removeClass('promo-active');
      // Add promo-active class to the clicked control
      $(this).addClass('promo-active');
      // Get the ID of the clicked control
      var controlID = $(this).attr('id');
      // Find the corresponding image and add promo-active class
      $('#' + controlID.replace('shop-promo', 'shop-promo-image')).addClass('promo-active');
    });
  });