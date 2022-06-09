let forma = document.getElementById('form');
forma.addEventListener('submit', formSend);
function formSend(ev){
	ev.preventDefault();
	
	let formData = new FormData(forma);
	
	let xhr = new XMLHttpRequest();
	xhr.open("POST", "form.php");
	xhr.send(formData);
}
