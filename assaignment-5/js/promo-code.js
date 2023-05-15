function applyPromoCode() {
    const promoCodeBtn = document.getElementById("promo-code-button");
    const inputCode = document.getElementById("input-code");
    const totalPriceElement = document.getElementById("total-price");
    let finalTotal = document.getElementById("total");
    finalTotal.innerText = totalPriceElement.innerText;
    
    promoCodeBtn.addEventListener("click", function() {
      const promoCodeValue = inputCode.value;
    
      if (promoCodeValue === "vit20") {
        const totalPriceValue = parseInt(totalPriceElement.innerText);
        const discount = totalPriceValue * 20 / 100;
        const discountPrice = totalPriceValue - discount;
        
        
        finalTotal.innerText = discountPrice;
     
        inputCode.value = "";
      } 
      // else if(!promoCodeValue) {
      //   alert ("please input a value");
      // }
      // else {
      //   alert("Invalid promo code!");
      //   inputCode.value = "";
      // }
    });  
  }
  
  applyPromoCode();
  