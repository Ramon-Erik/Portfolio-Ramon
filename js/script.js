const observador = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('shown')
        } else {
            entry.target.classList.remove('shown')
        }
    })
})

const elementoEscondido = document.querySelectorAll('.hidden')
elementoEscondido.forEach(el => {
    observador.observe(el)
});