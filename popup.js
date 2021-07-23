document.addEventListener("DOMContentLoaded", () => {
  const status = document.getElementById('status');
  chrome.storage.sync.get(['solve'], function(result) {
    status.innerText = result.solve ? 'Running' : 'Not started';
  });

  const startSolving = document.getElementById('start_problem');
  const stopSolving = document.getElementById('stop_problem');

  startSolving.onclick = function() {
    chrome.storage.sync.set({solve: true}, function() {
      status.innerText = 'Running';
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {file: 'calculator.js'});
      });
    });
    
  };

  stopSolving.onclick = function() {
    chrome.storage.sync.set({solve: false}, function() {
      status.innerText = 'Not started';
      if (window.waitReady) {
        clearInterval(window.waitReady);
        alert('Process stopped');
      }
    });
  };
});