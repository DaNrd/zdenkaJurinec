var imageCount = 21;
var returnImageDiv = "";
for (var i = imageCount; 0 < i; i--){
	var imageDiv = "<div class=\"grid-item\"><img src=\"/assets/images/work/" + i + ".jpg\"></div>";
	returnImageDiv += imageDiv;
}
$('.grid').html(returnImageDiv);
var $grid = $('.grid').masonry({
	itemSelector: '.grid-item',
	gutter: 10,
});
	// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
	$grid.masonry('layout');
});
