import "../styles/projects.css";

document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll(".project");
  const modals = document.querySelectorAll(".modal");
  const closeButtons = document.querySelectorAll(".close");

  projects.forEach((project) => {
    project.addEventListener("click", function () {
      const modalId = this.dataset.modal;
      const modal = document.getElementById(modalId);
      modal.style.display = "block";
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const modal = this.closest(".modal");
      modal.style.display = "none";
    });
  });

  window.addEventListener("click", function (event) {
    if (event.target.classList.contains("modal")) {
      event.target.style.display = "none";
    }
  });
});

const home = document.getElementById("Home");
const about = document.getElementById("About");
const services = document.getElementById("Services");
const projects = document.getElementById("Projects");
const contacts = document.getElementById("Contacts");

home.addEventListener("click", () => {
  window.location.href = "/index.html";
});
about.addEventListener("click", () => {
  window.location.href = "/about.html";
});
services.addEventListener("click", () => {
  window.location.href = "/services.html";
});
projects.addEventListener("click", () => {
  window.location.href = "/projects.html";
});
contacts.addEventListener("click", () => {
  window.location.href = "/contact.html";
});
