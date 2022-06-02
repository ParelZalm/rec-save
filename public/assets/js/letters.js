const myText = document.querySelector(".letters");
const myImg = document.querySelector(".images-wrapper")
const myBtn = document.querySelector('.conversation-buttons')
const animationBlock = document.querySelector('.part-1');
const recordBlock = document.querySelector(".part-6");
const animeBg = document.querySelector('.bg-class');
const selectHTML = document.querySelector('.innerSelectedHtml');
let currentbgsize = 0;

// intiger to loop over myNewText state
let currentText = 0;

// declare text for nextText()
const myNewText = [
    "Save those precious stories about a loved one. Hover the clouds to hear what people have shared <audio id='mySound' src='http://upload.wikimedia.org/wikipedia/commons/6/6f/Cello_Live_Performance_John_Michel_Tchaikovsky_Violin_Concerto_3rd_MVT_applaused_cut.ogg'/>",
    // "What kind of story would you save for eternity: <input placeholder=\"Holiday\" type=\"text\" class=\"inputtext\" name=\"fname\" autofocus />",
    "What Theme would fit your story? <select class=\"selectpicker\" onchange=\"inputvReadValue()\" data-size=\"4\"><option value=\"\">Select Theme</option><option value=\"Night Out\">Night out</option><option value=\"Sports\">Sports</option><option value=\"Holiday\">Holiday</option><option value=\"Event\">Event</option><option value=\"Else\">Something Else</option></select>",
    "<h2>Perhaps another step explaining or asking something for engagement?</h2>",
    ]

// declare images for nextText()
const myNewImages = [
  "<img src = \"images/soccer.svg\" alt=\"playcloud\" class=\"clouds-bottom\" id=\"soccer\" onmouseover=\"PlaySound('mySound')\" onmouseout=\"StopSound('mySound')\"/><img src = \"images/couch.svg\" alt=\"playcloud\" class=\"clouds-bottom\" id=\"couch\"/><img src = \"images/love.svg\" alt=\"playcloud\" class=\"clouds-bottom\" id=\"love\"/>",
  "<img src = \"images/walk.svg\" alt=\"playcloud\" class=\"clouds-bottom\" id=\"walk\" style=\"transform: translateY(500px);\"/>",

]

// declare buttons for nextText()
const myNewButtons = [
  "<button class=\"nostyle-button nextb mt-3\" onClick=\"nextText()\">Next</button>",
  "<button class=\"nostyle-button nextb mt-3\" onClick=\"nextText()\">Save</button><button class=\"nostyle-button skipb mt-3\" onClick=\"nextText()\">Back</button>",
  "<button class=\"nostyle-button nextb mt-3\" onClick=\"nextText()\">Next</button>",

]

function inputvReadValue(){
let selectedVal = document.querySelector("select").value;
console.log(selectedVal);
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

    if (currentText == 1){
      soccerImg = document.querySelector('#soccer');
    }

    if (currentText == 2) {
      cloudMove();
      walkingMove();
    }
    if (currentText == 3){
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
    translateZ: -50,
    loop: false,
    easing: 'easeInOutSine',
    direction: 'alternate',
    delay: 1000,
    duration: 1000,
  });
}

function PlaySound(soundobj) {
  let thissound = document.getElementById(soundobj);
  thissound.play();
}

function StopSound(soundobj) {
  let thissound = document.getElementById(soundobj);
  thissound.pause();
  thissound.currentTime = 0;
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


 