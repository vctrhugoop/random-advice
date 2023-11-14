const adviceId = document.querySelector('.advice-id');
const adviceContent = document.querySelector('.advice-content');
const diceButton = document.querySelector('.dice-button');

function getAdvice(data) {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      const adviceJson = data['slip'];

      adviceId.innerHTML = `ADVICE #${adviceJson['id']}`;
      adviceContent.innerHTML = `"${adviceJson['advice']}"`;
    });
}

diceButton.addEventListener('click', () => {
  getAdvice();
});
