const countdownDate = new Date("July 23, 2023 00:00:00").getTime();
let displayMessage = document.getElementById("display-message");

// Update the countdown
const countdownTimer = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // Remaining time
  const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor(
    (distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the remaining time
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // Countdown Complete
  if (distance < 0) {
    clearInterval(countdownTimer);
    document.getElementById("months").textContent = "0";
    document.getElementById("days").textContent = "0";
    document.getElementById("minutes").textContent = "0";
    document.getElementById("seconds").textContent = "0";
    // You can display a custom message here
    displayMessage.textContent = "The Hospital is 40";
  }
}, 1000);
