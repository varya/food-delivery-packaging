(function($) {
    "use strict"; // Start of use strict
  
    $('.inner-gallery').each(function(i, gal) {
        var $gal = $(gal);
        var galleryId = $gal.data('gallery');
        $.get('../photos/' + galleryId + '', function(data) {
            $gal.html(data);
        })
    })
  
  })(jQuery); // End of use strict