import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const button = document.querySelector('button[data-start]')
const input = document.querySelector('#datetime-picker')
const timer = document.querySelector('.timer')
const timerDays = timer.querySelector('value[data-days]')
const timerHours = timer.querySelector('value[data-hours]')
const timerMinutes = timer.querySelector('value[data-minutes]')                         
const timerSeconds = timer.querySelector('value[data-seconds]') 

button.setAttribute("disabled","true");         
let nowDate = new Date();
let differenceTime = 0;
// let isDisabled = false;
// console.log(nowDate.getTime());

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
    minuteIncrement: 1,
  
    onClose(selectedDates) {
      differenceTime = selectedDates[0].getTime() - nowDate   
        if (differenceTime > 0 ) {
            // isDisabled = true; 
            button.addEventListener('click', (e) => {
                e.currentTarget.setAttribute("disabled", "true");  
                input.setAttribute("disabled", "true");
                setInterval(() => {
                  const { days, hours, minutes, seconds } = convertMs(selectedDates[0].getTime() - Date.now());
                  console.log(x);
                  drawingToInput(...x);
                
                }, 1000)
            })
           button.removeAttribute("disabled")
             console.log(differenceTime);
        }
        else {
            // isDisabled = false; 
            button.setAttribute("disabled","true");  

            window.alert("Please choose a date in the future");
       
        }
  },
};

flatpickr("#datetime-picker", options)

function padStartTimer(value) {
  return String(value).padStart(2, '0') 
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = padStartTimer(Math.floor(ms / day));
  // Remaining hours
  const hours = padStartTimer(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = padStartTimer(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = padStartTimer( Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function drawingToInput({ days, hours, minutes, seconds }) {
  timerDays.value = days;
  timerHours.value = `${hours}`;
  timerMinutes.value = `${minutes}`;
  timerSeconds.value = `${seconds}`;
}
