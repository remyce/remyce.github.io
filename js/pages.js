//draggable content board
$( function() {
  $( "img").draggable({ containment: "#containment-wrapper", scroll: false, snap: true, refreshPositions: true});
} );

//Setup
$('.projects img').randomOrder(false);
$('.projects img').draggable({stack: "img"});
