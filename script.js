let inicio = document.getElementById("inicio");

let botaoComeçar = document.getElementById("comecar");
let pessoa = '';

botaoComeçar.addEventListener('click', (e) => {
    inicio.style.display = 'none';

    quemTaJogando();
});


function joguinhoChloe() {
    alert("Esse aqui é o Joguinho da Chloe, tipo um Genio Quiz, mas com perguntas sobre a gente.")
    let chloe = document.getElementById('chloe')
    chloe.style.display = 'flex'

    getCorrect()
}


function joguinhoArthur() {
    let arthur = document.getElementById('arthur')
    arthur.style.display = 'flex'

    let cliques = 0
    function contador() {
        cliques += 1
        console.log(cliques)
        document.getElementById('num').innerHTML = cliques
    }

    let iniciar = document.getElementById('clique')
    let temporizador = document.getElementById("temporizador")
    let tempoClique = document.getElementById('tempoClique')

    let tempoEscolhido = 0

    tempoClique.addEventListener('change', (e) => {
        tempoEscolhido = Number(e.target.value)
        iniciar.disabled = false
    })
    let clicador = document.createElement('button')
    clicador.classList.add('daler')

    iniciar.addEventListener('click', (e) => {
        temporizador.innerHTML = tempoEscolhido



        let intervalo = setInterval(function () {
            tempoEscolhido--
            temporizador.innerHTML = tempoEscolhido

            if (tempoEscolhido < 0) {
                clearInterval(intervalo)
                iniciar.disabled = true
                temporizador.innerHTML = '0'
                let cps = cliques / (Number(tempoClique.value))
                console.log(Number(tempoClique.value))
                alert(`Parabéns, seu cps é ${Math.floor(cps)}`)

                iniciar.style.display = 'block'
                cliques = 0
                document.getElementById('num').innerHTML = cliques
                clicador.style.display = 'none'
                document.getElementById('num').style.display = 'none'
            }
        }, 1000)

        iniciar.style.display = 'none'
        arthur.appendChild(clicador)
        clicador.innerHTML = 'CLIQUE AQUI'
        clicador.style.display = 'block'
        document.getElementById('num').style.display = 'block'
        clicador.addEventListener('click', (e) => {
            contador();
        })


    })

}

function joguihoDavi() {
    let davi = document.getElementById('davi')
    davi.style.display = 'flex'
    let MouseDx = 0
    let MouseUx = 0
    let diferença = 0

    function criarCard(direita, esquerda) {
        let card = document.createElement('div')
        card.className = 'card'
        let titulo = document.createElement('p')
        titulo.textContent = "Qual você prefere?"

        let escolha1 = document.createElement('p')
        escolha1.textContent = direita

        let escolha2 = document.createElement('p')
        escolha2.textContent = esquerda

        card.appendChild(titulo)
        card.appendChild(escolha1)
        card.appendChild(escolha2)

        return card
    }

    const cardTexts = [
        ['morrer de fome >>>', '<<< morrer de sede'],
        ['voar >>>', '<<< ser invisível'],
        ['viajar no tempo >>>', '<<< ler mentes'],
        ['ser rico e infeliz >>>', '<<< ser pobre e feliz'],
        ['ter super força >>>', '<<< ter super velocidade'],
        ['ser imortal >>>', '<<< ter a capacidade de ressuscitar'],
        ['ser um gênio reconhecido >>>', '<<< ser um desconhecido com poderes incríveis'],
        ['ter a habilidade de voar >>>', '<<< ter a habilidade de respirar embaixo d\'água'],
        ['viver na cidade >>>', '<<< viver no campo'],
        ['ser extremamente belo, mas estúpido >>>', '<<< ser extremamente inteligente, mas feio'],
        ['ser capaz de se teletransportar >>>', '<<< ser capaz de criar portais para qualquer lugar'],
        ['ser o maior herói do mundo, mas todos te odeiam >>>', '<<< ser um vilão amado por todos'],
        ['viver no passado >>>', '<<< viver no futuro'],
        ['ser invisível >>>', '<<< ser capaz de ler pensamentos'],
        ['ser pobre com saúde >>>', '<<< ser rico sem saúde'],
        ['ter a capacidade de curar >>>', '<<< ter a capacidade de regenerar'],
    ];
    

    let currentCardIndex = 0;
    let currentCard = criarCard(...cardTexts[currentCardIndex]);
    davi.appendChild(currentCard);
    deslizar(currentCard);

    function deslizar(elemento) {
        elemento.addEventListener('touchstart', (e) => {
            MouseDx = e.touches[0].pageX
        })

        elemento.addEventListener('touchend', (e) => {
            // Precisamos do toque finalizado, que é armazenado em changedTouches
            MouseUx = e.changedTouches[0].pageX
            diferença = MouseDx - MouseUx

            if (diferença > 50 || diferença < -50) {
                elemento.style.transform = `translateX(${diferença > 0 ? -500 : 500}px)`
                elemento.style.opacity = 0
                setTimeout(function () {
                    elemento.style.display = 'none';

                    currentCardIndex++;
                    if (currentCardIndex < cardTexts.length) {
                        currentCard = criarCard(...cardTexts[currentCardIndex]);
                        davi.appendChild(currentCard);
                        deslizar(currentCard);
                    } else {
                        console.log('Não há próximo card');
                    }
                }, 700)
            }
        })
    }
}



function joguinhoYann() {
    alert('GAY');
}

function joguinhoMigs() {
    alert('PAUZUDO');
}

function joguinhoPedro() {
    alert('CORNO');
}

function joguinhoFilipinas() {
    alert('BROXA');
}


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function quemTaJogando() {
    let valorcerto = false;
    do {
        pessoa = prompt("Escreva o nome de qual pessoa você quer ser: exemplo 'chloe, arthur, yann...'");

        switch (pessoa) {
            case 'chloe':
                joguinhoChloe();
                valorcerto = true;
                break;

            case 'davi':
                joguihoDavi();
                valorcerto = true;
                break;

            case 'yann':
                joguinhoYann();
                valorcerto = true;
                break;

            case 'filipinas':
                joguinhoFilipinas();
                valorcerto = true;
                break;

            case 'arthur':
                joguinhoArthur();
                valorcerto = true;
                break;

            case 'pedro':
                joguinhoPedro();
                valorcerto = true;
                break;

            case 'miguel':
                joguinhoMigs();
                valorcerto = true;
                break;

            default:
                alert("A gente não gosta de rapaz não, só vale os homes");
        }
    } while (!valorcerto);
}

function getCorrect() {
    const niveis = [document.getElementById('respostas'), document.getElementById('respostas2'), document.getElementById('respostas3'), document.getElementById('respostas4'), document.getElementById('respostas5')]
    const perguntas = [document.getElementById('alter1'), document.getElementById('alter2'), document.getElementById('alter3'), document.getElementById('alter4'), document.getElementById('alter5'), document.getElementById('alter6'), document.getElementById('alter7'), document.getElementById('alter8'), document.getElementById('alter9'), document.getElementById('alter10'), document.getElementById('alter11'), document.getElementById('alter12'), document.getElementById('alter13'), document.getElementById('alter14'), document.getElementById('alter15'), document.getElementById('alter16'), document.getElementById('alter17'), document.getElementById('alter18'), document.getElementById('alter19'), document.getElementById('alter20')]

    let parabens = document.getElementById('parabens')
    for (let i = 0; i < perguntas.length; i++) {
        perguntas[i].addEventListener('click', (e) => {
            if (perguntas[i].id == 'alter1') {
                alert('você acertou')
                niveis[0].style.display = 'none'
                niveis[1].style.display = 'flex'
            } else if (perguntas[i].id == 'alter7') {
                alert('você acertou!')
                niveis[1].style.display = 'none'
                niveis[2].style.display = 'flex'
            }
            else if (perguntas[i].id == 'alter9') {
                alert('você acertou!')
                niveis[2].style.display = 'none'
                niveis[3].style.display = 'flex'
            }
            else if (perguntas[i].id == 'alter13') {
                alert('você acertou!')
                niveis[3].style.display = 'none'
                niveis[4].style.display = 'flex'
            }
            else if (perguntas[i].id == 'alter19' || perguntas[i].id == 'alter20') {
                alert('você acertou!')
                niveis[4].style.display = 'none'
                parabens.style.display = 'block'
            } else alert('você errou!')
        })
    }
}