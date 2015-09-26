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
		resultado('EMPATE');

	}
	else if (condiciones[0] || condiciones[1] || condiciones[2] || condiciones[3] || condiciones[4] || condiciones[5] || condiciones[6] || condiciones[7] || condiciones[8] || condiciones[9]){
		imagenes('usuario',opcionUsuario);
		imagenes('maquina',opcionMaquina);
		resultado('GANASTE!');
	}
	else{
		imagenes('usuario', opcionUsuario);
		imagenes('maquina',opcionMaquina);
		resultado('PERDISTE');
	}

	limiteClick(valor);

	document.getElementsByTagName('body').style.background = "black";
}
