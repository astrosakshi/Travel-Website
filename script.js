const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const filters = document.querySelectorAll(".filter");
const tourCards = document.querySelectorAll(".tour-card");

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    filter.classList.add("active");
    const selected = filter.dataset.filter;
    tourCards.forEach((card) => {
      card.classList.toggle("is-hidden", selected !== "all" && card.dataset.category !== selected);
    });
  });
});

document.querySelectorAll(".heart").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("saved");
    button.textContent = button.classList.contains("saved") ? "♥" : "♡";
  });
});

const testimonials = [...document.querySelectorAll(".testimonial")];
const dots = [...document.querySelectorAll(".dot")];
let testimonialIndex = 0;

function showTestimonial(index) {
  testimonialIndex = (index + testimonials.length) % testimonials.length;
  testimonials.forEach((item, i) => item.classList.toggle("active", i === testimonialIndex));
  dots.forEach((dot, i) => dot.classList.toggle("active", i === testimonialIndex));
}

document.querySelector(".prev")?.addEventListener("click", () => showTestimonial(testimonialIndex - 1));
document.querySelector(".next")?.addEventListener("click", () => showTestimonial(testimonialIndex + 1));
dots.forEach((dot, index) => dot.addEventListener("click", () => showTestimonial(index)));

const enquiryForm = document.querySelector("#enquiry-form");
const formStatus = document.querySelector(".form-status");

enquiryForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.textContent = "Thanks — your enquiry is ready. We’ll be in touch shortly.";
  enquiryForm.reset();
});
