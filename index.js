let timer = { hour: 0, min: 0, sec: 0 };

let timerInterval;

let timerStatus = 'Not Started Yet';



function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {

        timer.sec = (timer.sec + 1);
        timerStatus = "Running";


        if (timer.sec === 60) {
            timer.min = (timer.min + 1);
            timer.sec = 0;
        }
        if (timer.min === 60) {
            timer.hour = (timer.hour + 1);
            timer.min = 0;
        }


    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerStatus = "Pause";
}

function resetTimer() {
    clearInterval(timerInterval);
    timerStatus = "Reset";
    timer = { hour: 0, min: 0, sec: 0 };
}


export { timer, timerStatus, startTimer, stopTimer, resetTimer };