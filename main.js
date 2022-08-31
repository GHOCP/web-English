/*

"use strict";

const asideList = document.getElementById('aside').getElementsByTagName('a');
const titleList = document.getElementById('content').getElementsByTagName('h1');
const winHeight = window.innerHeight;
const total = asideList.length;	// total === 18;
let selectedIndex = 0;


for (let i = 0; i < total; i++) {
	asideList[i].onclick = function(e) {
		// set the selected a's style
		e.target.style.backgroundColor = '#F4F4F4';
		e.target.style.borderRight = '3px solid #DADADA';
		e.target.style.paddingRight = '17px';
		
		// cancel the former-selected a's style
		if (selectedIndex !== i) {
			asideList[selectedIndex].style.backgroundColor = '#FFFFFF';
			asideList[selectedIndex].style.borderRight = '0px';
			asideList[selectedIndex].style.paddingRight = '20px';
		}

		// set the selectedIndex at present
		selectedIndex = i;

		// set the hover effects
		asideList[i].onmouseleave = function() {
			this.style.backgroundColor = '#F4F4F4';
		};
		
		for (let j = 0; j < total; j++) {
			if (j !== selectedIndex) {
				asideList[j].onmouseover = function() {
					this.style.backgroundColor = '#F4F4F4';
				};
				asideList[j].onmouseleave = function() {
					this.style.backgroundColor = '#FFFFFF';
				};
			}
		}
	};		
}


const box = document.getElementById("box");

for (let i = 0; i < total; i++) {
	asideList[i].onclick = function(e) {
		box.style.top = `${25 * (i) - 2 }px`;
	}
}

function update() {
	const rectArray = [];
	for (let i = 0; i < total; i++) {
		let rect = titleList[i].getBoundingClientRect();
		rectArray[i] = rect.top;
	}
	for (let i = 0; i < total; i++) {
		if (rectArray[i] < winHeight * 0.5 && rectArray[i] > 0) {
			box.style.top = `${25 * (i) - 2 }px`;
			break;
		}
	}
}

document.addEventListener('scroll', update);
update();
*/

//////////////////////////////////////////////////////////////////////////


/*jshint esversion: 6 */
"use strict";

const asideList = document.getElementById('aside').getElementsByTagName('a');
const titleList = document.getElementById('content').getElementsByTagName('h1');
const winHeight = window.innerHeight;
const total = asideList.length;	// total === 18;
let selectedIndex = 0;


/*
for (let i = 0; i < total; i++) {
	asideList[i].onclick = function(e) {
		// set the selected a's style
		e.target.style.backgroundColor = '#F4F4F4';
		e.target.style.borderRight = '3px solid #DADADA';
		e.target.style.paddingRight = '17px';
		
		// cancel the former-selected a's style
		if (selectedIndex !== i) {
			asideList[selectedIndex].style.backgroundColor = '#FFFFFF';
			asideList[selectedIndex].style.borderRight = '0px';
			asideList[selectedIndex].style.paddingRight = '20px';
		}

		// set the selectedIndex at present
		selectedIndex = i;

		// set the hover effects
		asideList[i].onmouseleave = function() {
			this.style.backgroundColor = '#F4F4F4';
		};
		
		for (let j = 0; j < total; j++) {
			if (j !== selectedIndex) {
				asideList[j].onmouseover = function() {
					this.style.backgroundColor = '#F4F4F4';
				};
				asideList[j].onmouseleave = function() {
					this.style.backgroundColor = '#FFFFFF';
				};
			}
		}
	};		
}
*/

const box = document.getElementById("box");

for (let i = 0; i < total; i++) {
	asideList[i].onclick = function(e) {
		box.style.top = `${25 * (i) }px`;
	}
}


for (let i = 0; i < total; i++) {
	asideList[i].onclick = function(e) {
		// set the selected a's style
		e.target.style.color = '#000000'
		
		// cancel the former-selected a's style
		if (selectedIndex !== i) {
			asideList[selectedIndex].style.color = '#C6C6C6';
		}

		// set the selectedIndex at present
		selectedIndex = i;

		// set the hover effects
		asideList[i].onmouseover = function(e) {
			e.target.style.color = '#000000';
		};
		
		asideList[i].onmouseleave = function(e) {
			e.target.style.color = '#000000';
		};
		
		for (let j = 0; j < total; j++) {
			if (j !== selectedIndex) {
				asideList[j].onmouseover = function() {
					this.style.color = '#8D8D8D';
				};
				asideList[j].onmouseleave = function() {
					this.style.color = '#C6C6C6';
				};
			}
		}
	};		
}




function update() {
	const rectArray = [];
	for (let i = 0; i < total; i++) {
		let rect = titleList[i].getBoundingClientRect();
		rectArray[i] = rect.top;
	}
	for (let i = 0; i < total; i++) {
		if (rectArray[i] < winHeight * 0.5 && rectArray[i] > 0) {
			box.style.top = `${25 * (i) - 2 }px`;
			break;
		}
	}
}

document.addEventListener('scroll', update);
update();