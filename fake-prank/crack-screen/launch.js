chrome.app.runtime.onLaunched.addListener(function(){
  chrome.app.window.create('app.html', {
    state: "fullscreen",
    visibleOnAllWorkspaces: true
  });  
})
