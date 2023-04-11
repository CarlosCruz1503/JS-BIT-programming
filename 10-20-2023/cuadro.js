const form = document.querySelector("#form")
const inputNumber = document.querySelector("#inputNumber")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(cuadrado(inputNumber.value))
})

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
