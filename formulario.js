const formulario = document.getElementById("formPresupuesto");

formulario.addEventListener("submit", function(evento) {
  evento.preventDefault();
  const nombre = document.getElementById("nombre").value;
const telefono = document.getElementById("telefono").value;
const correo = document.getElementById("correo").value;
const fecha = document.getElementById("fecha").value;
const invitados = document.getElementById("invitados").value;
const servicio = document.getElementById("servicio").value;
const mensaje = document.getElementById("mensaje").value;
const texto = `Hola, quiero solicitar un presupuesto.
Nombre: ${nombre}
Teléfono: ${telefono}
Correo: ${correo}
Fecha: ${fecha}
Invitados: ${invitados}
Servicio: ${servicio}
Consulta: ${mensaje}`;
const url = `https://wa.me/543442559269?text=${encodeURIComponent(texto)}`;
window.open(url, "_blank");
});