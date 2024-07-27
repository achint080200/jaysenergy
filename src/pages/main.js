import "../styles/main.css";

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

// about.js
document.addEventListener("DOMContentLoaded", () => {
  // document.getElementById('Home').addEventListener('click', () => {
  //     window.location.href = '../../index.html';
  // });

  // document.getElementById('About').addEventListener('click', () => {
  //     window.location.href = '/src/pages/about.html';
  // });

  // document.getElementById('Services').addEventListener('click', () => {
  //     window.location.href = '/src/pages/services.html';
  // });

  // document.getElementById('Projects').addEventListener('click', () => {
  //     window.location.href = '/src/pages/projects.html';
  // });

  // document.getElementById('Contacts').addEventListener('click', () => {
  //     window.location.href = '/src/pages/contact.html';
  // });
  // document.getElementById('our-services').addEventListener('click', () => {
  //     window.location.href = '/src/pages/services.html';
  // });
  // document.getElementById('button2-services').addEventListener('click', () => {
  //     window.location.href = '/src/pages/about.html';
  // });

  let slideIndex1 = 0;
  let slideIndex2 = 0;
  showSlides("slideshow1", slideIndex1);
  showSlides("slideshow2", slideIndex2);

  function showSlides(slideshowId, slideIndex) {
    let i;
    let slides = document
      .getElementById(slideshowId)
      .getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(() => showSlides(slideshowId, slideIndex), 2000); // Change image every 2 seconds
  }
});
document.getElementById("our-services").addEventListener("click",() =>{
  window.location.href = "/services.html";

})
document.getElementById("button2-services").addEventListener("click",() =>{
  window.location.href = "/about.html";

})
