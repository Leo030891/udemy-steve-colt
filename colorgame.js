var arr = ["rgb(255, 0, 0)",
           "rgb(0, 255, 0)",
           "rgb(0, 0, 255)",
           "rgb(255, 255, 0)",
           "rgb(255, 0, 255)",
           "rgb(0, 255, 255)"];

        

var targetColor = randomColor();        
var pads = document.querySelectorAll(".pad");
var displayColor = document.getElementById("subjectColor");
var message = document.getElementById("message");
subjectColor.textContent = targetColor;




for(var i=0; i < pads.length; i++) {
	pads[i].style.background = arr[i];

	pads[i].addEventListener("click", function() {
	var clickedColor = this.style.background;	
	if (clickedColor === targetColor){
		message.textContent = "Correct!!!"
		fillcolor(targetColor);
	}	
	else{
		this.style.background = "black";
		message.textContent = "Try again!!!";
	}
	});

}


function fillcolor (color){
   for(var i=0; i <pads.length; i++){
	pads[i].style.background = color;
   }
} 

function randomColor(){
	var randomNumber = Math.floor(Math.random()*6);   
	return arr[randomNumber];
}
