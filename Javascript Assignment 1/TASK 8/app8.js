// task 8

//You have an array of that contains the name of Pakistani team players selected for world cup (15 players ) named as world squad . now tomorrow we have match with india , so make an array of final team players (11 players) that will be playing in tomorrows match from the world cup squad array . 
//(make sure it should not disturb the array that contains 15 players instead you have to make a copy of this array)

// an array of world cup 15 players
var worldCup_squad = ["Babar Azam", "Shadab Khan", "Muhammad Rizwan", "Muhammad Hafeez","Muhammad Amir","Haris Rauf", "Hassan Ali", "Shaheen Shah Afreedi", "Muhammad Hassanain","Naseem Shan","Shoaib Mailk","Immam ul Haq" ,"Imad Wasim","Fakhr Zaman" , "Sarfaraz"];


// copy of array
var worldCupSquad = ["Babar Azam", "Shadab Khan", "Muhammad Rizwan", "Muhammad Hafeez","Muhammad Amir","Haris Rauf", "Hassan Ali", "Shaheen Shah Afreedi", "Muhammad Hassanain","Naseem Shan","Shoaib Mailk","Immam ul Haq" ,"Imad Wasim","Fakhr Zaman" , "Sarfaraz"];


// Select 11 players for tomorrow's match against India 
var finalSquad = worldCupSquad.splice(0,11)


// resut for final squad of playersfor tommorrow's match against India
alert( finalSquad )
console.log( finalSquad )

