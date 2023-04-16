// task 5

//You will be creating two empty array’s is called “ contact numbers “ and “ contact names “ . you will then push these values into their respective arrays . using the push method .after adding all the contacts 
// You will need to use a for loop to iterate through both arrays and log each element the console make  sure to use descriptive variable names and comment on your code for clarity





// two empty arrays to store contact names and numbers
var contactNames = [];
var contactNumbers = [];

// asking the user to enter the number of contacts they want to add
var numContacts = Number(prompt("How many contacts do you want to add?"));

// Using a for loop to iterate through the number of contacts specified by the user
for (var i = 0; i < numContacts; i++) {

  // asking the user to enter the name of the current contact
  var name = prompt("Enter the name of contact " + (i+1) + ":");

  // asking the user to enter the number of the current contact
  var number = prompt("Enter the number of contact " + (i+1) + ":");

  // Add the name of the current contact to the contactNames array
  contactNames.push(name);

  // Add the number of the current contact to the contactNumbers array
  contactNumbers.push(number);
}

//console for printing contacts
console.log("Contacts:");

// Using a for loop to iterate through the contactNames and contactNumbers arrays
for (var i = 0; i < contactNames.length; i++) {

  // print the name and number of the current contact, with formatting
  console.log("Name: " + contactNames[i] + ", Number: " + contactNumbers[i]);
}
