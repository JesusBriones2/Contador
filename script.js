let counter = 0, interval = null;

document.getElementById('container-counter').
addEventListener( 'click', (e) => {
	if ( e.target.id == 'arrow_left' ) counter--;
	if ( e.target.id == 'arrow_right' ) counter++;
	if ( e.target.id == 'counter_num' ) {
		counter = 0;
		if ( interval == null ) {
			document.getElementById('button__counter').textContent = 'Iniciar';
		}
	}
	document.getElementById('counter_num').textContent = counter;
});


document.getElementById('button__counter')
.addEventListener( 'click', (e) => {

	if ( interval == null ) {
		e.target.textContent = 'Detener';
		interval = setInterval( () => {
			counter++;
			document.getElementById('counter_num').textContent = counter;
		}, 1000 );
	}else {
		e.target.textContent = 'Reanudar';
		clearInterval( interval );
		interval = null;
	}
});