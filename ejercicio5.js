    console.log("\n********* EJERCICIO 5 *********\n\n");
let users = [{usuario: "Juana", movimientos:[645, -450, 1345, -632, -200, 150]},{usuario: "Carlos", movimientos:[64500, 450000, 1345000, -63200, -200000, 150000]}, {usuario: "Diego", movimientos:[64500, 450000, 1345000, 63200, -200000, 150000]}, {usuario: "Maria", movimientos:[64500, 450000, 1345000, 63200, 200000, 150000]}, ];

for(let i = 0; i < users.length; i++){
    let totalUsuarios = 0;
    for (let j = 0; j < users[i].movimientos.length; j++){
        totalUsuarios += users[i].movimientos[j];           
    }
    console.log(`Usuario: ${users[i].usuario}   Total: ${totalUsuarios}`)
}

