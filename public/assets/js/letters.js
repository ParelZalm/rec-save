
// let textanimation = anime.timeline({
//     loop: false,
// });
//     textanimation
//   .add({
//     targets: '.ml11 .line',
//     scaleY: [0,1],
//     opacity: [0.5,1],
//     easing: "easeOutExpo",
//     duration: 700
//   })
//   .add({
//     targets: '.ml11 .line',
//     translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
//     easing: "easeOutExpo",
//     duration: 700,
//     delay: 100
//   }).add({
//     targets: '.ml11 .letter',
//     opacity: [0,1],
//     easing: "easeOutExpo",
//     duration: 600,
//     offset: '-=775',
//     delay: (el, i) => 34 * (i+1)
//   }).add({
//     targets: '.ml11',
//     opacity: 1,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });

let myNewText = [
    "Here you can record and store stories about the person you lost",
    "A beautifull way to remember, and share, with those that want to",
    "Funny, emotional and everything inbetween, don't be afraid to share",
    ]

let  currentText = 0;
let myText = document.querySelector(".letters");
let animationBlock = document.querySelector('.part-1');
let recordBlock = document.querySelector(".part-6");

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
        const result = await resolveAftersec();
        // recordBlock.classlist.add("animation-class");
        return;
    }
    // add array data for each step + add-remove animation
    animationBlock.classList.remove("animation-class");
    const result = await resolveAftersec();
    myText.innerHTML = myNewText[currentText];
    animationBlock.classList.add("animation-class");
    // count array innerhtml
    if (currentText < myNewText.length || currentText == myNewText.length){
    currentText++;
    }
  }
  