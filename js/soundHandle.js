// This is managing state of my sound is active or not
let soundActive = true;

const soundFalse = () => (soundActive = false);
const soundTrue = () => (soundActive = true);

// For Playing Sound
const playSound = (isWrite) => {
  // Create a new Audio object
  const audio = new Audio();
  // Set the source of the audio object
  audio.src = `music/${isWrite ? "write" : "wrong"}.mp3`;

  // Play the audio object
  audio.play();
};

const soundActiveIconChange = () => {
  const sounds = document.querySelectorAll(".sound");
  sounds.forEach((ele) =>
    soundActive ? ele.classList.remove("off") : ele.classList.add("off")
  );
};

export { soundActive, playSound, soundActiveIconChange, soundFalse, soundTrue };
