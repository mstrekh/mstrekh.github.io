const linkOne = document.getElementById('link1');

linkOne.addEventListener('click', function(event) {
	event.preventDefault();
	this.textContent = prompt('Введите текст');	
});