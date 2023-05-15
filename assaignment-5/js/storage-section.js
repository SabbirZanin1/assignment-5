        // Storage section
        const ssd256 = document.getElementById("256gb-storage-button");
        const ssd512 = document.getElementById("512gb-storage-button");
        const ssd1tb = document.getElementById("1tb-storage-button");
        const storageCost = document.getElementById("storage-cost");
  
        ssd256.addEventListener("click", function () {
          storageCost.innerText = 0;
          calculateTotalPrice();
        });
        ssd512.addEventListener("click", function () {
          storageCost.innerText = 100;
          calculateTotalPrice();
        });
        ssd1tb.addEventListener("click", function () {
          storageCost.innerText = 180;
          calculateTotalPrice();
        });