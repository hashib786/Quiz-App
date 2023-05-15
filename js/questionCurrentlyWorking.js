import questions from "./questions.js";
import {
  soundActive,
  playSound,
  soundActiveIconChange,
  soundTrue,
  soundFalse,
} from "./soundHandle.js";
import { whereIamInQuestion } from "./startGame.js";
import { resultArray } from "./resultHandler.js";
import nextQuestion from "./nextQuestion.js";

// ***************************
// this questionStart functin for managing all functionality witch question is currently solving
// feature like --> 1 reduce Timing and for another another timing it changes BackGround color
// feature like --> 2 handling option listner if write render like write or wrong also
// feature like --> 3 it also handling all sound option like it active or not
// feature like --> 4 there i also manage i need to render next (for rendering new question it call --> nextQuestion()) question or result page
// feature like --> 5 there i also manage keypress of Enter (for rendering new question it call --> nextQuestion()) question or result page
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
    soundFalse();
    soundActiveIconChange();
  });
  soundIconOff.addEventListener("click", () => {
    soundTrue();
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

export default questionStart;
