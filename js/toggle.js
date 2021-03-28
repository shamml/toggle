let uniqueLink = document.getElementById('unique-link');
let themeLink = document.getElementById('theme-link');
let eventLink = document.getElementById('event-link');
let photoLink  = document.getElementById('photo-link');
let translationLink = document.getElementById('translation-link');
 
uniqueLink.addEventListener('click', activator);
themeLink.addEventListener('click', activator);
eventLink.addEventListener('click', activator);
photoLink.addEventListener('click', activator);;
translationLink.addEventListener('click', activator);

function activator() {
	uniqueLink.classList.remove('active');
	themeLink.classList.remove('active');
	eventLink.classList.remove('active');
	photoLink.classList.remove('active');
	translationLink.classList.remove('active');
	this.className = "active";
}
 
uniqueLink.addEventListener('click', show);
themeLink.addEventListener('click', show);
eventLink.addEventListener('click', show);
photoLink.addEventListener('click', show);
translationLink.addEventListener('click', show);


function show(){
	unique.className = 'hidden';
	theme.className = 'hidden';
	translation.className = 'hidden';
	event.className = 'hidden';
	photo.className = 'hidden';

	let currentId = this.getAttribute('data-value');
	let visibleBlock = document.getElementById(currentId);
	visibleBlock.className = 'animated fadeInDown';
}
