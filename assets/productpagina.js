$(document).ready(function() {
  
    // Lightbox
    $("#product-gallery").lightGallery({
      caption : true,
      counter : true,
      lang : { allPhotos: 'Alle afbeeldingen' },
      loop : true
    }); 
    
    // Main image switchen
    $('.main-img a').not('.main-img a:first-child').hide();
  
    $('ul#thumbs li a').click(function(){
      $('.main-img a').hide();
      currentItem = $(this).attr("class");
      $('.main-img a.' + currentItem).show();
      return false;
    });
  
  });
  
  function appointmentButton() {
    var form = document.getElementById('afspraak-container');
    form.classList.toggle("in");
  }
  
  function offerButton() {
    var form = document.getElementById('offerte-container');
    form.classList.toggle("in");
  }