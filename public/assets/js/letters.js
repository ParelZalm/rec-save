const myText = document.querySelector(".letters");
const myImg = document.querySelector(".images-wrapper")
const myBtn = document.querySelector('.conversation-buttons')
const animationBlock = document.querySelector('.part-1');
const recordBlock = document.querySelector(".part-6");
const animeBg = document.querySelector('.bg-class');
let currentbgsize = 0;

// intiger to loop over myNewText state
let currentText = 0;

// declare text for nextText()
const myNewText = [
    "Hover the clouds to hear what people have shared",
    "What kind of story would you save for eternity: <input placeholder=\"Holiday\" type=\"text\" name=\"fname\" autofocus />",
    "<h2>John Doe recorded this example for you here. Talking about his memory helped him, and it brought great joy to the mother of his departed friend</h2>",
    ]

// declare images for nextText()
const myNewImages = [
  "<  <img src = \"images/soccer.svg\" alt=\"playcloud\" class=\"clouds-bottom\" id=\"soccer\"/><img src = \"images/couch.svg\" alt=\"playcloud\" class=\"clouds-bottom\" id=\"couch\"/><img src = \"images/love.svg\" alt=\"playcloud\" class=\"clouds-bottom\" id=\"love\"/>",
  "<img src = \"images/walk.svg\" alt=\"playcloud\" class=\"clouds-bottom\" id=\"walk\"/>",

]

// declare buttons for nextText()
const myNewButtons = [
  "<button class=\"nostyle-button nextb mt-3\" onClick=\"nextText()\">Next</button>",
  "<button class=\"nostyle-button nextb mt-3\" onClick=\"nextText()\">Save</button><button class=\"nostyle-button skipb mt-3\" onClick=\"nextText()\">Back</button>",

]

// timeout function
function resolveAftersec() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 250);
    });
  }

function goToRecord(){
  // set intiger to end
  currentText = myNewText.length;
  // set display to record block
  animationBlock.style.display = "none";
  recordBlock.style.display = "block";

}

async function nextText(){
  // if all text has been shown return 
    if (currentText == myNewText.length)
    {
        console.log("the - end")
        animationBlock.style.display = "none";
        recordBlock.style.display = "block";
        await resolveAftersec();
        // recordBlock.classlist.add("animation-class");
        return;
    }
    currentbgsize += 100;
    // add array data for each step + add-remove animation in & out
    animationBlock.classList.add("animation-class-outro");
    await resolveAftersec();
    animationBlock.classList.remove("animation-class");
    await resolveAftersec();
    animationBlock.classList.remove('animation-class-outro');
    myText.innerHTML = myNewText[currentText];
    myImg.innerHTML = myNewImages[currentText];
    myBtn.innerHTML = myNewButtons[currentText];
    // momanimation();
    animationBlock.classList.add("animation-class");

    // add to intiger counter
    currentText++;

    // use currenttext as intiger for bg top styling 
    animeBg.style.top = -currentText*1000 + 'px';

  }

//   function endText(){
//     currentText = 3;
//     nextText();
//     console.log(currentText);
//   }
// function momanimation(){
//   anime({
//     targets: '#cloud1',
//     translateY: 7.5,
//     loop: true,
//     easing: 'easeInOutSine',
//     direction: 'alternate',
//     duration: 1000,
//   });
//   anime({
//     targets: '#cloud2',
//     translateY: 6,
//     loop: true,
//     easing: 'easeInOutSine',
//     direction: 'alternate',
//     duration: 1200,
//   });
//   anime({
//     targets: '#cloud3',
//     translateY: 7.5,
//     loop: true,
//     easing: 'easeInOutSine',
//     direction: 'alternate',
//     duration: 1040,
//   });
// }

  // anime({
  //   targets: ['#c1', '#c3', '#c5',],
  //   translateX: 2000,
  //   loop: true,
  //   easing: 'linear',
  //   duration: 100000,
  // });
  // anime({
  //   targets: ['#c2', '#c4', '#c6'],
  //   translateX: 2000,
  //   loop: true,
  //   easing: 'linear',
  //   duration: 70000,
  // });


 