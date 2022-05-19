const myText = document.querySelector(".letters");
const animationBlock = document.querySelector('.part-1');
const recordBlock = document.querySelector(".part-6");

// intiger to loop over myNewText state
let currentText = 0;

// declare text for nextText()
const myNewText = [
    "Here you can record and store memories about a special person you lost",
    "Not only does this help you save these special memories, it also help others by sharing",
    "John Doe recorded this example for you here. Talking about his memory helped him, and it brought great joy to the mother of his departed friend",
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
    animationBlock.classList.add("animation-class");

    // add to intiger counter
    currentText++;

  }

  function endText(){
    currentText = 3;
    nextText();
    console.log(currentText);
  }

  anime({
    targets: '#cloud1',
    translateY: 7.5,
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate',
    duration: 1000,
  });
  anime({
    targets: '#cloud2',
    translateY: 6,
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate',
    duration: 1200,
  });
  anime({
    targets: '#cloud3',
    translateY: 7.5,
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate',
    duration: 1040,
  });
  