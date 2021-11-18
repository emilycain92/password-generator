// Assignment code here




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var upper= [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L','M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X','Y', 'Z']
var lower= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var number=[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]
var special=['`','!','@','#','$','%','^','&','*','?']
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var generatePassword=function(){
  let prompt= window.prompt("Pick a number between 8 and 128, this will be your password length.")
  if (prompt <8||prompt >128){
    window.alert("For the last time, pick a number between 8 and 128.");
  } 
  else if (prompt >8|| prompt <128){
    var confirmUpper= window.confirm ("UPPERCASE LETTERS???");
    var confirmLower= window.confirm ("lowercase letters???");
    var confirmNumber= window.confirm("How 'bout sum Numbers?Get it? SUM?");
    var confirmSpecial=window.confirm("Let's round it out with some special characters.");
  }
//Generate the password time
}