var pageBody = document.body;
// initialize empty counter for the word 'simply'
var simplys = 0;

// call findAndReplaceDOMText function
findAndReplaceDOMText(pageBody, {
	find: /\bsimply\b/ig,// find case-insensitive word 'simply'
	replace: function(portion) {
		var el = document.createElement('span');// create new span element
    el.className = 'notSoSimple';// assign highlighted class
		el.innerHTML = portion.text;// insert found word
    simplys++;// increment our counter
		return el;// return the new DOM element
	}
});

// if we have one or more simplys
if (simplys > 0) {
  chrome.runtime.sendMessage({simplys: simplys});
}

