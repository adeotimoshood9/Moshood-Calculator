let display = document.getElementById("display");

   function appendValue(value) {
  if (!isOn) return;

  // If result is showing and user presses a NUMBER, clear first
  if (justCalculated && !isNaN(value)) {
    display.value = "";
    justCalculated = false;
  }

  // If user presses an operator after result, continue calculation
  if (justCalculated && isNaN(value)) {
    justCalculated = false;
  }

  display.value += value;
}


    function clearDisplay() {
        if (!isOn) return;

      display.value = "";
    }

     function calculate() {
  if (!isOn) return;

  try {
    display.value = eval(display.value);
    justCalculated = true;
  } catch {
    display.value = "Error";
  }
}

    let isOn = true;

function togglePower() {
  isOn = !isOn;

  if (!isOn) {
    display.value = "";
    display.placeholder = "OFF";
  } else {
    display.placeholder = "";
  }
}

let holdInterval;
let holdTimeout;

function startHold(value) {
  if (!isOn) return;

  // Add once immediately
  appendValue(value);

  // Start repeating ONLY if user keeps holding
  holdTimeout = setTimeout(() => {
    holdInterval = setInterval(() => {
      appendValue(value);
    }, 120);
  }, 300); // delay before repeat starts
}

function stopHold() {
  clearTimeout(holdTimeout);
  clearInterval(holdInterval);
}

let justCalculated = false;




