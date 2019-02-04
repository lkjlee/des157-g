console.log('reading.js');

var myBag = document.querySelector('#myBag');
var popOut = document.querySelector('#popOut')
var closeBag = document.querySelector('#closeBag')


myBag.addEventListener('click',function(){
  popOut.style.display='block';
})

closeBag.addEventListener('click', function(){
  popOut.style.display='none';
})
