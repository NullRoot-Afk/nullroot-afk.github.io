const btn = document.getElementById("hamburgerBtn");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const goDownBtn =document. getElementById("go_down_btn")
const logo = document.getElementById("foto-logo")


btn.addEventListener('click', () => {
    menu.classList.toggle('active'); // Alterna la clase 'active' en el side-menu
    overlay.style.display = menu.classList.contains('active') ? 'block' : 'none';
    goDownBtn.classList.toggle('visible');

});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.style.display = 'none';
    goDownBtn.classList.toggle('visible');


});
function scrollToInfo() {
    const infoSection = document.getElementById("info");
    infoSection.scrollIntoView({ behavior: "smooth" });

}
logo.addEventListener('click', () =>{
    window.location.href = "/Principal/index.html"
})

