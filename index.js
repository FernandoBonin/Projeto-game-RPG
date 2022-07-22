"use strict";
const dice = document.getElementById("rollDice");
const gifDice = document.getElementById("gifDice");

dice.addEventListener("click", rollDice);

function rollDice() {
  const randomNumber = Math.floor(Math.random() * 6 + 1);
  let diceSide = document.getElementById("dice" + randomNumber);
  let classDice = document.querySelectorAll(".alignImg");

  gifDice.removeAttribute("hidden");

  for (let i = 0; i < classDice.length; i++) {
    classDice[i].setAttribute("hidden", "hidden");
  }

  setTimeout(() => {
    gifDice.setAttribute("hidden", "hidden");
    diceSide.classList.add("animationDice");
    diceSide.removeAttribute("hidden");
  }, 800);
}
