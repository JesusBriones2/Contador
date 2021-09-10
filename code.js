const botones = document.querySelectorAll(".btn");

let contador = 0;
let pausa = false;
let intervalo;


botones[0].addEventListener('click',()=>{
	contador--;
	botones[1].innerHTML = contador;
});

botones[2].addEventListener('click',()=>{
	contador++;
	botones[1].innerHTML = contador;
});

botones[1].addEventListener('click',()=>{
	contador = 0;
	botones[1].innerHTML = contador;
	
	if (pausa == false) {
		botones[3].innerHTML = "Iniciar";
	}
});




botones[3].addEventListener('click',()=>{

	botones[3].innerHTML = "Pausar";
	
	if (pausa == false) {
		intervalo = setInterval(()=>{
			contador++;
			botones[1].innerHTML = contador;
		},200);
		pausa = true;
	}
	else if (pausa == true) {
		botones[3].innerHTML = "Continuar";
		clearInterval(intervalo);
		pausa = false;
	}

})