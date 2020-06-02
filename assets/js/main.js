var imageCount = 40;
var returnImageDiv = "";
var messageEngOne = "<p>My first introduction to painting was my mom. She was a hobbyist painter, who often sketched and studied famous paintings from postcards. She encouraged me and my sister to paint often and do our best in art class at school. In elementary school, my professor took us to a large theater in Zagreb to paint. </p>\
<p>My next painting milestone was during one summer vacation. We went to a camp that had an academic painter who went to olive gardens with their easel and oil paints in the morning to draw the seas and islands. We kids watched and drew along with him, like some sort of painting colony. </p>"
var messageEngTwo = "<p>In the following years, my sister Dunja and I would often paint by the sea for fun. One summer, I was in England visiting a pen-pal friend who attended an art school and needed to create a big number of paintings. I went with her for 7 days on foot around an island in Scotland where she drew landscapes and I observed. </p>\
<p>I decided to become an architect, studying at the Zagreb University, Faculty of Architecture where I learned the freehand drawing of buildings. After my studies, I did not draw freehand so much. My drawing became more technical; often drawing with a ruler. For the first ten years of my career, I worked as an architect. I then  acquired an educational degree and taught subjects related to the architectural profession at a school. During this period my sister Dunja and I took an oil painting course led by an academic painter. </p>\
<p>Upon retirement in my later years, at the urging of my daughter Lidija, I enrolled again in a painting course that taught a variety of techniques under the guidance of academic painters. Within this group, the \"Angelico Art Association\", I was more intensively involved in painting for about 4 years and I had the opportunity to participate in numerous exhibitions. My paintings were often on the covers of catalogs and were frequently sought after; often used to represent the association through donations to public spaces. At the recommendation of my daughter Lidija, I received a commission from the Viennese branch of Opus Dei to paint three oil paintings for their chapel and 10 pictures of roses for the decoration of their office, which I am very proud of. </p>\
<p>After relocating to Varaždin, my collaboration with LUA Angelico was terminated; but I continue to paint images of Varaždin for myself. My only remaining mentor now is my husband Anton, who has a keen eye for corrections in pictures. </p>\
<p>In Zagreb, I used to live near an art pavilion, where I often visited art exhibitions, and here in Varaždin I also receive invitations for art exhibitions. \
<p>My three daughters also chose fine arts. Ksenija works as an independent designer, Lidija works as an architect, and Antonija works as a design consultant with her husband George. My 7 grandchildren also draw beautifully. </p>\
<p></p>\
<p>Written By: Zdenka Jurinec, Engineer of Architecture</p>"
var messageCroOne = "<p>Prva informacija o slikarstvu u mom životu došla je od moje mame kada su moje tete hvalile sliku “Proljeće” ulje na platnu koju je naslikala moja mama. Ona je takodjer skupljala razglednice sa umjetničkim djelima i na nekima od njih bio je iscrtan raster mreže okomitih linija jer je ona precrtavala te slike. Poticala je mene i sestru da slikamo što bolje za predmet “crtanje” u školi. U osnovnoj školi moja profesorica nas je odvela pred veliko kazalište u Zagrebu na slikanje i tom prilikom neki novinar je snimio mene u prvom planu i drugi dan sam bila u novinama. </p>\
<p>Sljedeći susret sa slikarstvom bio je na ljetovanju gdje je u kampu sa nama bio i jedan akademski slikar, koji je sa štafelajem i uljanim bojama odlazio jutrom u maslinike i odatle crtao vedute mora i otoka. Mi dijeca smo to promatrali i crtali uz njega kao nekakva slikarska kolonija. Sljedećih godina moja sestra Dunja i ja često bi uz more slikale za zabavu. Jednog ljeta bila sam u posjeti u Engleskoj, kod pen-pall prijateljice koja je pohadjala školu za umjetnost i trebala izraditi izvjesan broj zadanih slika pa sam ja uz nju išla 7 dana pješke okolo jednog otoka u Škotskoj, gdje smo crtale pejzaže i tu sam imala priliku promatrati. Na prijemnom ispitu za arhitektonski fakultet, jedini predmet bio je prostoručno crtanje zgrada po volji, a bio je to i nastavni predmet kasnije na studiju. </p>"
var messageCroTwo = "<p>Nakon studija nisam više toliko crtala prostoručno, vec je moje crtanje prešlo u tehničko crtanje uz ravnalo. Prvih deset godina radnog staža radila sam ko arhitekt-projektant, a zatim sam se prekvalificirala za prosvjetno zvanje i do kraja radnog staža sam predavala u školi predmete vezane uz arhitektonsku struku. U tom periodu pohadjala sam sa svojom sestrom Dunjom tečaj “ulje na platnu” pod vodstvom akademskog slikara. </p>\
<p>Po odlasku u mirovinu u poznim godinama ponovno sam se, na nagovor moje kćeri Lidije, upisala na tečaj slikanja u raznim tehnikama, pod vodstvom akademskih slikarica. U okviru te grupe “Likovna udruga Angelico” intenzivnije sam se bavila slikanjem cca 4 godine i tu sam imama prilike sudjelovati na brojnim izložbama, a moje su slike često bile na naslovnicama kataloga i često su bile tražene kao reprezentativna donacija od strane udruge. Na preporuku moje kceri Lidije dobila sam angažman od beckog ogranka Opus Dei da naslikam tri slike ulje na platnu za njihovu kapelicu te 10 slika ruža za uredjenje njihovog ureda, na što sam ukupno veoma ponosna. </p>\
<p>Sa preseljenjem iz Zagreba u Varaždin prekinuta je suradnja sa LUA Angelico i tu sad slikam “za sebe” samostalno uglavnom vedute Varaždina. Jedini preostali mentor mi je sada moj suprug Anton, koji ima oštro oko za ispravke na slikama. </p>\
<p>U Zagrebu sam stanovala blizu umjetnickog paviljona gdje sam često posjećivala likovne izložbe, a ovdje u Varaždinu takodjer primam pozivnice za likovne izložbe. Moje tri kćeri takodjer su izabrale likovna zanimanja, Ksenija dizajn, Lidija arhitekturu i Antonija dizajn, koja se čak i udala za Georgea dizajnera. Mojih 7 unuka takodjer lijepo crta. </p>\
\
<p>Sastavila Zdenka Jurinec dipl.ing.arh</p>"

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
		$('#aboutZdenkaParagraphOne').html(messageEngOne);
		$('#aboutZdenkaParagraphTwo').html(messageEngTwo);
		$('#footerText').html("Site design by <a class=\"link\" href=\"http://aaron.keydesign.com\" target=\"_\">Aaron Campbell</a>");
	} else {
		$('#workButton').text("Radovi");
		$('#aboutButton').text("Biografija");
		$('#aboutZdenka').text("Slikarstvo u mom životu");
		$('#aboutZdenkaParagraphOne').html(messageCroOne);
		$('#aboutZdenkaParagraphTwo').html(messageCroTwo);
		$('#footerText').html("Webstranicu je dizajnirao <a class=\"link\" href=\"http://aaron.keydesign.com\" target=\"_\">Aaron Campbell</a>");
	}
});
