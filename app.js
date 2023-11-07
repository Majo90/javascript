// Defino un objeto formulario para almacenar los datos de la reserva.
const formulario = {
    nombre: '',
    apellido: '',
    edad: 0,
    participantes: 0,
    horario: '',
    cancha: '',
    pago: '',
    correo: '',
    // Defino un método para mostrar los datos de la reserva.
    reserva: function () {
        const apellidonombre = this.nombre + ", " + this.apellido;
        console.log("La reserva se realizo a nombre de " + apellidonombre + " para el deporte " + this.cancha);
    }
}


// Función para guardar los datos en localStorage
function guardarDatos() {
    localStorage.setItem('datosFormulario', JSON.stringify(formulario));
}

// Función para cargar los datos desde localStorage
function cargarDatos() {
    const datosGuardados = localStorage.getItem('datosFormulario');
    if (datosGuardados) {
        Object.assign(formulario, JSON.parse(datosGuardados));
    }
}

function submitForm(e) {
    e.preventDefault();

    // Recopila los datos del formulario
    formulario.edad = parseInt(document.getElementById('edad').value);
    formulario.nombre = document.getElementById('nombre').value;
    formulario.apellido = document.getElementById('apellido').value;
    formulario.participantes = parseInt(document.getElementById('participantes').value);
    formulario.horario = document.getElementById('horario').value;
    formulario.pago = document.getElementById('pago').value;
    formulario.cancha = document.getElementById('cancha').value;
    formulario.correo = document.getElementById('correo').value;

    // Llama al método reserva para mostrar los datos de la reserva
    formulario.reserva();

    // Llama a la función mostrarDatos para imprimir los datos en el documento HTML
    mostrarDatos();

    // Guarda los datos en el almacenamiento local
    guardarDatos();
}

function mostrarDatos() {
    let output = "Datos del formulario completados:<br>";
    for (let clave in formulario) {
        if (formulario.hasOwnProperty(clave) && typeof formulario[clave] !== 'function') {
            output += `${clave}: ${formulario[clave]}<br>`;
        }
    }
    // Agrega la línea para mostrar el total a pagar
    output += `Total a pagar: ${formulario.totalPagar}<br>`;
    document.getElementById('resultado').innerHTML = output;
}

// Carga los datos almacenados cuando la página se carga
window.onload = cargarDatos;
