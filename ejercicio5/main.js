function sum(a,b){
    var resultado = a + b;
    return resultado;
}

function subs(a,b){
    var resultado = a - b;
    return resultado;
}

function mayorDeEdad(edad){
    if(edad < 18){
        var resultado = "Es menor de edad";
        return resultado;
    }else{
        var resultado = "Es mayor de edad";
        return resultado;
    }
}

function evaluate(numero){
    if(numero < 0){
        var resultado = "Negativo";
        return resultado;
    }else if (numero === 0){
        var resultado = "cero";
        return resultado;
    }else{
        var resultado = "Positivo";
        return resultado;
    }
    }

console.log (sum(2,3));
console.log (subs(2,3));
console.log (mayorDeEdad(15));
console.log (mayorDeEdad(39));
console.log (evaluate(-1));
console.log (evaluate(5));
console.log (evaluate(0));