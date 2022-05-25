const myText = document.querySelector(".letters");
const myImg = document.querySelector(".images-wrapper")
const myBtn = document.querySelector('.conversation-buttons')
const animationBlock = document.querySelector('.part-1');
const recordBlock = document.querySelector(".part-6");

// intiger to loop over myNewText state
let currentText = 0;

// declare text for nextText()
const myNewText = [
    "Add your memories to the cloud and help save them for eternity",
    "<h2>(episodic memory) Tennis, Dinner or that one vacation where you guys got a bit too drunk?</h2>",
    "<h2>John Doe recorded this example for you here. Talking about his memory helped him, and it brought great joy to the mother of his departed friend</h2>",
    ]

// declare images for nextText()
const myNewImages = [
  // "<img src = \"images/climber.svg\" alt=\"playcloud\" class=\"clouds-bottom\" id=\"climber\"/>",
  // "<img src = \"images/climber.svg\" alt=\"playcloud\" class=\"clouds-bottom\" id=\"climber\"/>",

]

// declare buttons for nextText()
const myNewButtons = [
  "<button class=\"nostyle-button nextb mt-3\" onClick=\"nextText()\">More</button><button class=\"nostyle-button skipb mt-3\" onClick=\"nextText()\">start recording</button>",
  "<button class=\"nostyle-button nextb mt-3\" onClick=\"nextText()\">Yes</button><button class=\"nostyle-button skipb mt-3\" onClick=\"nextText()\">No</button>",

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


 