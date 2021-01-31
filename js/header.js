let header = $("header nav ul li");
let cont = document.querySelector('.cont');
let info = document.querySelector('.info');
let reservation = document.querySelector('.reservation');
let cont_but2 = document.querySelector('.cont_but2');
let contact = document.querySelector('.contact');
let cur = 0;


header[0].onclick = function(){
	wrapCont.classList.add('dvizh1');
	wrapCont.classList.remove('dvizh2');
	button.classList.add('opacity0');
	button.classList.remove('opacity1');
	shadow.classList.remove('display0');
	shadow.classList.remove('opacity0');
	shadow.classList.add('opacity2');
	logo2.style.opacity = '.4';
	cur = 1;
}
		
logo.onclick = function(){
	if(cur == 1){
	wrapCont.classList.add('dvizh2');
	wrapCont.classList.remove('dvizh1');
	button.classList.add('opacity1');
	button.classList.remove('opacity0');
	logo2.style.opacity = '1';
	shadow.classList.remove('opacity2');
	shadow.classList.add('display0');
	shadow.classList.add('opacity0');
		cur =2;
		return false;
	}
	if(cur == 2){
		if(info.className == 'active'){
			return false;
		}
		reservation.classList.remove('active');
		info.classList.add('active');
		reservation.style.zIndex = "10";
		info.style.zIndex = "100";
		reservation.classList.remove('dvizh4');
		reservation.classList.add('dvizh3');
		setTimeout('info.classList.add("dvizh4")', 1000);
	}
	
}

cont_but2.onclick = function(){
	console.log(cur);
	info.style.zIndex = "10";
	reservation.style.zIndex = "100";
	info.classList.remove('dvizh4');
	info.classList.add('dvizh3');
	setTimeout('reservation.classList.add("dvizh4")', 1000);
	cur =2;
}

header[2].onclick = function(){
	info.style.zIndex = "10";
	info.classList.remove('active');
	reservation.classList.add('active');
	reservation.style.zIndex = "100";
	info.classList.remove('dvizh4');
	info.classList.add('dvizh3');
	setTimeout('reservation.classList.add("dvizh4")', 1000);
	cur = 2;
}
