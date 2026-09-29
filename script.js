// Lista de 10 conejitos
const conejitos = [
    { nombre: "soy el six seven", raza: "Mini Lop", estado: "disponible", imagen: "imagenes/67.jpg" },
    { nombre: "beshito u3u", raza: "Mini Lop", estado: "disponible", imagen: "imagenes/beshito.jpg" },
    { nombre: "posesita", raza: "Mini Lop", estado: "no-disponible", imagen: "imagenes/facha1.jpg" },
    { nombre: "posesita 2", raza: "Mini Lop", estado: "disponible", imagen: "imagenes/facha2.jpg" },
    { nombre: "yo cuando molesto a mi novia y ella se molesta pero yo queria eso y estoy feliz de hacerlo xdxd, no mentira amorcito, te amo", raza: "Mini Lop", estado: "no-disponible", imagen: "imagenes/feli.jpg" },
    { nombre: "pose metalera", raza: "Mini Lop", estado: "disponible", imagen: "imagenes/lenguita.jpg" },
    { nombre: "oviel modo san marquino terruco", raza: "Mini Lop", estado: "disponible", imagen: "imagenes/narco.jpg" },
    { nombre: "oviel nerd", raza: "Mini Lop", estado: "disponible", imagen: "imagenes/nerd.jpg" },
    { nombre: "esto le gustará a waby?", raza: "Mini Lop", estado: "no-disponible", imagen: "imagenes/pregunta.jpg" },
    { nombre: "shhh vamos cerrando el ortito", raza: "Mini Lop", estado: "disponible", imagen: "imagenes/shh.jpg" }
];

// Función para mostrar los conejitos en la página
function cargarConejitos() {
    const contenedor = document.getElementById('tienda-contenedor');

    conejitos.forEach(conejito => {
        // Determinar el texto y la clase de la etiqueta según el estado
        const textoEtiqueta = conejito.estado === "disponible" ? "Disponible" : "Adoptado";
        const claseEtiqueta = conejito.estado === "disponible" ? "disponible" : "no-disponible";

        // Crear la estructura HTML de la tarjeta
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');

        tarjeta.innerHTML = `
            <div class="etiqueta ${claseEtiqueta}">${textoEtiqueta}</div>
            <img src="${conejito.imagen}" alt="Conejito ${conejito.nombre}">
            <h2>${conejito.nombre}</h2>
            <p>Raza: ${conejito.raza}</p>
        `;

        // Añadir la tarjeta al contenedor principal
        contenedor.appendChild(tarjeta);
    });
}

// Ejecutar la función cuando la página cargue
cargarConejitos();