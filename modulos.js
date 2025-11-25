const btn = document.getElementById("hamburgerBtn");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const logo = document.getElementById("foto-logo")
const mod1 = document.getElementById("mod1")
const mod2 = document.getElementById("mod2")
const mod3 = document.getElementById("mod3")
const des1 = document.getElementById("description1")
const des2 = document.getElementById("description2")
const des3 = document.getElementById("description3")
const grid = document.getElementById("modulos-body")

function ocultar(d1,d2){
    if (d1.classList.contains('active'))
    {
        d1.classList.toggle('active');
    }
    if (d2.classList.contains('active'))
    {
        d2.classList.toggle('active');
    }
}
btn.addEventListener('click', () => {
    menu.classList.toggle('active'); // Alterna la clase 'active' en el side-menu
    overlay.style.display = menu.classList.contains('active') ? 'block' : 'none';
 
});
mod1.addEventListener('click', ()=>{
    grid.classList.toggle('showD1')
    des1.classList.toggle('active');
    ocultar(des2,des3);
});
mod2.addEventListener('click', ()=>{
    des2.classList.toggle('active');
    ocultar(des1, des3)
});
mod3.addEventListener('click', ()=>{
    des3.classList.toggle('active');
    ocultar(des1,des2)
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.style.display = 'none';
});
logo.addEventListener('click', () =>{
    window.location.href = "index.html"
})

