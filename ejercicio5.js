    console.log("\n********* EJERCICIO 5 *********\n\n");
let users = [{usuario: "Juana", movimientos:[645, -450, 1345, -632, -200, 150]},{usuario: "Carlos", movimientos:[450, 500, 3450, -620, -200, 500]}, {usuario: "Diego", movimientos:[560, 550, 5134, 2632, -20, 515]}, {usuario: "Maria", movimientos:[645, 450, 1345, 632, 20, 150]}, ];

for(let i = 0; i < users.length; i++){
    let totalUsuarios = 0;
    for (let j = 0; j < users[i].movimientos.length; j++){
        totalUsuarios += users[i].movimientos[j];           
    }
    console.log(`Usuario: ${users[i].usuario}   Total: ${totalUsuarios}`)
}

