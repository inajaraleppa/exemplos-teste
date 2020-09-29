// ██      ██ ██████      ██████  ██████   ██████  ██████  ██████  ██  █████  
// ██      ██ ██   ██     ██   ██ ██   ██ ██    ██ ██   ██ ██   ██ ██ ██   ██ 
// ██      ██ ██████      ██████  ██████  ██    ██ ██████  ██████  ██ ███████ 
// ██      ██ ██   ██     ██      ██   ██ ██    ██ ██      ██   ██ ██ ██   ██ 
// ███████ ██ ██████      ██      ██   ██  ██████  ██      ██   ██ ██ ██   ██ 
                                                                           
// Nossa lib manual

function assertCase(assertionName, assertionFunction) {

  var assertionResult = assertionFunction(function(assertion) {
    if (!assertion) {
      alert("FAILED:" + assertionName);
    }
  });

  // if (!assertionResult) {
  //     alert("Test:" + assertionName + " is failing");
  // }
  clearState();
}

// ██   ██ ███████ ██      ██████  ███████ ██████  ███████ 
// ██   ██ ██      ██      ██   ██ ██      ██   ██ ██      
// ███████ █████   ██      ██████  █████   ██████  ███████ 
// ██   ██ ██      ██      ██      ██      ██   ██      ██ 
// ██   ██ ███████ ███████ ██      ███████ ██   ██ ███████ 
//                                                      
// Funções (relacionadas às minhas regras de negócio) para ajudar nos testes   
                                                        
function clickButton(buttonValue) {
  var button = document.querySelectorAll("[type=button][value='" + buttonValue + "']")[0];
  button.click();
}

function getDisplayValue() {
  var display = document.querySelectorAll("#visor")[0];
  return display.value;
}

function clearState() {
  document.querySelectorAll("#visor")[0].value = '';
}


// ████████ ███████ ███████ ████████ ███████ ███████ 
//    ██    ██      ██         ██    ██      ██      
//    ██    █████   ███████    ██    █████   ███████ 
//    ██    ██           ██    ██    ██           ██ 
//    ██    ███████ ███████    ██    ███████ ███████ 
//                                                   

alert("Testes V2: Rodando")
//Caso de teste para click no botão 9
assertCase('When I Click button 9 the value 9 should be displayed', function(assert) {
  clickButton('9');
  assert(getDisplayValue() == '9');
});

assertCase('When I Click button 7 with 9 on the display the value 97 should be displayed', function(assert) {
  clickButton('9');
  assert(getDisplayValue() == '9');
  clickButton('7');
  assert(getDisplayValue() == '97');
});

// Testando que soma corretament
// Caso de teste para click no botão 9        
assertCase('9 + 6 should be 15', function(assert) {
  clickButton('9')
  clickButton('+')
  clickButton('6')
  clickButton('=')
  assert(getDisplayValue() == '15');
});

alert("Testes V2: ACABOOOOUUU")