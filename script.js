var verMasTexto = document.getElementById('verMasTexto');
var informacion = document.querySelector('.informacion-deslizante');
var cerrar = document.getElementById('cerrar');


//mostrar es la clase con transicion
verMasTexto.addEventListener('click', function () {
    informacion.classList.toggle('mostrar');
});

cerrar.addEventListener('click', function () {
    informacion.classList.remove('mostrar');
});

// Para cerrar el div si se hace clic fuera de él
window.addEventListener('click', function (event) {
    if (!informacion.contains(event.target) && event.target !== verMasTexto) {
        informacion.classList.remove('mostrar');
    }
});




var contenedores = document.querySelectorAll('.burbuja-container')

//funcion agregada a cada contendor para que se scrollee hacia el area deseada
contenedores.forEach(function (contenedor) {
    contenedor.addEventListener('click', function () {
        var targetId = contenedor.getAttribute('data-target');
        var targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
