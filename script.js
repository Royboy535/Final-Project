//importing text replacement button, text, and input
var originalText = document.getElementById('Text');
var newText = document.getElementsByName('Replacement Text');
var myButton = document.getElementById('Button');
//importing background color
var bgRed = document.getElementById('colorRed');
var bgTan = document.getElementById('colorTan');
var bgBlue = document.getElementById('colorBlue');
var bgYellow = document.getElementById('colorYellow');
//importing my text buttons
var textBlack = document.getElementById('textBlack');
var textRed = document.getElementById('textRed');
var textYellow = document.getElementById('textYellow');
var textBlue = document.getElementById('textBlue');

//changes the background color

bgBlue.addEventListener("click", function () {
    document.body.style.backgroundColor = "blue"; 
   
});

bgTan.addEventListener("click", function () {
    document.body.style.backgroundColor = "tan"; 
    
},false);

bgYellow.addEventListener("click", function () {
    document.body.style.backgroundColor = "yellow"; 
    
});

bgRed.addEventListener("click", function () {
    document.body.style.backgroundColor = "red"; 
    
},false);

textBlack.addEventListener("click",function () {
document.getElementById('Text').style.color = "black"
    },false);
    
    
 textRed.addEventListener("click",function () {
   document.getElementById('Text').style.color = "red";
    },false);

  textBlue.addEventListener("click",function () {
   document.getElementById('Text').style.color = "blue";
    },false);
  
 textYellow.addEventListener("click",function () {
   document.getElementById('Text').style.color = "yellow";
    },false);
  
