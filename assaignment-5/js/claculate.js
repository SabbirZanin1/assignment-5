function calculateTotalPrice() {
    const memoryCost = document.getElementById("memory-cost").innerText;
  //   console.log(memoryCost);
    const storageCost = document.getElementById("storage-cost").innerText;
    const deliveryCost = document.getElementById("delivery-cost").innerText;
    const basePrice = document.getElementById("best-price-cost").innerText;
    
    const totalPrice = parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost) + parseInt(basePrice);
    
    document.getElementById("total-price").innerText = totalPrice;
  
    applyPromoCode();
  }