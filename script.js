const creatLetter = document.getElementById('criar-carta');
const input = document.getElementById('carta-texto');
const letter = document.getElementById('carta-gerada');

creatLetter.addEventListener('click', () => {
  letter.innerHTML = '';
  if (input.value !== '') {
    const wordsOfLetter = input.value.split(' ');

    for (let word of wordsOfLetter) {
      letter.insertAdjacentHTML('beforeend', `<span>${word}</span> `);
    }
  }
});
