import questions from "./questions.js";
import { resultArray, resultHandler } from "./resultHandler.js";
import questionStart from "./questionCurrentlyWorking.js";
import { increaseWhereI, whereIamInQuestion } from "./startGame.js";

// ***************************
// this nextQuestion functin for taking prevQuestion or my mainContainer and it reduce tarslate x in - whereiam * 100 %
// and also it showing in screen my next question for Soloving
// And Then for question Page functionality thing for calling questionStart
// it also manage if i came last question then it call --> resultHandler(); for showing result
// ***************************
// for Next Questions
const nextQuestion = (prevQuiz) => {
  increaseWhereI();

  prevQuiz.style.transform = `translateX(-${whereIamInQuestion + 1}00%)`;

  if (whereIamInQuestion > questions.length) resultHandler();
  else {
    localStorage.setItem("whereIam", whereIamInQuestion);
    localStorage.setItem("resultArray", JSON.stringify(resultArray));

    const targetQuiz = document.getElementById(whereIamInQuestion);
    targetQuiz.style.transform = `translateX(-${whereIamInQuestion}00%)`;

    questionStart(targetQuiz);
  }
};

export default nextQuestion;
