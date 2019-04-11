var etches = "";
var mainCont = $(".mainContainer").width();
var pixels = 70; 
// this will be from user input, but given a default val later

for(var i = 0; i <= mainCont/16; i++) {
		etches += `<div class="etches"></div>`;
	
}

$(".mainContainer").append(etches);
// use js to add styling after creation.. or use $("document").ready() approach
// legit need to make the action trigger on mouse event..