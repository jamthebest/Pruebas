window.onload = function () {
	document.getElementById("p").onclick = jam;
	document.getElementById("p").onmouseout  = jam;
	document.getElementById("p").onmouseover  = jam;
	document.getElementById("text").onkeypress = jam;
	setInterval(muestraReloj, 1000);
}

function muestraReloj () {
	var fechaHora = new Date();
	var horas = fechaHora.getHours();
	var minutos = fechaHora.getMinutes();
	var segundos = fechaHora.getSeconds();
	var sufijo = ' am';
	if(horas > 12) {
	  horas = horas - 12;
	  sufijo = ' pm';
	}
	if(horas < 10) { horas = '0' + horas; }
	if(minutos < 10) { minutos = '0' + minutos; }
	if(segundos < 10) { segundos = '0' + segundos; }
	document.getElementById("reloj").innerHTML = horas+':'+minutos+':'+segundos+sufijo;
}

function jam (elEvento) {
	var evento = elEvento || window.event;
	switch(evento.type) {
    case 'click':
    	this.style.borderColor = 'black';
    	this.style.color = 'blue';
      break;
    case 'mouseout':
      this.style.borderColor = 'silver';
      this.style.color = 'red';
      break;
    case 'mouseover':
      this.style.borderColor = 'silver';
      this.style.color = 'green';
      break;
    case 'keypress':
    	if (this.value.length < 5) {
    		this.style.borderColor = 'red';
      	this.style.color = 'red';
      	document.getElementById("texterror").value = "Cadena muy pequeña";
    	}else{
    		document.getElementById("texterror").value = "";
    		this.style.removeProperty('color');
    		this.style.removeProperty('border-color');
    	}
      break;
  }
}

function permite(elEvento, permitidos) {
  // Variables que definen los caracteres permitidos
  var numeros = "0123456789";
  var caracteres = " abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  var numeros_caracteres = numeros + caracteres;
  var teclas_especiales = [8, 37, 39, 46];
  // 8 = BackSpace, 46 = Supr, 37 = flecha izquierda, 39 = flecha derecha
 
 
  // Seleccionar los caracteres a partir del parámetro de la función
  switch(permitidos) {
    case 'num':
      permitidos = numeros;
      break;
    case 'car':
      permitidos = caracteres;
      break;
    case 'num_car':
      permitidos = numeros_caracteres;
      break;
  }
 
  // Obtener la tecla pulsada 
  var evento = elEvento || window.event;
  var codigoCaracter = evento.charCode || evento.keyCode;
  var caracter = String.fromCharCode(codigoCaracter);
 
  // Comprobar si la tecla pulsada es alguna de las teclas especiales
  // (teclas de borrado y flechas horizontales)
  var tecla_especial = false;
  for(var i in teclas_especiales) {
    if(codigoCaracter == teclas_especiales[i]) {
      tecla_especial = true;
      break;
    }
  }
 
  // Comprobar si la tecla pulsada se encuentra en los caracteres permitidos
  // o si es una tecla especial
  return permitidos.indexOf(caracter) != -1 || tecla_especial;
}
//Lo único que hace esto por ahora es mostrar dos mensajes al cargar la página
//alert("Hola Mundo!\nIncluye 'comillas simples'\nY \"comillas dobles\"");
/*
var dias = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
for (i in dias) {
	alert(dias[i]);
};


var valores = [true, 5, false, "hola", "adios", 2];
var mayor = "";
for (var i = valores.length - 1; i >= 0; i--) {
	mayor = mayor < valores[i] ? valores[i] : mayor;
}
alert(mayor);



var numero1 = 5;
var numero2 = 8;
 
if(numero1 < numero2) {
  alert("numero1 no es mayor que numero2");
}
if(numero2 > 0) {
  alert("numero2 es positivo");
}
if(numero1 < 0 || numero1 != 0) {
  alert("numero1 es negativo o distinto de cero");
}
if(++numero1 < numero2) {
  alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}
*/

/*
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var dni = prompt('Ingrese Su Número DNI');
if (dni < 0 || dni > 99999999) {
	alert('Numero no Válido');
}else{
	var ldni = letras[dni % 23];
	alert(ldni);
}
*/