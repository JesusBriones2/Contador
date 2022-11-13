(() => {
	
	let counter = 0;
	const box = document.querySelector('.box');

	box.addEventListener('click', (e) => {

		counter++;
		document.querySelector('.counter').textContent = counter;

		const circle = document.createElement('DIV');
		circle.classList.add('circle');
		circle.style.top = `${e.clientY-50}px`;
		circle.style.left = `${e.clientX-50}px`;

		if (counter > 100) {
			circle.style.borderRadius = '0';
		}

		box.appendChild(circle);
		
		setTimeout(() => {box.removeChild(circle);}, 1000);
	});

})();
