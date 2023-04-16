//task 4

//Create a program  that asks the user to enter a name , and then prints out with the first letter capitalized (hint : make your name in capitalized case. )

// Asking here the user for a name
var inputName = prompt("Enter a name here... .e.g. Fatima:"); 

// taking input of the first letter and capitalize it
var firstLetter = inputName[0].toUpperCase();

 // taking input of the otherLetters name
 var otherLetters = inputName.slice(1);

// Combination of  the first letter and the otherLetters of the name
var capitalizedCase = firstLetter + otherLetters; 

// printing the capitalized name to the console
console.log("Here is your name in Capitalized Case: " + capitalizedCase); 