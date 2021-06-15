// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function reload(){
  reload = location.reload();
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  function generatePassword(){
    
    var Pchar = "abcdefghijklmnopqrstuvwxyza"; //27 another 'a' was added so that Pchar != PUchar this is important in the equation on the bottom
    var PUchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //26
    var Pnum = "0123456789"; //10
    var PSchar = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~" ; // 33
    var Result = "";
    var Pin = "";
    var Plength = prompt("Enter length of Password between 8 and 128");
    
    if(Plength<=128 && Plength>=8){
    }else if(!Plength){
        window.alert("Creation Cancelled");
        return Result;
    }else{
        Result = "Error, Wrong input";
        return Result;
    }
    //To be honest alot this code is unnecessary when making the actual password , but wanted to add a little more user interaction
    //////////////////////////LOWERCASE PROMPT//////////////////////////////
    var lowIn = prompt("Include Lowercase?\nFor yes: y\nFor no: n");
    if(!lowIn){  //Canceling any prompts will trigger an alert message and a empty result
        window.alert("Creation Cancelled");
        return Result;
    }
    lowIn = lowIn.toLowerCase();
    while(lowIn != "y" && lowIn != "n"){  // this code was place so that the user can re enter when wrong input it made
        window.alert("Error, please answer with a y or n");
        lowIn = prompt("Include Lowercase?\nFor yes: y\nFor no: n");
        if(!lowIn){
            window.alert("Creation Cancelled");  
            return Result;
        }
    }
    if(lowIn == "y"){
        Pin = Pin.concat(Pchar);
    }
    //////////////////////////UPPERCASE PROMPT//////////////////////////////
    var upIn = prompt("Include Uppercase?\nFor yes: y\nFor no: n");
    if(!upIn){  
        window.alert("Creation Cancelled");
        return Result;
    }
    upIn = upIn.toLowerCase();
    while(upIn != "y" && upIn != "n"){  // this code was place so that the user can re enter when wrong input it made
        window.alert("Error, please answer with a y or n");
        upIn = prompt("Include Uppercase?\nFor yes: y\nFor no: n");
        if(!upIn){  
            window.alert("Creation Cancelled");
            return Result;
        }
    }
    if(upIn == "y"){
        Pin = Pin.concat(PUchar);
    }
    //////////////////////////NUMBER PROMPT//////////////////////////////
    var numIn = prompt("Include Numbers?\nFor yes: y\nFor no: n");
    if(!numIn){  
        window.alert("Creation Cancelled");
        return Result;
    }
    numIn = numIn.toLowerCase();
    while(numIn != "y" && numIn != "n"){  // this code was place so that the user can re enter when wrong input it made
        window.alert("Error, please answer with a y or n");
        numIn = prompt("Include Numbers?\nFor yes: y\nFor no: n");
        if(!numIn){  
            window.alert("Creation Cancelled");
            return Result;
        }
    }
    if(numIn == "y"){
        Pin = Pin.concat(Pnum);
    }
    //////////////////////////SPECIAL PROMPT//////////////////////////////
    var specialIn = prompt("Include Special letters?\nFor yes: y\nFor no: n")
    if(!specialIn){  
        window.alert("Creation Cancelled");
        return Result;
    }
    specialIn = specialIn.toLowerCase();
    while(specialIn != "y" && specialIn != "n"){  // this code was place so that the user can re enter when wrong input it made
        window.alert("Error, please answer with a y or n");
        specialIn = prompt("Include Special letters?\nFor yes: y\nFor no: n");
        if(!specialIn){  
            window.alert("Creation Cancelled");
            return Result;
        }
    }
    if(specialIn == "y"){
        Pin = Pin.concat(PSchar);
    }
    //this code occurs when no choice are made
    if(Pin == ""){
        Result = "No choices were made, Please do it again";
        return Result;
    }
    
    //loop that prints the password in a random manner
    for (var i = 0, n = Pin.length; i < Plength; ++i) {
      Result += Pin.charAt(Math.floor(Math.random() * n));
    }
    console.log(Result.length);
    //this code below ensure that the character types at least appear once when the array is added
    //this method was used instead of the .include method to make coding shorter
    //if another 'a' wasn't added in the variable "Pchar" this method will not work 
    var p = Pin.length;
    var a = Pchar.length;
    var b = PUchar.length;
    var c = Pnum.length;
    var d = PSchar.length;

    if(p == a + b){
      Result = Result.slice(0, Plength - 2) + Pchar.charAt(Math.floor(Math.random() * a)) + PUchar.charAt(Math.floor(Math.random() * b));
      return Result;
    }else if(p == a + c){
      Result = Result.slice(0, Plength - 2) + Pchar.charAt(Math.floor(Math.random() * a)) + Pnum.charAt(Math.floor(Math.random() * c));
      return Result;
    }else if(p == a + d){
      Result = Result.slice(0, Plength - 2) + Pchar.charAt(Math.floor(Math.random() * a)) + PSchar.charAt(Math.floor(Math.random() * d));
      return Result;
    }else if(p == b + c){
      Result = Result.slice(0, Plength - 2) + PUchar.charAt(Math.floor(Math.random() * b)) + Pnum.charAt(Math.floor(Math.random() * c));
      return Result;
    }else if(p == b + d){
      Result = Result.slice(0, Plength - 2) + PUchar.charAt(Math.floor(Math.random() * b)) + PSchar.charAt(Math.floor(Math.random() * d));
      return Result;
    }else if(p == c + d){
      Result = Result.slice(0, Plength - 2) + Pnum.charAt(Math.floor(Math.random() * c)) + PSchar.charAt(Math.floor(Math.random() * d));
      return Result;
    }else if(p == a + b + c){
      Result = Result.slice(0, Plength - 3) + Pchar.charAt(Math.floor(Math.random() * a)) + PUchar.charAt(Math.floor(Math.random() * b)) + Pnum.charAt(Math.floor(Math.random() * c));
      return Result;
    }else if(p == a + b + d ){
      Result = Result.slice(0, Plength - 3) + Pchar.charAt(Math.floor(Math.random() * a)) + PUchar.charAt(Math.floor(Math.random() * b)) + PSchar.charAt(Math.floor(Math.random() * d));
      return Result;
    }else if(p == a + c + d ){
      Result = Result.slice(0, Plength - 3) + Pchar.charAt(Math.floor(Math.random() * a)) + Pnum.charAt(Math.floor(Math.random() * c)) + PSchar.charAt(Math.floor(Math.random() * d));
      return Result;
    }else if(p == b + c + d){
      Result = Result.slice(0, Plength - 3) + PUchar.charAt(Math.floor(Math.random() * b)) + Pnum.charAt(Math.floor(Math.random() * c)) + PSchar.charAt(Math.floor(Math.random() * d));
      return Result;
    }else if(p == a + b + c + d){
      Result = Result.slice(0, Plength - 4) + Pchar.charAt(Math.floor(Math.random() * a)) + PUchar.charAt(Math.floor(Math.random() * b)) + Pnum.charAt(Math.floor(Math.random() * c)) + PSchar.charAt(Math.floor(Math.random() * d));
      return Result;
    }else{
      return Result;
    }
    
    
  }

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

