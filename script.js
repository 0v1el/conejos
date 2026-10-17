// Cada conejito contiene 4 fotos en un arreglo
const conejitos = [
    { 
        nombre: "1", 
        raza: "Mini Lop", 
        estado: "disponible", 
        imagenes: ["imagenes/1/1_1_portada.jpg", "imagenes/1/1_2.jpg", "imagenes/1/1_3.jpg", "imagenes/1/1_4.jpg"] 
    },
    { 
        nombre: "2", 
        raza: "Mini Lop", 
        estado: "disponible", 
        imagenes: ["imagenes/2/2_1_portada.jpg", "imagenes/2/2_2.jpg", "imagenes/2/2_3.jpg", "imagenes/2/2_4.jpg"] 
    },
    { 
        nombre: "posesita", 
        raza: "Mini Lop", 
        estado: "disponible", 
        imagenes: ["imagenes/facha1.jpg", "imagenes/facha1_2.jpg", "imagenes/facha1_3.jpg", "imagenes/facha1_4.jpg"] 
    },
    { 
        nombre: "posesita 2", 
        raza: "Mini Lop", 
        estado: "disponible", 
        imagenes: ["imagenes/facha2.jpg", "imagenes/facha2_2.jpg", "imagenes/facha2_3.jpg", "imagenes/facha2_4.jpg"] 
    },
    { 
        nombre: "yo cuando molesto a mi novia y ella se molesta pero yo queria eso y estoy feliz de hacerlo xdxd, no mentira amorcito, te amo", 
        raza: "Mini Lop", 
        estado: "disponible", 
        imagenes: ["imagenes/feli.jpg", "imagenes/feli_2.jpg", "imagenes/feli_3.jpg", "imagenes/feli_4.jpg"] 
    },
    { 
        nombre: "pose metalera", 
        raza: "Mini Lop", 
        estado: "disponible", 
        imagenes: ["imagenes/lenguita.jpg", "imagenes/lenguita_2.jpg", "imagenes/lenguita_3.jpg", "imagenes/lenguita_4.jpg"] 
    },
    { 
        nombre: "oviel modo san marquino terruco", 
        raza: "Mini Lop", 
        estado: "disponible", 
        imagenes: ["imagenes/narco.jpg", "imagenes/narco_2.jpg", "imagenes/narco_3.jpg", "imagenes/narco_4.jpg"] 
    },
    { 
        nombre: "oviel nerd", 
        raza: "Mini Lop", 
        estado: "disponible", 
        imagenes: ["imagenes/nerd.jpg", "imagenes/nerd_2.jpg", "imagenes/nerd_3.jpg", "imagenes/nerd_4.jpg"] 
    },
    { 
        nombre: "esto le gustará a waby?", 
        raza: "Mini Lop", 
        estado: "disponible", 
        imagenes: ["imagenes/pregunta.jpg", "imagenes/pregunta_2.jpg", "imagenes/pregunta_3.jpg", "imagenes/pregunta_4.jpg"] 
    },
    { 
        nombre: "shhh vamos cerrando el ortito", 
        raza: "Mini Lop", 
        estado: "disponible", 
        imagenes: ["imagenes/shh.jpg", "imagenes/shh_2.jpg", "imagenes/shh_3.jpg", "imagenes/shh_4.jpg"] 
    }
];

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
        const numeroWhatsApp = "51902243841"; 
        
        const mensaje = `Hola, estoy interesado en el conejito ${conejito.nombre} de raza ${conejito.raza}. ¿Aún está disponible?`;
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