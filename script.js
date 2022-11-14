const creatLetter = document.getElementById('criar-carta');
const input = document.getElementById('carta-texto');
const letter = document.getElementById('carta-gerada');

const styles = {
  style: ['newspaper', 'magazine1', 'magazine2'],
  height: ['medium', 'big', 'reallybig'],
  rotation: ['rotateleft', 'rotateright'],
  inclination: ['skewleft', 'skewright'],
}

creatLetter.addEventListener('click', () => {
  letter.innerHTML = '';
  if (input.value.match(/[a-z]/gi) === null || input.value === '') {
    letter.innerText = 'Por favor, digite o conteúdo da carta.'
  } else {
    const wordsOfLetter = input.value.split(' ');

    for (let word of wordsOfLetter) {
      const span = document.createElement('span');
      const keys = Object.keys(styles);
      for (let key of keys) {
        const num = Math.floor(Math.random() * styles[key].length)
        span.classList.add(styles[key][num]);
      }
      span.innerText = word;
      letter.append(span);
      letter.innerHTML += ' ';
    }
  }
});
