import questions from "./questions.js";

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

export default template;
