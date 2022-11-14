const creatLetter = document.getElementById('criar-carta');
const input = document.getElementById('carta-texto');
const letter = document.getElementById('carta-gerada');

const styles = {
  style: ['newspaper', 'magazine1', 'magazine2'],
  height: ['medium', 'big', 'reallybig'],
  rotation: ['rotateleft', 'rotateright'],
  inclination: ['skewleft', 'skewright'],
};

const addClass = (span) => {
  span.className = '';
  const keys = Object.keys(styles);
  for (let index1 = 0; index1 < keys.length; index1 += 1) {
    const key = keys[index1];
    const num = Math.floor(Math.random() * styles[key].length);
    span.classList.add(styles[key][num]);
  }
}

const addEvents = () => {
  for (let element of letter.children) {
    element.addEventListener('click', (event) => {
      addClass(event.target);
    });
  }
}

creatLetter.addEventListener('click', () => {
  letter.innerHTML = '';
  if (input.value.match(/[a-z]/gi) === null || input.value === '') {
    letter.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    const wordsOfLetter = input.value.split(' ');
    for (let index = 0; index < wordsOfLetter.length; index += 1) {
      const span = document.createElement('span');
      
      addClass(span);
      span.innerText = wordsOfLetter[index];
      letter.appendChild(span);
      letter.innerHTML += ' ';
      console.log(letter.children);
    }
    addEvents();
  }
});
