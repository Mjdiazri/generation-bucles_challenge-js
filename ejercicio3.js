const prompt = require('prompt-sync')();
console.log("\n********* EJERCICIO 3 *********");
let userOption;


do {
    console.log("\n\n------Menu APP --------")
    console.log("1. Ver saldo \n2. Enviar dinero \n3. Recargar \n4. Salir")
    userOption = Number(prompt("Ingresa el numero de la accion deseada: "));
    if(userOption === 1){
        console.log("Tu saldo es de 876");
    } else if (userOption === 2){
        console.log("\nNo tiene suficiente dinero para transferir\n");
    } else if (userOption === 3){
        console.log("\nCargando modulo de recargas...\n")
    } else if (userOption === 4){
        console.log("\nCerrando sesion...\n")
    } else {
        console.log("\nOpcion no valida\n")
    }
} while(userOption != 4);