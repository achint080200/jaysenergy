const home = document.getElementById("Home")
const about= document.getElementById("About")
const services= document.getElementById("Services")
const projects= document.getElementById("Projects")
const contacts= document.getElementById("Contacts")
home.addEventListener("click",() =>{
    window.location.href="../../index.html"

})
about.addEventListener("click",() =>{
    window.location.href="/src/pages/about.html"

})
services.addEventListener("click",() =>{
    window.location.href="/src/pages/services.html"

})
projects.addEventListener("click",() =>{
    window.location.href="/src/pages/projects.html"

})
contacts.addEventListener("click",() =>{
    window.location.href="/src/pages/contact.html"

})