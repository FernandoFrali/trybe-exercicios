import { nanoid } from 'nanoid';

const btn = document.querySelector('button');
btn.addEventListener('click', changeN);

function changeN() {
  const tres = document.querySelector('#xesque');
  tres.innerText = nanoid();
}
