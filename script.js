 // Assignment Code
var generateBtn =document.getElementById("prince")
var upperCaseChars="ABCDEFGHIJKLMNOPTRSUVWXYZ"
var lowerCaseChars= upperCaseChars.toLowerCase()
var nmberChars="1234567890"
var specialChars="!@#$%^&*()"
var allChars=""

var finalPassword = "";
function generatepassword(){
  var passwordRequest= prompt("how long do you want your password to be?");
  console.log(passwordRequest)
  upperCase();
  lowerCase();
  numberChars();
  specialCharsF();
  for (let i = 0; i < passwordRequest; i++ ){
    finalPassword += allChars.charAt(Math.floor(Math.random()*allChars.length))
    // console.log(finalPassword)
  }
  alert(finalPassword)
}

function upperCase(){
  var upperCaseCon=prompt("would you like to add uppercase charactors to your password? yes/no");    
  if (upperCaseCon==="yes"){
    allChars=allChars+upperCaseChars
    console.log(allChars)
  }
}

function lowerCase(){
  var lowerCaseCon=prompt("would you like to add lowercase charactors to your password? yes/no");
  if (lowerCaseCon==="yes"){
    allChars=allChars+lowerCaseChars
    console.log(allChars)
  }
}

function numberChars(){
  var numberCon=prompt("would you like to use number from 1-10? yes/no");
  if (numberCon==="yes"){
    allChars=allChars+nmberChars
    console.log(allChars)
  }
}

function specialCharsF(){
  var specialCharsCon=prompt("woiuld you like to add special charactors? yes/no");
  if (specialCharsCon==="yes"){
    allChars=allChars+specialChars
    console.log(allChars)
  }
}

generateBtn.addEventListener("click",generatepassword);