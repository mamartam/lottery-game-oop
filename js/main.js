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
const arrayOfSquare = [
  new Square(1, true),
  new Square(2, false),
  new Square(3, false),
  new Square(4, false),
  new Square(5, false),
  new Square(6, false),
  new Square(7, false),
  new Square(8, false),
  new Square(9, false),
  new Square(10, false),
];

function rendering(array) {
  array.forEach((element) => {
    chartsContainer.innerHTML += `<div class="basic chart">${element.numb}</div>`;
  });
}
rendering(arrayOfSquare);

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
      el.target.classList.add("wrong");
      el.target.classList.remove("chart");
    }
  }
});
