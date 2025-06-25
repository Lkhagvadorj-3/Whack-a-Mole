const strt = document.getElementById("start-button");
let onoo = document.querySelector("#onoo");
let timeLeft = 30;
let timeInterval = null;
let gameInterval = null;
let prevholeid = null;

function start() {
  const game = document.getElementById("game-container");

  for (let i = 0; i < 9; i++) {
    const hole = document.createElement("div");
    game.appendChild(hole);
    hole.id = i.toString();

    const mole = document.createElement("div");
    hole.appendChild(mole);
    mole.style.display = "none";

    hole.classList.add("hole");
    mole.classList.add("mole");
    mole.addEventListener("click", function () {
      onoo.innerText = Number(onoo.innerText) + 1;
    });
    mole.addEventListener("click", function () {
      mole.style.display = "none";
    });
  }
}
function rndmole() {
  if (prevholeid !== null) {
    const prevhole = document.getElementById(prevholeid);
    prevhole.querySelector(".mole").style.display = "none";
  }

  const currenHoleIndex = Math.floor(Math.random() * 9);
  const currenHole = document.getElementById(currenHoleIndex.toString());
  currenHole.querySelector(".mole").style.display = "block";
  prevholeid = currenHoleIndex;
}
function countdown() {
  timeLeft = timeLeft - 1;
  let time = document.getElementById("guch");
  time.innerHTML = `${timeLeft} sec`;
  if (timeLeft <= 0) {
    clearInterval(gameInterval);
    clearInterval(timeInterval);
  }
}
function restartGame() {
  for (let i = 0; i < 9; i++) {
    const mole = document.getElementById(i).querySelector(".mole");
    mole.style.display = "none";
  }

  clearInterval(gameInterval);
  clearInterval(timeInterval);
  const tsag = document.getElementById("guch");
  tsag.innerText = `30 sec`;
  let onoo = document.getElementById("onoo");
  onoo.innerText = 0;
  timeLeft = 30;
}

strt.addEventListener("click", function () {
  restartGame();
  rndmole();
  gameInterval = setInterval(rndmole, 800);
  timeInterval = setInterval(countdown, 1000);
});

window.onload = start;
