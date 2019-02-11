'use strict';
console.log('reading.js');

var myBag = document.querySelector('#myBag');
var closeBag = document.querySelector('#closeBag');
var phoneGlow = document.getElementById('phoneGlow');
var earphonesGlow = document.getElementById('eGlow');
var groceryGlow = document.getElementById('gGlow');
var phoneText = document.querySelector('#phoneText');
var earphonesText = document.querySelector('#earphonesText');
var groceryText = document.querySelector('#groceryText');


// Image hover glow-image swap (need to adjust image sizing in photoshop)
phoneGlow.addEventListener('mouseover', function() {
  phoneGlow.style.opacity = 1;
  phoneGlow.src = 'images/phoneglow.png';
  phoneText.innerHTML =
    "<p>*Android Phone*<br> Call all up your friends to go, and a way of getting a ride home. Also kills boredom!</p>";
  phoneText.className = "showP";
});

phoneGlow.addEventListener('mouseout', function() {
  phoneGlow.style.opacity = .5;
  phoneGlow.src = 'images/phone.png';
  phoneText.className = "hideP";

});

earphonesGlow.addEventListener('mouseover', function() {
  earphonesGlow.style.opacity = 1;
  earphonesGlow.src = 'images/earphonesglow.png';
  earphonesText.innerHTML =
    "<p>*Earphones*<br>Listen to music while on the road, or just want some more noise.</p>";
  earphonesText.className = "showE";
});

earphonesGlow.addEventListener('mouseout', function() {
  earphonesGlow.style.opacity = .5;
  earphonesGlow.src = 'images/earphones.png';
  earphonesText.className = "hideE";
});

groceryGlow.addEventListener('mouseover', function() {
  groceryGlow.style.opacity = 1;
  groceryGlow.src = 'images/groceryglow.png';
  groceryText.innerHTML =
    "<p>*Grocery Bag*<br>Use a reusable bag for shopping to help add less waste into the environment and save on buying bags.</p>";
  groceryText.className = "showG";
});

groceryGlow.addEventListener('mouseout', function() {
  groceryGlow.style.opacity = .5;
  groceryGlow.src = 'images/grocery.png';
  groceryText.className = "hideG";

});

// Pop-up bubbles
myBag.addEventListener('click', function() {
  myBag.src = 'images/bagOpen.png';
  popOut.style.display = 'block';

});

closeBag.addEventListener('click', function() {
  myBag.src = 'images/bag.png';
  popOut.style.display = 'none';
});
