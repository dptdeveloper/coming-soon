var yourDate = "2025-01-31"; // Set fixed target date

// Countdown timer
!function() {
    var moment = a(0);
    a(139), moment().format();
    
    // Get DOM elements
    var daysElem = document.querySelector(".days"),
        hoursElem = document.querySelector(".hours"),
        minutesElem = document.querySelector(".minutes"),
        secondsElem = document.querySelector(".seconds");
    
    function updateCountdown() {
        var now = moment();
        var end = moment(yourDate);
        var duration = moment.duration(end.diff(now));
        
        // Calculate time units
        var days = Math.max(0, Math.floor(duration.asDays()));
        var hours = Math.max(0, duration.hours());
        var minutes = Math.max(0, duration.minutes());
        var seconds = Math.max(0, duration.seconds());
        
        // Add leading zeros and update display
        daysElem.innerText = days < 10 ? "0" + days : days;
        hoursElem.innerText = hours < 10 ? "0" + hours : hours;
        minutesElem.innerText = minutes < 10 ? "0" + minutes : minutes;
        secondsElem.innerText = seconds < 10 ? "0" + seconds : seconds;
        
        // Check if countdown finished
        if (duration.asMilliseconds() <= 0) {
            daysElem.innerText = "00";
            hoursElem.innerText = "00";
            minutesElem.innerText = "00";
            secondsElem.innerText = "00";
            clearInterval(countdownInterval);
        }
    }

    // Update immediately and then every second
    updateCountdown();
    var countdownInterval = setInterval(updateCountdown, 1000);
}();


