let total = 0;
let cantidadRetiros =0; 
let movimientos = [64500, -450000, 1345000, -63200, -200000, 150000];

for(let i = 0; i < movimientos.length; i ++){
    total += movimientos[i];
    if(movimientos[i] < 0){
        cantidadRetiros += 1;
    }
}
console.log("\n********* EJERCICIO 1 *********\n");
console.log(`Total saldo cuenta: ${total}`)
console.log(`Cantidad de retiros: ${cantidadRetiros}`)

//Que pasa si pone el console.log dentro del for? En cada vuelta se imprimira el valor del total hasta el momento. 
//Cuantas veces se imprime? Se imprimiria 6 veces, pues hay 6 valores en el array
//Cual es el valor Bueno? El valor que tendria validez es el ultimo, pues consolida todos los movimientos. 

