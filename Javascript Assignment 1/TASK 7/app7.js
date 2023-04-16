//task 7

//Create a program that asks the user for their nationality , gender and age using prompt function . the program should use nest if-else statements to determine if this is eligible to vote .first, the program should check if the person is  Pakistani or Indian . if they are not , the program should display a message saying they are not eligible to vote . if the are Pakistani or Indian , the program should check they are Pakistani or indian if they are Pakistani or indian then program should check their gender . if the person is male  and over the age of 18 they are eligible to vote . if the person is female and over the age of 18 , the program should ask if they are married they are eligible to vote if they are not married  then they are not eligible to vote .if the person is under age 18 , the program should display a message saying they are not eligible to vote . 

// Ask the user for their nationality, gender, and age using prompt function
var nationality = prompt("What is your nationality?");

var gender = prompt("What is your gender?");

var age = prompt("What is your age?");

//Ask the user for their nationality
var nationality = prompt(" Hello , What is your nationality?");
var nationality = nationality[0].toLowerCase
//Check if the person is Pakistani or Indian
if (nationality === "Pakistani" || nationality === "Indian") {
//Ask the user for their gender
var gender = prompt("Hey there , What is your gender?");
//Check if the person is male
if (gender === "male"
) {
//Ask the user for their age
var age = Number(prompt("Tell me , What is your age?"));

//Check if the person is over 18 years old
if (age >= 18)
{ 
console.log("You are eligible to vote.");
} 
else 
{
console.log("You are not eligible to vote.");
//Check if the person is female
  } 
  elseif(gender === "female");
    {

//Check if the person is over 18 years old
if (age >= 18) {

//Ask the user if they are married
// var isMarried = prompt("Are you married?");
//  //Check if the person is married
//  if (isMarried === "yes") {
 console.log("You are eligible to vote.");
//  } 
//  else {
//  console.log("You are not eligible to vote.");
//  }
} 
else
{
console.log("You are not eligible to vote.");
}
}

} else
console.log("You are not eligible to vote.");
}