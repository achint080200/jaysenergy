import "../styles/contact.css";

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

document.addEventListener("DOMContentLoaded", () => {
  // Navigation Links
  //   const home = document.getElementById("Home");
  //   const about = document.getElementById("About");
  //   const services = document.getElementById("Services");
  //   const projects = document.getElementById("Projects");
  //   const contacts = document.getElementById("Contacts");

  //   home.addEventListener("click", () => {
  //     window.location.href = "../../index.html";
  //   });
  //   about.addEventListener("click", () => {
  //     window.location.href = "/src/pages/about.html";
  //   });
  //   services.addEventListener("click", () => {
  //     window.location.href = "/src/pages/services.html";
  //   });
  //   projects.addEventListener("click", () => {
  //     window.location.href = "/src/pages/projects.html";
  //   });
  //   contacts.addEventListener("click", () => {
  //     window.location.href = "/src/pages/contact.html";
  //   });

  // Authentication
  const loginBtn = document.getElementById("login-btn");
  const logoutBtn = document.getElementById("logout-btn");

  // Check if the user is authenticated (simple example)
  const isAuthenticated = false; // Replace with your authentication logic

  if (isAuthenticated) {
    loginBtn.style.display = "none";
    logoutBtn.style.display = "block";
  } else {
    loginBtn.style.display = "block";
    logoutBtn.style.display = "none";
  }

  loginBtn.addEventListener("click", () => {
    // Perform login logic here
    // Example: Redirect to login page or show login form
    alert("Login button clicked");
  });

  logoutBtn.addEventListener("click", () => {
    // Perform logout logic here
    // Example: Clear user session and update UI
    alert("Logout button clicked");
  });

  // Contact Form
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      // Add form submission logic here
      alert("Form submitted");
    });
  }
});
