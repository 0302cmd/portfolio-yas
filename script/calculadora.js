function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  var display = document.getElementById('display');
  var result = eval(display.value);
  display.value = result;
}