let menu = document.querySelector('.menu');
let burg = document.querySelector('.c-hamburger');
let engl = document.querySelector('.eng');
let eblogo = document.querySelectorAll('.eb_logo');
let spann = document.querySelector('.c-hamburger span');
let fa = document.querySelectorAll('.fa');
let cur2 = 0;
let butmenu = document.querySelectorAll('.menu ul li');
let slider = document.querySelector('.owl-carousel');
let inp = document.querySelectorAll('form input');

butmenu[0].onclick = function(){
	burg.click();
	logo2.style.display = "block";
	contact.style.zIndex = "10";
	info.style.zIndex = "10";
	reservation.style.zIndex = "10";
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
	if(cur1 == 0){
		logo2.classList.add('dvizh1');
		slider.classList.add('dvizh2');
		info.classList.add('opacity0');
		info.classList.remove('opacity1');
		setTimeout("slider.style.left ='4.6052631579vw'", 100);
		setTimeout("logo2.style.left ='49.3421052632vw'", 100);
		shadow.classList.remove('display0');
		shadow.classList.remove('opacity0');
		shadow.classList.add('opacity2');
		logo2.style.opacity = '.4';
		logo2.classList.remove('dvizh3');
		slider.classList.remove('dvizh4');
		cur1 = 1;
	}
	if(cur1 == 2){
		reservation.classList.add('opacity0');
		reservation.classList.remove('opacity1');
		logo2.classList.add('dvizh1');
		slider.classList.add('dvizh2');
		setTimeout("slider.style.left ='4.6052631579vw'", 100);
		setTimeout("logo2.style.left ='49.3421052632vw'", 100);
		shadow.classList.remove('display0');
		shadow.classList.remove('opacity0');
		shadow.classList.add('opacity2');
		logo2.style.opacity = '.4';
		logo2.classList.remove('dvizh3');
		slider.classList.remove('dvizh4');
		cur1 = 1;
	}
	if(cur1 == 3){
		contact.classList.add('opacity0');
		contact.classList.remove('opacity1');
		logo2.classList.add('dvizh1');
		slider.classList.add('dvizh2');
		setTimeout("slider.style.left ='4.6052631579vw'", 100);
		setTimeout("logo2.style.left ='49.3421052632vw'", 100);
		shadow.classList.remove('display0');
		shadow.classList.remove('opacity0');
		shadow.classList.add('opacity2');
		logo2.style.opacity = '.4';
		logo2.classList.remove('dvizh3');
		slider.classList.remove('dvizh4');
		cur1 = 1;
	}
}

butmenu[2].onclick = function(){
		burg.click();
		contact.style.zIndex = "10";
		info.style.zIndex = "10";
		reservation.style.zIndex = "100000";
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
	if(cur1==0){
		info.classList.add('opacity0');
		info.classList.remove('opacity1');
		setTimeout("reservation.classList.add('opacity1')", 1500);
		cur1 = 2;
	}
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
		setTimeout("reservation.classList.add('opacity1')", 1500);
		cur1 = 2;
	}
	if(cur1 == 3){
		contact.classList.add('opacity0');
		contact.classList.remove('opacity1');
		setTimeout("reservation.classList.add('opacity1')", 1000);
		setTimeout("reservation.classList.remove('opacity0')", 1000);
		cur1 = 2;
	}
}
 if(document.documentElement.clientWidth < 									document.documentElement.clientHeight){
	 	 cont_but2.onclick = function(){
		contact.style.zIndex = "10";
		info.style.zIndex = "10";
		reservation.style.zIndex = "100000";
		info.classList.add('opacity0');
		info.classList.remove('opacity1');
		setTimeout("reservation.classList.add('opacity1')", 1500);
		cur1 = 2;
}
 }


butmenu[3].onclick = function(){
	burg.click();
	contact.style.zIndex = "100000";
	info.style.zIndex = "10";
	reservation.style.zIndex = "10";
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
	if(cur1 == 0){
		info.classList.add('opacity0');
		info.classList.remove('opacity1');
		setTimeout("contact.classList.add('opacity1')", 1500);
		cur1 = 3;
	}	
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
		setTimeout("contact.classList.add('opacity1')", 1500);
		cur1 = 3;
	}
	if(cur1 == 2){
			reservation.classList.add('opacity0');
			reservation.classList.remove('opacity1');
			setTimeout("contact.classList.add('opacity1')", 1000);
			setTimeout("contact.classList.remove('opacity0')", 1000);
			cur1 = 3;	
	}
}

burg.onclick = function(){
	if(cur2 == 0){
		
		engl.classList.add('display0');
		for(let i = 0; i < eblogo.length; i++){
			eblogo[i].style.fill = "black";
		}
		burg.classList.remove('onespan');
		for(let i = 0; i < fa.length; i++){
			fa[i].style.color = "black";
		}
		cur2 = 1;
	} else {
	
		engl.classList.remove('display0');
		for(let i = 0; i < eblogo.length; i++){
			eblogo[i].style.fill = "#fff";
		}
		burg.classList.add('onespan');
		for(let i = 0; i < fa.length; i++){
			fa[i].style.color = "white";
		}
		cur2 = 0;
	}
}



if(document.documentElement.clientWidth > document.documentElement.clientHeight){
	menu.classList.add("display0");
} else if(document.documentElement.clientWidth < 									document.documentElement.clientHeight){
	menu.classList.remove("display0");
}
