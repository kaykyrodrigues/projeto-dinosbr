const dinossauros = document.querySelectorAll('.dinossauro')
let dinoAtual = 0

function ClicarIr() {
    dinossauros[dinoAtual].classList.remove('active')
    dinoAtual = (dinoAtual + 1) % dinossauros.length
    dinossauros[dinoAtual].classList.add('active')


}

/* if (dinoAtual == 1) {
    let corpo = document.getElementById('dinossauro2')
    corpo.style.background = '#2a3d65'
} else if (dinoAtual = 2) {
    let corpo = document.getElementById('dinossauro3')
    corpo.style.background = '#8c4424'
} else {
    let corpo = document.getElementById('dinossauro1')
    corpo.style.background = '#2d1c24'
}
    
    let corpo = document.getElementById('dinossauros')
    
    switch(corpo) {
        case 0: 
            corpo.style.background = '#2d1c24'
            break
        case 1:
            corpo.style.background = '#8c4424'
            break
        case 2:
            corpo.style.background = '#8c4424'
            break
    }
}*/