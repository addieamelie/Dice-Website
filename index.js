// This project is done using only plan JavaScript

//Step by step way for Image 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //Generate random number from 1 to 6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //string from dice1 to dice6.png

var randomImageSource = "images/" + randomDiceImage; //image source url images/dice1.png etc.

var image1 = document.querySelectorAll("img")[0]; // get first image

image1.setAttribute("src", randomImageSource); // change image source to new random image url

// Quicker way for Image 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
} else {
  document.querySelector("h1").innerHTML = "It's a draw!";
}
