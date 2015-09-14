function insertar(pos) {
	//inserta una imagen relacionando cada item del menu.
	var nameImage = ["rock.jpg","paper.jpg","scissors.jpg","lizard.jpg","spock.jpg"]
	var resultado = document.getElementById('user').innerHTML = "<img class=\"pos_user\" src=\"img/"+nameImage[pos]+"\"/>";

	var rock = "<img class=\"pos_user\" src=\"img/"+nameImage[0]+"\"/>";
	var paper = "<img class=\"pos_user\" src=\"img/"+nameImage[1]+"\"/>";
	var scissors = "<img class=\"pos_user\" src=\"img/"+nameImage[2]+"\"/>";
	var lizard = "<img class=\"pos_user\" src=\"img/"+nameImage[3]+"\"/>";
	var spock = "<img class=\"pos_user\" src=\"img/"+nameImage[4]+"\"/>";
	//condiciones para devolver un valor por medio de un input type="text"
	//el valor retornado en input se usa en opcionUsuario.
	if (resultado == rock){
		document.getElementById('user').innerHTML += "<input type=\"text\" id=\"dato\" value=\"0\"/>";
	}else if(resultado == paper){
		document.getElementById('user').innerHTML += "<input type=\"text\" id=\"dato\" value=\"1\"/>";
	}else if(resultado == scissors){
		document.getElementById('user').innerHTML += "<input type=\"text\" id=\"dato\" value=\"2\"/>";
	}else if(resultado == lizard){
		document.getElementById('user').innerHTML += "<input type=\"text\" id=\"dato\" value=\"3\"/>";
	}else{
		document.getElementById('user').innerHTML += "<input type=\"text\" id=\"dato\" value=\"4\"/>";
	}
	
}


function juego () {
//Genera un numero aleatorio entre un rango de enteros


function aleatorio (minimo,maximo) {
	var numero = Math.floor(Math.random()*(maximo - minimo +1) + minimo);
	return numero;

}

var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;

var opciones = ["Piedra", "Papel", "Tijera", "Lagarto","Spock"];

var opcionUsuario = document.getElementById('dato').value;
var opcionMaquina = aleatorio(0,4);;

insertarEnMaquina(opcionMaquina);

function insertarEnMaquina(pos){
	var nameImage = ["rock2.jpg","paper.jpg","scissors.jpg","lizard2.jpg","spock.jpg"]
	var resultado = document.getElementById('machine').innerHTML = "<img class=\"pos_user\" src=\"img/"+nameImage[pos]+"\"/>";
}

if (opcionUsuario == piedra) {
	if (opcionMaquina == piedra) {
		alert("Empate!");
	}
	else if(opcionMaquina == papel){
		alert("Perdiste!");
	}
	else if (opcionMaquina == tijera){
		alert("Ganaste!");
	}
	else if (opcionMaquina == lagarto){
		alert("Ganaste!");
	}
	else if (opcionMaquina == spock){
		alert("Perdiste!");
	}
}
else if(opcionUsuario == papel){
	if (opcionMaquina == piedra) {
		alert("Ganaste!");
	}
	else if(opcionMaquina == papel){
		alert("Empate!");
	}
	else if (opcionMaquina == tijera){
		alert("Perdiste!");
	}
	else if (opcionMaquina == lagarto){
		alert("Perdiste!");
	}
	else if (opcionMaquina == spock){
		alert("Ganaste!");
	}	
}
else if( opcionUsuario == tijera){
	if (opcionMaquina == piedra) {
		alert("Perdiste!");
	}
	else if(opcionMaquina == papel){
		alert("Ganaste!");
	}
	else if (opcionMaquina == tijera){
		alert("Empate!");
	}
	else if (opcionMaquina == lagarto){
		alert("Ganaste!");
	}
	else if (opcionMaquina == spock){
		alert("Perdiste!");
	}	
}
else if( opcionUsuario == lagarto){
	if (opcionMaquina == piedra) {
		alert("Perdiste!");
	}
	else if(opcionMaquina == papel){
		alert("Ganaste!");
	}
	else if (opcionMaquina == tijera){
		alert("Perdiste!");
	}
	else if (opcionMaquina == lagarto){
		alert("Empate!");
	}
	else if (opcionMaquina == spock){
		alert("Ganaste!");
	}	
}
else if( opcionUsuario == spock){
	if (opcionMaquina == piedra) {
		alert("Perdiste!");
	}
	else if(opcionMaquina == papel){
		alert("Perdiste!");
	}
	else if (opcionMaquina == tijera){
		alert("Ganaste!");
	}
	else if (opcionMaquina == lagarto){
		alert("Perdiste!");
	}
	else if (opcionMaquina == spock){
		alert("Empate!");
	}	
}
else{
	alert("¿Pos qué Carajo?");
}
}
