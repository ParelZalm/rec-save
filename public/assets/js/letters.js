const myText = document.querySelector(".letters");
const animationBlock = document.querySelector('.part-1');
const recordBlock = document.querySelector(".part-6");

// intiger to loop over myNewText state
let  currentText = 0;

// declare text for nextText()
const myNewText = [
    "Here you can record and store memories about that special person you lost",
    "This a good way to mourn and it also help others by sharing",
    "example here",
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
    currentText += 3;
    nextText();
    console.log(currentText);
  }
  