// ***** Seleccionar contenido *****

// querySelector
// Te va a retornar ya sea ninguno o hasta un elemento que concuerde con el selector que se escriba
// const heading = document.querySelector('.header__texto h2');
const heading = document.querySelector('#heading');
console.log(heading);


// querySelectorAll
// Te va a retornar ya sea ninguno o hasta todos los elemento que concuerde con el selector que se escriba
// Retorna un nodeList
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces);

// Acceder a un elemento en especifico del nodeList
console.log(enlaces[0]);

// Propiedades de ese elemento
enlaces[0].textContent = 'Nuevo enlace desde JS';
// enlaces[0].href = 'http://www.google.com';
enlaces[0].classList.add('nueva-clase');


// getElementById
const heading2 = document.getElementById('heading');
console.log(heading2);



// ***** Generar un nuevo enlace con código de JavaScript *****
// Cuando utilizas createElement es recomendable utilizar mayúsculas
const nuevoEnlace = document.createElement('A');

// Agregar href
nuevoEnlace.href = 'nuevo-enlace.html';

// Agregar texto
nuevoEnlace.textContent = 'Tienda Virtual';

// Agregar clase
nuevoEnlace.classList.add('navegacion__enlace');

// Agregar al documento el HTML
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);



// ***** Eventos *****
console.log(1);

// load espera a que el JS y los archivos que dependen del HTML esten listos
window.addEventListener('load', imprimir);

window.onload = function() {
    console.log(3);
}

// DOMContentLoaded solo espera a que este listo el HTML pero no espera CSS o imágenes
document.addEventListener('DOMContentLoaded', function() {
    console.log(4);
});

console.log(5);

function imprimir() {
    console.log(2);
}

// window.onscroll = function() {
//     console.log('Scrolling...')
// }

// ***** Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton--primario');

// // El click se escucha desde distintos elementos(img, textos, etc)
// btnEnviar.addEventListener('click', function(e) {
//     console.log(e);
//     e.preventDefault();
//     console.log('enviando formulario');
// });



// ***** Eventos de los inputs y textarea
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

// nombre.addEventListener('change', function() {
//     console.log('Escribiendo...');
// });

// // En el paremetro se pasa un evento de lo que está sucediendo
// nombre.addEventListener('input', function(e) {
//     // Value es la información que va a estar en un input
//     console.log(e.target.value);
// });


nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// ***** El evento de submit
// En los formularios siempre se va escuchar por el evento submit
// El submit se escucha desde el formulario y debe tener un input:submit
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validar el formulario
    const {nombre, email, mensaje} = datos

    if(nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', true);

        return; // Corta la ejecución de código
    }

    // Enviar el formulario
    mostrarAlerta('El email se ha enviado correctamente');
});

// Se pasa en automático el evento
function leerTexto(e) {
    // console.log(e.target.value);

    datos[e.target.id] = e.target.value;
    // console.log(datos);
}

// Mostrar una alerta en pantalla (correcta o error) utilizando refactoring
// Lo importante es hacer un código feo que funciones y una vez que lo entiendas
// se debe mejorar ese código
function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto')
    }

    formulario.appendChild(alerta);

    // Desaparezca despues de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}

// Muestra un error en pantalla
// function mostrarError(mensaje) {
//     const error = document.createElement('P');
//     error.classList.add('error');

//     error.textContent = mensaje;

//     formulario.appendChild(error);

//     // Desaparezca despues de 5 segundos
//     setTimeout(() => {
//         error.remove();
//     }, 5000);
// }

// function mostrarConfirmacion(mensaje) {
//     const confirmacion = document.createElement('P');
//     confirmacion.classList.add('correcto');

//     confirmacion.textContent = mensaje;

//     formulario.appendChild(confirmacion);

//     // Desaparezca despues de 5 segundos
//     setTimeout(() => {
//         confirmacion.remove();
//     }, 5000);
// }

// ¿Cómo organizar nuestro código?
// 1) Todas las variables
// 2) Todos los events listeners
// 3) Funciones