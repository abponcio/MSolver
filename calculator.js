(function() {
  window.waitReady = setInterval(() => {
    const active = document.querySelector('#SubmitButton1');
    if (active?.style?.display !== 'none') {
      clearInterval(waitReady);
      solveEquation(active);
    }
  }, 2000);

  const solveEquation = (button) => {
    const equation = document.querySelector('#blinkz > h4').innerHTML;
    const inputSolution = document.querySelector('#main-wrapper > div.content-body > div > div.row > div > div > div > form > div > div > div > input');
    inputSolution.value = eval(equation);
    button.click();
  }
})();