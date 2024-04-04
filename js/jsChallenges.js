// Challenge 1 Part 1
document.querySelector("#subscribe").addEventListener("click", function() {
    if (this.checked){
        document.querySelector("#emailDiv").style.display="block"
    }
    else {
        document.querySelector("#emailDiv").style.display="none"
    }
});

// Challenge 1 Part 2
document.addEventListener("click", function() {
    let currentTime = new Date();
    alert("Current time: " + currentTime);
});


// Challenge 2
document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.getElementById('sameAddress');
    var homeAddress = document.getElementById('home');
    var billingAddress = document.getElementById('bill');

    checkbox.addEventListener('change', function() {
      if (this.checked) {
        homeAddress.value = billingAddress.value;
        homeAddress.disabled = true;
      } else {
        homeAddress.disabled = false;
      }
    });
  });

// Challenge 3
document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.getElementById('sameAddress');
    var homeAddress = document.getElementById('home');
    var billingAddress = document.getElementById('bill');
    var homeCity = document.getElementById('homeCity');
    var billingCity = document.getElementById('billCity');

    checkbox.addEventListener('change', function() {
      if (this.checked) {
        homeAddress.value = billingAddress.value;
        homeAddress.disabled = true;
        homeCity.value = billingCity.value;
        homeCity.disabled = true;
      } else {
        homeAddress.disabled = false;
        homeCity.disabled = false;
      }
    });
  });
