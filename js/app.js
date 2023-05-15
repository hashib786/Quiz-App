import questions from "./questions.js";
import template from "./questionTemplete.js";
import resultTemplate from "./resultTemplate.js";
import { startGame, nextQuestionRenderForWhereIAm } from "./startGame.js";
import { localSetItem } from "./resultHandler.js";

let container = document.querySelector(".container");
let mainContainer = document.querySelector(".main__container");
let start = document.querySelector(".main__start-btn");
let highestScore = document.querySelector(".main__heighest-Score");

// ***************************
// This is my localStorageHandler function
// here i am checking if i have already my hieghest score is availvle in my local storage or not
// ***************************
let intial = true;
let heightScoreinLocal;
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

// ***************************
// this is my first Event listner so here i started my quiz
// and then it call StartGame Function
// ***************************
// Starting Game when Button Is Clicked
const starting = () => {
  // i also check if my question is unexcpeted cutout then i started from there
  let whereIam = localStorage.getItem("whereIam");
  let tillScore = localStorage.getItem("resultArray");
  if (whereIam && tillScore) {
    whereIam = parseInt(whereIam);
    tillScore = JSON.parse(tillScore);
    nextQuestionRenderForWhereIAm(whereIam, tillScore);
  }

  start.addEventListener("click", startGame);
};
starting();

export { localStorageHandler, init, starting };
