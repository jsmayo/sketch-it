var etches = "";
var mainCont = $(".mainContainer").width();
var pixels = 70; 
// this will be from user input, but given a default val later

for(var i =0; i <= mainCont/pixels; i++) {
		etches += '<div class="etches"></div>';
	
}

$(".mainContainer").append(etches);
// use js to add styling after creation.. or use $("document").ready() approach