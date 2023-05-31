//Recoger las variables del HTML
let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function(){
    if(active + 1 > lengthItems){
        active = 0; // Si el siguiente ítem sería mayor a la longitud total, volvemos al primer ítem (índice 0)
    }else{
        active = active + 1; // Si no, incrementamos el índice para pasar al siguiente ítem
    }
    reloadSlider(); // Función que recarga el slider con el nuevo ítem activo
}

prev.onclick = function(){
    if(active - 1 < 0){
        active = lengthItems; // Si el ítem anterior sería menor a 0, volvemos al último ítem (índice lengthItems)
    }else{
        active = active - 1; // Si no, decrementamos el índice para pasar al ítem anterior
    }
    reloadSlider();
}
// Simula un clic en el elemento con id "next" cada 5 segundos
let refreshSlider = setInterval(()=> {next.click()}, 5000);

function reloadSlider(){
    // Obtener la posición izquierda del elemento del ítem activo y actualizarlo para desplazar el slider
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';
    // Remover la clase activa del elemento anterior
    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    //Agregar el activo al nuevo elemento
    dots[active].classList.add('active');
    //Ocultar todas las descripciones
    hideAllDescriptions();
    //Mostrar la descripcion del elemento activo
    showDescription(active);
    //Limpiar el refreshSlider para que pare la ejecucion automatica
    clearInterval(refreshSlider);
    //Reinicia el refresh para que siga su ejecucion
    refreshSlider = setInterval(()=> {next.click()}, 5000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', function(){
        active = key; // Actualiza el active al li que has clicado
        reloadSlider();
    })
})
//Funcion para ocultar todas las descripciones
function hideAllDescriptions() {
    // Selecciona todos los elementos que deseamos
    let descriptions = document.querySelectorAll('.slider .item .text-overlay');
    descriptions.forEach((description) => {
        //Oculta la descripcion poniendo el display en none
        description.style.display = 'none';
    });
}

function showDescription(index) {
    // Seleccionamos los elementos que queremos del HTML
    let description = items[index].querySelector('.slider .item .text-overlay');
    //Verifica si hay una descripcion 
    if (description) {
        // Mustra la descripcion del elemeto
        description.style.display = 'flex';
    }
}

hideAllDescriptions();
showDescription(active);

function bienFormulario(){
    swal("¡Gracias por tu mensaje!", "En la mayor brevedad posible me pondre en contacto con usted.", "success");
};