// Delivery section
const freeDelevary = document.getElementById("free-delivery-button");
const paidDelevary = document.getElementById("paid-delivery-button");
const deliveryCost = document.getElementById("delivery-cost");
freeDelevary.addEventListener("click", function () {
  deliveryCost.innerText = 0;
  calculateTotalPrice();
});
paidDelevary.addEventListener("click", function () {
  deliveryCost.innerText = 20;
  calculateTotalPrice();
});