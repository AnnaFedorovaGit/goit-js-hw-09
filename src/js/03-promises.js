
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const elements = {
  delay: document.querySelector("input[name='delay']"),
  step: document.querySelector("input[name='step']"),
  amount: document.querySelector("input[name='amount']"),
  createButton: document.querySelector("button"),
}

elements.createButton.addEventListener("click", (event) => {
  event.preventDefault();
  let timeOut = 0;

  for (let i = 1; i <= elements.amount.value; i += 1) { 
    const delay = i === 1 ? elements.delay.value : elements.step.value;
    timeOut += Number(delay);
    
    createPromise(i, timeOut)
    .then(({ position, delay }) => {
      Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`Rejected promise ${position} in ${delay}ms`);
    });
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);
  });
}
