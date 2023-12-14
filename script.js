const buttonsContainer = document.getElementById('buttons-container');
let previousOperation = document.getElementById('previous-operation');
let result = document.getElementById('result');
let calStatus = false;

function appendValue(value) {
  if(calStatus === true){
    clearResult();
    calStatus = false;
  }
  result.value += value;
}

function calculate() {
  try {
    previousOperation.value = result.value;
    result.value = eval(result.value);
    calStatus = true;
  } catch (error) {
    result.value = 'Error';
    calStatus = true;
  }
}


function clearResult() {
  result.value = '';
  previousOperation.value = '';
}

function deleteChar() {
  result.value = result.value.slice(0, -1);
}