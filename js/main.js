const chartsContainer = document.querySelector(".charts-container");

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
let randomItem = Math.floor(Math.random() * 10);
const arrayOfSquare = [];
for (let i = 0; i < 10; i++) {
  if (i === randomItem - 1) {
    arrayOfSquare.push(new Square(i + 1, true));
  } else {
    arrayOfSquare.push(new Square(i + 1, false));
  }
}

function rendering(array) {
  array.forEach((element) => {
    chartsContainer.innerHTML += `<div class="basic chart">${element.numb}</div>`;
  });
}
rendering(arrayOfSquare);

let amoutsOfClick = 0;
chartsContainer.addEventListener("click", (el) => {
  if (el.target.classList.contains("chart")) {
    let fff = arrayOfSquare.find((item) => {
      return Number(item.numb) === Number(el.target.textContent);
    });
    if (fff.check()) {
      alert("You win");
      chartsContainer.innerHTML = "";
    } else {
      alert("Try again");
      amoutsOfClick++;
      el.target.classList.add("wrong");
      el.target.classList.remove("chart");
    }
    if (amoutsOfClick >= 3) {
      alert("Game over");
      chartsContainer.innerHTML = "";
    }
  }
});
