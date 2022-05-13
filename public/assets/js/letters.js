
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

function resolveAftersec() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 250);
    });
  }


async function nextText(){
    // for(let i = 0; i < myNewText.lenght; i++){
    //     if (nextText === 1){
    //         console.log("yes");
    //     }
        
    // }
    if (currentText == myNewText.length)
    {
        console.log("the - end")
        console.log(currentText);
        return;
    }

    animationBlock.classList.remove("animation-class");
    const result = await resolveAftersec();
    myText.innerHTML = myNewText[currentText];
    animationBlock.classList.add("animation-class");

    if (currentText < myNewText.length || currentText == myNewText.length){
    currentText++;
    
    }
  }
  