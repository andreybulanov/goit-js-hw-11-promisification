const btnStart = document.querySelector('button[data-action= "start"]');
const btnStop = document.querySelector('button[data-action= "stop"]');

const start = () => {
    btnStart.disabled = true;
    timerId = setInterval(() => {document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length -1)]},1000)
}

const stop = () => {
    btnStart.disabled = false;
    clearInterval(timerId)
}

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let timerId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

btnStart.addEventListener('click', start)
btnStop.addEventListener('click', stop)