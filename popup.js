document.addEventListener("DOMContentLoaded", () => {

  chrome.storage.sync.get(['solve'], function(result) {
    const status = document.getElementById('status');
    status.innerText = result.solve ? 'Running' : 'Not started';
  });

  const startSolving = document.getElementById('start_problem');
  const stopSolving = document.getElementById('stop_problem');

  startSolving.onclick = function() {
    chrome.storage.sync.set({solve: true}, function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {file: 'calculator.js'});
      });
    });
    
  };

  stopSolving.onclick = function() {
    chrome.storage.sync.set({solve: false}, function() {
      if (window.waitReady) {
        clearInterval(window.waitReady);
        alert('Process stopped');
      }
    });
  };
});