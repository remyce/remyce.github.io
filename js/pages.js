//draggable content board
$( function() {
  $( "img").draggable({ containment: "#containment-wrapper", scroll: false, snap: true, refreshPositions: true});
} );


//random position project images
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 2)) + min;
}

$.fn.randomOrder = function(animate) {
  this.each(function() {
    var image = $(this);

    // Viewport Dimensions
    var contentHeight = $('.content').height();
    var contentWidth = $('.content').width();

    // Image Position
    var xPos = getRandomInt(0, contentWidth - 500 - image.width());
    var yPos = getRandomInt(0, contentHeight - 300 - image.height());
    var zIndex = getRandomInt(0,13);

    // Animation Duration
    if(animate) var dur = 100;
    else var dur = 0;

    image.animate({left: xPos, top: yPos, 'z-index': zIndex}, dur);
  });
};

//Setup
$('.projects img').randomOrder(false);
$('.projects img').draggable({stack: "img"});

// Change after 5 Seconds
window.setInterval(function(){
  $('.projects img').randomOrder(true);
}, 5000);
