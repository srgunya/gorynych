let shadow = document.querySelector('.shadow');
let wrap = document.querySelector('.wrap');
let but1 = document.querySelector('.cont_but1');
let but2 = document.querySelector('.cont_but2');
let strelka = document.querySelector('.button .fa');

window.onload=function(){
	shadow.classList.add('opacity00');
	setTimeout('shadow.style.opacity = 0;', 1500);
	setTimeout('wrap.classList.add("dvizh")', 500);
	setTimeout('but1.style.opacity = 1', 2000);
	setTimeout('but2.style.opacity = 1', 2000);
	setTimeout('but1.classList.add("h2-stat")', 3000);
	setTimeout('but2.classList.add("h2-stat")', 3000);
}