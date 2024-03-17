// Fecha final
var fechaDestino = new Date("2024-05-10T13:00:00").getTime();


var x = setInterval(function() {

  var ahora = new Date().getTime();
  

  var diferencia = fechaDestino - ahora;
  

  var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
  

  document.getElementById("contador").innerHTML = "Tiempo restante: " + dias + " Días " + horas + " Horas "
  + minutos + " Minutos " + segundos + " Segundos";
  
  // Mensaje al terminar cuenta atras
  if (diferencia < 0) {
    clearInterval(x);
    document.getElementById("contador").innerHTML = "¡Vivan los novios!";
  }
}, 1000);