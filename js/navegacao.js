/**
 * Sistema de Navegação
 * Gerencia a navegação entre páginas e destaca página ativa
 */

// Função para destacar página ativa no menu
function destacarPaginaAtiva() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkHref = link.getAttribute('href');
        
        // Verifica se o link corresponde à página atual
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html') ||
            (currentPage === 'index.html' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Função para atualizar contador do carrinho
function atualizarContadorCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
    const badges = document.querySelectorAll('.carrinho-badge');
    
    badges.forEach(badge => {
        if (totalItens > 0) {
            badge.textContent = totalItens;
            badge.style.display = 'flex';
        } else {
            badge.textContent = '0';
            badge.style.display = 'none';
        }
    });
}

// Função para navegar para detalhes do evento
function navegarParaDetalhes(eventoId) {
    localStorage.setItem('eventoSelecionado', eventoId);
    window.location.href = 'detalhes.html';
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    destacarPaginaAtiva();
    // Aguardar carregamento do carrinho.js se necessário
    setTimeout(() => {
        if (typeof atualizarContadorCarrinho === 'function') {
            atualizarContadorCarrinho();
        }
    }, 100);
});
