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
  // check if notifications are supported
  if (!("Notification" in window)){
    console.log("Not So Simple: Chrome Extension\nThis browser does not support notifications.");
  }else if (Notification.permission === "granted"){// check if notifications have been granted
    simpleNotifyUser();// call the notification
  }else if (Notification.permission !== "denied"){
    // if notifications have not been denied, ask for
    // permission
    Notification.requestPermission(function (permission){
      if (permission === "granted"){
        simpleNotifyUser();// call notification if permission was granted
      }
    });
  }
}

// function to build notification
function simpleNotifyUser(){
  var notifyTitle = "Not So Friendly";// titile
  var options = {// options, just the message body
    body: "It appears this might not be beginner friendly, I counted "+simplys+" instances of the word 'simply'."
  };
  // declaring this variable sends the notification to the browser
  var notification = new Notification(notifyTitle,options);
}
