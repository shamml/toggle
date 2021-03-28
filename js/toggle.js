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


// const uniqueLink = document.getElementById('unique-link');
// const themeLink  = document.getElementById('theme-link');
// const eventLink  = document.getElementById('event-link');
// const photoLink  = document.getElementById('photo-link');
// const translationLink = document.getElementById('translation-link');

// const unique = document.getElementById('unique');
// const theme = document.getElementById('theme');
// const event = document.getElementById('event');
// const photo = document.getElementById('photo');
// const translation = document.getElementById('translation');


//uniqueLink.addEventListener('click', activator);
// uniqueLink.addEventListener('click', show);

// themeLink.addEventListener('click', activator);
// themeLink.addEventListener('click', show);

// eventLink.addEventListener('click', activator);
// eventLink.addEventListener('click', show);

// photoLink.addEventListener('click', activator);
// photoLink.addEventListener('click', show);

// translationLink.addEventListener('click', activator);
// translationLink.addEventListener('click', show);

// function activator() {
// 	uniqueLink.classList.remove('active');
// 	themeLink.classList.remove('active');
// 	eventLink.classList.remove('active');
// 	photoLink.classList.remove('active');
// 	translationLink.classList.remove('active');
//     this.className = "active";
// }

// function show() {
// 	unique.className = 'hidden';
// 	theme.className = 'hidden';
// 	event.className = 'hidden';
// 	photo.className = 'hidden';
// 	translation.className = 'hidden';

// 	const currentId = this.getAttribute('data-value');
// 	const blocks = document.getElementById(currentId);
// 	blocks.className = 'animated fadeInDown';
// }

// const linkTab1 = document.getElementById('link-tab1');
// const linkTab2 = document.getElementById('link-tab2');
// const linkTab3 = document.getElementById('link-tab3');
// const linkTab4 = document.getElementById('link-tab4');
// const linkTab5 = document.getElementById('link-tab5');

// const tab1 = document.getElementById('tab1');
// const tab2 = document.getElementById('tab2');
// const tab3 = document.getElementById('tab3');
// const tab4 = document.getElementById('tab4');
// const tab5 = document.getElementById('tab5');



// linkTab1.addEventListener('click', activator2);
// linkTab1.addEventListener('click', show2);

// linkTab2.addEventListener('click', activator2);
// linkTab2.addEventListener('click', show2);

// linkTab3.addEventListener('click', activator2);
// linkTab3.addEventListener('click', show2);

// linkTab4.addEventListener('click', activator2);
// linkTab4.addEventListener('click', show2);

// linkTab5.addEventListener('click', activator2);
// linkTab5.addEventListener('click', show2);


// function activator2() {
// 	linkTab1.classList.remove('active');
// 	linkTab2.classList.remove('active');
//     linkTab3.classList.remove('active');
// 	linkTab4.classList.remove('active');
// 	linkTab5.classList.remove('active');
//     this.classList.add("active");
// }


// function show2() {
// 	tab1.className = 'hidden';
// 	tab2.className = 'hidden';
// 	tab3.className = 'hidden';
// 	tab4.className = 'hidden';
// 	tab5.className = 'hidden';

// 	const currentId = this.getAttribute('data-value');
// 	const blocks = document.getElementById(currentId);
// 	blocks.className = 'animated fadeInUp';

// }
