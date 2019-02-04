console.log('reading.js');

var myBag = document.querySelector('#myBag');
var nav = document.querySelector('nav');
var closeBag = document.querySelector('#closeBag');
var driftPhone = document.querySelector('#driftPhone');
var driftGrocery = document.querySelector('#driftGrocery');
var driftAirpods = document.querySelector('#driftAirpods');
var ul = document.querySelector('ul');


// Fading mouse hover
ul.addEventListener('mouseover',function(){
  ul.style.opacity=1;
});

ul.addEventListener('mouseout',function(){
  ul.style.opacity=.25;
});

// Pop-up bubbles
myBag.addEventListener('click',function(){
  popOut.style.display='block';
  driftPhone.className='phoneMove';
});

closeBag.addEventListener('click', function(){
  popOut.style.display='none';
});
