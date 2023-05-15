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

export default resultTemplate;
