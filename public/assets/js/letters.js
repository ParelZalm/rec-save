const myText = document.querySelector(".letters");
const myImg = document.querySelector(".images-wrapper")
const myBtn = document.querySelector('.conversation-buttons')
const animationBlock = document.querySelector('.part-1');
const recordBlock = document.querySelector(".part-6");
const animeBg = document.querySelector('.bg-class');
const selectHTML = document.querySelector('.innerSelectedHtml');
const grayThis = document.querySelector('.gray-out');
const centerDiv = document.querySelector('.center-div');
let selectedVal;


// intiger to loop over myNewText state
let currentText = -1;


// 
// declare text for nextText()
const myNewText = [
    "Preserve your memories of loved ones in an NFT so that they can be cherished forever. Ready to start recording?",
    "Let's consider a theme before we begin. <select class=\"selectpicker\" onchange=\"inputvReadValue()\" data-size=\"4\"><option value=\"\">Select Theme</option><option value=\"Friendship\">Friendship</option><option value=\"Family\">Family</option><option value=\"Career\">Career</option><option value=\"Legacy\">Legacy</option><option value=\"Else\">Something Else</option></select>",
    "These are a few samples that our users have submitted. To begin listening, simply hover your cursor over one of the images. <audio id='mySound' src='../examples/m1.mp3'/>",
    "Are you ready to record your own memory?",
]

// declare images for nextText()
const myNewImages = [
  "",
  "",
  "<img src = \"images/soccer.svg\" alt=\"playcloud\" class=\"clouds-bottom\" id=\"soccer\" onmouseover=\"PlaySound('mySound')\" onmouseout=\"StopSound('mySound')\"/><img src = \"images/couch.svg\" alt=\"playcloud\" class=\"clouds-bottom\" id=\"couch\"/><img src = \"images/love.svg\" alt=\"playcloud\" class=\"clouds-bottom\" id=\"love\"/>",
  "<img src = \"images/friendship.svg\" alt=\"playcloud\" class=\"clouds-bottom\" id=\"walk\" style=\"transform: translateY(500px);\"/>",
  "<img src = \"images/record-guy.svg\" alt=\"playcloud\" class=\"clouds-bottom\" id=\"record-guy\" style=\"transform: translateY(500px);\"/>",

]

// declare buttons for nextText()
const myNewButtons = [
  "<button class=\"nostyle-button nextb mt-3\" onClick=\"nextText(1)\">Yes</button><button class=\"nostyle-button skipb mt-3 mx-2\" onClick=\"nextText(0)\">Not yet</button>",
  "<button class=\"nostyle-button nextb mt-3\" onClick=\"nextText(1)\">Save</button><button class=\"nostyle-button skipb mt-3\" onClick=\"nextText(0)\">Back</button>",
  "<button class=\"nostyle-button nextb mt-3\" onClick=\"nextText(1)\">Next</button><button class=\"nostyle-button skipb mt-3\" onClick=\"nextText(0)\">More</button>",
  "<button class=\"nostyle-button nextb mt-3\" onClick=\"nextText(1)\">Yes</button><button class=\"nostyle-button skipb mt-3\" onClick=\"nextText(0)\">Not yet</button>",

]

// document and save selet value for later use in goToRecord()
function inputvReadValue(){
selectedVal = document.querySelector("select").value;
selectHTML.innerHTML = selectedVal;
}


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

async function nextText(x){
  // if all text has been shown return 
    if (currentText == myNewText.length)
    {
        console.log("the - end")
        removeWalkingMove();
        await resolveAftersec();
        await resolveAftersec();
        await resolveAftersec();
        animationBlock.style.display = "none";
        recordBlock.style.display = "block";
        myImg.innerHTML = myNewImages[currentText];
        await resolveAftersec();
        return;
    }
    // add array data for each step + add-remove animation in & out
    animationBlock.classList.add("animation-class-outro");
    await resolveAftersec();
    animationBlock.classList.remove("animation-class");
    await resolveAftersec();
    animationBlock.classList.remove('animation-class-outro');
    // momanimation();
    animationBlock.classList.add("animation-class");

             // add to intiger counter
            if (x == 1){
              currentText++;
              console.log('plus 1');
            }
            if (x == 0 && currentText == 0){
              // if currentext is 0 return original innerhtml
              currentText--;
              myText.innerHTML = "Welcome to the Cloud Full of Memories. A blockchain platform for storing memories of loved ones.";
              myBtn.innerHTML = "<button class=\"nostyle-button nextb mt-3\" onClick=\"nextText(1)\">Enter</button> "
              return;
            }
            if (x == 0 && currentText != 0){
              currentText--;
              console.log('minus 1');
            }
            
            console.log(currentText);
            // change innerhtml based on currentext int
            myText.innerHTML = myNewText[currentText];
            myImg.innerHTML = myNewImages[currentText];
            myBtn.innerHTML = myNewButtons[currentText];

    // set images based on current text
    if (currentText == 1){
      soccerImg = document.querySelector('#soccer');
      loveImg = document.querySelector('#love');
      couchImg = document.querySelector('#couch');
      console.log(animeBg.style.top);
      // use currenttext as intiger for bg top styling 
      animeBg.style.top = -currentText*1000 + 'px';
    }
    if (currentText == 2) {
      animeBg.style.top = -currentText*1000 + 'px';
    }
    if (currentText == 3) {

    }
    if (currentText == 4){
      cloudMove();
      walkingMove();
      animeBg.style.top = '-3100px';
    }
  }

  function cloudMove(){
  anime({
    targets: '.cloud-container',
    translateY: -625,
    loop: false,
    easing: 'easeInOutSine',
    direction: 'alternate',
    duration: 1000,
  });
};

function walkingMove(){
  anime({
    targets: '#walk',
    translateY: -50,
    loop: false,
    easing: 'easeInOutSine',
    direction: 'alternate',
    delay: 1000,
    duration: 1000,
  });
};

function removeWalkingMove(){
  anime({
    targets: '#walk',
    translateY: 300,
    loop: false,
    easing: 'easeInOutSine',
    direction: 'alternate',
    delay: 0,
    duration: 500,
  });
}

function PlaySound(soundobj) {
  let thissound = document.getElementById(soundobj);
  thissound.play();
  grayThis.classList.add('smooth-gray');
  centerDiv.style = 'opacity: 0;';
}

function StopSound(soundobj) {
  let thissound = document.getElementById(soundobj);
  thissound.pause();
  grayThis.classList.remove('smooth-gray');
  centerDiv.style = 'opacity: 1;';
  // thissound.currentTime = 0;
}

//   function endText(){
//     currentText = 3;
//     nextText();
//     console.log(currentText);
//   }

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


 