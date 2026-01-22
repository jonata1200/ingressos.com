/**
 * Sistema de Filtros
 * Implementa filtros por categoria e combina com busca
 */

let categoriaSelecionada = 'todos';
let eventosExibidos = [];

// Dados mockados de eventos (será substituído na FASE 3)
const eventosMock = [
    {
        id: 1,
        nome: 'Show de Rock Nacional',
        data: '15/12/2024',
        local: 'Teatro Municipal - São Paulo',
        preco: 120.00,
        categoria: 'Show',
        imagem: 'https://via.placeholder.com/400x250/6366f1/ffffff?text=Show+de+Rock'
    },
    {
        id: 2,
        nome: 'Hamlet - Clássico do Teatro',
        data: '20/12/2024',
        local: 'Teatro Nacional - Rio de Janeiro',
        preco: 80.00,
        categoria: 'Teatro',
        imagem: 'https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Peça+de+Teatro'
    },
    {
        id: 3,
        nome: 'Campeonato Brasileiro',
        data: '22/12/2024',
        local: 'Estádio do Maracanã - Rio de Janeiro',
        preco: 150.00,
        categoria: 'Esporte',
        imagem: 'https://via.placeholder.com/400x250/ec4899/ffffff?text=Jogo+de+Futebol'
    },
    {
        id: 4,
        nome: 'Festival de Verão 2024',
        data: '30/12/2024',
        local: 'Praia de Copacabana - Rio de Janeiro',
        preco: 200.00,
        categoria: 'Festival',
        imagem: 'https://via.placeholder.com/400x250/10b981/ffffff?text=Festival+de+Música'
    },
    {
        id: 5,
        nome: 'Concerto de Orquestra',
        data: '18/12/2024',
        local: 'Sala São Paulo - São Paulo',
        preco: 90.00,
        categoria: 'Show',
        imagem: 'https://via.placeholder.com/400x250/6366f1/ffffff?text=Concerto'
    },
    {
        id: 6,
        nome: 'Romeu e Julieta',
        data: '25/12/2024',
        local: 'Teatro Municipal - São Paulo',
        preco: 75.00,
        categoria: 'Teatro',
        imagem: 'https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Teatro'
    }
];

// Função para filtrar eventos por categoria
function filtrarPorCategoria(eventos) {
    if (categoriaSelecionada === 'todos') {
        return eventos;
    }
    
    return eventos.filter(evento => evento.categoria === categoriaSelecionada);
}

// Função para renderizar eventos
function renderizarEventos(eventos) {
    const container = document.getElementById('eventos-container');
    const mensagemVazia = document.getElementById('mensagem-vazia');
    
    if (!container) return;
    
    // Limpar container
    container.innerHTML = '';
    
    if (eventos.length === 0) {
        if (mensagemVazia) {
            mensagemVazia.style.display = 'block';
            container.appendChild(mensagemVazia);
        }
        return;
    }
    
    if (mensagemVazia) {
        mensagemVazia.style.display = 'none';
    }
    
    // Renderizar cada evento
    eventos.forEach(evento => {
        const card = criarCardEvento(evento);
        container.appendChild(card);
    });
}

// Função para criar card de evento
function criarCardEvento(evento) {
    const card = document.createElement('div');
    card.className = 'evento-card';
    
    const precoFormatado = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(evento.preco);
    
    card.innerHTML = `
        <div class="evento-imagem">
            <img src="${evento.imagem}" alt="${evento.nome}">
        </div>
        <div class="evento-info">
            <h3 class="evento-titulo">${evento.nome}</h3>
            <p class="evento-data">📅 ${evento.data}</p>
            <p class="evento-local">📍 ${evento.local}</p>
            <p class="evento-preco">${precoFormatado}</p>
            <button class="btn btn-secondary" onclick="navegarParaDetalhes(${evento.id})">Ver Detalhes</button>
        </div>
    `;
    
    return card;
}

// Função principal para aplicar filtros
function aplicarFiltros() {
    let eventosFiltrados = [...eventosMock];
    
    // Aplicar filtro de categoria
    eventosFiltrados = filtrarPorCategoria(eventosFiltrados);
    
    // Aplicar filtro de busca (se existir)
    if (typeof filtrarPorNome === 'function' && window.termoBusca) {
        eventosFiltrados = filtrarPorNome(eventosFiltrados);
    }
    
    eventosExibidos = eventosFiltrados;
    renderizarEventos(eventosFiltrados);
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

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    configurarBotoesCategoria();
    configurarLimparFiltros();
    aplicarFiltros();
});

// Exportar funções para uso global
if (typeof window !== 'undefined') {
    window.aplicarFiltros = aplicarFiltros;
    window.categoriaSelecionada = categoriaSelecionada;
}
