var elBody = document.querySelector('body');
var elButton = document.querySelector('#dark-button');

elButton.addEventListener('click', function () {
	elBody.classList.toggle('dark');
});
