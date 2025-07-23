(() => {
  const menuBtn = document.getElementById('menu-btn');
  const menuOverlay = document.getElementById('menu-overlay');

  // Define função para alterar estado do menu
  function setMenuState(isOpen) {
    menuBtn.setAttribute('aria-expanded', String(isOpen));
    menuOverlay.classList.toggle('expanded', isOpen);
  }

  // Alterna o estado do menu
  function toggleMenu() {
    const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
    setMenuState(!isOpen);
  }

  // Torna toggleMenu acessível globalmente para handlers inline
  window.toggleMenu = toggleMenu;

  // Fecha ao clicar fora do menu
  document.addEventListener('click', (e) => {
    const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
    if (
      isOpen &&
      !menuOverlay.contains(e.target) &&
      !menuBtn.contains(e.target)
    ) {
      setMenuState(false);
    }
  });

  // Impede que cliques dentro do overlay fechem o menu
  menuOverlay.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Fecha o menu ao clicar em qualquer link de menu
  document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', () => toggleMenu());
  });

  // Atualiza automaticamente o ano no rodapé
  const anoEl = document.getElementById('ano');
  if (anoEl) anoEl.textContent = new Date().getFullYear();
})();

//Função para atualizar a imagem e descrição
function updateImage(element, descId) {
    document.getElementById('mainImage').src = element.src;

    document.querySelectorAll('.description').forEach(desc => {
        desc.classList.remove('active');
    });

    document.getElementById(descId).classList.add('active');
}