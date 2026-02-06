const contactButton = document.getElementById("contactButton");
const wechatOpen = document.getElementById("wechatOpen");
const wechatModal = document.getElementById("wechatModal");
const heroPhoto = document.querySelector(".hero-photo");

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");

  const sections = document.querySelectorAll(".section-reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => observer.observe(section));
});

const form = document.querySelector(".contact-form");
form.addEventListener("submit", () => {
  if (contactButton) {
    contactButton.textContent = "Sending...";
    setTimeout(() => {
      contactButton.textContent = "Contact us";
    }, 2000);
  }
});

wechatOpen.addEventListener("click", () => {
  wechatModal.classList.add("active");
  wechatModal.setAttribute("aria-hidden", "false");
});

wechatModal.addEventListener("click", (event) => {
  if (event.target.matches("[data-close]")) {
    wechatModal.classList.remove("active");
    wechatModal.setAttribute("aria-hidden", "true");
  }
});

contactButton.addEventListener("click", () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
});

heroPhoto?.addEventListener("dblclick", () => {
  heroPhoto.classList.toggle("photo-zoom");
});
