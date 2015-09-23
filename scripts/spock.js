/*function primeraImg() {
	var nameImage = ["rock.jpg","paper.jpg","scissors.jpg","lizard.jpg","spock.jpg"]
	var numAle = aleatorio(0,4);
	var result = document.getElementById('user').innerHTML = "<img class=\"pos_user\" src=\"img/"+name[numAle]+"\"/>";
	insertar(numAle);
	return result;
}


/*muestra resultado en un div abajo del boton jugar*/
function resultado(miResultado){
	/*document.getElementByClassName('resultado').innerHTML = miResultado;*/
	var añadir = document.querySelector('.resultado');
	añadir.innerHTML = miResultado;
}



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


function aleatorio (minimo,maximo) {
	var numero = Math.floor(Math.random()*(maximo - minimo +1) + minimo);
	return numero;

}

function juego () {
//Genera un numero aleatorio entre un rango de enteros

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
		/*alert("Empate!");*/
		resultado("Empate!");
	}
	else if(opcionMaquina == papel){
		/*alert("Perdiste!");*/
		resultado("Perdiste!");
	}
	else if (opcionMaquina == tijera){
		/*alert("Ganaste!");*/
		resultado("Ganaste!");
	}
	else if (opcionMaquina == lagarto){
		/*alert("Ganaste!");*/
		resultado("Ganaste!");
	}
	else if (opcionMaquina == spock){
		/*alert("Perdiste!");*/
		resultado("Perdiste!");
	}
}
else if(opcionUsuario == papel){
	if (opcionMaquina == piedra) {
		/*alert("Ganaste!");*/
		resultado("Ganaste!");
	}
	else if(opcionMaquina == papel){
		/*alert("Empate!");*/
		resultado("Empate!");
	}
	else if (opcionMaquina == tijera){
		/*alert("Perdiste!");*/
		resultado("Perdiste!");
	}
	else if (opcionMaquina == lagarto){
		/*alert("Perdiste!");*/
		resultado("Perdiste!");
	}
	else if (opcionMaquina == spock){
		/*alert("Ganaste!");*/
		resultado("Ganaste!");
	}	
}
else if( opcionUsuario == tijera){
	if (opcionMaquina == piedra) {
		/*alert("Perdiste!");*/
		resultado("Perdiste!");
	}
	else if(opcionMaquina == papel){
		/*alert("Ganaste!");*/
		resultado("Ganaste!")
	}
	else if (opcionMaquina == tijera){
		/*alert("Empate!");*/
		resultado("Empate!");
	}
	else if (opcionMaquina == lagarto){
		/*alert("Ganaste!");*/
		resultado("Ganaste!");
	}
	else if (opcionMaquina == spock){
		/*alert("Perdiste!");*/
		resultado("Perdiste!");
	}	
}
else if( opcionUsuario == lagarto){
	if (opcionMaquina == piedra) {
		/*alert("Perdiste!");*/
		resultado("Perdiste!");
	}
	else if(opcionMaquina == papel){
		/*alert("Ganaste!");*/
		resultado("Ganaste!");
	}
	else if (opcionMaquina == tijera){
		/*alert("Perdiste!");*/
		resultado("Perdiste!");
	}
	else if (opcionMaquina == lagarto){
		/*alert("Empate!");*/
		resultado("Empate!");
	}
	else if (opcionMaquina == spock){
		/*alert("Ganaste!");*/
		resultado("Ganaste!");
	}	
}
else if( opcionUsuario == spock){
	if (opcionMaquina == piedra) {
		/*alert("Perdiste!");*/
		resultado("Ganaste!");
	}
	else if(opcionMaquina == papel){
		/*alert("Perdiste!");*/
		resultado("Perdiste!");
	}
	else if (opcionMaquina == tijera){
		/*alert("Ganaste!");*/
		resultado("Ganaste!");
	}
	else if (opcionMaquina == lagarto){
		/*alert("Perdiste!");*/
		resultado("Perdiste!");
	}
	else if (opcionMaquina == spock){
		/*alert("Empate!");*/
		resultado("Empate!");
	}	
}
else{
	alert("¿Pos qué Carajo?");
}
}*/
