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

let verificar = 0

function marcar(valor){

    if(valor == 1){

        if(input1.value == 1){
            input1.value = 0

            if(verificar % 2 == 0){

                img1.src = "./assets/icon-x.svg"
                verificar += 1
            } else {
                img1.src = "./assets/icon-o.svg"
                verificar += 1
            }
        }
    }

    if(valor == 2){

        if(input2.value == 2){
            input2.value = 0

            if(verificar % 2 == 0){

                img2.src = "./assets/icon-x.svg"
                verificar += 1
            } else {
                img2.src = "./assets/icon-o.svg"
                verificar += 1
            }
        }
    }
}
