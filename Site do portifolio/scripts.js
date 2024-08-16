const divHoverVelha = document.querySelector("#div-hover-velha")
const divHoverCalculadora = document.querySelector("#div-hover-calculadora")
const divHoverFormulario = document.querySelector("#div-hover-formulario")

function entradaDoMouse(projeto){

    if(projeto == 'velha'){
        divHoverVelha.style.visibility = "visible"
    }
    if(projeto == 'calculadora'){
        divHoverCalculadora.style.visibility = "visible"
    }
    if(projeto == 'formulario'){
        divHoverFormulario.style.visibility = "visible"
    }
}

function saidaDoMouse(projeto){

    if(projeto == 'velha'){
        divHoverVelha.style.visibility = "hidden"
    }
    if(projeto == 'calculadora'){
        divHoverCalculadora.style.visibility = "hidden"
    }
    if(projeto == 'formulario'){
        divHoverFormulario.style.visibility = "hidden"
    }
}

const input1 = document.querySelector("#input1")
const input2 = document.querySelector("#input2")
const textarea = document.querySelector("#textarea-footer")
const enviar = document.querySelector(".enviar-mensagem")
const footer = document.querySelector("#footer")

const animacaoScroll = new IntersectionObserver( (dados) => {

    dados.forEach((dado) => {

        if(dado.isIntersecting === true){

            setInterval(()=>{
                input1.style.right = "0px"
            }, 400);
    
            setInterval(()=>{
                input2.style.right = "0px"
            }, 700);
    
            setInterval(()=>{
                textarea.style.right = "0px"
            }, 1000);
            setInterval(()=>{
                enviar.style.right = "0px"
            }, 1300);
        }
    })
})

animacaoScroll.observe(footer)

const html = document.querySelector("#html")
const css = document.querySelector("#css")
const js = document.querySelector("#js")
const resp = document.querySelector("#resp")
const nav = document.querySelector(".nav")

const efeitoEscrever = new IntersectionObserver( (valores) => {

    valores.forEach((valor) => {

        if(valor.isIntersecting === true){

            html.style = `
                animation-play-state: running;
            `
        }
    })
})

efeitoEscrever.observe(nav)