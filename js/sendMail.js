let forma = document.getElementById('form');
let form_send = document.querySelector('.form_send');
forma.addEventListener('submit', formSend);


function formSend(ev){
	ev.preventDefault();
	
	let name = document.querySelector('.formName');
	let mail = document.querySelector('.mail');
	let tel = document.querySelector('.tel');
	let h3 = document.querySelectorAll('.reservation h3');
	
	if(name.value == ''){
		h3[0].classList.add('err');
	} else{
		h3[0].classList.remove('err');
	}
	if(mail.value == ''){
		h3[2].classList.add('err');
	} else{
		h3[2].classList.remove('err');
	} 
	if(tel.value == ''){
		h3[4].classList.add('err');
	} else{
		h3[4].classList.remove('err');
	}
	
	if(document.querySelectorAll('.err').length > 0){
		return false
	} else{
		forma.classList.remove('opacity1');
		forma.classList.add('opacity0');
		setTimeout("form_send.classList.remove('opacity0')", 1000);
		setTimeout("form_send.classList.add('opacity1')", 1000);
		
		let formData = new FormData(forma);
		let xhr = new XMLHttpRequest();
		xhr.open("POST", "../form.php");
		xhr.send(formData);
		
		setTimeout("forma.reset()", 2000);
		setTimeout("form_send.classList.remove('opacity1')", 5000);
		setTimeout("form_send.classList.add('opacity0')", 5000);
		setTimeout("forma.classList.remove('opacity0')", 6000);
		setTimeout("forma.classList.add('opacity1')", 6000);
	}	
}
