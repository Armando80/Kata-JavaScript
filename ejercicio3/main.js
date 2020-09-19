var numero1 = parseFloat(prompt("Dame el primer número"));
var numero2 = parseFloat(prompt("Dame el segundo número"));
var numero3 = parseFloat(prompt("Dame el último número"));
var resultado;

if (numero1 === numero3 && numero1 == numero2){
    console.log("Los tres números son iguales!!");
    alert("Los tres números son iguales!!");
}else{
    resultado = Math.max(numero1, numero2, numero3);
    console.log("el número mayor es " + resultado + "!!!");
    alert("el número mayor es " + resultado + "!!!");
}
