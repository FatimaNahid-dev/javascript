// task 6

//Create an array that contains different products and get input from the user to give the position of that element he/she wants .now remove that item from your array and console the removed items , also display remaining items in array and total number of  items remaining 


// an array of products
var products = ["pizza", "burger", "cake", "coffee","sweets","brownies", "snacks"];

// ask user for input
var userInput = prompt("Enter the position of the product  you want to remove (1-" + products.length + "):");

// convert user input to a number and subtract 1 to get the lead
//
var lead = Number(userInput) - 1;


//The splice() method is used to remove the element at the specified lead from the array.
var deletedItem = products.splice(lead, 1);

// log the removed item
console.log("Deleted item: " + deletedItem);

// initialize an empty string to store the concatenated items
var itemsLeft = "";

// loop through the products array
for (var i = 0; i < products.length; i++)
 {

// concatenate the current item with the existing string
  itemsLeft += products[i];

  // add a comma and space separator if the current item is not the last item in the array
  if (i < products.length - 1) 
  {
    itemsLeft += ", ";
  }
}

// output the concatenated string of remaining items
console.log("Remaining items: " + itemsLeft);

// log the remaining items and total number of items
console.log("Total number of items: " + products.length);
