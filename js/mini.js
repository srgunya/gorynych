let body = document.querySelector('body');

if(document.documentElement.clientWidth > document.documentElement.clientHeight){
	body.style.background="url(../img/background.jpg)";
} else if(document.documentElement.clientWidth < 									document.documentElement.clientHeight){
	body.style.background="url(../img/backgroundmob.jpg)";
	burg.classList.remove("display0");
}