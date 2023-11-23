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

// Función para cargar datos desde un archivo JSON local
function cargarDatosIniciales() {
    fetch('formulario.json')
        .then(response => response.json())
        .then(datos => {
            Object.assign(formulario, datos);
            mostrarDatos();
        })
        .catch(error => console.error('Error al cargar datos:', error));
}

// Función para enviar los datos de reserva
function enviarReserva() {
    axios.post('https://api.miservidor.com/reservas', formulario)
        .then(response => {
            console.log('Reserva enviada con éxito:', response.data);
            Swal.fire({
                title: '¡Reserva Exitosa!',
                text: 'Tu reserva ha sido enviada con éxito.',
                icon: 'success'
            });
        })
}


// Función de manejo del envío del formulario
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

    // Envía los datos de la reserva
    enviarReserva();
}

// Funcion para mostrar los datos en el HTML
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

// Cargar los datos almacenados y los datos iniciales cuando la página se carga
window.onload = function () {
    cargarDatos();
    cargarDatosIniciales();
};

Swal.fire({
    title: "ACTIVANDO!",
    text: "Bienvenidos, los estabamos esperando!",
    icon: "success"
});
