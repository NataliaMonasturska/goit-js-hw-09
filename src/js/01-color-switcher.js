const start = document.querySelector('button[data-start]')
const stop = document.querySelector('button[data-stop]')
const body = document.querySelector("body")

let IsDisabled = true;
let timerId = null;

start.addEventListener('click', startColor)

stop.addEventListener('click', stopColor)

function startColor() {
       if (!IsDisabled) {
        return;
    }
   
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();

    }, 1000,);

    IsDisabled = false;
}

function stopColor() {
        if (IsDisabled) {
        return;
    }
    clearInterval(timerId); 
   
     IsDisabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}