var valor = true
function cambioHumano(){
    var imagenPerro = document.getElementById("imagen");
    imagenPerro.src = "https://i.pinimg.com/originals/d8/81/16/d88116ba357f604987176674b6d8f9c7.jpg";
    valor?imagenPerro.src = "https://i.pinimg.com/originals/d8/81/16/d88116ba357f604987176674b6d8f9c7.jpg":imagenPerro.src = "https://www.petdarling.com/articulos/wp-content/uploads/2015/08/raza-Bulldog-ingl%C3%A9s.jpg?width=1200&enable=upscale";

    var textoBoton = document.getElementById("boton");
    valor?textoBoton.innerText = "Convertir a perro":textoBoton.innerText = "Convertir a humano";
    
    valor=!valor
}