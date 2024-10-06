'use strcit'

const button = document.querySelector('.change-color');
const background = document.querySelector('body');
const color = document.querySelector('.color');

button.addEventListener('click', changeBgColor);

function changeBgColor() {
  background.style.backgroundColor = getRandomHexColor();
  background.style.transition = 'all 1s';
  color.textContent = background.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

