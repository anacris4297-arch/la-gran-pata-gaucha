// Obtener los productos desde el archivo JSON
fetch("productos.json")
    .then(respuesta => respuesta.json())
    .then(productos => {
        console.log(productos);
        const contenedor = document.getElementById("contenedor-productos");
        contenedor.innerHTML = "";
        productos.forEach(producto => {
            const tarjeta = document.createElement( "div");
           tarjeta.classList.add("card", "d-flex", "flex-column");
            let contenidoImagen = "";
            if (producto.imagenes.length > 1) {
const idCarrusel = `carrusel-${producto.nombre.toLowerCase().replaceAll(" ", "-")}`;
const imagenesCarrusel = producto.imagenes.map((imagen, indice) => {
return `
    <div class="carousel-item ${indice === 0 ? 'active' : ''}">
        <img src="${imagen}" class="d-block w-100" alt="${producto.nombre}">
    </div>
`;
});
const diapositivas = imagenesCarrusel.join("");
contenidoImagen = `
    <div id="${idCarrusel}" class="carousel slide">
        <div class="carousel-inner">
            ${diapositivas}
        </div>
        <button class="carousel-control-next" type="button"
        data-bs-target="#${idCarrusel}" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Siguiente</span>
</button>
<button class="carousel-control-prev" type="button"
        data-bs-target="#${idCarrusel}" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Anterior</span>
</button>
    </div>
`
} else {
contenidoImagen = `<img src="${producto.imagenes[0]}" class="card-img-top" alt="${producto.nombre}">`;
}
const mensaje = `Hola, quisiera consultar por ${producto.nombre} de La Gran Pata Gaucha.`;
const enlaceWhatsApp = `https://wa.me/543442559269?text=${encodeURIComponent(mensaje)}`;
            tarjeta.innerHTML = `
    ${contenidoImagen}
    <div class="card-body">
        <h5>${producto.nombre}</h5>
        <p>${producto.descripcion}</p>
        <a href="${enlaceWhatsApp}" target="_blank" rel="noopener noreferrer" class="btn btn-primary mt-auto">Consultar</a>
    </div>
`;
            contenedor.appendChild(tarjeta);

});
    })
    .catch(error => {
        console.error("Error al cargar los productos:", error);
    });