window.onload = function () {
    let minutes = "00"
    let seconds = "50"
    let tens = "00"
    let secondsSpan = document.getElementById("seconds")
    let tensSpan = document.getElementById("tens")
    let minutesSpan = document.getElementById("minutes")
    let startButton = document.getElementById('start')
    let stopButton = document.getElementById('stop')
    let resetButton = document.getElementById('reset')
    let interval


    startButton.onclick = () => {
        interval = setInterval(startTimer, 10)
    }

    stopButton.onclick = () => {
        clearInterval(interval)
    }

    resetButton.onclick = () => {
        clearInterval(interval)
        tens = "00"
        seconds = "00"
        minutes = "00"
        tensSpan.innerHTML = tens
        secondsSpan.innerHTML = seconds
        minutesSpan.innerHTML = minutes
    }

    /**
     * Start Timer
     *
     * @return set minutes and seconds and millisecond
     */
    function startTimer() {
        tens++
        if (tens <= 9) tensSpan.innerHTML = "0" + tens
        if (tens > 9) tensSpan.innerHTML = tens
        if (tens > 99) {
            seconds++
            secondsSpan.innerHTML = "0" + seconds
            tens = 0
            tensSpan.innerHTML = "0" + 0
        }
        if (seconds > 9) secondsSpan.innerHTML = seconds
        if (seconds >= 60) {
            minutes++
            minutesSpan.innerHTML = "0" + minutes
            seconds = 0
            secondsSpan.innerHTML = "0" + 0
        }
    }

}