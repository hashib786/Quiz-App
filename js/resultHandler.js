import questions from "./questions.js";
import { whereIamInQuestion } from "./startGame.js";
import { localStorageHandler, init, starting } from "./app.js";
import {
  captureScreen,
  downloadImage,
  sourceOfDownloadingImage,
} from "./screenCaptureAndDownload.js";

let container = document.querySelector(".container");
let mainContainer = document.querySelector(".main__container");
let localSetItem;

// ***************************
// This Array managing State how many Questin i pick Write or wrong
// ***************************
let resultArray = new Array(questions.length).fill(false);
const changeResultArray = (newArray) => (resultArray = newArray);

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
  localStorage.removeItem("whereIam");
  localStorage.removeItem("resultArray");

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
      mainContainer = document.querySelector(".main__container");
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

export { resultArray, resultHandler, localSetItem, changeResultArray };
