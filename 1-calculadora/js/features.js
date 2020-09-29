
//This gets the numbers/period setted in the button when is clicked.
function insertElement(obj) {
  var addValues = document.getElementById('visor').value;
  document.getElementById('visor').value = addValues + obj;
}

//This gets the value of clicked button("+" or "-" or "x" or "/")
function operator(oper) {
  var operation = document.getElementById('visor').value;
  document.getElementById('visor').value = operation + oper + " "; //This corrects the bug of split (pt1)
}

//It will clean the "visor"
function ce() {
  setDisplayValue("dfd");
}

//Calculation
function calculate() {
  //This corrects the bug of split (pt2)
  var partialValues = document.getElementById('visor').value; //Get the operator and split by the ''
  var finalValues = partialValues.split(' ');
  var result = 0;
  switch(finalValues[1]) {
    case 'x':
      result = parseFloat(finalValues[0]) * parseFloat(finalValues[2]);
      break;
    case '/':
      result = parseFloat(finalValues[0]) / parseFloat(finalValues[2]);
      break;
    case '+':
      result = parseFloat(finalValues[0]) + parseFloat(finalValues[2]);
      break;
    case '-':
      result = parseFloat(finalValues[0]) - parseFloat(finalValues[2]);
      break;
  }

  //Validating if the "result" has a value
  var validation = document.getElementById('visor').value;
  if (validation == "") {
    alert("The result is null. Please, try again.");
    return false;
  }
  //Throwing the result to the "visor"
  document.getElementById('visor').value = result;
  return true;
}
