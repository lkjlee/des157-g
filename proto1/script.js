'use strict';
console.log('reading.js');

var exit = document.querySelector('#exit');
var popUp = document.querySelector('#popUp');
var addNew = document.querySelector('#addNew');

var topNav = document.querySelector('#topNav');
var name = document.querySelector('#name');
var menu = document.querySelector('#menu');

var dateControl = document.querySelector('#date');
dateControl.value = '2019-01-01';

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


  
