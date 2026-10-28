document.addEventListener("DOMContentLoaded", () => {
    const elementos = document.querySelectorAll('.animar-al-scroll');

    const observador = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                const el = entrada.target;
                const animacion = el.dataset.animacion; 

                el.classList.add('animate__animated', animacion);

                observador.unobserve(el);
            }
        });
    }, {
        threshold: 0.2
    });

    elementos.forEach(el => observador.observe(el));
});