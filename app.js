// Defino un objeto formulario para almacenar los datos de la reserva.
const formulario = {
    nombre: '',
    apellido: '',
    edad: 0,
    participantes: 0,
    horario: '',
    cancha: '',
    turnos: 0,
    pago: '',
    correo: '',
    // Defino un método para mostrar los datos de la reserva.
    reserva: function () {
        const apellidonombre = this.nombre + ", " + this.apellido;
        console.log("La reserva se realizo a nombre de " + apellidonombre + " para el deporte " + this.cancha);
    }
};

// Pido la edad al usuario y la almaceno en el objeto formulario.
formulario.edad = parseInt(prompt("Ingrese su edad:"));
console.log(`Edad: ${formulario.edad}`);

// Verifico si la edad ingresada es válida y si el usuario es mayor de 18 años.
if (isNaN(formulario.edad) || formulario.edad < 18) {
    alert("El usuario es menor de 18 años o ha proporcionado una entrada no válida.");
} else {
    // Continúo pidiendo el resto de los datos para la reserva.
    formulario.nombre = prompt("Ingrese su nombre:");
    console.log(`Nombre: ${formulario.nombre}`);

    formulario.apellido = prompt("Ingrese su apellido:");
    console.log(`Apellido: ${formulario.apellido}`);

    // Pido y almaceno la cantidad de participantes.
    formulario.participantes = parseInt(prompt("Ingrese la cantidad de participantes:"));
    console.log(`Cantidad de participantes: ${formulario.participantes}`);

    // Pido el horario deseado y lo almaceno en el objeto formulario.
    const opcionesHorario = ["Mañana", "Tarde", "Noche"];
    const respuestaHorario = prompt("Elija el horario deseado:\n" + opcionesHorario.join("\n")).toUpperCase();
    formulario.horario = respuestaHorario;
    console.log(`Horario deseado: ${formulario.horario}`);

    // Pido y almaceno la cantidad de turnos que desean usar.
    formulario.turnos = parseInt(prompt("Ingrese cuántos turnos desean usar:"));
    console.log(`Cantidad de turnos: ${formulario.turnos}`);

    // Pido la forma de pago y la almaceno en el objeto formulario.
    const opcionesPago = ["Efectivo", "Tarjeta de credito", "APPS", "Transferencias"];
    const respuestaPago = prompt("¿Como abonan?\n" + opcionesPago.join("\n")).toUpperCase();
    formulario.pago = respuestaPago;
    console.log(`Pago con: ${formulario.pago}`);

    // Pido la cancha deseada y la almaceno en el objeto formulario.
    const opcionesCanchas = ["Voley", "Futbol", "Tenis", "Basquet", "Padel"];
    const respuestaCanchas = prompt("Elija la cancha deseada:\n" + opcionesCanchas.join("\n"));
    formulario.cancha = respuestaCanchas;
    console.log(`Deporte deseado: ${formulario.cancha}`);

    // Pido el correo de reserva y lo almaceno en el objeto formulario.
    formulario.correo = prompt("Ingrese su correo de reserva:");
    console.log(`Correo de reserva: ${formulario.correo}`);

    // Muestro una confirmación de que los datos del formulario se han completado.
    console.log("Datos del formulario completados:");
    for (let clave in formulario) {
        console.log(`${clave}: ${formulario[clave]}`);
    }
}

// Llamo al método reserva para mostrar los datos de la reserva.
formulario.reserva();
