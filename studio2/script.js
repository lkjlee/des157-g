console.log('reading.js');

var myBag = document.querySelector('#myBag');
var nav = document.querySelector('nav');
var closeBag = document.querySelector('#closeBag');
var driftPhone = document.querySelector('#driftPhone');
var driftGrocery = document.querySelector('#driftGrocery');
var driftAirpods = document.querySelector('#driftAirpods');
var li = document.querySelector('li');


// Fading mouse hover
// li.addEventListener('mouseover',function(){
//   li.style.opacity=1;
// });
//
// li.addEventListener('mouseout',function(){
//   li.style.opacity=.25;
// });


// Image hover glow


// Pop-up bubbles
myBag.addEventListener('click',function(){
  popOut.style.display='block';
  driftPhone.className='phoneMove';
});

closeBag.addEventListener('click', function(){
  popOut.style.display='none';
});
