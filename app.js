let formulario = {};

// Se solicita y muestra la edad del usuario.
formulario.edad = prompt("Ingrese su edad:");
console.log(`Edad: ${formulario.edad}`);

// Se convierte la edad en un número.
const edadNumero = parseInt(formulario.edad);

// Se verifica si la edad no es un número válido o si es menor de 18 años.
if (isNaN(edadNumero) || edadNumero < 18) {
    alert("El usuario es menor de 18 años o ha proporcionado una entrada no válida.");
} else {
    // Continúa con la recopilación de datos.
    formulario.nombre = prompt("Ingrese su nombre:");
    console.log(`Nombre: ${formulario.nombre}`);

    // Se solicita y muestra el apellido.
    formulario.apellido = prompt("Ingrese su apellido:");
    console.log(`Apellido: ${formulario.apellido}`);

    // Se solicita y muestra la cantidad de participantes.
    formulario.participantes = prompt("Ingrese la cantidad de participantes:");
    console.log(`Cantidad de participantes: ${formulario.participantes}`);

    // Se solicita y muestra el horario deseado con opciones.
    const opcionesHorario = ["Mañana", "Tarde", "Noche"];
    const indiceHorario = prompt("Elija el horario deseado:\n" + opcionesHorario.join("\n"));
    formulario.horario = opcionesHorario[indiceHorario];
    console.log(`Horario deseado: ${formulario.horario}`);

    // Se solicita y muestra cuántos turnos desean usar.
    formulario.turnos = prompt("Ingrese cuántos turnos desean usar:");
    console.log(`Cantidad de turnos: ${formulario.turnos}`);

    // Se solicita y muestra si pagan en efectivo con opciones.
    const opcionesPago = ["Sí", "No"];
    const indicePago = prompt("¿Pagan en efectivo?\n" + opcionesPago.join("\n"));
    formulario.efectivo = opcionesPago[indicePago] === "Sí";
    console.log(`Pago en efectivo: ${formulario.efectivo ? "Sí" : "No"}`);

    // Se solicita y muestra la cancha deseada.
    formulario.cancha = prompt("Ingrese la cancha deseada:");
    console.log(`Cancha deseada: ${formulario.cancha}`);

    // Se solicita y muestra el correo de reserva.
    formulario.correo = prompt("Ingrese su correo de reserva:");
    console.log(`Correo de reserva: ${formulario.correo}`);

    // Se muestra la confirmación de que los datos del formulario se han completado.
    console.log("Datos del formulario completados:");
    for (let clave in formulario) {
        console.log(`${clave}: ${formulario[clave]}`);
    }
}
