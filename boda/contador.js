var fechaDestino=new Date("2024-05-10T13:00:00").getTime(),x=setInterval(function(){var o=new Date().getTime(),e=fechaDestino-o;document.getElementById("contador").innerHTML="Tiempo restante: "+Math.floor(e/864e5)+" D\xedas "+Math.floor(e%864e5/36e5)+" Horas "+Math.floor(e%36e5/6e4)+" Minutos "+Math.floor(e%6e4/1e3)+" Segundos",e<0&&(clearInterval(x),document.getElementById("contador").innerHTML="\xa1Vivan los novios!")},1e3);function mostrarBoton(){let o=window.pageYOffset||document.documentElement.scrollTop,e=window.innerHeight;document.documentElement.scrollHeight-o<=e?document.getElementById("btnSubirArriba").style.display="block":document.getElementById("btnSubirArriba").style.display="none"}function subirArriba(){"scrollBehavior"in document.documentElement.style?window.scrollTo({top:0,behavior:"smooth"}):window.scrollTo(0,0)}window.onscroll=function(){mostrarBoton()};
