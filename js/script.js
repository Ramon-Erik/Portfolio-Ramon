const observador = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('shown')
        } else {
            entry.target.classList.remove('shown')
        }
        console.log(entry)
    })
})

const elementoEscondido = document.querySelectorAll('.hidden')
const cardEscondido = document.querySelectorAll('.hidden-hb')

elementoEscondido.forEach(el => {
    observador.observe(el)
});
cardEscondido.forEach(el => {
    observador.observe(el)
});

const cardsHabilidades = document.querySelectorAll('.hb')
function mostrarInfoHb(hb) {
    const p = document.querySelector('.hb-info p')
    const nomeHb = hb.querySelector('p').innerText.split(' ')[0]
    p.innerText = infoHb(nomeHb)
}

function infoHb(nomeHb) {
    switch (nomeHb) {
        case 'HTML':
        case 'CSS':
            return 'Habilidade de criar sites usando HTML5 e CSS3 para sites de diversos tipos.'
        case 'JS':
            return 'Habilidade de manipular o DOM e criar sites interativos!'
        case 'React':
            return 'Criação de páginas com React JS'
        case 'PHP':
            return 'Habilidade de esatabelecer conexão entre cliente e servidor através do pre-processamento de dados com PHP!'
        case 'GIT':
            return 'Capacidade de fazer o versionamento de códigos por meio de git e github.'
        default:
            return 'Clique ou passe o mouse por cima de um card ;)'
    }
}

function tira() {
    const p = document.querySelector('.hb-info p')
    p.innerHTML = 'Clique ou passe o mouse por cima de um card &#59;&#41;'
}

cardsHabilidades.forEach((card) => {
    card.addEventListener('click', () => mostrarInfoHb(card))
    card.addEventListener('mouseover', () => mostrarInfoHb(card))
    card.addEventListener('mouseleave', () => tira())
})