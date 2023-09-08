let genrateButton = document.querySelector('button');
genrateButton.onclick = setAdvice;
async function setAdvice(e){
    this.textContent = 'Loading';
    this.disabled = true;
    let adviceElement = document.querySelector('.advice');
    let response = await fetch('https://api.adviceslip.com/advice');
    let responseJson = await response.json();
    const advice = responseJson['slip']['advice'];
    adviceElement.textContent = advice;
    this.textContent = 'Another';
    this.disabled = false;
}