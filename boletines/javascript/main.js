// Obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");
// Recorrerlos
links.forEach(function(link){
    // Agregar un evento click a cada uno de ellos
    link.addEventListener("click", function(ev){ // ev es el nombre más común para cuando se quiere obtener la lista de todos los eventos predeterminados de un elemento
        ev.preventDefault();
        // return false; Esta es otra forma de hacer lo de arriba
        let content = document.querySelector(".content");
        // Quitarle las clases de animación que ya tiene
        content.classList.remove("bounceIn");
        content.classList.remove("animated");
        // Agregarle clases de animación de salida
        content.classList.add("bounceOut");
        content.classList.add("animated"); // Lo quito y lo vuelvo a poner para que repita el proceso de animación
        setTimeout(function(){
            location.href = "/boletines";
        }, 650);
    });
});
// let verMas = document.querySelectorAll(".ver-mas");
// verMas.forEach(function(link){
//     link.addEventListener("click", function(ev){
//         ev.preventDefault();
//         let content = document.querySelector(".content");
//         content.classList.remove("bounceIn");
//         content.classList.remove("animated");
//         content.classList.add("bounceOut");
//         content.classList.add("animated");
//         setTimeout(function(){
//             location.href = 
//         })
//     })
// })