console.log('reading.js');

var myBag = document.querySelector('#myBag');
var nav = document.querySelector('nav');
var closeBag = document.querySelector('#closeBag');
// var driftPhone = document.querySelector('#driftPhone');
var driftGrocery = document.querySelector('#driftGrocery');
var driftAirpods = document.querySelector('#driftAirpods');
var objects = document.querySelector('objects');
var phoneGlow =document.getElementById('phoneGlow');
var earphonesGlow = document.getElementById('eGlow');
var groceryGlow = document.getElementById('gGlow');
var bagGlow = document.getElementById('bagGlow');
// Fading mouse hover
// li.addEventListener('mouseover',function(){
//   li.style.opacity=1;
// });
//
// li.addEventListener('mouseout',function(){
//   li.style.opacity=.25;
// });


// Image hover glow-image swap (need to adjust image sizing in photoshop)
phoneGlow.addEventListener('mouseover', function() {
  phoneGlow.style.opacity=1;
  phoneGlow.src='images/phoneglow.png';
});

phoneGlow.addEventListener('mouseout', function() {
  phoneGlow.style.opacity=.5;
  phoneGlow.src='images/phone.png';
});

earphonesGlow.addEventListener('mouseover', function() {
  earphonesGlow.style.opacity=1;
  earphonesGlow.src='images/earphonesglow.png';
});

earphonesGlow.addEventListener('mouseout', function() {
  earphonesGlow.style.opacity=.5;
  earphonesGlow.src='images/earphones.png';
});

groceryGlow.addEventListener('mouseover', function() {
  groceryGlow.style.opacity=1;
  groceryGlow.src='images/groceryGlow.png';
});

groceryGlow.addEventListener('mouseout', function() {
  groceryGlow.style.opacity=.5;
  groceryGlow.src='images/groceryGlow.png';
});

bagGlow.addEventListener('mouseover', function() {
  // bagHover.style.opacity=.5;
  bagGlow.src='images/bagGlow.png';
});

bagGlow.addEventListener('mouseout', function() {
  // bagHover.style.opacity=.5;
  bagGlow.src='images/bag.png';
});

// Pop-up bubbles
bagGlow.addEventListener('click',function(){
  popOut.style.display='block';
  // bagGlow.src='images/bagGlow.png';
// objects.innerHTML = "Phone";
  // driftPhone.className='phoneMove';
});

closeBag.addEventListener('click', function(){
  popOut.style.display='none';
});
