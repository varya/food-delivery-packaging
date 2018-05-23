(function($) {
    "use strict"; // Start of use strict
  
    $('.inner-gallery').each(function(i, gal) {
        var $gal = $(gal);
        var galleryId = $gal.data('gallery');
        var url = siteBaseUrl + '/photos/' + galleryId + '/';
        $.get(url, function(data) {
            $gal.html(data);
        })
    })
  
  })(jQuery); // End of use strict