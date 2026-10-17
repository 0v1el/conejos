// Cada conejito contiene 4 fotos en un arreglo
const conejitos = [
    { 
        nombre: "1", 
        raza: "Mini Lop", 
        estado: "disponible", 
        imagenes: ["imagenes/1/1_1_portada.jpeg", "imagenes/1/1_2.jpeg", "imagenes/1/1_3.jpeg", "imagenes/1/1_4.jpeg"] 
    },
    { 
        nombre: "2", 
        raza: "Mini Lop", 
        estado: "disponible", 
        imagenes: ["imagenes/2/2_1_portada.jpeg", "imagenes/2/2_2.jpeg", "imagenes/2/2_3.jpeg", "imagenes/2/2_4.jpeg"] 
    },
    { 
        nombre: "3", 
        raza: "Mini Lop", 
        estado: "disponible", 
        imagenes: ["imagenes/3/3_1_portada.jpeg", "imagenes/3/3_2.jpeg", "imagenes/3/3_3.jpeg", "imagenes/3/3_5.jpeg"] 
    },
    { 
        nombre: "4", 
        raza: "Mini Lop", 
        estado: "disponible", 
        imagenes: ["imagenes/4/4_1_portada.jpeg", "imagenes/4/4_2.jpeg", "imagenes/4/4_3.jpeg", "imagenes/4/4_4.jpeg"] 
    },
    { 
        nombre: "5", 
        raza: "Mini Lop", 
        estado: "disponible", 
        imagenes: ["imagenes/5/5_1_portada.jpeg", "imagenes/5/5_2.jpeg", "imagenes/5/5_3.jpeg", "imagenes/5/5_2.jpeg"] 
    },
    { 
        nombre: "6", 
        raza: "Mini Lop", 
        estado: "disponible", 
        imagenes: ["imagenes/6/6_1_portada.jpeg", "imagenes/6/6_2.jpeg", "imagenes/6/6_3.jpeg", "imagenes/6/6_2.jpeg"] 
    },
    { 
        nombre: "7", 
        raza: "Mini Lop", 
        estado: "disponible", 
        imagenes: ["imagenes/7/7_1_portada.jpeg", "imagenes/7/7_2.jpeg", "imagenes/7/7_3.jpeg", "imagenes/7/7_4.jpeg"] 
    },
    { 
        nombre: "8", 
        raza: "Mini Lop", 
        estado: "disponible", 
        imagenes: ["imagenes/8/8_1_portada.jpeg", "imagenes/8/8_2.jpeg", "imagenes/8/8_3.jpeg", "imagenes/8/8_4.jpeg"] 
    },
    { 
        nombre: "9", 
        raza: "Mini Lop", 
        estado: "disponible", 
        imagenes: ["imagenes/9/9_1_portada.jpeg", "imagenes/9/9_2.jpeg", "imagenes/9/9_3.jpeg", "imagenes/9/9_4.jpeg"] 
    },
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