let piramideSize = prompt("Ingresa un numero");
let piramide = "";
for (let i = 1; i <= piramideSize; i++) {
    for (let j = 1; j <= i; j++) {
        piramide += " #";
    }
    console.log(piramide);23
}
