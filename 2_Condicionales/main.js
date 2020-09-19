//var mover = true; //asignacion
var deberiamoverse; //definicion

//console.log(deberiamoverse==true);
var mover;
mover = prompt("se mueve");//siempre devuelve un string
/*
if (true){
var edad = 8;
console.log(edad);
}
*/
//primera opcion "true" == "true"
if (mover == "true"){//si la condicion se cumple
    deberiamoverse = prompt("deberia mov?");
    if (deberiamoverse == "true"){
        console.log('ARREGLADO');
    } else{
        console.log('usa cinta');
    }

} else{
    deberiamoverse = prompt("deberia mov?");
    if (deberiamoverse == "true") {
        console.log("usar desengrasante");
        console.log("esta arreglado");
    } else{
        console.log("arreglado");
    }

}