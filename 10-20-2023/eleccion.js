const form = document.querySelector("#form")
const inputNumber = document.querySelector("#inputNumber")
const selection = document.querySelector("#select")

console.log(selection)

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (selection.value == 1){
        isPar(inputNumber.value)
    } else if (selection.value == 2){
        isPrime(inputNumber.value)
    } else if (selection.value == 3){
        nextIsPrime(inputNumber.value)
    } else if (selection.value == 4){
        alert(cuadrado(inputNumber.value))
        console.log(cuadrado(inputNumber.value))
    }
})

const isPar = (i) => {
    if (i % 2 == 0) {
        alert("Es par")
    } else {
        alert("Es impar")
    }
}

const isPrime = (datoUsuario) => {
    let contador

    for (let i = 2; i < datoUsuario * 2; i++) {
        contador = 0
        for (let j = 1; j < datoUsuario * 2; j++) {
            if (i % j == 0) {
                contador++
            }
        }
        if (contador < 3 && i == datoUsuario) {
            alert("Es primo")
            return null;
        }
    }
    alert("No es primo")
}

const nextIsPrime = (datoUsuario) => {
    let contador

    let esPrimo

    for (let i = 2; i < datoUsuario * 2; i++) {
        contador = 0
        for (let j = 1; j < datoUsuario * 2; j++) {
            if (i % j == 0) {
                contador++
            }
        }
        if (contador < 3 && i == datoUsuario) {
            esPrimo = true
        }
        if (i < datoUsuario * 2) {
            if (contador < 3 && datoUsuario < i) {
                if (esPrimo) {
                    alert("Es primo, el proximo primo es:  " + i)
                    break;
                } else if (!esPrimo) {
                    alert("No es primo, el proximo primo es: " + i)
                    break;
                }
            }
        }
    }
}

const cuadrado = (number) => {
    let fila = "";
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            if (i === 0 || i === number - 1 || j === 0 || j === number - 1) {
                fila+= "* "
            }
            else {
                fila += "  "
            }
        }
        fila += "\n";
    }
    return fila;
}
