let movimientos = [{tipo: "ingreso", monto:64500},{tipo: "ingreso", monto:0}, {tipo: "mercado", monto:-450000}, {tipo: "pago", monto:0}, {tipo: "ingreso", monto:1345000} , {tipo: "pcomercio", monto:-63200} ,{tipo: "pproveedores", monto:-200000} ,{tipo: "ingreso", monto:150000} , {tipo: "ingreso", monto:0}];
let posicionEncontrada = false;
console.log("\n********* EJERCICIO 4 *********\n\n");

for (let i = 0; i < movimientos.length; i++){
    if (movimientos[i].monto === 0){
        continue;
    }
    if(movimientos[i].tipo === 'pcomercio'){
        posicionEncontrada = i;
        console.log(`Pago encontrado: \nTipo: ${movimientos[i].tipo} \nMonto: ${movimientos[i].monto} \nPosicion: ${posicionEncontrada}\n`);
        break;
    }
}