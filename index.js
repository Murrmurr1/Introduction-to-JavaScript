/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
var votingAge = 19;
if (votingAge > 18) {
    console.log("True");
}




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
var a = 5;
var b = 3;
if ( a > b) {
    a = 10
}




//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

var toInt = "1999";
Number(toInt);



//Task d: Write a function to multiply a*b 
function multi(a , b) {
    console.log(a*b);
}
multi(5,2);



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

var age = 21;

function dogAge (a) {
    console.log(a*7);
}

dogAge(age);



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function RPSGame() {
    var userInp = prompt("Do you want to choose: '1. Rock' '2. Paper' or '3. Scissors' ?");
    var compInp = Math.random()*3;
    compInp = Math.round(compInp);
    console.log(compInp)
    if (compInp <= 1) {
      console.log("The computer chose Rock!");
    } else if (compInp === 2){
      console.log("The computer chose Paper!");
    } else {;
      console.log("The computer chose Scissors!");
    }
    if (userInp < compInp) {
      console.log("You lost! Better luck next time!");
    } else if (userInp === compInp) {
      console.log("You tied!");
    } else if (userInp > compInp){
      console.log("You won! Congratulations!");
    }
  }
  
  RPSGame();
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
var km = prompt("How many km do you wish to convert: ");

console.log(km + "kms is " + km*0.621371 + " in miles!");




//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
var feet = prompt("How many feet do you wish to convert: ");

console.log(feet + " feet is " + feet*30.48 + " in centimeters!");




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





