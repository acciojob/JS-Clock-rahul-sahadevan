//your code here
function rotateClockHands() {
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.min-hand');
    const secondHand = document.querySelector('.second-hand');

    const now = new Date();
    const hours = now.getHours() % 12; // Convert to 12-hour format
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const hourDegrees = (360 / 12) * hours + (360 / 12) * (minutes / 60);
    const minuteDegrees = (360 / 60) * minutes + (360 / 60) * (seconds / 60);
    const secondDegrees = (360 / 60) * seconds;

    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

setInterval(rotateClockHands, 1000); // Update every second
rotateClockHands(); // Initial rotation

// This code creates a simple rotating clock with hour, minute, and second hands using CSS transformations. The setInterval function updates the clock hands every second, and the rotateClockHands function calculates the rotation angles based on the current time. You can customize the clock's appearance and animation as needed.






// rotate2()

