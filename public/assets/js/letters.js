const myText = document.querySelector(".letters");
const myImg = document.querySelector(".images-wrapper")
const animationBlock = document.querySelector('.part-1');
const recordBlock = document.querySelector(".part-6");

// intiger to loop over myNewText state
let currentText = 0;

// declare text for nextText()
const myNewText = [
    "Here you can record and store memories about a special person you lost",
    "<h2>Talking about the past helps you and gives others the chance to see new perspectives</h2>",
    "<h2>John Doe recorded this example for you here. Talking about his memory helped him, and it brought great joy to the mother of his departed friend</h2>",
    ]

// declare images for nextText()
const myNewImages = [
  "<img src = \"images/cloud1.svg\" alt=\"playcloud\" class=\"clouds-top\" id=\"cloud1\"/><img src = \"images/cloud2.svg\" alt=\"playcloud\" class=\"clouds-top\" id=\"cloud2\"/><img src = \"images/cloud3.svg\" alt=\"playcloud\" class=\"clouds-top\" id=\"cloud3\"/><img src = \"images/thinking.svg\" alt=\"playcloud\" class=\"clouds-top\" id=\"thinking\"/>",
  // "<img src = \"images/climber.svg\" alt=\"playcloud\" class=\"clouds-bottom\" id=\"climber\"/>",
]

// timeout function
function resolveAftersec() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 250);
    });
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


 