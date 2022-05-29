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
    start.setAttribute("disabled", "true"); 
    stop.removeAttribute("disabled")
    IsDisabled = false;
    timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();

    }, 1000,);

   
}

function stopColor() {
        if (IsDisabled) {
        return;
        }
    
    clearInterval(timerId); 
    start.removeAttribute("disabled")
    stop.setAttribute("disabled", "true"); 
    IsDisabled = true;

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}