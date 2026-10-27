// Personalize the anniversary date below (example: "October 27, 2025")
const anniversaryDate = "Add your date here";
document.getElementById("anniversary-date").textContent = anniversaryDate;

const accessDeadline = new Date("2026-10-28T00:00:00+08:00").getTime();
const accessGate = document.getElementById("access-gate");
const siteContent = document.getElementById("site-content");
const countdownParts = {
  days: document.getElementById("countdown-days"),
  hours: document.getElementById("countdown-hours"),
  minutes: document.getElementById("countdown-minutes"),
  seconds: document.getElementById("countdown-seconds")
};

function updateAccessCountdown() {
  const remaining = accessDeadline - Date.now();
  if (remaining <= 0) {
    accessGate.hidden = true;
    siteContent.inert = false;
    document.body.classList.remove("access-locked");
    siteContent.querySelector("h1").focus({ preventScroll: true });
    return;
  }

  const totalSeconds = Math.floor(remaining / 1000);
  countdownParts.days.textContent = String(Math.floor(totalSeconds / 86400));
  countdownParts.hours.textContent = String(Math.floor((totalSeconds % 86400) / 3600)).padStart(2, "0");
  countdownParts.minutes.textContent = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  countdownParts.seconds.textContent = String(totalSeconds % 60).padStart(2, "0");
  setTimeout(updateAccessCountdown, Math.min(1000, remaining));
}

document.getElementById("access-title").focus();
updateAccessCountdown();

const surpriseButton = document.getElementById("surprise-btn");
const surpriseMessage = document.getElementById("surprise-message");
surpriseButton.addEventListener("click", () => {
  surpriseMessage.hidden = !surpriseMessage.hidden;
  surpriseButton.textContent = surpriseMessage.hidden ? "One last thing… ♡" : "I mean every word ♡";
});

const heartLayer = document.querySelector(".floating-hearts");
function makeHeart() {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = Math.random() > 0.5 ? "♥" : "♡";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${12 + Math.random() * 20}px`;
  heart.style.animationDuration = `${7 + Math.random() * 7}s`;
  heartLayer.appendChild(heart);
  setTimeout(() => heart.remove(), 14500);
}
setInterval(makeHeart, 900);
