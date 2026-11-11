document.addEventListener("DOMContentLoaded", () => {
    // animaciones
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

    // favicon random
    const favicons = [
    "src/images/favicon_ps.png",
    "src/images/favicon_n.png",
    "src/images/favicon_sp.png",
    "src/images/favicon_lr.png"
  ];

  const randomIndex = Math.floor(Math.random() * favicons.length);
  
  document.getElementById("favicon").href = favicons[randomIndex];
});