
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
} 

const body = document.querySelector("body");
const startButton = document.querySelector(`[data-start]`);
const stopButton = document.querySelector(`[data-stop]`);
let timerId;

startButton.addEventListener("click", () => {
  startButton.disabled = true;
  stopButton.disabled = false;
  timerId = setInterval(() => {
    const color = getRandomHexColor();
    body.style.backgroundColor = color;
  }, 1000);
});

stopButton.addEventListener("click", () => {
  startButton.disabled = false;
  stopButton.disabled = true;
  clearInterval(timerId);
});
