let timer;
let seconds = 0;

function updateDisplay() {
    const outputText = document.getElementById("outputText");
    outputText.textContent = seconds + ' Seconds';
}

document.getElementById("start").addEventListener("click", function() {
    if (!timer) { // Start the timer only if it's not already running
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
});

document.getElementById("stop").addEventListener("click", function() {
    clearInterval(timer)
    timer = null
});

document.getElementById("res").addEventListener("click", function() {
    seconds = 0
    updateDisplay();
});