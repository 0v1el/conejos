// Cada conejito contiene 4 fotos en un arreglo
const conejitos = [
    { 
        nombre: "Hembrita🎀Conejita hembra color semi negro de orejas caídas y peluda", 
        raza: "Mini Lop", 
        estado: "disponible", 
        imagenes: ["imagenes/1/1_1_portada.jpeg", "imagenes/1/1_2.jpeg", "imagenes/1/1_3.jpeg", "imagenes/1/1_4.jpeg"] 
    },
    { 
        nombre: "Macho🚹Conejito negrito orejas caídas de regular tamaño y semi peludo", 
        raza: "Mini Lop", 
        estado: "disponible", 
        imagenes: ["imagenes/2/2_1_portada.jpeg", "imagenes/2/2_2.jpeg", "imagenes/2/2_3.jpeg", "imagenes/2/2_4.jpeg"] 
    },
    { 
        nombre: "Género (?) Conejito semi negrito orejas caídas y de poco pelo", 
        raza: "Mini Lop", 
        estado: "disponible", 
        imagenes: ["imagenes/3/3_1_portada.jpeg", "imagenes/3/3_2.jpeg", "imagenes/3/3_3.jpeg", "imagenes/3/3_5.jpeg"] 
    },
    { 
        nombre: "Conejito Macho🚹 Conejito blanco con negro orejas caídas y de poco pelo pero con un encantador bigote de Hitler", 
        raza: "Mini Lop", 
        estado: "disponible", 
        imagenes: ["imagenes/4/4_1_portada.jpeg", "imagenes/4/4_2.jpeg", "imagenes/4/4_3.jpeg", "imagenes/4/4_4.jpeg"] 
    },
    { 
        nombre: "Genero(?) Conejito de orejas caídas pequeñas, plomita con blanco y de bastante pelo", 
        raza: "Mini Lop", 
        estado: "disponible", 
        imagenes: ["imagenes/5/5_1_portada.jpeg", "imagenes/5/5_2.jpeg", "imagenes/5/5_3.jpeg", "imagenes/5/5_2.jpeg"] 
    },
    { 
        nombre: "Genero(?) Conejito de orejas caídas color gris con blanco y de regular pelo", 
        raza: "Mini Lop", 
        estado: "disponible", 
        imagenes: ["imagenes/6/6_1_portada.jpeg", "imagenes/6/6_2.jpeg", "imagenes/6/6_3.jpeg", "imagenes/6/6_2.jpeg"] 
    },
    { 
        nombre: "Hembrita🎀 Conejita de orejas caídas, color negrito con una sola mancha blanca y de regular pelo y el más pequeño de todas las camadas", 
        raza: "Mini Lop", 
        estado: "disponible", 
        imagenes: ["imagenes/7/7_1_portada.jpeg", "imagenes/7/7_2.jpeg", "imagenes/7/7_3.jpeg", "imagenes/7/7_4.jpeg"] 
    },
    { 
        nombre: "Genero (?) Conejito de orejas caídas color negro y de regular pelo tamaño grande por ahora", 
        raza: "Mini Lop", 
        estado: "disponible", 
        imagenes: ["imagenes/8/8_1_portada.jpeg", "imagenes/8/8_2.jpeg", "imagenes/8/8_3.jpeg", "imagenes/8/8_4.jpeg"] 
    },
    { 
        nombre: "Genero (?) Conejito de orejas caídas pelaje gris,  plomo y blanco de bastante pelaje", 
        raza: "Mini Lop", 
        estado: "disponible", 
        imagenes: ["imagenes/9/9_1_portada.jpeg", "imagenes/9/9_2.jpeg", "imagenes/9/9_3.jpeg", "imagenes/9/9_4.jpeg"] 
    },
    {
        nombre: "Conejito adulta de 2 años hembrita, de orejas levantadas, muy cariñosa y activa, se entregara con su correa, vestido y transportable.",
        raza: "cruzada",
        estado: "disponible",
        imagenes: ["imagenes/10/10_1_portada.jpeg", "imagenes/10/10_2.jpeg", "imagenes/10/10_3.jpeg", "imagenes/10/10_4.jpeg"]
    }
];

// URL pública de GitHub Pages para generar la vista previa de la foto en WhatsApp
const urlBaseWeb = "https://0v1el.github.io/conejos/";

// Variables para controlar el visor emergente
let listaFotosActual = [];
let indiceFotoActual = 0;

const modal = document.getElementById('modal-galeria');
const imgModal = document.getElementById('img-modal');
const contadorModal = document.getElementById('modal-contador');
const btnCerrar = document.getElementById('btn-cerrar');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

function cargarConejitos() {
    const contenedor = document.getElementById('tienda-contenedor');

    conejitos.forEach((conejito, indiceConejo) => {
        const textoEtiqueta = conejito.estado === "disponible" ? "Disponible" : "Adoptado";
        const claseEtiqueta = conejito.estado === "disponible" ? "disponible" : "no-disponible";
        const numeroWhatsApp = "51974229983"; 
        
        // Obtenemos el link web completo de la primera foto para que WhatsApp genere la miniatura
        const urlFotoReferencia = `${urlBaseWeb}${conejito.imagenes[0]}`;
        
        // Mensaje formateado con salto de línea y la foto para la previsualización
        const mensaje = 
            `¡Hola! 🐰 Estoy interesado en adoptar a: ${conejito.nombre} (Raza: ${conejito.raza}).\n\n` +
            `Foto de referencia:\n${urlFotoReferencia}\n\n` +
            `¿Aún está disponible y aplica la promoción?`;
            
        const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');

        tarjeta.innerHTML = `
            <div class="etiqueta ${claseEtiqueta}">${textoEtiqueta}</div>
            
            <!-- Pila de fotos con efecto de manojo superpuesto -->
            <div class="pila-fotos" onclick="abrirGaleria(${indiceConejo})">
                <div class="foto-capa capa-fondo-1"></div>
                <div class="foto-capa capa-fondo-2"></div>
                <img class="foto-principal" src="${conejito.imagenes[0]}" alt="Conejito ${conejito.nombre}">
                <span class="insignia-galeria">📷 4 fotos</span>
            </div>

            <h2>${conejito.nombre}</h2>
            <p>Raza: ${conejito.raza}</p>
            ${conejito.estado === "disponible" 
                ? `<a href="${linkWhatsApp}" target="_blank" class="btn-whatsapp">Adoptar por WhatsApp</a>` 
                : ''}
        `;

        contenedor.appendChild(tarjeta);
    });
}

// Abrir el visor
function abrirGaleria(indiceConejo) {
    listaFotosActual = conejitos[indiceConejo].imagenes;
    indiceFotoActual = 0;
    actualizarModal();
    modal.classList.add('activo');
}

// Actualizar la foto en pantalla
function actualizarModal() {
    imgModal.src = listaFotosActual[indiceFotoActual];
    contadorModal.textContent = `${indiceFotoActual + 1} / ${listaFotosActual.length}`;
}

// Navegación (Siguiente / Anterior)
function fotoSiguiente() {
    indiceFotoActual = (indiceFotoActual + 1) % listaFotosActual.length;
    actualizarModal();
}

function fotoAnterior() {
    indiceFotoActual = (indiceFotoActual - 1 + listaFotosActual.length) % listaFotosActual.length;
    actualizarModal();
}

function cerrarModal() {
    modal.classList.remove('activo');
}

// Listeners de los botones
btnNext.addEventListener('click', fotoSiguiente);
btnPrev.addEventListener('click', fotoAnterior);
btnCerrar.addEventListener('click', cerrarModal);

// Cerrar si hace clic fuera de la foto
modal.addEventListener('click', (e) => {
    if (e.target === modal) cerrarModal();
});

// Navegación con teclado (Flechas y Esc)
document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('activo')) return;
    if (e.key === 'ArrowRight') fotoSiguiente();
    if (e.key === 'ArrowLeft') fotoAnterior();
    if (e.key === 'Escape') cerrarModal();
});

// Iniciar
cargarConejitos();