var yourDate = "2025-01-31"; // Set fixed target date

!function() {
    // Use moment directly instead of 'a' reference
    if (typeof moment === 'undefined') {
        console.error('Moment.js is not loaded! Please include moment.js before this script');
        return;
    }

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
            // Get current and end dates using moment directly
            var now = moment();
            var end = moment(yourDate);
            var diff = end.diff(now);

            // Convert to time units
            var days = Math.floor(diff / (1000 * 60 * 60 * 24));
            var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((diff % (1000 * 60)) / 1000);

            // Update display with validation
            if (diff > 0) {
                daysElem.textContent = days < 10 ? "0" + days : days;
                hoursElem.textContent = hours < 10 ? "0" + hours : hours;
                minutesElem.textContent = minutes < 10 ? "0" + minutes : minutes;
                secondsElem.textContent = seconds < 10 ? "0" + seconds : seconds;
            } else {
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
}();


