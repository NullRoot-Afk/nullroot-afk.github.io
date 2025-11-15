const btn = document.getElementById("hamburgerBtn");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

btn.addEventListener('click', () => {
    menu.classList.toggle('active'); // Alterna la clase 'active' en el side-menu
    overlay.style.display = menu.classList.contains('active') ? 'block' : 'none';
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.style.display = 'none';
});
function scrollToInfo() {
    const infoSection = document.getElementById("info");
    infoSection.scrollIntoView({ behavior: "smooth" });
}

