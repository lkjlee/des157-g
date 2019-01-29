'use strict';
console.log('reading js');

document.addEventListener('submit', processForm);
document.querySelector('#reset').onclick = resetForm;
// document.getElementById('testImg').src = images/animation.gif;

function processForm() {
  var name = document.getElementById('name').value;
  var verb = document.getElementById('verb').value;
  var adj = document.getElementById('adj').value;
  var noun = document.getElementById('noun').value;
  var creature = document.getElementById('creature').value;
  var place = document.getElementById('place').value;

  var myStory = document.querySelector('#myStory');
  var storySection = document.querySelector("#storySection");


// function showImage(src, width, height, alt){
//   var cave = document.El
// }
// if (place === 'cave'){
//   document.createElement = 'testImg';
// } else (place === 'sea') {
//   testImg.style.none;
// }

// switch (place) {
//    case 'cave':
//      storySection.style.backgroundColor = 'purple';
//      myStory.style.color = 'antiquewhite';
//      break;
//    case 'sea':
//      storySection.style.backgroundColor = 'orange';
//      myStory.style.color = 'black';
//      break;
//    default:
//      storySection.style.backgroundColor = '#333';
//      myStory.style.color = 'antiquewhite';
//  }

  myStory.innerHTML =
    "<p>Long long ago, <em>" + name + "</em> begins their journey in one <em>" +
    adj + " </em>morning, when the <em>" + noun + "</em> came with a big prophecy for them. <em>" + name +
    "</em> had to <em>" + verb + "</em> out of their hometown to go on this adventure in order to save the world from <em>"
    + creature + "</em>. They head towards their destination and instead find an army of tiny <em>" + creature +
    "</em> ! It was revealed that the mastermind was <em>" + noun + "</em> all along and used this prophecy as a ploy! But ultimately <em>" + name + "</em> remained <em>" + adj + "</em> and they <em>"
    + verb + "</em> their fears, saving the world once and for all. With <em>" + noun + "</em> defeated, <em>" + name +
    "</em> made their way home with an adventure that few believed, but people will always remember the whacky story.</p>";

  storySection.className = "show";

  return false;
}


function resetForm() {
  storySection.className = "hide";
}
