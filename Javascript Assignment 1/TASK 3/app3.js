//task 3

//Create a program to generate a random number between 1 and 10 and stores in a variable called “secret number “then ask the user to enter a guess for the secret number using prompt. Use an if else statement to check if the user’s matches the secret number. If the guess is correct display a message using an alert saying “congratulations!” you guessed the secret number otherwise , if guess is too high or too low , display an appropriate message informing the user to guess again 

// Generate a random number between 1 and 10

var randomNumber = 7; // random number

 var secretNumber = randomNumber % 10 + 1; //secretNumber function here with reminder and additon opreater


// Asking the user to enter a guess for the secret number
var guess = Number(prompt("Guess the secret number between 1 and 10:"));

// Checking if user guess is correct and display a message
if (guess == secretNumber)
 { 
    alert("Congratulations! You guessed the secret number.");
}

 // Checking if user guess is wrong(too low) and display a message

 else if (guess < secretNumber) 
 { 
    alert("Sorry, your guess is too low. Try again.");
} 

 // Checking if user guess is wrong(too low) and display a message
else(guess > secretNumber) 
{
     alert("Sorry, your guess is too high. Try again.");
}

