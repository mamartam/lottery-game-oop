const chartsContainer = document.querySelector(".charts-container");
const startGameBtn = document.querySelector(".start-game-btn");

class Square {
  #isWinning;
  constructor(numb, isWinning) {
    this.#isWinning = isWinning;
    this.numb = numb;
  }
  check() {
    return this.#isWinning;
  }
}

function creatingNewArrayOfDatas() {
  let randomItem = Math.floor(Math.random() * 10);
  const arrayOfSquare = [];
  for (let i = 0; i < 10; i++) {
    if (i === randomItem - 1) {
      arrayOfSquare.push(new Square(i + 1, true));
    } else {
      arrayOfSquare.push(new Square(i + 1, false));
    }
  }
  return arrayOfSquare;
}

let currentArray = [];

function rendering(array) {
  array.forEach((element) => {
    chartsContainer.innerHTML += `<div class="basic chart">${element.numb}</div>`;
  });
}

let arrayOfElements = [];
startGameBtn.addEventListener("click", () => {
  startGameBtn.classList.add("disable");
  currentArray = creatingNewArrayOfDatas();
  rendering(currentArray);
});

let amoutsOfClick = 0;
chartsContainer.addEventListener("click", (el) => {
  if (el.target.classList.contains("chart")) {
    let fff = currentArray.find((item) => {
      return Number(item.numb) === Number(el.target.textContent);
    });
    if (fff.check()) {
      alert("You win");
      amoutsOfClick = 0;
      chartsContainer.innerHTML = "";
      startGameBtn.classList.remove("disable");
    } else {
      alert("Try again");
      amoutsOfClick++;
      el.target.classList.add("wrong");
      el.target.classList.remove("chart");
    }
    if (amoutsOfClick >= 3) {
      amoutsOfClick = 0;
      alert("Game over");
      chartsContainer.innerHTML = "";
      startGameBtn.classList.remove("disable");
    }
  }
});
