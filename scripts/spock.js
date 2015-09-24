/*function primeraImg() {
	var nameImage = ["rock.jpg","paper.jpg","scissors.jpg","lizard.jpg","spock.jpg"]
	var numAle = aleatorio(0,4);
	var result = document.getElementById('user').innerHTML = "<img class=\"pos_user\" src=\"img/"+name[numAle]+"\"/>";
	insertar(numAle);
	return result;
}*/


/*muestra resultado en un div abajo del boton jugar*/
/*function resultado(miResultado){
	
	var añadir = document.querySelector('.resultado');
	añadir.innerHTML = miResultado;
}*/



/*function insertar(pos) {*/
	//inserta una imagen relacionando cada item del menu.
	/*var nameImage = ["rock.jpg","paper.jpg","scissors.jpg","lizard.jpg","spock.jpg"]
	var resultado = document.getElementById('user').innerHTML = "<img class=\"pos_user\" src=\"img/"+nameImage[pos]+"\"/>";

	var rock = "<img class=\"pos_user\" src=\"img/"+nameImage[0]+"\"/>";
	var paper = "<img class=\"pos_user\" src=\"img/"+nameImage[1]+"\"/>";
	var scissors = "<img class=\"pos_user\" src=\"img/"+nameImage[2]+"\"/>";
	var lizard = "<img class=\"pos_user\" src=\"img/"+nameImage[3]+"\"/>";
	var spock = "<img class=\"pos_user\" src=\"img/"+nameImage[4]+"\"/>";*/
	//condiciones para devolver un valor por medio de un input type="text"
	//el valor retornado en input se usa en opcionUsuario.
	/*if (resultado == rock){
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
*/

function aleatorio (minimo,maximo) {
	var numero = Math.floor(Math.random()*(maximo - minimo +1) + minimo);
	return numero;

}

function imagenes(jugador,nombre){
	if(jugador == 'usuario'){
		var elemento = document.getElementById(jugador).innerHTML = "<img src=\"img/" + nombre + ".jpg\" class=\"center-block img-responsive\">";
	}
	else{
		elemento = document.getElementById(jugador).innerHTML = "<img src=\"img/" + nombre + ".jpg\" class=\"center-block img-responsive\">";
	}
	
	return elemento;
}

function resultado(producto){
	document.getElementById('cuadrito').innerHTML = "<p>" +producto+"</p>";
	return document.getElementById('cuadrito').style.visibility = 'visible';
}

function juego(valor){
	var opciones = ["Piedra", "Papel", "Tijera", "Lagarto","Spock"];

	var opcionUsuario = valor;

	var opcionMaquina = opciones[aleatorio(0,4)];

	
	var condiciones = [opcionUsuario == 'Piedra' && opcionMaquina == 'Tijera',
						opcionUsuario == 'Piedra' && opcionMaquina == 'Lagarto', 
						opcionUsuario == 'Papel' && opcionMaquina == 'Piedra', 
						opcionUsuario == 'Papel' && opcionMaquina == 'Spock', 
						opcionUsuario == 'Tijera' && opcionMaquina == 'Papel', 
						opcionUsuario == 'Tijera' && opcionMaquina == 'Lagarto', 
						opcionUsuario == 'Lagarto' && opcionMaquina == 'Papel', 
						opcionUsuario == 'Lagarto' && opcionMaquina == 'Spock', 
						opcionUsuario == 'Spock' && opcionMaquina == 'Piedra', 
						opcionUsuario == 'Spock' && opcionMaquina == 'Tijera'];

	if (opcionUsuario == opcionMaquina) {
		imagenes('usuario',opcionUsuario);
		imagenes('maquina',opcionMaquina);
		resultado('empate');

	}
	else if (condiciones[0] || condiciones[1] || condiciones[2] || condiciones[3] || condiciones[4] || condiciones[5] || condiciones[6] || condiciones[7] || condiciones[8] || condiciones[9]){
		imagenes('usuario',opcionUsuario);
		imagenes('maquina',opcionMaquina);
		resultado('ganaste');
	}
	else{
		imagenes('usuario', opcionUsuario);
		imagenes('maquina',opcionMaquina);
		resultado('perdiste');
	}
}

