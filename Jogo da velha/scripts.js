const jogo = document.querySelector(".jogo")

const input1 = document.querySelector("#input1")
const input2 = document.querySelector("#input2")
const input3 = document.querySelector("#input3")
const input4 = document.querySelector("#input4")
const input5 = document.querySelector("#input5")
const input6 = document.querySelector("#input6")
const input7 = document.querySelector("#input7")
const input8 = document.querySelector("#input8")
const input9 = document.querySelector("#input9")

const inputEmpate1 = document.querySelector("#input-empate1")
const inputEmpate2 = document.querySelector("#input-empate2")
const inputEmpate3 = document.querySelector("#input-empate3")
const inputEmpate4 = document.querySelector("#input-empate4")
const inputEmpate5 = document.querySelector("#input-empate5")
const inputEmpate6 = document.querySelector("#input-empate6")
const inputEmpate7 = document.querySelector("#input-empate7")
const inputEmpate8 = document.querySelector("#input-empate8")
const inputEmpate9 = document.querySelector("#input-empate9")

const img1 = document.querySelector("#img1")
const img2 = document.querySelector("#img2")
const img3 = document.querySelector("#img3")
const img4 = document.querySelector("#img4")
const img5 = document.querySelector("#img5")
const img6 = document.querySelector("#img6")
const img7 = document.querySelector("#img7")
const img8 = document.querySelector("#img8")
const img9 = document.querySelector("#img9")

const pontuaPartida = document.querySelector(".pontua-a-partida")
const deuVelha = document.querySelector("#deu-velha")

const imgTurno = document.querySelector(".imagem-turno")

const divAlerta = document.querySelector(".div-alerta")
const jogadorGanhou = document.querySelector(".paragrafo-alerta")
const vencedor = document.querySelector(".vencedor")
const divVencedor = document.querySelector(".div-vencedor")
const alertaReiniciar = document.querySelector(".alerta-reiniciar")
const fundoEscuro = document.querySelector(".fundo-escuro")

const jogador1 = document.querySelector("#jogador1")
const jogador2 = document.querySelector("#jogador2")

let placar1 = 0
let placar2 = 0
let verificar = 0

function empate(valor) {

    if (valor == 1) {

        inputEmpate1.checked = true
    }

    if (valor == 2) {

        inputEmpate2.checked = true
    }

    if (valor == 3) {

        inputEmpate3.checked = true
    }

    if (valor == 4) {

        inputEmpate4.checked = true
    }

    if (valor == 5) {

        inputEmpate5.checked = true
    }

    if (valor == 6) {

        inputEmpate6.checked = true
    }

    if (valor == 7) {

        inputEmpate7.checked = true
    }

    if (valor == 8) {

        inputEmpate8.checked = true
    }

    if (valor == 9) {

        inputEmpate9.checked = true
    }

}

function marcar(valor) {

    if (valor == 1) {

        if (input1.value == "clicar") {

            if (verificar % 2 == 0) {

                imgTurno.src = "./assets/imagem O.png"
                img1.src = "./assets/icon-x.svg"
                verificar += 1
                input1.value = "x"

            } else {
                imgTurno.src = "./assets/imagem X.png"
                img1.src = "./assets/icon-o.svg"
                verificar += 1
                input1.value = "o"
            }
        }
        vitoria()
    }

    if (valor == 2) {

        if (input2.value == "clicar") {

            if (verificar % 2 == 0) {

                imgTurno.src = "./assets/imagem O.png"
                img2.src = "./assets/icon-x.svg"
                verificar += 1
                input2.value = "x"

            } else {
                imgTurno.src = "./assets/imagem X.png"
                img2.src = "./assets/icon-o.svg"
                verificar += 1
                input2.value = "o"
            }
        }
        vitoria()
    }

    if (valor == 3) {

        if (input3.value == "clicar") {

            if (verificar % 2 == 0) {

                imgTurno.src = "./assets/imagem O.png"
                img3.src = "./assets/icon-x.svg"
                verificar += 1
                input3.value = "x"

            } else {
                imgTurno.src = "./assets/imagem X.png"
                img3.src = "./assets/icon-o.svg"
                verificar += 1
                input3.value = "o"
            }
        }
        vitoria()
    }

    if (valor == 4) {

        if (input4.value == "clicar") {

            if (verificar % 2 == 0) {

                imgTurno.src = "./assets/imagem O.png"
                img4.src = "./assets/icon-x.svg"
                verificar += 1
                input4.value = "x"

            } else {
                imgTurno.src = "./assets/imagem X.png"
                img4.src = "./assets/icon-o.svg"
                verificar += 1
                input4.value = "o"
            }
        }
        vitoria()
    }

    if (valor == 5) {

        if (input5.value == "clicar") {

            if (verificar % 2 == 0) {

                imgTurno.src = "./assets/imagem O.png"
                img5.src = "./assets/icon-x.svg"
                verificar += 1
                input5.value = "x"

            } else {
                imgTurno.src = "./assets/imagem X.png"
                img5.src = "./assets/icon-o.svg"
                verificar += 1
                input5.value = "o"
            }
        }
        vitoria()
    }

    if (valor == 6) {

        if (input6.value == "clicar") {

            if (verificar % 2 == 0) {

                imgTurno.src = "./assets/imagem O.png"
                img6.src = "./assets/icon-x.svg"
                verificar += 1
                input6.value = "x"

            } else {
                imgTurno.src = "./assets/imagem X.png"
                img6.src = "./assets/icon-o.svg"
                verificar += 1
                input6.value = "o"
            }
        }
        vitoria()
    }

    if (valor == 7) {

        if (input7.value == "clicar") {

            if (verificar % 2 == 0) {

                imgTurno.src = "./assets/imagem O.png"
                img7.src = "./assets/icon-x.svg"
                verificar += 1
                input7.value = "x"

            } else {
                imgTurno.src = "./assets/imagem X.png"
                img7.src = "./assets/icon-o.svg"
                verificar += 1
                input7.value = "o"
            }
        }
        vitoria()
    }

    if (valor == 8) {

        if (input8.value == "clicar") {

            if (verificar % 2 == 0) {

                imgTurno.src = "./assets/imagem O.png"
                img8.src = "./assets/icon-x.svg"
                verificar += 1
                input8.value = "x"

            } else {
                imgTurno.src = "./assets/imagem X.png"
                img8.src = "./assets/icon-o.svg"
                verificar += 1
                input8.value = "o"
            }
        }
        vitoria()
    }

    if (valor == 9) {

        if (input9.value == "clicar") {

            if (verificar % 2 == 0) {

                imgTurno.src = "./assets/imagem O.png"
                img9.src = "./assets/icon-x.svg"
                verificar += 1
                input9.value = "x"

            } else {
                imgTurno.src = "./assets/imagem X.png"
                img9.src = "./assets/icon-o.svg"
                verificar += 1
                input9.value = "o"
            }
        }
        vitoria()
    }
}

const coresX = `
            background-color: hsl(178, 60%, 48%);
            box-shadow: 0 5px hsl(178, 60%, 28%);
            `

const coresO = `
            background-color: hsl(39, 88%, 58%);
            box-shadow: 0 5px hsl(39, 88%, 48%);
            `
const coresI = `
            background-color: hsl(199, 35%, 19%);
            box-shadow: 0 5px hsl(199, 35%, 10%);
            `

function vitoria() {

    if (input1.value == "x" && input2.value == "x" && input3.value == "x") {

        placar1 += 1
        jogador1.innerHTML = placar1

        input1.style = input2.style = input3.style = coresX
        img1.src = img2.src = img3.src = "./assets/x-vitoria.png"
        mensagemVitoria("x")
    }

    else if (input4.value == "x" && input5.value == "x" && input6.value == "x") {

        placar1 += 1
        jogador1.innerHTML = placar1

        input4.style = input5.style = input6.style = coresX
        img4.src = img5.src = img6.src = "./assets/x-vitoria.png"
        mensagemVitoria("x")
    }

    else if (input7.value == "x" && input8.value == "x" && input9.value == "x") {

        placar1 += 1
        jogador1.innerHTML = placar1

        input7.style = input8.style = input9.style = coresX
        img7.src = img8.src = img9.src = "./assets/x-vitoria.png"
        mensagemVitoria("x")
    }

    else if (input1.value == "x" && input4.value == "x" && input7.value == "x") {

        placar1 += 1
        jogador1.innerHTML = placar1

        input1.style = input4.style = input7.style = coresX
        img1.src = img4.src = img7.src = "./assets/x-vitoria.png"
        mensagemVitoria("x")
    }

    else if (input2.value == "x" && input5.value == "x" && input8.value == "x") {

        placar1 += 1
        jogador1.innerHTML = placar1

        input2.style = input5.style = input8.style = coresX
        img2.src = img5.src = img8.src = "./assets/x-vitoria.png"
        mensagemVitoria("x")
    }

    else if (input3.value == "x" && input6.value == "x" && input9.value == "x") {

        placar1 += 1
        jogador1.innerHTML = placar1

        input3.style = input6.style = input9.style = coresX
        img3.src = img6.src = img9.src = "./assets/x-vitoria.png"
        mensagemVitoria("x")
    }

    else if (input1.value == "x" && input5.value == "x" && input9.value == "x") {

        placar1 += 1
        jogador1.innerHTML = placar1

        input1.style = input5.style = input9.style = coresX
        img1.src = img5.src = img9.src = "./assets/x-vitoria.png"
        mensagemVitoria("x")
    }

    else if (input3.value == "x" && input5.value == "x" && input7.value == "x") {

        placar1 += 1
        jogador1.innerHTML = placar1

        input3.style = input5.style = input7.style = coresX
        img3.src = img5.src = img7.src = "./assets/x-vitoria.png"
        mensagemVitoria("x")
    }

    else if (input1.value == "o" && input2.value == "o" && input3.value == "o") {

        placar2 += 1
        jogador2.innerHTML = placar2

        input1.style = input2.style = input3.style = coresO
        img1.src = img2.src = img3.src = "./assets/o-vitoria.png"
        mensagemVitoria("o")
    }

    else if (input4.value == "o" && input5.value == "o" && input6.value == "o") {

        placar2 += 1
        jogador2.innerHTML = placar2

        input4.style = input5.style = input6.style = coresO
        img4.src = img5.src = img6.src = "./assets/o-vitoria.png"
        mensagemVitoria("o")
    }

    else if (input7.value == "o" && input8.value == "o" && input9.value == "o") {

        placar2 += 1
        jogador2.innerHTML = placar2

        input7.style = input8.style = input9.style = coresO
        img7.src = img8.src = img9.src = "./assets/o-vitoria.png"
        mensagemVitoria("o")
    }

    else if (input1.value == "o" && input4.value == "o" && input7.value == "o") {

        placar2 += 1
        jogador2.innerHTML = placar2

        input1.style = input4.style = input7.style = coresO
        img1.src = img4.src = img7.src = "./assets/o-vitoria.png"
        mensagemVitoria("o")
    }

    else if (input2.value == "o" && input5.value == "o" && input8.value == "o") {

        placar2 += 1
        jogador2.innerHTML = placar2

        input2.style = input5.style = input8.style = coresO
        img2.src = img5.src = img8.src = "./assets/o-vitoria.png"
        mensagemVitoria("o")
    }

    else if (input3.value == "o" && input6.value == "o" && input9.value == "o") {

        placar2 += 1
        jogador2.innerHTML = placar2

        input3.style = input6.style = input9.style = coresO
        img3.src = img6.src = img9.src = "./assets/o-vitoria.png"
        mensagemVitoria("o")
    }

    else if (input1.value == "o" && input5.value == "o" && input9.value == "o") {

        placar2 += 1
        jogador2.innerHTML = placar2

        input1.style = input5.style = input9.style = coresO
        img1.src = img5.src = img9.src = "./assets/o-vitoria.png"
        mensagemVitoria("o")
    }

    else if (input3.value == "o" && input5.value == "o" && input7.value == "o") {

        placar2 += 1
        jogador2.innerHTML = placar2

        input3.style = input5.style = input7.style = coresO
        img3.src = img5.src = img7.src = "./assets/o-vitoria.png"
        mensagemVitoria("o")
    }

    else if (inputEmpate1.checked && inputEmpate2.checked && inputEmpate3.checked && inputEmpate4.checked && inputEmpate5.checked && inputEmpate6.checked && inputEmpate7.checked && inputEmpate8.checked && inputEmpate9.checked == true) {
        placarEmpatado()
    }

    else {
        computador()
    }
}

let placarEmpate = 0

function placarEmpatado() {

    placarEmpate += 1
    deuVelha.innerHTML = placarEmpate
    divAlerta.style.visibility = "visible"
    divAlerta.style.top = "50%"
    divAlerta.style.transform = "translateY(-50%)"
    fundoEscuro.style.visibility = "visible"
    jogadorGanhou.innerHTML = ""
    vencedor.style.display = "none"
    pontuaPartida.innerHTML = "EMPATE"
    divVencedor.style.color = "hsl(198, 23%, 72%)"
}

function mensagemVitoria(valor) {

    divAlerta.style.visibility = "visible"
    divAlerta.style.top = "50%"
    divAlerta.style.transform = "translateY(-50%)"
    fundoEscuro.style.visibility = "visible"

    if (valor == "x") {

        if (modoEscolhido == "pessoa") {

            vencedor.style.display = "block"
            pontuaPartida.innerHTML = "PONTUA A PARTIDA"
            jogadorGanhou.innerHTML = "JOGADOR 1 GANHOU!"
            vencedor.src = "./assets/icon-x.svg"
            divVencedor.style.color = "hsl(178, 60%, 48%)"
        }

        if (modoEscolhido == "cpu") {

            if (timeMudado == "X") {

                vencedor.style.display = "block"
                pontuaPartida.innerHTML = "PONTUA A PARTIDA"
                jogadorGanhou.innerHTML = "VOCÊ GANHOU!"
                vencedor.src = "./assets/icon-x.svg"
                divVencedor.style.color = "hsl(178, 60%, 48%)"
            }

            if (timeMudado == "O") {

                vencedor.style.display = "block"
                pontuaPartida.innerHTML = "PONTUA A PARTIDA"
                jogadorGanhou.innerHTML = "VOCÊ PERDEU!"
                vencedor.src = "./assets/icon-x.svg"
                divVencedor.style.color = "hsl(178, 60%, 48%)"
            }
        }
    }

    if (valor == "o") {

        if (modoEscolhido == "pessoa") {

            vencedor.style.display = "block"
            pontuaPartida.innerHTML = "PONTUA A PARTIDA"
            jogadorGanhou.innerHTML = "JOGADOR 2 GANHOU!"
            vencedor.src = "./assets/icon-o.svg"
            divVencedor.style.color = "hsl(39, 88%, 58%)"
        }

        if (modoEscolhido == "cpu") {

            if (timeMudado == "X") {

                vencedor.style.display = "block"
                pontuaPartida.innerHTML = "PONTUA A PARTIDA"
                jogadorGanhou.innerHTML = "VOCÊ PERDEU!"
                vencedor.src = "./assets/icon-o.svg"
                divVencedor.style.color = "hsl(39, 88%, 58%)"
            }

            if (timeMudado == "O") {

                vencedor.style.display = "block"
                pontuaPartida.innerHTML = "PONTUA A PARTIDA"
                jogadorGanhou.innerHTML = "VOCÊ GANHOU!"
                vencedor.src = "./assets/icon-o.svg"
                divVencedor.style.color = "hsl(39, 88%, 58%)"
            }
        }
    }
}

function reiniciar() {

    alertaReiniciar.style.visibility = "visible"
    alertaReiniciar.style.top = "50%"
    alertaReiniciar.style.transform = "translateY(-50%)"
    fundoEscuro.style.visibility = "visible"
}

function nao() {

    alertaReiniciar.style.top = "-300px"
    fundoEscuro.style.visibility = "hidden"
    setTimeout(function(){
        alertaReiniciar.style.visibility = "hidden"
    },500)
}

function sim() {

    imgTurno.src = "./assets/imagem x.png"
    alertaReiniciar.style.top = "-300px"
    fundoEscuro.style.visibility = "hidden"
    setTimeout(function(){
        alertaReiniciar.style.visibility = "hidden"
    },500)
    verificar = 0

    inputEmpate1.checked = inputEmpate2.checked = inputEmpate3.checked = inputEmpate4.checked = inputEmpate5.checked = inputEmpate6.checked = inputEmpate7.checked = inputEmpate8.checked = inputEmpate9.checked = false
    input1.value = input2.value = input3.value = input4.value = input5.value = input6.value = input7.value = input8.value = input9.value = "clicar"
    input1.style = input2.style = input3.style = input4.style = input5.style = input6.style = input7.style = input8.style = input9.style = coresI
    img1.src = img2.src = img3.src = img4.src = img5.src = img6.src = img7.src = img8.src = img9.src = ""
    jogador1.innerHTML = jogador2.innerHTML = deuVelha.innerHTML = "0"
    placar1 = placar2 = placarEmpate = 0
    computador()
}

function jogarNovamente() {

    setTimeout(function(){
        divAlerta.style.visibility = "hidden"
    },500)
    imgTurno.src = "./assets/imagem x.png"
    divAlerta.style.top = "-300px"
    fundoEscuro.style.visibility = "hidden"
    verificar = 0

    input1.value = input2.value = input3.value = input4.value = input5.value = input6.value = input7.value = input8.value = input9.value = "clicar"
    input1.style = input2.style = input3.style = input4.style = input5.style = input6.style = input7.style = input8.style = input9.style = coresI
    img1.src = img2.src = img3.src = img4.src = img5.src = img6.src = img7.src = img8.src = img9.src = ""
    inputEmpate1.checked = inputEmpate2.checked = inputEmpate3.checked = inputEmpate4.checked = inputEmpate5.checked = inputEmpate6.checked = inputEmpate7.checked = inputEmpate8.checked = inputEmpate9.checked = false
    computador()
}

const inputCpu = document.querySelector("#input-cpu")
const inputPessoa = document.querySelector("#input-pessoa")
const primeiroJogador = document.querySelector(".primeiro-jogador")
const segundoJogador = document.querySelector(".segundo-jogador")
const inputEscolha = document.querySelector("#checkbox")

let modoEscolhido = sessionStorage.getItem("modo")
let timeMudado = sessionStorage.getItem("time")

function mudarTime() {
    let timeMudar = ""

    if (inputEscolha.checked) {

        inputEscolha.value = "O"
        timeMudar = inputEscolha.value
    } else {
        inputEscolha.value = "X"
        timeMudar = inputEscolha.value
    }

    window.sessionStorage.setItem("time", timeMudar)
}

function selecionarModo(modo) {

    let modoEscolher = ""

    if (modo === "cpu") {
        inputCpu.value = "cpu"
        modoEscolher = inputCpu.value
    }

    if (modo === "multijogador") {
        inputPessoa.value = "pessoa"
        modoEscolher = inputPessoa.value
    }

    window.sessionStorage.setItem("modo", modoEscolher)
}

window.addEventListener('load', modoAlterado())

function modoAlterado() {

    if (modoEscolhido == "pessoa") {

        primeiroJogador.innerHTML = "X (JOGADOR 1)"
        segundoJogador.innerHTML = "O (JOGADOR 2)"
    }

    if (modoEscolhido == "cpu") {

        if (timeMudado == "O") {

            primeiroJogador.innerHTML = "X (CPU)"
            segundoJogador.innerHTML = "O (VOCÊ)"
            computador()
        }

        if (timeMudado == "X") {

            primeiroJogador.innerHTML = "X (VOCÊ)"
            segundoJogador.innerHTML = "O (CPU)"
            computador()
        }
    }
}

function computador() {

    let inputs = document.querySelectorAll(".input-empate")
    let inputsDesmarcados = ""

    if (modoEscolhido == "cpu") {

        if (timeMudado == "O") {

            if (verificar % 2 == 0) {

                if (input1.value == "x" && input2.value == "x" && inputEmpate3.checked == false) {

                    setTimeout(() => {
                        empate(3)
                        marcar(3)
                    }, 500)
                }

                else if (input1.value == "x" && input3.value == "x" && inputEmpate2.checked == false) {

                    setTimeout(() => {
                        empate(2)
                        marcar(2)
                    }, 500)
                }

                else if (input3.value == "x" && input2.value == "x" && inputEmpate1.checked == false) {

                    setTimeout(() => {
                        empate(1)
                        marcar(1)
                    }, 500)
                }

                else if (input4.value == "x" && input5.value == "x" && inputEmpate6.checked == false) {

                    setTimeout(() => {
                        empate(6)
                        marcar(6)
                    }, 500)
                }

                else if (input4.value == "x" && input6.value == "x" && inputEmpate5.checked == false) {

                    setTimeout(() => {
                        empate(5)
                        marcar(5)
                    }, 500)
                }

                else if (input5.value == "x" && input6.value == "x" && inputEmpate4.checked == false) {

                    setTimeout(() => {
                        empate(4)
                        marcar(4)
                    }, 500)
                }

                else if (input7.value == "x" && input8.value == "x" && inputEmpate9.checked == false) {

                    setTimeout(() => {
                        empate(9)
                        marcar(9)
                    }, 500)
                }

                else if (input7.value == "x" && input9.value == "x" && inputEmpate8.checked == false) {

                    setTimeout(() => {
                        empate(8)
                        marcar(8)
                    }, 500)
                }

                else if (input8.value == "x" && input9.value == "x" && inputEmpate7.checked == false) {

                    setTimeout(() => {
                        empate(7)
                        marcar(7)
                    }, 500)
                }

                else if (input1.value == "x" && input4.value == "x" && inputEmpate7.checked == false) {

                    setTimeout(() => {
                        empate(7)
                        marcar(7)
                    }, 500)
                }

                else if (input1.value == "x" && input7.value == "x" && inputEmpate4.checked == false) {

                    setTimeout(() => {
                        empate(4)
                        marcar(4)
                    }, 500)
                }

                else if (input4.value == "x" && input7.value == "x" && inputEmpate1.checked == false) {

                    setTimeout(() => {
                        empate(1)
                        marcar(1)
                    }, 500)
                }

                else if (input2.value == "x" && input5.value == "x" && inputEmpate8.checked == false) {

                    setTimeout(() => {
                        empate(8)
                        marcar(8)
                    }, 500)
                }

                else if (input5.value == "x" && input8.value == "x" && inputEmpate2.checked == false) {

                    setTimeout(() => {
                        empate(2)
                        marcar(2)
                    }, 500)
                }

                else if (input2.value == "x" && input8.value == "x" && inputEmpate5.checked == false) {

                    setTimeout(() => {
                        empate(5)
                        marcar(5)
                    }, 500)
                }

                else if (input3.value == "x" && input6.value == "x" && inputEmpate9.checked == false) {

                    setTimeout(() => {
                        empate(9)
                        marcar(9)
                    }, 500)
                }

                else if (input3.value == "x" && input9.value == "x" && inputEmpate6.checked == false) {

                    setTimeout(() => {
                        empate(6)
                        marcar(6)
                    }, 500)
                }

                else if (input6.value == "x" && input9.value == "x" && inputEmpate3.checked == false) {

                    setTimeout(() => {
                        empate(3)
                        marcar(3)
                    }, 500)
                }

                else if (input1.value == "x" && input5.value == "x" && inputEmpate9.checked == false) {

                    setTimeout(() => {
                        empate(9)
                        marcar(9)
                    }, 500)
                }

                else if (input1.value == "x" && input9.value == "x" && inputEmpate5.checked == false) {

                    setTimeout(() => {
                        empate(5)
                        marcar(5)
                    }, 500)
                }

                else if (input5.value == "x" && input9.value == "x" && inputEmpate1.checked == false) {

                    setTimeout(() => {
                        empate(1)
                        marcar(1)
                    }, 500)
                }

                else if (input3.value == "x" && input5.value == "x" && inputEmpate7.checked == false) {

                    setTimeout(() => {
                        empate(7)
                        marcar(7)
                    }, 500)
                }

                else if (input3.value == "x" && input7.value == "x" && inputEmpate5.checked == false) {

                    setTimeout(() => {
                        empate(5)
                        marcar(5)
                    }, 500)
                }

                else if (input5.value == "x" && input7.value == "x" && inputEmpate3.checked == false) {

                    setTimeout(() => {
                        empate(3)
                        marcar(3)
                    }, 500)
                }

                else if (input1.value == "o" && input2.value == "o" && inputEmpate3.checked == false) {

                    setTimeout(() => {
                        empate(3)
                        marcar(3)
                    }, 500)
                }

                else if (input1.value == "o" && input3.value == "o" && inputEmpate2.checked == false) {

                    setTimeout(() => {
                        empate(2)
                        marcar(2)
                    }, 500)
                }

                else if (input3.value == "o" && input2.value == "o" && inputEmpate1.checked == false) {

                    setTimeout(() => {
                        empate(1)
                        marcar(1)
                    }, 500)
                }

                else if (input4.value == "o" && input5.value == "o" && inputEmpate6.checked == false) {

                    setTimeout(() => {
                        empate(6)
                        marcar(6)
                    }, 500)
                }

                else if (input4.value == "o" && input6.value == "o" && inputEmpate5.checked == false) {

                    setTimeout(() => {
                        empate(5)
                        marcar(5)
                    }, 500)
                }

                else if (input5.value == "o" && input6.value == "o" && inputEmpate4.checked == false) {

                    setTimeout(() => {
                        empate(4)
                        marcar(4)
                    }, 500)
                }

                else if (input7.value == "o" && input8.value == "o" && inputEmpate9.checked == false) {

                    setTimeout(() => {
                        empate(9)
                        marcar(9)
                    }, 500)
                }

                else if (input7.value == "o" && input9.value == "o" && inputEmpate8.checked == false) {

                    setTimeout(() => {
                        empate(8)
                        marcar(8)
                    }, 500)
                }

                else if (input8.value == "o" && input9.value == "o" && inputEmpate7.checked == false) {

                    setTimeout(() => {
                        empate(7)
                        marcar(7)
                    }, 500)
                }

                else if (input1.value == "o" && input4.value == "o" && inputEmpate7.checked == false) {

                    setTimeout(() => {
                        empate(7)
                        marcar(7)
                    }, 500)
                }

                else if (input1.value == "o" && input7.value == "o" && inputEmpate4.checked == false) {

                    setTimeout(() => {
                        empate(4)
                        marcar(4)
                    }, 500)
                }

                else if (input4.value == "o" && input7.value == "o" && inputEmpate1.checked == false) {

                    setTimeout(() => {
                        empate(1)
                        marcar(1)
                    }, 500)
                }

                else if (input2.value == "o" && input5.value == "o" && inputEmpate8.checked == false) {

                    setTimeout(() => {
                        empate(8)
                        marcar(8)
                    }, 500)
                }

                else if (input5.value == "o" && input8.value == "o" && inputEmpate2.checked == false) {

                    setTimeout(() => {
                        empate(2)
                        marcar(2)
                    }, 500)
                }

                else if (input2.value == "o" && input8.value == "o" && inputEmpate5.checked == false) {

                    setTimeout(() => {
                        empate(5)
                        marcar(5)
                    }, 500)
                }

                else if (input3.value == "o" && input6.value == "o" && inputEmpate9.checked == false) {

                    setTimeout(() => {
                        empate(9)
                        marcar(9)
                    }, 500)
                }

                else if (input3.value == "o" && input9.value == "o" && inputEmpate6.checked == false) {

                    setTimeout(() => {
                        empate(6)
                        marcar(6)
                    }, 500)
                }

                else if (input6.value == "o" && input9.value == "o" && inputEmpate3.checked == false) {

                    setTimeout(() => {
                        empate(3)
                        marcar(3)
                    }, 500)
                }

                else if (input1.value == "o" && input5.value == "o" && inputEmpate9.checked == false) {

                    setTimeout(() => {
                        empate(9)
                        marcar(9)
                    }, 500)
                }

                else if (input1.value == "o" && input9.value == "o" && inputEmpate5.checked == false) {

                    setTimeout(() => {
                        empate(5)
                        marcar(5)
                    }, 500)
                }

                else if (input5.value == "o" && input9.value == "o" && inputEmpate1.checked == false) {

                    setTimeout(() => {
                        empate(1)
                        marcar(1)
                    }, 500)
                }

                else if (input3.value == "o" && input5.value == "o" && inputEmpate7.checked == false) {

                    setTimeout(() => {
                        empate(7)
                        marcar(7)
                    }, 500)
                }

                else if (input3.value == "o" && input7.value == "o" && inputEmpate5.checked == false) {

                    setTimeout(() => {
                        empate(5)
                        marcar(5)
                    }, 500)
                }

                else if (input5.value == "o" && input7.value == "o" && inputEmpate3.checked == false) {

                    setTimeout(() => {
                        empate(3)
                        marcar(3)
                    }, 500)
                }

                else {

                    for (let i = 0; i < inputs.length; i++) {

                        if (inputs[i].checked == false) {
                            inputsDesmarcados += i
                        }
                    }

                    let sorteio = Math.floor(Math.random() * inputsDesmarcados.length)
                    let inputSobrando = inputsDesmarcados[sorteio]
                    let soma = parseInt(inputSobrando) + 1

                    setTimeout(() => {
                        empate(soma)
                        marcar(soma)
                    }, 500)
                }
            }
        }

        if (timeMudado == "X") {

            if (verificar % 2 != 0) {

                if (input1.value == "o" && input2.value == "o" && inputEmpate3.checked == false) {

                    setTimeout(() => {
                        empate(3)
                        marcar(3)
                    }, 500)
                }

                else if (input1.value == "o" && input3.value == "o" && inputEmpate2.checked == false) {

                    setTimeout(() => {
                        empate(2)
                        marcar(2)
                    }, 500)
                }

                else if (input3.value == "o" && input2.value == "o" && inputEmpate1.checked == false) {

                    setTimeout(() => {
                        empate(1)
                        marcar(1)
                    }, 500)
                }

                else if (input4.value == "o" && input5.value == "o" && inputEmpate6.checked == false) {

                    setTimeout(() => {
                        empate(6)
                        marcar(6)
                    }, 500)
                }

                else if (input4.value == "o" && input6.value == "o" && inputEmpate5.checked == false) {

                    setTimeout(() => {
                        empate(5)
                        marcar(5)
                    }, 500)
                }

                else if (input5.value == "o" && input6.value == "o" && inputEmpate4.checked == false) {

                    setTimeout(() => {
                        empate(4)
                        marcar(4)
                    }, 500)
                }

                else if (input7.value == "o" && input8.value == "o" && inputEmpate9.checked == false) {

                    setTimeout(() => {
                        empate(9)
                        marcar(9)
                    }, 500)
                }

                else if (input7.value == "o" && input9.value == "o" && inputEmpate8.checked == false) {

                    setTimeout(() => {
                        empate(8)
                        marcar(8)
                    }, 500)
                }

                else if (input8.value == "o" && input9.value == "o" && inputEmpate7.checked == false) {

                    setTimeout(() => {
                        empate(7)
                        marcar(7)
                    }, 500)
                }

                else if (input1.value == "o" && input4.value == "o" && inputEmpate7.checked == false) {

                    setTimeout(() => {
                        empate(7)
                        marcar(7)
                    }, 500)
                }

                else if (input1.value == "o" && input7.value == "o" && inputEmpate4.checked == false) {

                    setTimeout(() => {
                        empate(4)
                        marcar(4)
                    }, 500)
                }

                else if (input4.value == "o" && input7.value == "o" && inputEmpate1.checked == false) {

                    setTimeout(() => {
                        empate(1)
                        marcar(1)
                    }, 500)
                }

                else if (input2.value == "o" && input5.value == "o" && inputEmpate8.checked == false) {

                    setTimeout(() => {
                        empate(8)
                        marcar(8)
                    }, 500)
                }

                else if (input5.value == "o" && input8.value == "o" && inputEmpate2.checked == false) {

                    setTimeout(() => {
                        empate(2)
                        marcar(2)
                    }, 500)
                }

                else if (input2.value == "o" && input8.value == "o" && inputEmpate5.checked == false) {

                    setTimeout(() => {
                        empate(5)
                        marcar(5)
                    }, 500)
                }

                else if (input3.value == "o" && input6.value == "o" && inputEmpate9.checked == false) {

                    setTimeout(() => {
                        empate(9)
                        marcar(9)
                    }, 500)
                }

                else if (input3.value == "o" && input9.value == "o" && inputEmpate6.checked == false) {

                    setTimeout(() => {
                        empate(6)
                        marcar(6)
                    }, 500)
                }

                else if (input6.value == "o" && input9.value == "o" && inputEmpate3.checked == false) {

                    setTimeout(() => {
                        empate(3)
                        marcar(3)
                    }, 500)
                }

                else if (input1.value == "o" && input5.value == "o" && inputEmpate9.checked == false) {

                    setTimeout(() => {
                        empate(9)
                        marcar(9)
                    }, 500)
                }

                else if (input1.value == "o" && input9.value == "o" && inputEmpate5.checked == false) {

                    setTimeout(() => {
                        empate(5)
                        marcar(5)
                    }, 500)
                }

                else if (input5.value == "o" && input9.value == "o" && inputEmpate1.checked == false) {

                    setTimeout(() => {
                        empate(1)
                        marcar(1)
                    }, 500)
                }

                else if (input3.value == "o" && input5.value == "o" && inputEmpate7.checked == false) {

                    setTimeout(() => {
                        empate(7)
                        marcar(7)
                    }, 500)
                }

                else if (input3.value == "o" && input7.value == "o" && inputEmpate5.checked == false) {

                    setTimeout(() => {
                        empate(5)
                        marcar(5)
                    }, 500)
                }

                else if (input5.value == "o" && input7.value == "o" && inputEmpate3.checked == false) {

                    setTimeout(() => {
                        empate(3)
                        marcar(3)
                    }, 500)
                }

                else if (input1.value == "x" && input2.value == "x" && inputEmpate3.checked == false) {

                    setTimeout(() => {
                        empate(3)
                        marcar(3)
                    }, 500)
                }

                else if (input1.value == "x" && input3.value == "x" && inputEmpate2.checked == false) {

                    setTimeout(() => {
                        empate(2)
                        marcar(2)
                    }, 500)
                }

                else if (input3.value == "x" && input2.value == "x" && inputEmpate1.checked == false) {

                    setTimeout(() => {
                        empate(1)
                        marcar(1)
                    }, 500)
                }

                else if (input4.value == "x" && input5.value == "x" && inputEmpate6.checked == false) {

                    setTimeout(() => {
                        empate(6)
                        marcar(6)
                    }, 500)
                }

                else if (input4.value == "x" && input6.value == "x" && inputEmpate5.checked == false) {

                    setTimeout(() => {
                        empate(5)
                        marcar(5)
                    }, 500)
                }

                else if (input5.value == "x" && input6.value == "x" && inputEmpate4.checked == false) {

                    setTimeout(() => {
                        empate(4)
                        marcar(4)
                    }, 500)
                }

                else if (input7.value == "x" && input8.value == "x" && inputEmpate9.checked == false) {

                    setTimeout(() => {
                        empate(9)
                        marcar(9)
                    }, 500)
                }

                else if (input7.value == "x" && input9.value == "x" && inputEmpate8.checked == false) {

                    setTimeout(() => {
                        empate(8)
                        marcar(8)
                    }, 500)
                }

                else if (input8.value == "x" && input9.value == "x" && inputEmpate7.checked == false) {

                    setTimeout(() => {
                        empate(7)
                        marcar(7)
                    }, 500)
                }

                else if (input1.value == "x" && input4.value == "x" && inputEmpate7.checked == false) {

                    setTimeout(() => {
                        empate(7)
                        marcar(7)
                    }, 500)
                }

                else if (input1.value == "x" && input7.value == "x" && inputEmpate4.checked == false) {

                    setTimeout(() => {
                        empate(4)
                        marcar(4)
                    }, 500)
                }

                else if (input4.value == "x" && input7.value == "x" && inputEmpate1.checked == false) {

                    setTimeout(() => {
                        empate(1)
                        marcar(1)
                    }, 500)
                }

                else if (input2.value == "x" && input5.value == "x" && inputEmpate8.checked == false) {

                    setTimeout(() => {
                        empate(8)
                        marcar(8)
                    }, 500)
                }

                else if (input5.value == "x" && input8.value == "x" && inputEmpate2.checked == false) {

                    setTimeout(() => {
                        empate(2)
                        marcar(2)
                    }, 500)
                }

                else if (input2.value == "x" && input8.value == "x" && inputEmpate5.checked == false) {

                    setTimeout(() => {
                        empate(5)
                        marcar(5)
                    }, 500)
                }

                else if (input3.value == "x" && input6.value == "x" && inputEmpate9.checked == false) {

                    setTimeout(() => {
                        empate(9)
                        marcar(9)
                    }, 500)
                }

                else if (input3.value == "x" && input9.value == "x" && inputEmpate6.checked == false) {

                    setTimeout(() => {
                        empate(6)
                        marcar(6)
                    }, 500)
                }

                else if (input6.value == "x" && input9.value == "x" && inputEmpate3.checked == false) {

                    setTimeout(() => {
                        empate(3)
                        marcar(3)
                    }, 500)
                }

                else if (input1.value == "x" && input5.value == "x" && inputEmpate9.checked == false) {

                    setTimeout(() => {
                        empate(9)
                        marcar(9)
                    }, 500)
                }

                else if (input1.value == "x" && input9.value == "x" && inputEmpate5.checked == false) {

                    setTimeout(() => {
                        empate(5)
                        marcar(5)
                    }, 500)
                }

                else if (input5.value == "x" && input9.value == "x" && inputEmpate1.checked == false) {

                    setTimeout(() => {
                        empate(1)
                        marcar(1)
                    }, 500)
                }

                else if (input3.value == "x" && input5.value == "x" && inputEmpate7.checked == false) {

                    setTimeout(() => {
                        empate(7)
                        marcar(7)
                    }, 500)
                }

                else if (input3.value == "x" && input7.value == "x" && inputEmpate5.checked == false) {

                    setTimeout(() => {
                        empate(5)
                        marcar(5)
                    }, 500)
                }

                else if (input5.value == "x" && input7.value == "x" && inputEmpate3.checked == false) {

                    setTimeout(() => {
                        empate(3)
                        marcar(3)
                    }, 500)
                }

                else {

                    for (let i = 0; i < inputs.length; i++) {

                        if (inputs[i].checked == false) {
                            inputsDesmarcados += i
                        }
                    }

                    let sorteio = Math.floor(Math.random() * inputsDesmarcados.length)
                    let inputSobrando = inputsDesmarcados[sorteio]
                    let soma = parseInt(inputSobrando) + 1

                    setTimeout(() => {
                        empate(soma)
                        marcar(soma)
                    }, 500)
                }
            }
        }
    }
}