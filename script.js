let inicio = document.getElementById("inicio");

let botaoComeçar = document.getElementById("comecar");

let pessoa = '';

let triste = document.getElementById("to_triste")
console.log(triste)

botaoComeçar.addEventListener('click', (e) => {
    inicio.style.display = 'none';
    triste.style.display = 'block'
    

    // quemTaJogando();
});


// function quemTaJogando() {
//     let valorcerto = false;
//     do {
//         pessoa = prompt("Escreva o nome de qual pessoa você quer ser: exemplo 'chloe, arthur, yann...'");

//         switch (pessoa) {
//             case 'chloe':
//                 joguinhoChloe();
//                 valorcerto = true;
//                 break;

//             case 'davi':
//                 joguihoDavi();
//                 valorcerto = true;
//                 break;

//             case 'yann':
//                 joguinhoYann();
//                 valorcerto = true;
//                 break;

//             case 'filipinas':
//                 joguinhoFilipinas();
//                 valorcerto = true;
//                 break;

//             case 'arthur':
//                 joguinhoArthur();
//                 valorcerto = true;
//                 break;

//             case 'pedro':
//                 joguinhoPedro();
//                 valorcerto = true;
//                 break;

//             case 'miguel':
//                 joguinhoMigs();
//                 valorcerto = true;
//                 break;

//             default:
//                 alert("A gente não gosta de rapaz não, só vale os homes");
//         }
//     } while (!valorcerto);
// }



// function joguinhoChloe() {
//     alert("Esse aqui é o Joguinho da Chloe, tipo um Genio Quiz, mas com perguntas sobre a gente.")
//     let chloe = document.getElementById('chloe')
//     chloe.style.display = 'flex'

//     var respostas = document.getElementById("respostas");

//     var resposta = Array.from(respostas.getElementsByTagName("div"));

//     resposta.forEach(function (resposta) {
//         resposta.addEventListener("click", (e) => {
//             if (resposta.id === "alter1") {
//                 alert("PARABÉNS VOCÊ ACERTOU HIHI")
//             } else {
//                 alert("mas é burro hein fi")
//             }
//         })
//     });
// }

// function joguinhoArthur() {
//     alert('DELE');
// }

// function joguihoDavi() {
//     alert('DOLI');
// }

// function joguinhoYann() {
//     alert('GAY');
// }

// function joguinhoMigs() {
//     alert('PAUZUDO');
// }

// function joguinhoPedro() {
//     alert('CORNO');
// }

// function joguinhoFilipinas() {
//     alert('BROXA');
// }
