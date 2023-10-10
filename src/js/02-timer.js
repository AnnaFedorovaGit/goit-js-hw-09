
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const dateTimePicker = document.querySelector("#datetime-picker");
const startButton = document.querySelector(`[data-start]`);
const daysField = document.querySelector(`[data-days]`);
const hoursField = document.querySelector(`[data-hours]`);
const minutesField = document.querySelector(`[data-minutes]`);
const secondsField = document.querySelector(`[data-seconds]`);
let interval;
let time;

startButton.disabled = true;

flatpickr(dateTimePicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  
  onClose(selectedDates) {
    const selectedTime = new Date(selectedDates[0]).getTime();
    const currentTime = new Date().getTime();
    time = selectedTime - currentTime;

    if (time > 0) { 
      return startButton.disabled = false;
    }  
    
    startButton.disabled = true;
    Notify.failure("Please choose a date in the future");
  },
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function timer(startTime) {
  let timer = startTime;
  clearInterval(interval);

  interval = setInterval(() => {
    timer -= 1000;
    const { days, hours, minutes, seconds } = convertMs(timer);

    if (timer < 1000) { 
      timer = 0;
      clearInterval(interval);
    }

    daysField.innerText = String(days).padStart(2, "0");
    hoursField.innerText = String(hours).padStart(2, "0");
    minutesField.innerText = String(minutes).padStart(2, "0");
    secondsField.innerText = String(seconds).padStart(2, "0");
  }, 1000);
}

startButton.addEventListener("click", () => {
  timer(time);
});
