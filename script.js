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

function cargarConejitos() {
    const contenedor = document.getElementById('tienda-contenedor');

    conejitos.forEach(conejito => {
        const textoEtiqueta = conejito.estado === "disponible" ? "Disponible" : "Adoptado";
        const claseEtiqueta = conejito.estado === "disponible" ? "disponible" : "no-disponible";

        // ¡ATENCIÓN! Cambia este número por tu número real de WhatsApp (con el 51 adelante)
        const numeroWhatsApp = "51902243841"; 
        
        // Mensaje y link para WhatsApp
        const mensaje = `Hola, estoy interesado en el conejito ${conejito.nombre} de raza ${conejito.raza}. ¿Aún está disponible?`;
        const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');

        // Estructura HTML de la tarjeta (ahora incluye el botón verde)
        tarjeta.innerHTML = `
            <div class="etiqueta ${claseEtiqueta}">${textoEtiqueta}</div>
            <img src="${conejito.imagen}" alt="Conejito ${conejito.nombre}">
            <h2>${conejito.nombre}</h2>
            <p>Raza: ${conejito.raza}</p>
            ${conejito.estado === "disponible" 
                ? `<a href="${linkWhatsApp}" target="_blank" class="btn-whatsapp">Adoptar por WhatsApp</a>` 
                : ''}
        `;

        contenedor.appendChild(tarjeta);
    });
}

// 3. ESTO EJECUTA LA FUNCIÓN
cargarConejitos();