// ████████ ███████ ███████ ████████ ███████ ███████ 
//    ██    ██      ██         ██    ██      ██      
//    ██    █████   ███████    ██    █████   ███████ 
//    ██    ██           ██    ██    ██           ██ 
//    ██    ███████ ███████    ██    ███████ ███████ 
//                                                   

alert("Testes V1 : Rodando")

//Caso de teste para click no botão 9
document.querySelectorAll("#visor")[0].value = '';

document.querySelectorAll("[type=button][value='9']")[0].click();

let valorDisplay = document.querySelectorAll("#visor")[0].value;

if (valorDisplay != '9') {
  alert(`ERRO: Valor visor deveria ser 9 e na verdade é ${valorDisplay}`);
}

//Caso de teste para numeros > 10
//Preciso apagar o display
document.querySelectorAll("#visor")[0].value = '';

document.querySelectorAll("[type=button][value='3']")[0].click();
document.querySelectorAll("[type=button][value='5']")[0].click();

valorDisplay = document.querySelectorAll("#visor")[0].value;

if (valorDisplay != '35') {
  alert(`ERRO: Valor visor deveria ser 35 e na verdade é ${valorDisplay}`);
}

//Caso de teste para limpar o visor
document.querySelectorAll("#visor")[0].value = '';

document.querySelectorAll("[type=button][value='5']")[0].click();

valorDisplay = document.querySelectorAll("#visor")[0].value;

if (valorDisplay != '5') {
  alert(`ERRO: Valor visor deveria ser 5 e na verdade é ${valorDisplay}`);
}

document.querySelectorAll("[type=button][value='C']")[0].click();

if (valorDisplay != '') {
  alert(`ERRO: O valor do visor não foi redefinido com sucesso.`);
}

alert("Testes V1 : Acabou")
