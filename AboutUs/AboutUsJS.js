const btn = document.getElementById("hamburgerBtn");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const logo = document.getElementById("foto-logo")

btn.addEventListener('click', () => {
    menu.classList.toggle('active'); // Alterna la clase 'active' en el side-menu
    overlay.style.display = menu.classList.contains('active') ? 'block' : 'none';

});
logo.addEventListener('click', () =>{
    window.location.href = "/Principal/index.html"
})
overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.style.display = 'none';


});
