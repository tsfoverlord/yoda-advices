let genrateButton = document.querySelector('button');
genrateButton.onclick = setAdvice;
async function setAdvice(e){
    this.textContent = 'Loading';
    this.disabled = true;
    let adviceElement = document.querySelector('.advice');
    let response = await fetch('https://api.adviceslip.com/advice');
    let responseJson = await response.json();
    const advice = responseJson['slip']['advice'];
    const yodishAdvice = await convertToYodish(advice);
    adviceElement.textContent = yodishAdvice;
    this.textContent = 'Another';
    this.disabled = false;
}

async function convertToYodish(adviceText){
    try {
        const response = await fetch("https://api.funtranslations.com/translate/yoda.json?text="+adviceText);
        result = await response.json();
        return result['contents']['translated'];
      } 

      catch (error) {
        console.error("Error:", error);
      }
}