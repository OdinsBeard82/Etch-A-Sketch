const answerDiv = document.querySelector('.answer');

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    answerDiv.textContent = button.value;
  });
});
