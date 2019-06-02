"use strict";

/*========== Слайдер ==========*/

(function() {
	let sliderImages = document.querySelectorAll(".slide"),
	arrowPreview = document.querySelector(".button-left"),
	arrowNext = document.querySelector(".button-right"),
	dots = document.querySelectorAll(".dots li"),
	slidePosition = 0;

sliderImages[slidePosition].style.display = "block";
dots[slidePosition].style.backgroundColor = "#f14a58";

function hideImages() {
	for (let i = 0; i < sliderImages.length; i++) {
		sliderImages[i].style.display = "none";
	}
}
function resetDotsColor() {
	for (var i = 0; i < dots.length; i++) {
		dots[i].style.backgroundColor = "#d2d2d2";
	}
	dots[slidePosition].style.backgroundColor = "#f14a58";
}
// Смена слайда кажные 10 сек 

let timerId = setTimeout(changeSlides, 10000);
function changeSlides() {
	hideImages();
	if (slidePosition === 2) {
		slidePosition = -1;
	}
	slidePosition += 1;
	sliderImages[slidePosition].style.display = "block";
	resetDotsColor();
	clearTimeout(timerId);
	timerId = setTimeout(changeSlides, 10000);
}
// Смена слайдера по клику на кнопки

function scrollLeft() {
	hideImages();
	if (slidePosition === 0) {
		slidePosition = sliderImages.length;
	}
	slidePosition -= 1;
	sliderImages[slidePosition].style.display = "block";
	resetDotsColor();
	clearTimeout(timerId);
	timerId = setTimeout(changeSlides, 10000);
}

function scrollRight() {
	hideImages();
	if(slidePosition === 2) {
		slidePosition = -1;
	}
	slidePosition += 1;
	sliderImages[slidePosition].style.display = "block";
	resetDotsColor();
	clearTimeout(timerId);
	timerId = setTimeout(changeSlides, 10000);
}

arrowPreview.addEventListener("click", scrollLeft);
arrowNext.addEventListener("click", scrollRight);


//  Смена слайдера по клику на точки


function deleteDotsColor() {
	for(var i = 0; i < dots.length; i++) {
		dots[i].style.backgroundColor = "#d2d2d2";
	}
}
for(let i = 0; i < dots.length; i++) {
	dots[i].addEventListener("click", changeSlide);
	function changeSlide() {
		hideImages();
		sliderImages[i].style.display = "block";
		deleteDotsColor();
		dots[i].style.backgroundColor = "#f14a58";
		clearTimeout(timerId);
		timerId = setTimeout(changeSlides, 10000);
	}
}
})();
