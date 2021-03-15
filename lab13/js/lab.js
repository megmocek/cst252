// lab.js
// Use .js to make JS Conditionals
// Author: Meg Mocek
// Created: Mar. 15, 2021
// License: Public Domain

//Debugging LAB 11
//Return Air, Fire, Water, and Earth

function sortingSign(str) {
	len = str.length;
	mod = len % 11;
	if (mod == 0) {
		return "ARIES: Fire Sign (March 21 - April 19) Bold & Ambitious"
	}

	else if (mod == 1) {
		return "TAURUS: Earth Sign (April 20 - May 20) Relaxed & Serene"
	}

	else if (mod == 2) {
		return "GEMINI: Air Sign (May 20 - June 20) Two Faced & Driven"
	}

	else if (mod == 3) {
		return "CANCER: Water Sign (June 21 - July 22) Emotional & Intuitive"
	}
	else if (mod == 4) {
		return "LEO: Fire Sign (July 23 - August 22) Theatrical & Passionate"
	}
	else if (mod == 5) {
		return "VIRGO: Earth Sign (August 23 - October 22) Logical & Practical"
	}
	else if (mod == 6) {
		return "LIBRA: Air Sign (September 23 - October 22) Balanced & Indecisive"
	}
	else if (mod == 7) {
		return "SCORPIO: Water Sign (October 23 - November 21) Passionate & Emotional"
	}
	else if (mod == 8) {
		return "SAGITTARIUS: Fire Sign (November 22 - December 21) Intellectual & Spiritual"
	}
	else if (mod == 9) {
		return "CAPRICORN: Earth Sign (December 22 - January 19) Ambitious & Disciplines"
	}
	else if (mod == 10) {
		return "AQUARIUS: Air Sign (January 20 - February 18) Humanitarian & Cold"
	}
	else if (mod == 11) {
		return "PISCES: Water Sign (February 19 - March 20) Sensitive & Vague"
	}
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
	var name = document.getElementById("input").value;
	var sign = sortingSign(name);
	newText = "<p> The Zodiac has determined that you are: " + sign + "<p>";
	document.getElementById("output").innerHTML = newText;
})
