//variable
//entradas
//salidas
//tipos de datos

//estructuras de control - condiciones

/*
Estructuras de control
Ciclos For
*/

/* for(i = 0; i < 5; i++){
    console.log("Hola a todos");
    console.log(i);
} */

/* // imprimir los numeros del 1 al 10 en consola
for(i = 1; i <= 10; i++){
    console.log(i);
} */

// imprimir los numeros pares en consola
// mediante el modulo
/* for(i = 1; i <= 10; i++){ */
// el nunmero al dividirloentre dos me da 0?
/*     if (i%2 === 0){
// si me da cero entonces lo muestro
        console.log(i);
    }
// si no me da cero entonces no lo muestro
}

// mediante i + 2
for(i = 1; i <= 10; i+=2){
    console.log(i);
} */

var arreglo = [1,2,3,4,5];
console.log(arreglo);
console.log(arreglo[3]);

//lista de multiples tipo de datos

var listaBiblioteca = [
 "Jose Emilo Paceco",
 37,
 false
];

var listaFrutas = [
    "mango",
    "kiwi",
    "tamarindo",
    "durazno",
    "nispero",
    "uva",
    "granada",
    "lulo",
    "aguacate",
];

   // console.log(listaFrutas);

for (var i = 0; i < listaFrutas.length; i++){
    console.log(listaFrutas[i]);
};
