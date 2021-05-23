// number count for stats, using jQuery animate

$('.counting').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');

  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 3000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });


});

// external js: flickity.pkgd.js

var $carousel = $('.carousel').flickity({
  cellSelector: 'img',
  imagesLoaded: true,
  percentPosition: false,
  wrapAround: true,
});
var $caption = $('.caption');
// Flickity instance
var flkty = $carousel.data('flickity');

$carousel.on( 'select.flickity', function() {
  // set image caption using img's alt
  $caption.text( flkty.selectedElement.alt )
});
