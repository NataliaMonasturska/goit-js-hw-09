import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const button = document.querySelector('button[data-start]')
const input = document.querySelector('#datetime-picker')
const timer = document.querySelector('.timer')
const timerDays = timer.querySelector('.value[data-days]')
const timerHours = timer.querySelector('.value[data-hours]')
const timerMinutes = timer.querySelector('.value[data-minutes]')                         
const timerSeconds = timer.querySelector('.value[data-seconds]') 


button.setAttribute("disabled","true");         
let nowDate = new Date();
let differenceTime = 0;
let timerSelectedDates = 0;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
    minuteIncrement: 1,
  
  onClose(selectedDates) {
      timerSelectedDates = selectedDates[0].getTime();
    differenceTime = timerSelectedDates - nowDate;  
      
        if (differenceTime > 0 ) {
         
            button.addEventListener('click', onClickStartTimer)
           button.removeAttribute("disabled")
           
        }
        else {
           
          button.setAttribute("disabled", "true");  
         Notiflix.Notify.failure("Please choose a date in the future");

            // window.alert("Please choose a date in the future");
       
        }
  },
};

flatpickr("#datetime-picker", options)

function addLeadingZero(value) {
  return String(value).padStart(2, '0') 
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero( Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function drawingToInput(obj) {

  timerDays.textContent = obj.days;
  timerHours.textContent = obj.hours;
  timerMinutes.textContent = obj.minutes;
  timerSeconds.textContent = obj.seconds;
  
}

function onClickStartTimer(e) {
   
  e.currentTarget.setAttribute("disabled", "true");
  input.setAttribute("disabled", "true");
  const intervalId = setInterval(() => {
             
    const obj = convertMs(timerSelectedDates - Date.now());
    console.log(obj);
   
    drawingToInput(obj);
     if (timerSelectedDates - Date.now() < 1000) {
      clearInterval(intervalId);
                  }
  }
                 
                
, 1000)
            
}
