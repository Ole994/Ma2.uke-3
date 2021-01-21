// Question 1
// Create a variable called outOfStock and assign it a boolean value.

// Create an if else statement that checks the value of outOfStock.

// If it is true, console log "Out of stock". Otherwise log "In stock".

var outOfStock = true;

if (outOfStock === true) {
    console.log (outOfStock);
}
else {
    console.log ("In stock");
console.log 
}

// Question 2
// Create a for loop that counts from 15 to 25. 
//Console log the value of the counter variable inside the loop only if it's equal to 17 or 20.

for (var i = 15; i <= 25; i++) {
    if ((i ===17) || (i ===20)) {
        console.log(i);
    }   
}




// Question 3
// Loop through the array below and add an li item to the ul element
//  in the HTML containing the title and rating of each game 
//  only if the rating for the game is below 3.5.

var games = [
	{
		title: "Grand Theft Auto",
		rating: 4.48,
	},
	{
		title: "Portal 2",
		rating: 3.5,
	},
	{
		title: "Team Fortress",
		rating: null,
	},
	{
		title: "The Witcher",
		rating: 3.0,
	},
	{
		title: "The Elder Scrolls",
		rating: 2.9,
	},
];

for (var i = 0; i < games.length; i++){
    if (games[i].rating < 3.5) {
        //Will loop trough the objects if the rating is below 3.5 or more
            console.log (games[i].title);
        }
    }


    // // Question 4
    // // Create a function called whatIDontLike that accepts one argument. 
    // Choose a good name for the argument.
    // // Inside the function, check if the argument has a string value. 
    // If it doesn't log the message "Please send in a string".
    // // If the argument is a string value, log the message 
    // "I don't like " together with the argument.
    // // Call the function and pass in a value of your choice.
    // // Example:
    // // If you pass in the value "giraffes", the function should log: "I don't like giraffes".


//declare the function
function logWord (whatIDontLike) {
    console.log ("What I do not like");
    if (function === logWord){
        console.log (logWord);
    }
}

//call the function
 logWord("animales");
 





// for (var i = 0; i < games.length; i++){
//     if (games[i].rating <= 3.5) {
//         //Will loop trough the objects if the age is iqual to 4 or more
//             console.log (games[i].type);


var fullName = "OleKorvald";
var lengthOfName = fullName.length;
console.log (lengthOfName);
//10

var fullName = "Ole Korvald"
var lower = fullName.toUpperCase();
console.log (lower);
//Big string letters



//make first letter big in a string
let str = "hallo";

function makeFirstLetterBig (s) {
    // Should check if s is string and longer than 0
    let first = s[0];
    let rest = s.slice(1); 
    console.log (first  + " and " + rest);
    let newString = first.toUpperCase() + rest;
    return newString;
}

console.log(makeFirstLetterBig(str));
