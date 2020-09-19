var cuentas = [
    {nombre: "Mali", saldo: 200, password: 'helloworld'},
    {nombre: "Gera", saldo: 290, password: 'l33t'},
    { nombre: "Maui", saldo: 67, password: '123' },
  ];

  var cuentaChois = null;
  //var saldo = null;
  var ide = null;

  function eleCta(){
    cuentaChoisTexto = document.getElementById("numSocio").value;
    cuentaChois = parseInt(cuentaChoisTexto);
    if (cuentaChois === 1 || cuentaChois === 2 || cuentaChois ===3){ 
      obtPass();
    }else{
      alert("Cuenta no valida");
    }
  }
  //console.log(cuentaChois);
  function obtPass(){
    if (cuentaChois === 1){
      var password = prompt("ntroduce el password de:"+ cuentas[0].nombre);
      if (password === 'helloworld'){
        window.open("http://127.0.0.1:5500/RetoJS/oper.html");
      }else{
        alert("Password incorrecto!");
      }
    }
    if (cuentaChois === 2){
      var password = prompt("ntroduce el password de:"+ cuentas[1].nombre);
      if (password === 'l33t'){
        window.open("http://127.0.0.1:5500/RetoJS/oper.html");
      }else{
        alert("Password incorrecto!");
      }
    }
    if (cuentaChois === 3){
      var password = prompt("ntroduce el password de:"+ cuentas[2].nombre);
      if (password === '123'){
        ide = "maui";
        window.open("http://127.0.0.1:5500/RetoJS/oper.html");
      }else{
        alert("Password incorrecto!");
      }
    }
  }

  function conSaldo(){
    saldo = cuentas[0].saldo;
    alert("Tu saldo es de " + saldo);
    }

  function ingreso(){
    saldo = cuentas[0].saldo;
    var newSaldo = null
    var ingSaldoText = prompt("Introduce monto a ingresar:");
    ingSaldo = parseInt(ingSaldoText);
    newSaldo = ingSaldo + saldo;
    if (newSaldo <= 990){
      alert("Tu saldo es de " + newSaldo);
    }else{
      alert("Ingresa una cantidad menor");
    }
  }

  function retiro(){
    saldo = cuentas[0].saldo;
    var newSaldo = null
    var retSaldoText = prompt("Introduce monto a retirar:");
    retSaldo = parseInt(retSaldoText);
    newSaldo = saldo - retSaldo;
    if (newSaldo >= 10){
      alert("Tu saldo es de " + newSaldo);
    }else{
      alert("Retira una cantidad menor");
    }
  }


