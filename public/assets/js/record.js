//initialize elements we'll use
const recordButton = document.getElementById('recordButton');
const recordButtonImage = recordButton.firstElementChild;
const recordedAudioContainer = document.getElementById('recordedAudioContainer');
const discardAudioButton = document.getElementById('discardButton');
const saveAudioButton = document.getElementById('saveButton');
const recordingsContainer = document.getElementById('recordings');
const actionButtons = document.querySelector('.actions')


let chunks = []; //will be used later to record audio
let mediaRecorder = null; //will be used later to record audio
let audioBlob = null; //the blob that will hold the recorded audio

function record() {
    //check if browser supports getUserMedia
if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    alert('Your browser does not support recording!');
    return;
  }
  
  // browser supports getUserMedia
  // change image in button
  recordButtonImage.src = `/images/${mediaRecorder && mediaRecorder.state === 'recording' ? 'microphone' : 'stop'}.png`;
  if (!mediaRecorder) {
    // start recording
    navigator.mediaDevices.getUserMedia({
      audio: true,
    })
      .then((stream) => {
        mediaRecorder = new MediaRecorder(stream);
        document.querySelector('.recording-text').innerHTML = "Recording...";
        mediaRecorder.start();
        mediaRecorder.ondataavailable = mediaRecorderDataAvailable;
        mediaRecorder.onstop = mediaRecorderStop;
      })
      .catch((err) => {
        alert(`The following error occurred: ${err}`);
        // change image in button
        recordButtonImage.src = '/images/microphone.png';
      });
  } else {
    // stop recording
    mediaRecorder.stop();
    document.querySelector('.recording-text').innerHTML = "Recording finished";
  }
}

function mediaRecorderDataAvailable(e) {
    chunks.push(e.data);
  }

  function mediaRecorderStop () {
    //check if there are any previous recordings and remove them
    if (recordedAudioContainer.firstElementChild.tagName === 'AUDIO') {
      recordedAudioContainer.firstElementChild.remove();
    }
    //create a new audio element that will hold the recorded audio
    const audioElm = document.createElement('audio');
    audioElm.setAttribute('controls', ''); //add controls
    //create the Blob from the chunks
    audioBlob = new Blob(chunks, { type: 'audio/mp3' });
    const audioURL = window.URL.createObjectURL(audioBlob);
    audioElm.src = audioURL;
    //show audio
    recordedAudioContainer.insertBefore(audioElm, recordedAudioContainer.firstElementChild);
    recordedAudioContainer.classList.add('d-flex');
    recordedAudioContainer.classList.remove('d-none');
    actionButtons.classList.add('d-flex');
    actionButtons.classList.remove('d-none');
    //reset to default
    mediaRecorder = null;
    chunks = [];
  }

  recordButton.addEventListener('click', record);

  function discardRecording () {
    //show the user the prompt to confirm they want to discard
    if (confirm('Are you sure you want to discard the recording?')) {
      //discard audio just recorded
      resetRecording();
    }
  }
  
  function resetRecording () {
    if (recordedAudioContainer.firstElementChild.tagName === 'AUDIO') {
      //remove the audio
      recordedAudioContainer.firstElementChild.remove();
      //hide recordedAudioContainer
      recordedAudioContainer.classList.add('d-none');
      recordedAudioContainer.classList.remove('d-flex');
      actionButtons.classList.add('d-none');
      actionButtons.classList.remove('d-flex');
    }
    //reset audioBlob for the next recording
    audioBlob = null;
  }
  
  //add the event listener to the button
  discardAudioButton.addEventListener('click', discardRecording);

  function saveRecording () {
    //the form data that will hold the Blob to upload
    const formData = new FormData();
    //add the Blob to formData
    formData.append('audio', audioBlob, 'recording.mp3');
    //send the request to the endpoint
    fetch('/record', {
      method: 'POST',
      body: formData
    })
    .then((response) => response.json())
    .then(() => {
        console.log("Your recording is saved");
        //reset for next recording
        resetRecording();
        //fetch recordings
        fetchRecordings();
      })
    .catch((err) => {
      console.error(err);
      alert("An error occurred, please try again later");
      //reset for next recording
      resetRecording();
    })
  }
  
  //add the event handler to the click event
  saveAudioButton.addEventListener('click', saveRecording);
  
  function fetchRecordings () {
    fetch('/recordings')
    .then((response) => response.json())
    .then((response) => {
      if (response.success && response.files) {
        //remove all previous recordings shown
        recordingsContainer.innerHTML = '';
        actionButtons.classList.add('d-none');
        actionButtons.classList.remove('d-flex');
        response.files.forEach((file) => {
          //create the recording element
          const recordingElement = createRecordingElement(file);
          //add it the the recordings container
          recordingsContainer.appendChild(recordingElement);
        })
      }
    })
    .catch((err) => console.error(err));
  }
  
  //create the recording element
  function createRecordingElement (file) {
    //container element
    const recordingElement = document.createElement('div');
    recordingElement.classList.add('col-lg-2', 'col', 'recording', 'mt-3');
    //audio element
    const audio = document.createElement('audio');
    audio.src = file;
    audio.onended = (e) => {
      //when the audio ends, change the image inside the button to play again
      e.target.nextElementSibling.firstElementChild.src = 'images/play.png';
    };
    recordingElement.appendChild(audio);
    //button element
    const playButton = document.createElement('div');
    playButton.classList.add('play-button', 'text-center', 'd-block', 'mx-auto');
    //image element inside button
    const playImage = document.createElement('img');
    playImage.src = '/images/play.png';
    playImage.classList.add('recording-play');
    playButton.appendChild(playImage);
    //add event listener to the button to play the recording
    playButton.addEventListener('click', playRecording);
    recordingElement.appendChild(playButton);
    //return the container element
    return recordingElement;
  }
  
  function playRecording (e) {
    let button = e.target;
    if (button.tagName === 'IMG') {
      //get parent button
      button = button.parentElement;
    }
    //get audio sibling
    const audio = button.previousElementSibling;
    if (audio && audio.tagName === 'AUDIO') {
      if (audio.paused) {
        //if audio is paused, play it
        audio.play();
        //change the image inside the button to pause
        button.firstElementChild.src = 'images/pause.png';
      } else {
        //if audio is playing, pause it
        audio.pause();
        //change the image inside the button to play
        button.firstElementChild.src = 'images/play.png';
      }
    }
  }
  
  