var numofpads = 6;
var arr = randomColorArray(numofpads);
var displayColor = document.querySelector("#bannerDisplay");
var targetColor = pickColor();
var pads = document.querySelectorAll(".pad");
displayColor.textContent = targetColor;
var message = document.querySelector("#message");
var testrandomcolor = randomColor(); 
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyButton = document.querySelector("#easyMode");
var hardButton = document.querySelector("#hardMode");

easyButton.addEventListener("click",function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
		
	numofpads = 3;
	arr = randomColorArray(numofpads);
	targetColor = pickColor();
	displayColor.textContent = targetColor;
	for(var i = 0; i < pads.length; i++) {
		if(arr[i]) {
			pads[i].style.background = arr[i];
		} else {
			pads[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";		
     });



hardButton.addEventListener("click",function(){
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	numofpads = 6;
	arr = randomColorArray(numofpads);
	targetColor = pickColor();
    displayColor.textContent = targetColor;

		for(var i=0;i<pads.length;i++){
		pads[i].style.backgroundColor = arr[i];
		pads[i].style.display = "block";
	}
	h1.style.backgroundColor = "steelblue";	
  });




reset.addEventListener("click", function(){
    arr = randomColorArray(numofpads);
	targetColor = pickColor();
	displayColor.textContent = targetColor;
	reset.textContent="New Colors";
	message.textContent="";	
	for(var i=0;i<pads.length;i++){
		pads[i].style.backgroundColor = arr[i];
	}	
	h1.style.backgroundColor = "steelblue";	
});



//Setting colors for each of the pads
for(var i=0;i<pads.length;i++){
		pads[i].style.backgroundColor = arr[i];
		pads[i].addEventListener("click", function(){
    	var clickedColor = this.style.backgroundColor;
    	if(clickedColor === targetColor){
    		message.textContent="Correct!!!";
    		changeColors(clickedColor);
	    	h1.style.backgroundColor = clickedColor;
	    	reset.textContent = "Play Again?";
	    }
    	else{
    		message.textContent="Try Again!!!";
    		this.style.backgroundColor = "#232323";
    	}


	});
	h1.style.backgroundColor = "steelblue";	
}  


//Function to change color of all pads to the clicked color
function changeColors (color){
	for(var i=0;i<pads.length;i++){
		pads[i].style.backgroundColor = color;
    }  
}

//Function to pick a random color from array
function pickColor(){
	var random = Math.floor(Math.random()* arr.length);   
	return arr[random];
}


//Function to generate a random color
function randomColor(){
	var r = Math.floor(Math.random()*256);  
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
// rgb(r,g,b)
	return "rgb(" + r +", "+ g + ", "+b+")";    
}

//Function to generate an array of random numbers
function randomColorArray(num) {
var arr1 = [];
	for(i=0;i<num;i++){
	 arr1[i] = randomColor();
	}
 return arr1;
}


   
