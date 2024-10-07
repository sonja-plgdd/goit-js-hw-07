'use strict'

const input = document.querySelector('#controls input');
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');
let size = 30;

create.addEventListener('click', createMarkup);
destroy.addEventListener('click', clear);

function clear() {
  input.value = '';
  boxes.innerHTML = '';
  size = 30;
};

function createMarkup() {
  if (input.value < 1 || input.value > 100) {
    return;
  }
  createBoxes(input.value);
};

function createBoxes(amount) {
  clear();

  let boxesHTML = '';
  for (let i = 0; i < amount; i++) {
    const widthHeight = size + i * 10;
    boxesHTML += `<div style="width: ${widthHeight}px; height: ${widthHeight}px; background-color: ${getRandomHexColor()};"></div>`;
  }

  boxes.insertAdjacentHTML('beforeend', boxesHTML);
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};