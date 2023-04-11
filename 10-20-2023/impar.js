const form = document.querySelector("#form")
const inputNumber = document.querySelector("#inputNumber")

console.log(form)
form.addEventListener("submit", (e)=> {
    e.preventDefault()
    isPar(inputNumber.value)
})

const isPar = (i) => {
    if (i % 2 == 0) {
        alert("Es par")
    } else {
        alert("Es impar")
    }
}
