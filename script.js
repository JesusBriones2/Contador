(() => {
	
	let counter = 0;
	const container = document.querySelector('.container');

	container.addEventListener('click', (e) => {
		counter++;
		document.querySelector('.counter').textContent = counter;
		const circle = document.createElement('DIV');
		circle.classList.add('circle');
		circle.style.top = `${e.clientY-50}px`;
		circle.style.left = `${e.clientX-50}px`;
		container.appendChild(circle);
		
		setTimeout(() => {container.removeChild(circle);}, 1000)
	});


})();
