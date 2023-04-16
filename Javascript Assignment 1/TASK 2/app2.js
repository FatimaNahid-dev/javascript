//task2

//Calculate the fitrah amount first, ask the user to enter the total number of family members using prompt and store the value in a variable called “family member “next, ask the user to choose a fitrah method and its price in variables then use an if else statement to check the user’s input and calculate the fitrah amount by multiplying selected methods price with the number of family members. Finally, display the calculated amount using an alert message

//Fitrah amount

// The total number of family members
var familyMembers = Number(prompt("Please enter the total number of family members: "));

// Fitrah calculation

//variables for declare and initaliaze choices
var gandum = 250;
var jo = 450;
var khajoor = 2100;
var kishmish = 2800;

// declare and initalize variable for fitrah method
var fitrahMethod = prompt("Please enter the fitrah method: gandum, jo, khajoor, kishmish");

//declare variable for fitrah
var fitrah;

//if-else statements for checking fitrahMethod' with a string entered by the user via prompt

//for gandum

if (fitrahMethod === "gandum") {
    fitrah = familyMembers * gandum;}

    //for jo 

 else if (fitrahMethod === "jo") {
    fitrah = familyMembers * jo;}

//for khajoor

 else if (fitrahMethod === "khajoor") {
    fitrah = familyMembers * khajoor;}

//for kishmish

else if (fitrahMethod === "kishmish") {
    fitrah = familyMembers * kishmish;}
//for wrong entering the fitrah method
 else {
    alert("Invalid method for calculating fitrah");}

//for final result/output
alert("Your fitrah amount is " + fitrah);

//for addition thanking to users :)
alert("Thank You there user 'May-Allah-Bless-You'")