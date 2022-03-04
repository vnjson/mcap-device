// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {

	window.addEventListener("message", event=>{

        $('#puzzle-wrapper').crossword(event.data.data);
	});
})(jQuery)