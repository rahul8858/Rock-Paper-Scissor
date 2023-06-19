"use strict";

const rules = document.querySelector("#rules");
const rulesModal = document.querySelector("#rules-modal");
const close = document.querySelector("#close");
const options = document.querySelector("#choices");
const picked = document.querySelector("#picked");
const message = document.querySelector("#message");
const playAgainBtn = document.querySelector("#play-again");
const userPicked = document.querySelector("#user-picked");
const computerPicked = document.querySelector("#house-picked");
const wins = document.querySelector("#wins");
const choices = Array.from(options.firstElementChild.children);

let score = 0;
let clickSound = "click.mp3";

function whoWins(userChoice, computerChoice) {
  let result = "";
  if (userChoice === 0) {
    if (userChoice === computerChoice) {
      result = "DRAW";
    } else if (computerChoice === 4 || computerChoice === 3) {
      result = "WIN";
      score++;
    } else {
      result = "LOSE";
    }
  } else if (userChoice === 4) {
    if (userChoice === computerChoice) {
      result = "DRAW";
    } else if (computerChoice === 2 || computerChoice === 1) {
      result = "WIN";
      score++;
    } else {
      result = "LOSE";
    }
  } else if (userChoice === 2) {
    if (userChoice === computerChoice) {
      result = "DRAW";
    } else if (computerChoice === 1 || computerChoice === 3) {
      result = "WIN";
      score++;
    } else {
      result = "LOSE";
    }
  } else if (userChoice === 1) {
    if (userChoice === computerChoice) {
      result = "DRAW";
    } else if (computerChoice === 1 || computerChoice === 3) {
      result = "WIN";
      score++;
    } else {
      result = "LOSE";
    }
  } else {
    if (userChoice === computerChoice) {
      result = "DRAW";
    } else if (computerChoice === 4 || computerChoice === 1) {
      result = "WIN";
      score++;
    } else {
      result = "LOSE";
    }
  }
  return result;
}

function chosen(option) {
  let pick = "";
  switch (option) {
    case 0:
      pick = "scissors";
      break;
    case 1:
      pick = "spock";
      break;
    case 2:
      pick = "lizard";
      break;
    case 3:
      pick = "rock";
      break;
    default:
      pick = "paper";
      break;
  }
  return pick;
}

function playClick() {
  new Audio(clickSound).play();
}

choices.forEach((option) => {
  option.addEventListener("click", () => {
    playClick();

    options.style.display = "none";
    picked.style.display = "block";

    userPicked.lastElementChild.className =
      computerPicked.lastElementChild.className =
        "bg-slate-100 h-[150px] w-[150px] rounded-[75px] md:h-[200px] md:w-[200px] md:rounded-[100px] p-4 flex items-center justify-center";

    let userChoice = chosen(Number(option.id));
    userPicked.lastElementChild.innerHTML = `<img src="./images/icon-${userChoice}.svg"/>`;
    userPicked.lastElementChild.classList.add(userChoice);

    let computerOption = Math.floor(Math.random() * 5);
    let computerChoice = chosen(computerOption);
    computerPicked.lastElementChild.innerHTML = `<img src="./images/icon-${computerChoice}.svg"/>`;
    computerPicked.lastElementChild.classList.add(computerChoice);

    message.innerText = `YOU ${whoWins(option.id, computerOption)}`;
    message.style.display = "block";
    wins.innerText = score;
  });
});

rules.addEventListener("click", () => {
  playClick();
  rulesModal.classList.remove("hidden");
});

close.addEventListener("click", () => {
  playClick();
  rulesModal.classList.add("hidden");
});

playAgainBtn.addEventListener("click", () => {
  playClick();
  picked.style.display = "none";
  options.style.display = "block";
});
