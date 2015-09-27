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

/*Esta funcion pone imagenes al azar en los paneles de usuario y maquina*/
function imagenesInicio(){
	var opciones = ["Piedra", "Papel", "Tijera", "Lagarto","Spock"];
	imagenes('usuario',opciones[aleatorio(0,4)]);
	imagenes('maquina',opciones[aleatorio(0,4)]);
}

function resultado(producto){
	document.getElementById('mensaje').innerHTML = "<p style=\"text-align:center;\">" +producto+"</p>";
	return document.getElementById('cuadrito').style.visibility = 'visible';
}

function desaparecer(bloque){
	document.getElementById(bloque).style.visibility = 'hidden';
	document.getElementById('cuadrito').style.opacity = "0.5";
	habilitar();
	function habilitar(){
		document.getElementById('Piedra').disabled = false;
		document.getElementById('Papel').disabled = false;
		document.getElementById('Tijera').disabled = false;
		document.getElementById('Lagarto').disabled = false;
		document.getElementById('Spock').disabled = false;	
	}

}

function limiteClick(nombres){
	if(nombres == 'Piedra' || nombres == 'Papel' || nombres == 'Tijera' || nombres == 'Lagarto' || nombres == 'Spock'){
		document.getElementById('Piedra').disabled = true;
		document.getElementById('Papel').disabled = true;
		document.getElementById('Tijera').disabled = true;
		document.getElementById('Lagarto').disabled = true;
		document.getElementById('Spock').disabled = true;
		document.getElementById('cuadrito').style.opacity = "1";
	}
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
		document.getElementById('usuario').style.backgroundColor = "rgba(91,192,222,0.5)";
		document.getElementById('maquina').style.backgroundColor = "rgba(91,192,222,0.5)";
		document.getElementById('mensaje').style.color = 'rgba(91,192,222,0.9)';
		resultado('TIE!');

	}
	else if (condiciones[0] || condiciones[1] || condiciones[2] || condiciones[3] || condiciones[4] || condiciones[5] || condiciones[6] || condiciones[7] || condiciones[8] || condiciones[9]){
		imagenes('usuario',opcionUsuario);
		imagenes('maquina',opcionMaquina);
		document.getElementById('usuario').style.backgroundColor = "rgba(92,184,92,0.6)"; /*cambia a verde #5CB85C*/ 
		document.getElementById('maquina').style.backgroundColor = "rgba(217,83,92,0.6)"; /*cambia a rojo #D9534F*/
		document.getElementById('mensaje').style.color = '#5CB85C';
		resultado('You Win!');
	}
	else{
		imagenes('usuario', opcionUsuario);
		imagenes('maquina',opcionMaquina);
		document.getElementById('maquina').style.backgroundColor = "rgba(92,184,92,0.6)"; /*cambia a verde #5CB85C*/
		document.getElementById('usuario').style.backgroundColor = "rgba(217,83,92,0.6)"; /*cambia a rojo #D9534F*/
		document.getElementById('mensaje').style.color = '#D9534F';
		resultado('You Lose!');
	}

	limiteClick(valor);

}


