let hours   = document.getElementById('hour');
let minutes = document.getElementById('min');
let seconds = document.getElementById('sec');
let start   = document.getElementById('start');
let reset   = document.getElementById('reset');
let timer   = null;

start.addEventListener('click', () => {
  watchStart();
  if (seconds.value > 59) {
    minutes.value += 1;
    seconds.value = seconds.value - 60;
  } 
  if (minutes.value > 59) {
    hours.value += 1;
    minutes.value = minutes.value - 60;
  }
  if (start.innerText === 'Start' || start.innerText === 'Continue') {
    start.innerText = 'Pause'
    start.style.backgroundColor = 'yellow'
  } else if (start.innerText === 'Pause') {
    start.innerText = 'Continue'
    start.style.backgroundColor = 'green'
    watchStop();
  }
})

function stopWatch() {

  seconds.value -= 1;
  if (seconds.value < 0) {
    seconds.value = 59;
    minutes.value -= 1;

    if (minutes.value < 0 || minutes > 59) {
      minutes.value = 59;
      hours.value -= 1;

      if (hours.value <= 0) {
        hours.value = 0;
      }
    }
  }
}

function watchStart(){
  if(timer !== null){
      clearInterval(timer);
  }
  timer = setInterval(() => {
      stopWatch();
  }, 1000);
}

function watchStop(){
  clearInterval(timer);
}

reset.addEventListener('click', () => {
  clearInterval(timer);
  start.innerText = 'Start';
  start.style.backgroundColor = 'red';

  hours.value = '';
  minutes.value = '';
  seconds.value = '';
})

