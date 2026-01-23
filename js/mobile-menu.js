/**
 * Menu Mobile (Hamburger)
 * Gerencia o menu hamburger para dispositivos móveis
 */

function inicializarMenuMobile() {
    const hamburger = document.getElementById('menu-hamburger');
    const menuMobile = document.getElementById('menu-mobile');
    const overlay = document.getElementById('menu-overlay');
    const navLinks = document.querySelectorAll('.menu-mobile .nav-link');
    
    if (!hamburger || !menuMobile) return;
    
    // Abrir/fechar menu
    function toggleMenu() {
        const isOpen = menuMobile.classList.contains('menu-aberto');
        
        if (isOpen) {
            fecharMenu();
        } else {
            abrirMenu();
        }
    }
    
    function abrirMenu() {
        menuMobile.classList.add('menu-aberto');
        if (overlay) overlay.classList.add('overlay-ativo');
        document.body.style.overflow = 'hidden';
        hamburger.setAttribute('aria-expanded', 'true');
    }
    
    function fecharMenu() {
        menuMobile.classList.remove('menu-aberto');
        if (overlay) overlay.classList.remove('overlay-ativo');
        document.body.style.overflow = '';
        hamburger.setAttribute('aria-expanded', 'false');
    }
    
    // Event listeners
    hamburger.addEventListener('click', toggleMenu);
    
    if (overlay) {
        overlay.addEventListener('click', fecharMenu);
    }
    
    // Fechar ao clicar em link
    navLinks.forEach(link => {
        link.addEventListener('click', fecharMenu);
    });
    
    // Fechar com Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && menuMobile.classList.contains('menu-aberto')) {
            fecharMenu();
        }
    });
}

// Inicializar quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    inicializarMenuMobile();
});
