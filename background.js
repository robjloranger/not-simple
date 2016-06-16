chrome.runtime.onMessage.addListener(
  function(simplys){
    // check if notifications are supported
    if (!("Notification" in window)){
      console.log("Not So Simple: Chrome Extension\nThis browser does not support notifications.");
    }else{
      simpleNotifyUser(simplys);
    }
  }
);


// function to build notification
function simpleNotifyUser(simplys){
  var notifyTitle = "Not So Friendly";// titile
  var options = {// options, just the message body
    body: "It appears this might not be beginner friendly, I counted "+simplys+" instances of the word 'simply'."
  };
  // declaring this variable sends the notification to the browser
  var notification = new Notification(notifyTitle,options);
}
