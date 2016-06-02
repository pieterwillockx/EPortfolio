$(document).ready(function(){
	if($(document).find("title").text() === "Home | Pieter Willockx"){
		document.getElementById("home").className += " active";
	}
	else if($(document).find("title").text() === "Bio | Pieter Willockx"){
		document.getElementById("bio").className += " active";
	}
	else if($(document).find("title").text() === "Ervaring | Pieter Willockx"){
		document.getElementById("ervaring").className += " active";
	}
	else if($(document).find("title").text() === "Documenten | Pieter Willockx"){
		document.getElementById("documenten").className += " active";
	}
	else if($(document).find("title").text() === "Contact | Pieter Willockx"){
		document.getElementById("contact").className += " active";
	}
});