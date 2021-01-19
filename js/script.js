//QUESTION 1
// Loop through the array below and console log each type property if the age is at least 4.
var pets = [
	{
		type: "cat",
		age: 5.5,
	},
	{
		type: "dog",
		age: 3.8,
	},
	{
		type: "parrot",
		age: 4.0,
	},
];
for (var i = 0; i < pets.length; i++){
if (pets[i].age >= 4) {
    //Will loop trough the objects if the age is iqual to 4 or more
        console.log (pets[i].type);
    }
}

//Question 2
//Create a function with one argument.
//Inside the function check the type of the value being passed in.
//If it is a boolean value, log the value.
//If it is not a boolean value, log the message "Please pass a boolean value in".
//Call the function and pass a value in.
function logWord(sentence) {
    console.log(sentence);
    console.log (typeof sentence);
}
logWord("This is an argument for this task");
logWord("please pass a boolean in")


function logword(_boolean = true) {
    console.log (_boolean)
    console.log(typeof _boolean)
};








// button.onclick = function () {
// console.log ("Subheading");
// };

//Question 3
//Write code that does the following:
//When the button in the HTML is clicked, change the colour of the h2 element to "blue" and change it to read "Updated subheading".

var heading = document.querySelector("h1");
var button = document.querySelector("button");
var buttonColours = document.querySelector (".colours");
var body = document.querySelector ("body");


//console.dir(button);

function changeHeading () {
    heading.innerHTML = "updated heading";
}

button.onclick = changeHeading;

function changeColours() {
    body.style.backroundColor = "orange"
    body.style.color = "green";

}

buttonColours.onclick = changeColours;

