const input1 = document.querySelector("#input1")
const input2 = document.querySelector("#input2")
const input3 = document.querySelector("#input3")
const input4 = document.querySelector("#input4")
const input5 = document.querySelector("#input5")
const input6 = document.querySelector("#input6")
const input7 = document.querySelector("#input7")
const input8 = document.querySelector("#input8")
const input9 = document.querySelector("#input9")

const img1 = document.querySelector("#img1")
const img2 = document.querySelector("#img2")
const img3 = document.querySelector("#img3")
const img4 = document.querySelector("#img4")
const img5 = document.querySelector("#img5")
const img6 = document.querySelector("#img6")
const img7 = document.querySelector("#img7")
const img8 = document.querySelector("#img8")
const img9 = document.querySelector("#img9")

let verificar = 0

function marcar(valor){

    if(valor == 1){

        if(input1.value == "clicar"){

            if(verificar % 2 == 0){

                img1.src = "./assets/icon-x.svg"
                verificar += 1
                input1.value = "x"

            } else {
                img1.src = "./assets/icon-o.svg"
                verificar += 1
                input1.value = "o"
            }
        }
        vitoria()
    }

    if(valor == 2){

        if(input2.value == "clicar"){

            if(verificar % 2 == 0){

                img2.src = "./assets/icon-x.svg"
                verificar += 1
                input2.value = "x"

            } else {
                img2.src = "./assets/icon-o.svg"
                verificar += 1
                input2.value = "o"
            }
        }
        vitoria()
    }

    if(valor == 3){

        if(input3.value == "clicar"){

            if(verificar % 2 == 0){

                img3.src = "./assets/icon-x.svg"
                verificar += 1
                input3.value = "x"

            } else {
                img3.src = "./assets/icon-o.svg"
                verificar += 1
                input3.value = "o"
            }
        }
        vitoria()
    }

    if(valor == 4){

        if(input4.value == "clicar"){

            if(verificar % 2 == 0){

                img4.src = "./assets/icon-x.svg"
                verificar += 1
                input4.value = "x"

            } else {
                img4.src = "./assets/icon-o.svg"
                verificar += 1
                input4.value = "o"
            }
        }
        vitoria()
    }

    if(valor == 5){

        if(input5.value == "clicar"){

            if(verificar % 2 == 0){

                img5.src = "./assets/icon-x.svg"
                verificar += 1
                input5.value = "x"

            } else {
                img5.src = "./assets/icon-o.svg"
                verificar += 1
                input5.value = "o"
            }
        }
        vitoria()
    }

    if(valor == 6){

        if(input6.value == "clicar"){

            if(verificar % 2 == 0){

                img6.src = "./assets/icon-x.svg"
                verificar += 1
                input6.value = "x"

            } else {
                img6.src = "./assets/icon-o.svg"
                verificar += 1
                input6.value = "o"
            }
        }
        vitoria()
    }

    if(valor == 7){

        if(input7.value == "clicar"){

            if(verificar % 2 == 0){

                img7.src = "./assets/icon-x.svg"
                verificar += 1
                input7.value = "x"

            } else {
                img7.src = "./assets/icon-o.svg"
                verificar += 1
                input7.value = "o"
            }
        }
        vitoria()
    }

    if(valor == 8){

        if(input8.value == "clicar"){

            if(verificar % 2 == 0){

                img8.src = "./assets/icon-x.svg"
                verificar += 1
                input8.value = "x"

            } else {
                img8.src = "./assets/icon-o.svg"
                verificar += 1
                input8.value = "o"
            }
        }
        vitoria()
    }

    if(valor == 9){

        if(input9.value == "clicar"){

            if(verificar % 2 == 0){
                
                img9.src = "./assets/icon-x.svg"
                verificar += 1
                input9.value = "x"

            } else {
                img9.src = "./assets/icon-o.svg"
                verificar += 1
                input9.value = "o"
            }
        }
        vitoria()
    }
}

const cores = `
            background-color: hsl(178, 60%, 48%);
            box-shadow: 0 5px hsl(178, 60%, 28%);
            `

function vitoria(){

    if(input1.value == "x" && input2.value == "x" && input3.value == "x"){
        
        input1.style = input2.style = input3.style = cores
        img1.src = img2.src = img3.src = "./assets/x-vitoria.png"
    }

    if(input4.value == "x" && input5.value == "x" && input6.value == "x"){

        input4.style = input5.style = input6.style = cores
        img4.src = img5.src = img6.src = "./assets/x-vitoria.png"
    }

    if(input7.value == "x" && input8.value == "x" && input9.value == "x"){

        input7.style = input8.style = input9.style = cores
        img7.src = img8.src = img9.src = "./assets/x-vitoria.png"
    }

    if(input1.value == "x" && input4.value == "x" && input7.value == "x"){

        input1.style = input4.style = input7.style = cores
        img1.src = img4.src = img7.src = "./assets/x-vitoria.png"
    }

    if(input2.value == "x" && input5.value == "x" && input8.value == "x"){

        input2.style = input5.style = input8.style = cores
        img2.src = img5.src = img8.src = "./assets/x-vitoria.png"
    }

    if( input3.value == "x" && input6.value == "x" && input9.value == "x"){

        input3.style = input6.style = input9.style = cores
        img3.src = img6.src = img9.src = "./assets/x-vitoria.png"
    }

    if(input1.value == "x" && input5.value == "x" && input9.value == "x"){

        input1.style = input5.style = input9.style = cores
        img1.src = img5.src = img9.src = "./assets/x-vitoria.png"
    }

    if(input3.value == "x" && input5.value == "x" && input7.value == "x"){

        input3.style = input5.style = input7.style = cores
        img3.src = img5.src = img7.src = "./assets/x-vitoria.png"
    }

    if(
        input1.value == "o" && input2.value == "o" && input3.value == "o" ||
        input4.value == "o" && input5.value == "o" && input6.value == "o" ||
        input7.value == "o" && input8.value == "o" && input9.value == "o" ||
        input1.value == "o" && input4.value == "o" && input7.value == "o" ||
        input2.value == "o" && input5.value == "o" && input8.value == "o" ||
        input3.value == "o" && input6.value == "o" && input9.value == "o" ||
        input1.value == "o" && input5.value == "o" && input9.value == "o" ||
        input3.value == "o" && input5.value == "o" && input7.value == "o"
    ){
        alert()
    }

}
