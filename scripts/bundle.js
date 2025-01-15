var yourDate = "2025-01-31"; // Set fixed target date

!function(e) {
    // Initialize moment
    var moment = a(0);
    a(139);

    // Cache DOM elements
    var daysElem = document.querySelector(".days"),
        hoursElem = document.querySelector(".hours"),
        minutesElem = document.querySelector(".minutes"),
        secondsElem = document.querySelector(".seconds");

    if (!daysElem || !hoursElem || !minutesElem || !secondsElem) {
        console.error('Countdown elements not found');
        return;
    }

    function updateCountdown() {
        try {
            // Get current and end dates
            var now = moment();
            var end = moment(yourDate);
            var diff = end.diff(now);

            // Convert to time units
            var duration = moment.duration(diff);
            var days = Math.floor(duration.asDays());
            var hours = duration.hours();
            var minutes = duration.minutes();
            var seconds = duration.seconds();

            // Update display with validation
            if (diff > 0) {
                daysElem.textContent = days < 10 ? "0" + days : days;
                hoursElem.textContent = hours < 10 ? "0" + hours : hours;
                minutesElem.textContent = minutes < 10 ? "0" + minutes : minutes;
                secondsElem.textContent = seconds < 10 ? "0" + seconds : seconds;
            } else {
                // Reset to zeros if time has passed
                daysElem.textContent = "00";
                hoursElem.textContent = "00";
                minutesElem.textContent = "00";
                secondsElem.textContent = "00";
            }
        } catch (error) {
            console.error('Countdown error:', error);
        }
    }

    // Start countdown
    updateCountdown();
    setInterval(updateCountdown, 1000);
}(yourDate);


