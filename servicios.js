
 // Leemos la información de los servicios desde el archivo JSON.
fetch("servicios.json")
  .then(respuesta => respuesta.json())
  .then(servicios => {
    console.log(servicios);
    // Buscamos el contenedor de servicios en el HTML.
const contenedor = document.getElementById("contenedor-servicios");


  // Creamos el contenido desplegable de cada servicio.
  function crearDetalles(servicio) {
    return `
      <div class="collapse mt-3" id="detalleServicio${servicio.id}">
        <ul class="list-unstyled">
          ${servicio.detalles.map(detalle => `<li>✓ ${detalle}</li>`).join("")}
        </ul>
      </div>
    `;
  }

// Recorremos los servicios que vienen del archivo JSON.
servicios.forEach(servicio => {

  // Creamos un bloque para cada servicio.
  const bloque = document.createElement("div");

// Alternamos la posición de las imágenes entre izquierda y derecha.
bloque.className = servicio.id % 2 === 0
  ? "servicio-bloque servicio-invertido"
  : "servicio-bloque";

  // Mostramos por ahora el nombre de cada servicio.

bloque.innerHTML = `
  ${servicio.imagen ? `
    <div class="servicio-imagen">
      <img src="${servicio.imagen}" alt="${servicio.nombre}">
    </div>
  ` : ""}

  <div class="servicio-texto" ${!servicio.imagen ? 'style="width: 100%;"' : ""}>
    <p class="servicio-etiqueta">${servicio.etiqueta}</p>
    <h3>${servicio.nombre}</h3>
    <p>${servicio.descripcion}</p>
    
    <!-- Botón para desplegar los detalles del servicio -->
<button
  class="btn-servicio"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#detalleServicio${servicio.id}"
  aria-expanded="false"
  aria-controls="detalleServicio${servicio.id}">
  + Info
</button>

${crearDetalles(servicio)}

<div class="mt-3"></div>
    <!-- Botón de consulta personalizado para cada servicio -->
    <a
      href="https://wa.me/543442559269?text=${encodeURIComponent('Hola, quisiera consultar por ' + servicio.nombre)}"
      class="btn-servicio"
      target="_blank"
      rel="noopener noreferrer">
      Consultar
    </a>

  </div>
`;


  // Agregamos el bloque al contenedor.
  contenedor.appendChild(bloque);
});
  })
  .catch(error => {
    console.error("Error al cargar los servicios:", error);
  });
