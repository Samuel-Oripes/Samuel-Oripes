const inputPrimeiroNome = document.querySelector("#input-primeiro-nome")
const inputSegundoNome = document.querySelector("#input-segundo-nome")
const inputEmail = document.querySelector(".input-email")
const textarea = document.querySelector("#textarea")

const mensagemAlertaNome = document.querySelector(".paragrafo-alerta-nome")
const mensagemAlertaSobrenome = document.querySelector(".paragrafo-alerta-sobrenome")
const mensagemAlertaEmail = document.querySelector(".paragrafo-alerta-email")
const mensagemAlertaConsulta = document.querySelector(".paragrafo-alerta-consulta")
const mensagemAlertaTextarea = document.querySelector(".paragrafo-alerta-textarea")

function inputNomeVasio(){
    
    if(inputPrimeiroNome.value.length < 3){
        inputPrimeiroNome.style.border = "1px solid #D94747";
        mensagemAlertaNome.style.display = "block"

    } else{
        inputPrimeiroNome.style.border = "1px solid #86A2A5";
        mensagemAlertaNome.style.display = "none"
    }
}

function inputSobrenomeVasio(){

    if(inputSegundoNome.value.length < 3){
        inputSegundoNome.style.border = "1px solid #D94747";
        mensagemAlertaSobrenome.style.display = "block"

    } else{
        inputSegundoNome.style.border = "1px solid #86A2A5";
        mensagemAlertaSobrenome.style.display = "none"
    }
}