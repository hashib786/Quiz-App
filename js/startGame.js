import nextQuestion from "./nextQuestion.js";
import { changeResultArray } from "./resultHandler.js";

let container = document.querySelector(".container");
let mainContainer = document.querySelector(".main__container");

// ***************************
// this startGame functin call first time when my start button clicked
// it stating my game and calling nextQuestion
// and then it call StartGame Function
// ***************************
let whereIamInQuestion = 0; // This is managing which Question i am
const startGame = () => {
  localStorage.setItem("whereIam", whereIamInQuestion);
  whereIamInQuestion = 0;
  container.classList.remove("hide");
  // mainContainer.style.transform = "translateX(-100%)";
  mainContainer = document.querySelector(".main__container");
  nextQuestion(mainContainer);
};

const increaseWhereI = () => whereIamInQuestion++;

const nextQuestionRenderForWhereIAm = (whereIam, tillScore) => {
  if (whereIam - 1 <= 0) startGame();
  else {
    mainContainer = document.querySelector(".main__container");
    mainContainer.style.transform = "translateX(-100%)";
    container.classList.remove("hide");
    whereIamInQuestion = whereIam - 1;
    changeResultArray(tillScore);
    const prevQuiz = document.getElementById(whereIamInQuestion);
    nextQuestion(prevQuiz);
  }
};

export {
  whereIamInQuestion,
  startGame,
  nextQuestionRenderForWhereIAm,
  increaseWhereI,
};
