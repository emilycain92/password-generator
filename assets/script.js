// Assignment code here




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var upperCase= [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L','M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X','Y', 'Z']
var lowerCase= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var number=[0,1,2,3,4,5,6,7,8,9]
var special=['`','!','@','#','$','%','^','&','*','?','(','?']
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var generatePassword=function(){
  let passwordLength= window.prompt("Pick a number between 8 and 128, this will be your password length.")
  if (passwordLength <8||passwordLength >128){
    window.alert("For the last time, pick a number between 8 and 128. Start Over.");
    return "";
  } 
  else if (passwordLength >8|| passwordLength <128){
    var confirmUpperCase= window.confirm ("UPPERCASE LETTERS???");
    var confirmLowerCase= window.confirm ("lowercase letters???");
    var confirmNumber= window.confirm("How 'bout sum Numbers?");
    var confirmSpecial=window.confirm("Let's round it out with some special characters.");
  }
//Generate the password
  if(confirmUpperCase&&confirmLowerCase&&confirmNumber&&confirmSpecial) {
    output= [...upperCase,...lowerCase,...number,...special];
  }
  else if(confirmUpperCase&&confirmLowerCase&&confirmNumber) {
    output= [...upperCase,...lowerCase,...number];
  }
  else if(confirmLowerCase&&confirmNumber&&confirmSpecial){
  output= [...lowerCase,...number,...special];
  }
  else if(confirmUpperCase&&confirmLowerCase&&confirmSpecial) {
  output=[...upperCase,...lowerCase,...special];
  }
  else if(confirmUpperCase&&confirmSpecial&&confirmNumber){
  output=[...upperCase,...special,...confirmNumber];  
 } else{
   window.alert("Start Over :/")
   return"";
 }

 //Generate password 
var randomPassword="";
for (let index = 0; index < passwordLength; index++) {
  var randomCharacterIndex= Math.floor(Math.random()*output.length)
  randomPassword += output[randomCharacterIndex];
  
}

return randomPassword;  
 }
