document.addEventListener("DOMContentLoaded", () => {
  const logInput = document.getElementById("logInput");
  const logResult = document.getElementById("logResult");

  const powerInput = document.getElementById("powerInput");
  const powerResult = document.getElementById("powerResult");

  // Log Base 2 Calculation
  logInput.addEventListener("input", () => {
    const value = parseFloat(logInput.textContent);
    if (value > 0) {
      result = Math.log2(value);
      if (result % 1 !== 0){
        result = result.toFixed(2);
      }
      logResult.textContent = result;
    } else {
      logResult.textContent = " ";
    }
  });

  // Power of 2 Calculation
  powerInput.addEventListener("input", () => {
    const value = parseInt(powerInput.textContent);
    if (!isNaN(value)) {
      powerResult.textContent = Math.pow(2, value);
    } else {
      powerResult.textContent = " ";
    }
  });

});
