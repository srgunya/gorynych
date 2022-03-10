let header = $("header nav ul li");
let cont = document.querySelector('.cont');
let info = document.querySelector('.info');
let reservation = document.querySelector('.reservation');
let cont_but1 = document.querySelector('.cont_but1');
let cont_but2 = document.querySelector('.cont_but2');
let contact = document.querySelector('.contact');
let cur = 0;
let cur1 = 0;


logo.onclick = function(){
	if(document.documentElement.clientWidth > document.documentElement.clientHeight){
			if(cur1 == 0){
		setTimeout('info.classList.remove("display0")', 1000);	
			}
			if(cur1 == 1){
	wrapCont.classList.add('dvizh2');
	wrapCont.classList.remove('dvizh1');
	button.classList.add('opacity1');
	button.classList.remove('opacity0');
	logo2.style.opacity = '1';
	shadow.classList.remove('opacity2');
	shadow.classList.add('display0');
	shadow.classList.add('opacity0');
		cur1 =0;
		return false;
	}
	if(cur == 2){
		reservation.classList.remove("display0");
		reservation.classList.remove('active');
		info.classList.add('active');
		reservation.style.zIndex = "10";
		info.style.zIndex = "100";
		reservation.classList.remove('dvizh4');
		reservation.classList.add('dvizh3');
		setTimeout('info.classList.add("dvizh4")', 1000);
		cur = 0;
	}
		if(cur == 3){
		contact.classList.remove("display0");
		contact.classList.remove('active');
		info.classList.add('active');
		contact.style.zIndex = "10";
		info.style.zIndex = "100";
		contact.classList.remove('dvizh4');
		contact.classList.add('dvizh3');
		setTimeout('info.classList.add("dvizh4")', 1000);
		cur = 0;
	}
	} else if(document.documentElement.clientWidth < document.documentElement.clientHeight){
		contact.style.zIndex = "10";
		info.style.zIndex = "100000";
		reservation.style.zIndex = "10";
		if(cur1 == 1){
			shadow.classList.remove('opacity2');
		shadow.classList.add('display0');
		shadow.classList.add('opacity0');
		logo2.style.opacity = '1';
		logo2.classList.remove('dvizh1');
		slider.classList.remove('dvizh2');
		logo2.classList.add('dvizh3');
		slider.classList.add('dvizh4');
		setTimeout("logo2.style.left ='105.2631578947vw'", 1000);
		setTimeout("logo2.style.display ='none'", 900);
		setTimeout("slider.style.left ='105.2631578947vw'", 1000);
		setTimeout("info.classList.add('opacity1')", 1500);
		cur1 = 0;
		}
		if(cur1 == 2){
			reservation.classList.add('opacity0');
			reservation.classList.remove('opacity1');
			setTimeout("info.classList.add('opacity1')", 1000);
			setTimeout("info.classList.remove('opacity0')", 1000);
			cur1 = 0;
		}
		if(cur1 == 3){
		contact.classList.add('opacity0');
		contact.classList.remove('opacity1');
		setTimeout("info.classList.add('opacity1')", 1000);
		setTimeout("info.classList.remove('opacity0')", 1000);
		cur1 = 0;
		}
		if(cur1 == 0 && cur2 == 1){
			burg.click();
			menu.classList.add('menudvizh1');
		menu.classList.remove('menudvizh');
		engl.classList.remove('display0');
		for(let i = 0; i < eblogo.length; i++){
			eblogo[i].style.fill = "#fff";
		}
		burg.classList.remove('twospan');
		burg.classList.add('onespan');
		for(let i = 0; i < fa.length; i++){
			fa[i].style.color = "white";
		}
		cur2 = 0;
		}
		
	}
}

cont_but2.onclick = function(){
	setTimeout('reservation.classList.remove("display0")', 1000);
	setTimeout('contact.classList.add("display0")', 1000);
	info.style.zIndex = "10";
	reservation.style.zIndex = "100";
	info.classList.remove('dvizh4');
	info.classList.add('dvizh3');
	setTimeout('reservation.classList.add("dvizh4")', 1000);
	cur =2;
}

header[0].onclick = function(){
	wrapCont.classList.add('dvizh1');
	wrapCont.classList.remove('dvizh2');
	button.classList.add('opacity0');
	button.classList.remove('opacity1');
	shadow.classList.remove('display0');
	shadow.classList.remove('opacity0');
	shadow.classList.add('opacity2');
	logo2.style.opacity = '.4';
	cur1 = 1;
}

header[2].onclick = function(){
	setTimeout('reservation.classList.remove("display0")', 1000);
	setTimeout('contact.classList.add("display0")', 1000);
	if(cur1 == 1){
	wrapCont.classList.add('dvizh2');
	wrapCont.classList.remove('dvizh1');
	button.classList.add('opacity1');
	button.classList.remove('opacity0');
	logo2.style.opacity = '1';
	shadow.classList.remove('opacity2');
	shadow.classList.add('display0');
	shadow.classList.add('opacity0');
	cur1 =0;
	}
	if(cur == 0){
	info.style.zIndex = "10";
	info.classList.remove('active');
	info.classList.remove('dvizh4');
	info.classList.add('dvizh3');
	}
	if(cur == 3){
	contact.style.zIndex = "10";
	contact.classList.remove('active');
	contact.classList.remove('dvizh4');
	contact.classList.add('dvizh3');
	}
	reservation.classList.add('active');
	reservation.style.zIndex = "100";
	setTimeout('reservation.classList.add("dvizh4")', 1000);
	cur = 2;
}

header[3].onclick = function(){
	setTimeout('contact.classList.remove("display0")', 1000);
	setTimeout('reservation.classList.add("display0")', 1000);
	if(cur1 == 1){
	wrapCont.classList.add('dvizh2');
	wrapCont.classList.remove('dvizh1');
	button.classList.add('opacity1');
	button.classList.remove('opacity0');
	logo2.style.opacity = '1';
	shadow.classList.remove('opacity2');
	shadow.classList.add('display0');
	shadow.classList.add('opacity0');
	cur1 =0;
	}
	if(cur == 0){
	info.style.zIndex = "10";
	info.classList.remove('active');
	info.classList.remove('dvizh4');
	info.classList.add('dvizh3');
	}
	if(cur == 2){
	reservation.style.zIndex = "10";
	reservation.classList.remove('active');
	reservation.classList.remove('dvizh4');
	reservation.classList.add('dvizh3');
	}
	contact.classList.add('active');
	contact.style.zIndex = "100";
	setTimeout('contact.classList.add("dvizh4")', 1000);
	cur = 3;
}
