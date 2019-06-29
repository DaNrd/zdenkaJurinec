var imageCount = 34;
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

$(document).ready(function(){
	var lang = navigator.userLanguage || navigator.language;
	if (lang != "hr") {
		$('#workButton').text("Work");
		$('#aboutButton').text("About");
		$('#aboutZdenka').text("About Zdenka");
		$('#aboutZdenkaParagraph').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque velit massa, nec interdum leo interdum ac. Donec ornare diam nec massa convallis, gravida viverra ante sagittis. Nullam sagittis ullamcorper mi ut suscipit. Curabitur vel vestibulum nisi, eu egestas enim.");
		$('#footerText').html("Site design by <a class=\"link\" href=\"http://aaron.keydesign.com\" target=\"_\">Aaron Campbell</a>");
	} else {
		$('#workButton').text("Radovi");
		$('#aboutButton').text("Biografija");
		$('#aboutZdenka').text("O Zdenki");
		$('#aboutZdenkaParagraph').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque velit massa, nec interdum leo interdum ac. Donec ornare diam nec massa convallis, gravida viverra ante sagittis. Nullam sagittis ullamcorper mi ut suscipit. Curabitur vel vestibulum nisi, eu egestas enim.");
		$('#footerText').html("Webstranicu je dizajnirao <a class=\"link\" href=\"http://aaron.keydesign.com\" target=\"_\">Aaron Campbell</a>");
	}
});
