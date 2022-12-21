let body = document.querySelector('body');
let wrap1 = document.querySelector('.wrap');

if (document.documentElement.clientWidth > document.documentElement.clientHeight) {
	body.style.background = "url(../img/background.jpg)";
} else if (document.documentElement.clientWidth < document.documentElement.clientHeight) {
	body.style.background = "black";
	wrap1.style.background = "url(../img/backgroundmob.jpg)";
	burg.classList.remove("display0");
}
if (document.documentElement.clientWidth <= 840) {
	menu.classList.remove("display0");
}
