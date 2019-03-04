'use strict';
console.log('reading.js');

var exit = document.querySelector('#exit');
var popUp = document.querySelector('#popUp');
var addNew = document.querySelector('#addNew');

var menu = document.querySelector('#menu');
var name = document.querySelector('#name');
var topNav = document.querySelector('#topNav');

addNew.addEventListener('click', function() {
  exit.style.display = 'block';
  popUp.style.display = 'block';
  exit.className = "show";
  popUp.className = "show";
});

exit.addEventListener('click', function() {
  popUp.style.display = 'none';
  exit.style.display = 'none';
});

// My current progress:
// Working on making menu drop down when "Hello, Name" button is pressed. I want to add an infinite scroll feature, is that something possible with the stuff learned in class?

// name.addEventListener('click', function() {
//   topNav.style.display = 'block';
//   topNav.className = "dropMenu";
// });

// name.addEventListener('mouseOut', function() {
//   topNav.style.display = 'none';
// });
