const start = document.querySelector('button[data-start]')
const stop = document.querySelector('button[data-stop]')
const body = document.querySelector("body")

let timerId = null;

start.addEventListener('click', startColor)

stop.addEventListener('click', stopColor)

function startColor() {

    start.disabled = true;
    stop.disabled = false;
    timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();

    }, 1000,);

   
}

function stopColor() {
       
    clearInterval(timerId); 
    start.disabled = false;
    stop.disabled = true;
 

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}