chrome.storage.sync.get(['solve'], function(result) {
  if (result.solve) {
    solveEquation();
  }
});

if (window.location.pathname === '/solving-correct') {
  const successButton = document.querySelector('body > div.login-form-bg.h-100 > div > div > div > div > div > div > form > div > a');
  successButton.click();
}

function solveEquation() {
  const waitReady = setInterval(() => {
    const active = document.querySelector('#SubmitButton1');
    if (active?.style?.display !== 'none') {
      clearInterval(waitReady);
      const equation = document.querySelector('#blinkz > h4').innerHTML;

      if (equation) {
        const inputSolution = document.querySelector('#main-wrapper > div.content-body > div > div.row > div > div > div > form > div > div > div > input');
        inputSolution.value = eval(equation);
        active.click();
        return;
      }
    }
  }, 30000);
}

// document.getElementById('submitButton').disabled = null;
// document.getElementById('submitButton').type = "hidden";
// document.getElementById('submitButton').style.display = "none";
// document.getElementById("SubmitButton1").style.display = "block";
// document.getElementById("ans1").style.display = "block";
// document.getElementById("ans2").style.display = "block";
// document.getElementById("ans3").style.display = "block";
// document.getElementById("blinkz").style.display = "block";
// document.getElementById("tempblinkz").style.display = "none";