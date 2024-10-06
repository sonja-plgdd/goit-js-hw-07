'use strict'

const input = document.querySelector('#name-input');
const nameLog = document.querySelector('#name-output');

input.addEventListener('input', handleInput)

function handleInput(event) {
    const value = event.target.value.trim();
    if (value == '') {
        return nameLog.textContent = 'Anonymous';
    }
        return nameLog.textContent = value;
}

