const prompt = require('prompt-sync')();
console.log("\n********* EJERCICIO 2 *********");


let pinCorrecto = 20231104;
let userPin = Number(prompt('Por favor ingrese su pin:'));

while (userPin != pinCorrecto){
    console.log("\nPin incorrecto. Valida tus datos.\n")
    userPin = Number(prompt('Por favor ingrese su pin:'));
}
console.log("\n---------------------------")
console.log("Bienvenid@ a tu cuenta NEQUI")
console.log("-----------------------------\n")