// Memory section
const ram8Gb = document.getElementById("8gb-memory-button");
const ram16Gb = document.getElementById("16gb-memory-button");
const memoryCost = document.getElementById("memory-cost");

ram16Gb.addEventListener("click", function () {
  memoryCost.innerText = 180;
  calculateTotalPrice();
});
ram8Gb.addEventListener("click", function () {
  memoryCost.innerText = 0;
  calculateTotalPrice();
});