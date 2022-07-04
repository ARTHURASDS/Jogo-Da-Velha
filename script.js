const celulas = document.querySelectorAll(".celula");

 let checarTurno = true;

const jogadorX = "X";
const jogadorO = "0";

const combinacoes = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8]
[2,4,6]
];


document.addEventListener("click", (event) => {
    if(event.target.matches(".celula")) {
    jogar(event.target.id, jogadorX);
    bot(); 
}
});

// function bot() {
//     const posicoesDisponiveis = [];
//     for (index in celulas) {
//         if (!isNaN(index)) {
//             if (
//                 !celulas[index].classList.contains("X") &&
//                 !celulas[index].classList.contains("O")
//                 ) {
//                     posicoesDisponiveis.push(index);
//                 }
//         }

        
//     }

//     const posicoesAleatoria = Math.floor(
//         Math.random() * posicoesDisponiveis.length
//     );

//     jogar(posicoesDisponiveis[posicoesAleatoria], jogadorO) 
// }

function jogar(id, turno) {
    const celula = document.getElementById(id);
     turno = checarTurno ? jogadorX : jogadorO;
     checarTurno = !checarTurno
    celula.textContent = turno;
    celula.classList.add(turno)
    checarVencedor(turno);

} 

function checarVencedor(turno) {
    const vencedor = combinacoes.some((comb) => {
        return comb.every((index) => {
            return celulas[index].classList.contains(turno);
        })
    });  

    if (vencedor){
        encerrarJogo(turno);
    } else if (checarEmpate()) {
        encerrarJogo();
    }    else {
        checarTurno = !checarTurno
      }
}

function checarEmpate () {
    let x = 0;
    let o = 0;

    for (index in celulas) {
        if(!isNaN(index)) {
            if(celulas[index].classList.contais(jogadorX)) {
                x++;
            }

            if(celulas[index].classList.contains(jogadorO)) {
                o++;
            }
        }
    }
    
    return x + o  === 9 ? true : false;
}

function encerrarJogo(vencedor = null) {
    if (vencedor) {
        window.alert("Vencedor é " + vencedor);
    } else {
        window.alert("Empate ");
    }
}

