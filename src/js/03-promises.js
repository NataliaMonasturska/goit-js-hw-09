import Notiflix from 'notiflix';

const form = document.querySelector('form')
const delayInput = form.querySelector("input[name='delay']")
const stepInput = form.querySelector("input[name='step']")
const amountInput = form.querySelector('input[name="amount"]')



form.addEventListener('submit',onSubmit)

function onSubmit(e) {
   e.preventDefault();
  let delay2 = Number(delayInput.value);
  let step = Number(stepInput.value);
  let amount = Number(amountInput.value);
  let delay = delay2;
  let position = 0;

    for (let i = 1; i <= amount; i++) {
      position = i;
      createPromise(position, delay)
  .then(({ position, delay }) => {
    // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
 
  })
  .catch(({ position, delay }) => {
    // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
  });
     
       delay += step;
    }

}


function createPromise(position, delay) {
return new Promise((resolve, reject) => {
     const shouldResolve = Math.random() > 0.3;
        setTimeout(() => {
          if (shouldResolve) {
            resolve({position, delay})
          }
          else {
            reject({position, delay})
          }
        },delay)
  })
}
