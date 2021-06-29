const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
	alert('Это метод для вывода сообщения в консоль');
})

const alertVar = document.querySelector('#alert');
alertVar.addEventListener('click', () => {
	alert('Alert служит для вывода сообщений в окне браузера');
})

const promptVar = document.querySelector('#prompt');
promptVar.addEventListener('click', () => {
	alert('Prompt служит для ввода информации пользователем');
})