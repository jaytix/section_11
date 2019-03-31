let secretNumber = 4;

let guess = prompt("Guess");

if (Number(guess) === secretNumber) {
  alert("you guessed right");
} else if (Number(guess) > secretNumber) {
  alert("Your answer is too high");
} else if (Number(guess) < secretNumber) {
  alert("your answer is too low");
} else {
  alert("That is not a number");
}
