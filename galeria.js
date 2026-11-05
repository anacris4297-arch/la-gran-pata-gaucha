
/* GALERÍA DE FOTOS - LA GRAN PATA GAUCHA */

// Cargamos las fotografías desde el archivo JSON
fetch("galeria.json")
  .then(respuesta => respuesta.json())
  .then(fotos => {

    const contenedor = document.getElementById("contenedor-galeria");

    // Creamos las fotografías de la galería
    fotos.forEach((foto, indice) => {
      const imagen = document.createElement("img");

      imagen.src = foto.imagen;
      imagen.alt = foto.descripcion;
      imagen.className = "foto-galeria";
      imagen.loading = "lazy";

      // Al tocar una foto, la abrimos ampliada
      imagen.addEventListener("click", () => {
        abrirGaleria(indice);
      });

      contenedor.appendChild(imagen);
    });

    // Creamos el visor de fotografías ampliadas
    const visor = document.createElement("div");
    visor.id = "visor-galeria";

    visor.innerHTML = `
      <button id="cerrar-galeria" aria-label="Cerrar">×</button>
      <button id="anterior-galeria" aria-label="Anterior">❮</button>
      <img id="imagen-ampliada" alt="Fotografía ampliada">
      <button id="siguiente-galeria" aria-label="Siguiente">❯</button>
    `;

    document.body.appendChild(visor);

    let fotoActual = 0;

    // Abrir fotografía
    function abrirGaleria(indice) {
      fotoActual = indice;
      mostrarFoto();
      visor.classList.add("activo");
    }

    // Mostrar la fotografía seleccionada
    function mostrarFoto() {
      const imagenAmpliada = document.getElementById("imagen-ampliada");

      imagenAmpliada.src = fotos[fotoActual].imagen;
      imagenAmpliada.alt = fotos[fotoActual].descripcion;
    }

    // Cerrar visor
    document.getElementById("cerrar-galeria").addEventListener("click", () => {
      visor.classList.remove("activo");
    });

    // Fotografía anterior
    document.getElementById("anterior-galeria").addEventListener("click", () => {
      fotoActual = (fotoActual - 1 + fotos.length) % fotos.length;
      mostrarFoto();
    });

    // Fotografía siguiente
    document.getElementById("siguiente-galeria").addEventListener("click", () => {
      fotoActual = (fotoActual + 1) % fotos.length;
      mostrarFoto();
    });

    // Cerrar con Escape
    document.addEventListener("keydown", (evento) => {
      if (evento.key === "Escape") {
        visor.classList.remove("activo");
      }
    });

  })
  .catch(error => console.error("Error al cargar la galería:", error));
