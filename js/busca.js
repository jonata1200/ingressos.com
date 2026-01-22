/**
 * Sistema de Busca
 * Implementa busca de eventos por nome
 */

let termoBusca = '';

// Função para capturar texto da busca
function capturarBusca() {
    const buscaInput = document.getElementById('busca-input');
    const limparBtn = document.getElementById('limpar-busca');
    
    if (!buscaInput) return;
    
    buscaInput.addEventListener('input', function(e) {
        termoBusca = e.target.value.trim().toLowerCase();
        
        // Mostrar/ocultar botão limpar
        if (termoBusca.length > 0) {
            limparBtn.style.display = 'block';
        } else {
            limparBtn.style.display = 'none';
        }
        
        // Aplicar filtros combinados
        aplicarFiltrosCombinados();
    });
    
    // Botão limpar busca
    if (limparBtn) {
        limparBtn.addEventListener('click', function() {
            buscaInput.value = '';
            termoBusca = '';
            limparBtn.style.display = 'none';
            aplicarFiltrosCombinados();
        });
    }
}

// Função para filtrar eventos por nome
function filtrarPorNome(eventos) {
    if (!termoBusca) {
        return eventos;
    }
    
    return eventos.filter(evento => {
        const nome = evento.nome.toLowerCase();
        const local = evento.local ? evento.local.toLowerCase() : '';
        return nome.includes(termoBusca) || local.includes(termoBusca);
    });
}

// Função para aplicar filtros combinados (busca + categoria)
function aplicarFiltrosCombinados() {
    // Esta função será chamada pelos filtros também
    // A lógica completa será implementada em filtros.js
    if (typeof aplicarFiltros === 'function') {
        aplicarFiltros();
    }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    capturarBusca();
});

// Exportar para uso em outros arquivos
if (typeof window !== 'undefined') {
    window.termoBusca = termoBusca;
    window.filtrarPorNome = filtrarPorNome;
}
