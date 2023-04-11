const form = document.querySelector("#form")
const inputNumber = document.querySelector("#inputNumber")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    isPrime(inputNumber.value)
})


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
