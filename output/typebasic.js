"use strict";
let playerName = "Player1";
console.log("Welcome to the game, " + playerName + "!");
playerName = 2; // type error: playerName should be a string
console.log("Now the player is: " + playerName);
let playerScore;
playerScore = '111';
playerScore = 222;
console.log("Player score is: " + playerScore); // type any, can be reassigned to different types
// function
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, "3")); // implicit type conversion
// array
let players = ['John', 'Khai', 'Doe'];
players.push(123); // type error: players should be an array of strings
// object
let person = {
    name: 'Alice',
    age: 30,
    isDead: false
};
person.isDead = 1; // type error: isDead should be a boolean
