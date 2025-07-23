//Funçao para abrir e fechar o menu

function toggleMenu() {
    const menuOverlay = document.getElementById('menu-overlay');
    const menuBtn = document.getElementById('menu-btn');
    menuOverlay.classList.toggle('expanded');
    menuBtn.textContent = menuOverlay.classList.contains('expanded') ? '✖' : '☰';
}

//Adiciona o evento de click a classe menu-link
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', () => {
        toggleMenu();
    });
});

//Ano automatico
document.getElementById("ano").textContent = new Date().getFullYear();



function updateImage(element, descId) {
    document.getElementById('mainImage').src = element.src;

    document.querySelectorAll('.description').forEach(desc => {
        desc.classList.remove('active');
    });

    document.getElementById(descId).classList.add('active');
}