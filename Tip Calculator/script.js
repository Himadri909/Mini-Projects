let count = 0;
let countDisplay = document.getElementById("countDisplay");
let decreasebtn = document.getElementById("decrease");
let increasebtn = document.getElementById("increase");
let resetbtn = document.getElementById("reset");

decreasebtn.addEventListener("click", () => {
  count--;
  updateDisplay();
});

increasebtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

resetbtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});

function updateDisplay() {
  countDisplay.textContent = count;
}
