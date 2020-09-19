var comida = ["Enchiladas","Taco","Tamal","Pozole","Barbacoa","Guacamole","Quesadilla de papa"];
console.log(comida);

/* for (var i = 0; i < comida.length; i++){
    console.log(comida[i]);
}; */

for (var i = 0; i < comida.length; i++){
    if(comida[i] === "Pozole" || comida[i] ==="Barbacoa"){
        //si quisieramos saber el numero item del elemento en el array
        // console.log((i+1) + " " + comida[i]);
        console.log(comida[i]);
    }
}

for (var i =0; i < comida.length; i++){
    if(i%2 != 0){
        console.log((i) + " " + comida[i]);
    }
}

for (var i = 0; i < comida.length; i+=2){
    console.log((i) + " " +comida[i]);
}