let container = document.querySelector(".container");

let start = document.querySelector(".main__start-btn");
let highestScore = document.querySelector(".main__heighest-Score");
let mainContainer = document.querySelector(".main__container");

// ***************************
// This Is My Dummy Questions
// ***************************
const questions = [
  {
    id: 1,
    question: "What is the HTML tag for a heading?",
    answers: ["h2", "h3", "h4", "h1"],
    correctAnswer: "h1",
  },
  {
    id: 2,
    question: "What is the CSS property for setting the font size?",
    answers: ["size", "fontsize", "font", "font-size"],
    correctAnswer: "font-size",
  },
  {
    id: 3,
    question: "What is the JavaScript function for creating a new element?",
    answers: [
      "createElement",
      "newElement",
      "document.createElement",
      "createElement",
    ],
    correctAnswer: "document.createElement",
  },
  {
    id: 4,
    question: "What is the HTML tag for an image?",
    answers: ["photo", "picture", "image", "img"],
    correctAnswer: "img",
  },
  {
    id: 5,
    question: "What is the CSS property for setting the background color?",
    answers: ["bg", "color", "bgcolor", "background-color"],
    correctAnswer: "background-color",
  },
  {
    id: 6,
    question: "What is the JavaScript function for adding an event listener?",
    answers: ["addEvent", "on", "attachEvent", "addEventListener"],
    correctAnswer: "addEventListener",
  },
  {
    id: 7,
    question: "What is the HTML tag for a paragraph?",
    answers: ["text", "para", "paragraph", "p"],
    correctAnswer: "p",
  },
  {
    id: 8,
    question: "What is the CSS property for setting the text color?",
    answers: ["textColor", "tcolor", "color", "text-color"],
    correctAnswer: "color",
  },
  {
    id: 9,
    question:
      "What is the JavaScript function for getting the value of an input element?",
    answers: ["getValue", "getInput", "input", "value"],
    correctAnswer: "value",
  },
  {
    id: 10,
    question: "What is the HTML tag for a link?",
    answers: ["href", "link", "url", "a"],
    correctAnswer: "a",
  },
  {
    id: 11,
    question: "What is the CSS property for setting the link color?",
    answers: ["linkColor", "lcolor", "color", "link-color"],
    correctAnswer: "color",
  },
  {
    id: 12,
    question: "What is the JavaScript function for navigating to a new page?",
    answers: ["navigate", "window.location", "location.href", "go"],
    correctAnswer: "location.href",
  },
  {
    id: 13,
    question: "What is the HTML tag for a form?",
    answers: ["submit", "button", "input", "form"],
    correctAnswer: "form",
  },
  {
    id: 14,
    question: "What is the CSS property for setting the border width?",
    answers: ["width", "bw", "border", "border-width"],
    correctAnswer: "border-width",
  },
  {
    id: 15,
    question: "What is the JavaScript function for submitting a form?",
    answers: ["go", "send", "post", "submit"],
    correctAnswer: "submit",
  },
  {
    id: 16,
    question: "What is the HTML tag for a table?",
    answers: ["table", "tbl", "grid", "data"],
    correctAnswer: "table",
  },
  {
    id: 17,
    question: "What is the CSS property for setting the table width?",
    answers: ["table-width", "width", "w", "tw"],
    correctAnswer: "width",
  },
  {
    id: 18,
    question: "What is the JavaScript function for adding a row to a table?",
    answers: ["newRow", "addRow", "row", "insertRow"],
    correctAnswer: "insertRow",
  },
  {
    id: 19,
    question: "What is the HTML tag for a cell?",
    answers: ["cell", "data", "text", "td"],
    correctAnswer: "td",
  },
  {
    id: 20,
    question: "What is the CSS property for setting the cell width?",
    answers: ["cw", "w", "cell-width", "width"],
    correctAnswer: "width",
  },
  {
    id: 21,
    question:
      "What is the JavaScript function for getting the value of a cell?",
    answers: ["getCell", "getValue", "getCellValue", "value"],
    correctAnswer: "value",
  },
  {
    id: 22,
    question: "What is the HTML tag for a button?",
    answers: ["btn", "press", "button", "click"],
    correctAnswer: "button",
  },
  {
    id: 23,
    question: "What is the CSS property for setting the button width?",
    answers: ["w", "bw", "button-width", "width"],
    correctAnswer: "width",
  },
  {
    id: 24,
    question:
      "What is the JavaScript function for adding an event listener to a button?",
    answers: ["on", "attachEvent", "addEvent", "addEventListener"],
    correctAnswer: "addEventListener",
  },
  {
    id: 25,
    question: "What is the HTML tag for a form input?",
    answers: ["form-input", "fi", "input", "i"],
    correctAnswer: "input",
  },
];

// ***************************
// This Is My Questions Template
// ***************************
const template = (id, question, options) => {
  let optionHtml = "";
  options.forEach((ele) => {
    optionHtml += `<div class="option">
                        <p class="option_answer">${ele}</p>
                        <div class="question_status">
                            <small>You Choose</small>
                            <div class="status_question">
                                <span>&times;</span>
                                <span>&check;</span>
                            </div>
                        </div>
                    </div>`;
  });

  return `
            <div class="quiz__container" id="${id}">
                <div class="quiz__header">
                    <img src="img/quizPhoto.svg" alt="Quiz Photo">
                    <div class="sound">
                        <span id="sound_active" class="material-symbols-outlined">
                            volume_up
                        </span>
                        <span id="sound_off" class="material-symbols-outlined">
                            volume_off
                        </span>
                    </div>
                </div>

                <div class="quiz__container-width">
                    <div class="question__remain remain">
                        <p>${id}/${questions.length}</p>
                    </div>

                    <div class="question">
                        <p>${question}</p>
                    </div>

                    <div class="time__remain remain">
                        <p>00:30</p>
                    </div>

                    <div class="answer__container">
                        ${optionHtml}
                    </div>

                    <div class="${
                      id === questions.length ? "result" : ""
                    } question__next">
                        <p>${
                          id === questions.length ? "result" : "next"
                        } &#10148;</p>
                    </div>
                </div>
                <footer>
                    <small>Made ❤️ by Hashib Raja</small>
                </footer>
            </div>
    `;
};

// ***************************
// This Is My Result Template
// ***************************
const resultTemplate = () => {
  return `
          <div class="quiz__result">
          <div class="quiz__container-width">
              <div class="quiz__image">
                  <img src="img/quizPhoto.svg" alt="Quiz Photo">
              </div>
              <p class="result__para">Result</p>

              <div class="result__graph">
                  <div class="resultContainer">
                      <div class="imgages">
                          <img src="img/rightResult.svg" alt="write">
                          <p class="afterPara" id="firsPara"></p>
                      </div>
                      <div class="write__ans"></div>
                      <div class="wrong__ans"></div>
                      <div class="imgages">
                          <img src="img/leftResult.svg" alt="wrong">
                          <p class="afterPara" id="secondPara"></p>
                      </div>
                  </div>
                  <p class="result__para-mark">22/25</p>
              </div>

              <p class="result__para">“Keep learning, you have a good score!”</p>
              <button class="return__start-btn"><span>&lt;&lt;&lt;</span> Retry</button>

              <div class="social">
                  <p>Share your score:</p>
                  <div class="social__icon">
                      <img src="/img/linkedin.svg" alt="linkedin">
                      <img src="/img/twitter.svg" alt="twitter.svg">
                      <img src="/img/instagram.svg" alt="instagram.svg">
                  </div>
              </div>
              <footer>
                  <small>Made ❤️ by Hashib Raja</small>
              </footer>
          </div>
        </div>
  `;
};

// ***************************
// This Is My capture Screen Method
// there i am storing image source in --> sourceOfDownloadingImage
// Last captureScreen handle taking Input
// ***************************
// Capture Image Functionality
let sourceOfDownloadingImage;

const captureScreen = async () => {
  try {
    // asking permission to use a media input to record current tab
    const stream = await navigator.mediaDevices.getDisplayMedia({
      preferCurrentTab: true,
    });
    const video = document.createElement("video");

    video.addEventListener("loadedmetadata", () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      // passing video width & height as canvas width & height
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      video.play(); // playing the video so the drawn image won't be black or blank
      // drawing an image of the captured video stream
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      stream.getVideoTracks()[0].stop(); // terminating first video track of the stream

      // passing canvas data url as screenshot preview src
      sourceOfDownloadingImage = canvas.toDataURL();
      // screenshotPreview.querySelector("img").src = canvas.toDataURL();
      // screenshotPreview.classList.add("show");
    });
    video.srcObject = stream; // passing capture stream data as video source object
  } catch (error) {
    // if image couldn't capture by any reason, then alert the msg
    alert("Failed to capture screenshot!");
  }
};

// ***************************
// This Is My for Downloading Imge
// This function takes what is my imageurl eg. --> sourceOfDownloadingImage
// and also i pass witch name i want to store in image
// ***************************
// functionality for Download Image
function downloadImage(imageUrl, fileName) {
  const a = document.createElement("a");
  a.href = imageUrl;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
}

// ***************************
// This Array managing State how many Questin i pick Write or wrong
// ***************************
const resultArray = new Array(questions.length).fill(false);

// ***************************
// This is my localStorageHandler function
// here i am checking if i have already my hieghest score is availvle in my local storage or not
// ***************************
let intial = true;
let heightScoreinLocal;
let localSetItem;
const localStorageHandler = () => {
  if (localSetItem) {
    localStorage.setItem("highest", localSetItem);
  }
  const getHeigh = localStorage.getItem("highest");
  if (!getHeigh) return;
  if (getHeigh) intial = false;

  heightScoreinLocal = getHeigh;
};
localStorageHandler();

// ***************************
// This is my intial Function function
// here i am checking if i have already high score then i show on screen
// and also i render my all question using my template
// ***************************
// This function run Intial Time
const init = () => {
  if (!intial) {
    localStorageHandler();
    highestScore.classList.add("active");
    highestScore.innerText = "Highest Score : " + heightScoreinLocal;
  }
  container.innerHTML = "";
  container.append(mainContainer);
  questions.forEach(({ id, question, answers }) => {
    let html = template(id, question, answers);
    container.innerHTML += html;
  });
  container.innerHTML += resultTemplate();

  // i need to re target our elements
  start = document.querySelector(".main__start-btn");
  container = document.querySelector(".container");
  highestScore = document.querySelector(".main__heighest-Score");
  mainContainer = document.querySelector(".main__container");
  intial = false;
};
init();

// This is managing state of my sound is active or not
let soundActive = true;

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

// ***************************
// this questionStart functin for managing all functionality witch question is currently solving
// feature like --> 1 reduce Timing and for another another timing it changes BackGround color
// feature like --> 2 handling option listner if write render like write or wrong also
// feature like --> 3 it also handling all sound option like it active or not
// feature like --> 4 there i also manage i need to render next (for rendering new question it call --> nextQuestion()) question or result page
// ***************************
// question start take target question
const questionStart = (targetQuiz) => {
  // This is for Handling Timing Color
  let timing = 30;
  const timingEle = targetQuiz.querySelector(".time__remain p");
  const interval = setInterval(() => {
    timing--;
    if (timing === 15) targetQuiz.classList.add("yellow");
    if (timing === 5) {
      targetQuiz.classList.add("red");
    }
    timingEle.innerText = `00:${(timing + "").padStart(2, 0)}`;
    if (timing === 0) clearInterval(interval);
  }, 1000);

  // adding events on all options --> write or wrong
  const options = targetQuiz.querySelectorAll(".option");
  let isWrite;
  options.forEach((ele, index) =>
    ele.addEventListener("click", () => {
      if (isWrite !== undefined || timing === 0) return;
      const writeAns = questions[whereIamInQuestion - 1].correctAnswer;
      const chooseAns = questions[whereIamInQuestion - 1].answers[index];
      isWrite = writeAns === chooseAns;
      resultArray[whereIamInQuestion - 1] = isWrite;
      //   if soundActive then playing sound write or not
      if (soundActive) playSound(isWrite);
      ele.classList.add(isWrite ? "write" : "wrong");
      clearInterval(interval);
    })
  );

  //   if clicking sound then active and deactivate sound icon
  const soundIconActive = targetQuiz.querySelector("#sound_active");
  const soundIconOff = targetQuiz.querySelector("#sound_off");
  soundIconActive.addEventListener("click", () => {
    soundActive = false;
    soundActiveIconChange();
  });
  soundIconOff.addEventListener("click", () => {
    soundActive = true;
    soundActiveIconChange();
  });

  // Add Event Listner for next Button To Visible new Quesion
  const nextButton = targetQuiz.querySelector(".question__next p");

  const keyEventListner = (e) => {
    if (e.key !== "Enter") return;
    nextQuestionRender();
  };

  const nextQuestionRender = () => {
    if (isWrite === undefined && timing !== 0) {
      const answerContainer = targetQuiz.querySelector(".answer__container");
      answerContainer.classList.add("drag");
      setTimeout(() => answerContainer.classList.remove("drag"), 300);
      return;
    }
    document.removeEventListener("keydown", keyEventListner);
    nextQuestion(targetQuiz);
  };

  document.addEventListener("keydown", keyEventListner);
  nextButton.addEventListener("click", nextQuestionRender);
};

// ***************************
// this resultHandler functin for showing result
// 1). there i am calculating percentage and how many number i got
// 2). for rendering result i update my result page for ans like got
// 3). and here i also call like highest score or Max score in local storage so i call --> localStorageHandler()
// 4). there i also restart button which is start my all quiz starting
// 5). and then in social icon added functionality to download image in local
// ***************************
// Result Handling
const resultHandler = () => {
  const correctAnsFil = resultArray.filter((ele) => ele).length;
  const correctAnsPercent = (correctAnsFil * 100) / questions.length;

  container.classList.add("hide");

  const resultRender = document.querySelector(".quiz__result");
  const ansPara = resultRender.querySelector(".result__para-mark");
  const writeAns = resultRender.querySelector(".write__ans");
  const wrongAns = resultRender.querySelector(".wrong__ans");

  const leftAfter = resultRender.querySelector("#firsPara");
  const righttAfter = resultRender.querySelector("#secondPara");

  leftAfter.textContent = `${correctAnsPercent}%`;
  righttAfter.textContent = `${100 - correctAnsPercent}%`;

  writeAns.style.width = `${correctAnsPercent}%`;
  correctAnsPercent === 100 ? (writeAns.style.borderRadius = `1rem`) : "";
  correctAnsPercent === 0 ? (wrongAns.style.borderRadius = `1rem`) : "";
  wrongAns.style.width = `${100 - correctAnsPercent}%`;
  ansPara.textContent = `${correctAnsFil}/${questions.length}`;

  resultRender.style.transform = `translateX(-${whereIamInQuestion}00%)`;

  // Adding Highest Value in Local Storage
  const getItem = localStorage.getItem("highest");
  if (getItem) {
    const max = Math.max(correctAnsFil, parseInt(getItem.split("/")[0]));
    localSetItem = `${max} /${questions.length}`;
  } else localSetItem = `${correctAnsFil} /${questions.length}`;
  localStorageHandler();

  // if Restarting Button clicked
  resultRender
    .querySelector(".return__start-btn")
    .addEventListener("click", () => {
      resultRender.style.transform = `translateX(+100%)`;
      mainContainer.style.transform = `translateX(0%)`;
      setTimeout(() => {
        init();
        starting();
      }, 1000);
    });

  // Adding functionality to download Image in our local System
  resultRender.querySelectorAll(".social__icon img").forEach((ele) =>
    ele.addEventListener("click", async () => {
      await captureScreen();
      setTimeout(
        () => downloadImage(sourceOfDownloadingImage, "hashibQuizApp.jpg"),
        1000
      );
    })
  );
};

// ***************************
// this nextQuestion functin for taking prevQuestion or my mainContainer and it reduce tarslate x in - whereiam * 100 %
// and also it showing in screen my next question for Soloving
// And Then for question Page functionality thing for calling questionStart
// it also manage if i came last question then it call --> resultHandler(); for showing result
// ***************************
// for Next Questions
const nextQuestion = (prevQuiz) => {
  whereIamInQuestion++;

  prevQuiz.style.transform = `translateX(-${whereIamInQuestion + 1}00%)`;

  if (whereIamInQuestion > questions.length) resultHandler();
  else {
    const targetQuiz = document.getElementById(whereIamInQuestion);
    targetQuiz.style.transform = `translateX(-${whereIamInQuestion}00%)`;

    questionStart(targetQuiz);
  }
};

// ***************************
// this startGame functin call first time when my start button clicked
// it stating my game and calling nextQuestion
// and then it call StartGame Function
// ***************************
let whereIamInQuestion = 0; // This is managing which Question i am
const startGame = () => {
  whereIamInQuestion = 0;
  container.classList.remove("hide");
  // mainContainer.style.transform = "translateX(-100%)";

  nextQuestion(mainContainer);
};

// ***************************
// this is my first Event listner so here i started my quiz
// and then it call StartGame Function
// ***************************
// Starting Game when Button Is Clicked
const starting = () => {
  start.addEventListener("click", startGame);
};
starting();
