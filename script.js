const creatLetter = document.getElementById('criar-carta');
const input = document.getElementById('carta-texto');
const letter = document.getElementById('carta-gerada');

creatLetter.addEventListener('click', () => {
  letter.innerHTML = '';
  if (input.value.match(/[a-z]/gi) === null || input.value === '') {
    letter.innerText = 'Por favor, digite o conteúdo da carta.'
  } else {
    const wordsOfLetter = input.value.split(' ');

    for (let word of wordsOfLetter) {
      letter.insertAdjacentHTML('beforeend', `<span>${word}</span> `);
    }
  }
});
