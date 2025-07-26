function getUkrainianWord(number, words) {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return words[2]; // днів
  }
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) return words[2];

  if (lastDigit === 1) {
    return words[0]; // день
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return words[1]; // дні
  }

  return words[2]; // днів
}

function updateCountdown() {
  const targetDate = new Date("2026-08-15T12:00:00");
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").textContent = "Настав наш день 💖";
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);

  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const dWord = getUkrainianWord(days, ['день', 'дні', 'днів']);
  const hWord = getUkrainianWord(hours, ['година', 'години', 'годин']);
  const mWord = getUkrainianWord(minutes, ['хвилина', 'хвилини', 'хвилин']);
  const sWord = getUkrainianWord(seconds, ['секунда', 'секунди', 'секунд']);

  document.getElementById("countdown").textContent =
    `${days} ${dWord}, ${hours} ${hWord}, ${minutes} ${mWord}, ${seconds} ${sWord}`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const mainContent = document.getElementById("main-content");

  setTimeout(() => {
    preloader.classList.add("fade-out");
    setTimeout(() => {
      preloader.style.display = "none";
      mainContent.style.display = "block";
    }, 1000); // после завершения анимации (1s)
  }, 1500); // сердечко видно 1.5 сек
});