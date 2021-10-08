//grab elements from HTML

let rollButton = document.getElementById("button");

const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const dice3 = document.getElementById("dice3");
const dice4 = document.getElementById("dice4");
const dice5 = document.getElementById("dice5");
const dice6 = document.getElementById("dice6");
const win = document.getElementById("win");
const lose = document.getElementById("lose");

//hide dice images and result until they're needed

dice1.style.display = "none";
dice2.style.display = "none";
dice3.style.display = "none";
dice4.style.display = "none";
dice5.style.display = "none";
dice6.style.display = "none";
win.style.display = "none";
lose.style.display = "none";

//declaring variables of diceroll and total score
let diceRoll = 0;
let total = 0;

//ask JS to listen for mouse clicks on Roll button
rollButton.addEventListener("click", () => {
  diceRoll = Math.floor(Math.random() * 6) + 1;

  if (diceRoll == 1) {
    rollScore.innerHRML = diceRoll;
    oScore.innerHTML = total;
    rollButton.textContent = "Restart";
    lose.style.display = "block";
    total = 0;
  } else {
    lose.style.display = "none";
    total += diceRoll;
    rollButton.textContent = "Roll"; // if dice roll = 1, return "you lose"
  }

  document.getElementById("oScore").innerHTML = total;
  document.getElementById("rollScore").innerHTML = diceRoll;

  if (total >= 21) {
    total = 0;
    rollButton.textContent = "Restart";
    win.style.display = "block";
  } else {
    win.style.display = "none";
   // if player reaches 21 points, they win
  }

  // hide the other 5 dice images when one of them is onscreen
  switch (true) {
    case diceRoll == 1:
      dice1.style.display = "block";
      dice2.style.display = "none";
      dice3.style.display = "none";
      dice4.style.display = "none";
      dice5.style.display = "none";
      dice6.style.display = "none";
      break;

    case diceRoll == 2:
      dice1.style.display = "none";
      dice2.style.display = "block";
      dice3.style.display = "none";
      dice4.style.display = "none";
      dice5.style.display = "none";
      dice6.style.display = "none";
      break;

    case diceRoll == 3:
      dice1.style.display = "none";
      dice2.style.display = "none";
      dice3.style.display = "block";
      dice4.style.display = "none";
      dice5.style.display = "none";
      dice6.style.display = "none";
      break;

    case diceRoll == 4:
      dice1.style.display = "none";
      dice2.style.display = "none";
      dice3.style.display = "none";
      dice4.style.display = "block";
      dice5.style.display = "none";
      dice6.style.display = "none";
      break;

    case diceRoll == 5:
      dice1.style.display = "none";
      dice2.style.display = "none";
      dice3.style.display = "none";
      dice4.style.display = "none";
      dice5.style.display = "block";
      dice6.style.display = "none";
      break;

    case diceRoll == 6:
      dice1.style.display = "none";
      dice2.style.display = "none";
      dice3.style.display = "none";
      dice4.style.display = "none";
      dice5.style.display = "none";
      dice6.style.display = "block";
      break;

    default:
      dice1.style.display = "none";
      dice2.style.display = "none";
      dice3.style.display = "none";
      dice4.style.display = "none";
      dice5.style.display = "none";
      dice6.style.display = "none";
      break;
  }
});
