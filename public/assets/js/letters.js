const myText = document.querySelector(".letters");
const animationBlock = document.querySelector('.part-1');
const recordBlock = document.querySelector(".part-6");

// intiger to loop over myNewText state
let currentText = 0;

// declare text for nextText()
const myNewText = [
    "Here you can record and store memories about a special person you lost",
    "Not only does this help you remember the good times, it also help others by sharing",
    "John Doe shared this story with others. It helped not only him but also the mother of his departed friend",
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
  