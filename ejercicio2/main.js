var j1 = prompt("Jugador 1 escoge piedra, papel o tijera");
var j2 = prompt("Jugador 2 escoge piedra, papel o tijera");
var resultado;

if (j1 === j2){
    resultado = "Empate";
    console.log(resultado + "," + j1 + " es igual a " + j2);
    alert(resultado + "!!," + j1 + " es igual a " + j2);
}

if (j1 == "piedra" && j2 == "papel"){
    resultado = "Gana Jugador 2!!";
    console.log(resultado + "," + j2 + " mata " + j1);
    alert(resultado + "," + j2 + " mata " + j1);
}

if (j1 == "piedra" && j2 == "tijera"){
    resultado = "Gana Jugador 1!!";
    console.log(resultado + "," + j1 + " mata " + j2);
    alert(resultado + "," + j1 + " mata " + j2);
}

if (j1 == "papel" && j2 == "piedra"){
    resultado = "Gana Jugador 1!!";
    console.log(resultado + "," + j1 + " mata " + j2);
    alert(resultado + "," + j1 + " mata " + j2);
}

if (j1 == "papel" && j2 == "tijera"){
    resultado = "Gana Jugador 2!!";
    console.log(resultado + "," + j2 + " mata " + j1);
    alert(resultado + "," + j2 + " mata " + j1);
}

if (j1 == "tijera" && j2 == "piedra"){
    resultado = "Gana Jugador 2!!";
    console.log(resultado + "," + j2 + " mata " + j1);
    alert(resultado + "," + j2 + " mata " + j1);
}

if (j1 == "tijera" && j2 == "papel"){
    resultado = "Gana Jugador 1!!";
    console.log(resultado + "," + j1 + " mata " + j2);
    alert(resultado + "," + j1 + " mata " + j2);
}