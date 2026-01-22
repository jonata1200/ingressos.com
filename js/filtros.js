/**
 * Sistema de Filtros
 * Implementa filtros por categoria e combina com busca
 */

let categoriaSelecionada = 'todos';
let eventosExibidos = [];

// Obter eventos reais (deve estar carregado antes)
function obterEventos() {
    if (typeof window !== 'undefined' && window.eventos) {
        return window.eventos;
    }
    return [];
}

// Função para filtrar eventos por categoria
function filtrarPorCategoria(eventos) {
    if (categoriaSelecionada === 'todos') {
        return eventos;
    }
    
    return eventos.filter(evento => evento.categoria === categoriaSelecionada);
}

// Função principal para aplicar filtros
function aplicarFiltros() {
    const eventos = obterEventos();
    let eventosFiltrados = [...eventos];
    
    // Aplicar filtro de categoria
    eventosFiltrados = filtrarPorCategoria(eventosFiltrados);
    
    // Aplicar filtro de busca (se existir)
    if (typeof filtrarPorNome === 'function' && window.termoBusca) {
        eventosFiltrados = filtrarPorNome(eventosFiltrados);
    }
    
    eventosExibidos = eventosFiltrados;
    
    // Salvar filtros
    if (typeof salvarFiltros === 'function') {
        salvarFiltros(categoriaSelecionada, window.termoBusca || '');
    }
    
    // Renderizar usando função de renderização
    if (typeof renderizarEventos === 'function') {
        renderizarEventos(eventosFiltrados);
    }
}

// Função para configurar botões de categoria
function configurarBotoesCategoria() {
    const botoes = document.querySelectorAll('.categoria-btn');
    
    botoes.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover active de todos
            botoes.forEach(b => b.classList.remove('active'));
            
            // Adicionar active no clicado
            this.classList.add('active');
            
            // Atualizar categoria selecionada
            categoriaSelecionada = this.getAttribute('data-categoria');
            
            // Aplicar filtros
            aplicarFiltros();
        });
    });
}

// Função para limpar filtros
function limparFiltros() {
    // Resetar categoria
    categoriaSelecionada = 'todos';
    const botoes = document.querySelectorAll('.categoria-btn');
    botoes.forEach(btn => btn.classList.remove('active'));
    const btnTodos = document.querySelector('[data-categoria="todos"]');
    if (btnTodos) btnTodos.classList.add('active');
    
    // Limpar busca
    const buscaInput = document.getElementById('busca-input');
    if (buscaInput) {
        buscaInput.value = '';
        window.termoBusca = '';
    }
    
    const limparBtn = document.getElementById('limpar-busca');
    if (limparBtn) limparBtn.style.display = 'none';
    
    // Aplicar filtros
    aplicarFiltros();
}

// Configurar botão limpar filtros
function configurarLimparFiltros() {
    const btnLimpar = document.getElementById('limpar-filtros');
    if (btnLimpar) {
        btnLimpar.addEventListener('click', limparFiltros);
    }
}

// Restaurar filtros salvos
function restaurarFiltros() {
    if (typeof obterUltimosFiltros === 'function') {
        const filtros = obterUltimosFiltros();
        if (filtros) {
            categoriaSelecionada = filtros.categoria || 'todos';
            
            // Restaurar categoria no botão
            const btnCategoria = document.querySelector(`[data-categoria="${categoriaSelecionada}"]`);
            if (btnCategoria) {
                document.querySelectorAll('.categoria-btn').forEach(btn => btn.classList.remove('active'));
                btnCategoria.classList.add('active');
            }
            
            // Restaurar busca
            if (filtros.busca) {
                const buscaInput = document.getElementById('busca-input');
                if (buscaInput) {
                    buscaInput.value = filtros.busca;
                    window.termoBusca = filtros.busca;
                    const limparBtn = document.getElementById('limpar-busca');
                    if (limparBtn) limparBtn.style.display = 'block';
                }
            }
        }
    }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    // Aguardar um pouco para garantir que eventos.js foi carregado
    setTimeout(() => {
        restaurarFiltros();
        configurarBotoesCategoria();
        configurarLimparFiltros();
        aplicarFiltros();
    }, 100);
});

// Exportar funções para uso global
if (typeof window !== 'undefined') {
    window.aplicarFiltros = aplicarFiltros;
    window.categoriaSelecionada = categoriaSelecionada;
}
