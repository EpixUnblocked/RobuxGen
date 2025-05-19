// script.js
function startGenerator() {
  const username = document.getElementById("username").value;
  const amount = document.getElementById("amount").value;
  const modal = document.getElementById("statusModal");
  const progress = document.getElementById("progressFill");
  const log = document.getElementById("log");

  if (!username.trim()) {
    alert("Please enter your Roblox username.");
    return;
  }

  modal.style.display = "flex";
  log.innerText = "Starting process...";
  progress.style.width = "0%";

  const steps = [
    `Finding user ${username}...`,
    "Connecting to Roblox servers...",
    `Transferring ${amount} Robux...`,
    "Verifying transaction...",
    "Error: User flagged as bot. Transfer blocked."
  ];

  let i = 0;
  let percent = 0;
  const interval = setInterval(() => {
    if (i < steps.length) {
      log.innerText += '\n' + steps[i];
      percent += 25;
      progress.style.width = percent + "%";
      i++;
    } else {
      clearInterval(interval);
    }
  }, 1000);
}

function closeModal() {
  document.getElementById("statusModal").style.display = "none";
}

// Mobile Nav Toggle
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("navToggle");
  const nav = document.querySelector(".nav-links");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  // Scroll spy
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
});
