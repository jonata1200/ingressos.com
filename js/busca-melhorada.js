/**
 * Busca Melhorada
 * Autocomplete, sugestões e histórico de buscas
 */

let historicoBuscas = [];
const MAX_HISTORICO = 10;

/**
 * Carrega histórico de buscas do LocalStorage
 */
function carregarHistoricoBuscas() {
    if (typeof obterDoLocalStorage === 'function') {
        historicoBuscas = obterDoLocalStorage('historicoBuscas') || [];
    } else {
        try {
            const historico = localStorage.getItem('historicoBuscas');
            historicoBuscas = historico ? JSON.parse(historico) : [];
        } catch (error) {
            historicoBuscas = [];
        }
    }
}

/**
 * Salva histórico de buscas no LocalStorage
 */
function salvarHistoricoBuscas() {
    if (typeof salvarNoLocalStorage === 'function') {
        salvarNoLocalStorage('historicoBuscas', historicoBuscas);
    } else {
        try {
            localStorage.setItem('historicoBuscas', JSON.stringify(historicoBuscas));
        } catch (error) {
            console.error('Erro ao salvar histórico de buscas:', error);
        }
    }
}

/**
 * Adiciona termo ao histórico
 * @param {string} termo - Termo de busca
 */
function adicionarAoHistorico(termo) {
    if (!termo || termo.trim() === '') return;
    
    const termoLower = termo.toLowerCase().trim();
    
    // Remover se já existir
    historicoBuscas = historicoBuscas.filter(h => h.toLowerCase() !== termoLower);
    
    // Adicionar no início
    historicoBuscas.unshift(termo);
    
    // Limitar tamanho
    if (historicoBuscas.length > MAX_HISTORICO) {
        historicoBuscas = historicoBuscas.slice(0, MAX_HISTORICO);
    }
    
    salvarHistoricoBuscas();
}

/**
 * Gera sugestões de busca baseado nos eventos
 * @param {string} termo - Termo parcial
 * @returns {Array} Array de sugestões
 */
function gerarSugestoes(termo) {
    if (!termo || termo.length < 2) return [];
    
    if (!window.eventos) return [];
    
    const termoLower = termo.toLowerCase();
    const sugestoes = new Set();
    
    window.eventos.forEach(evento => {
        // Sugestões por nome
        if (evento.nome.toLowerCase().includes(termoLower)) {
            const palavras = evento.nome.split(' ');
            palavras.forEach(palavra => {
                if (palavra.toLowerCase().startsWith(termoLower) && palavra.length > termo.length) {
                    sugestoes.add(palavra);
                }
            });
        }
        
        // Sugestões por local
        if (evento.local && evento.local.toLowerCase().includes(termoLower)) {
            sugestoes.add(evento.local);
        }
        
        // Sugestões por categoria
        if (evento.categoria && evento.categoria.toLowerCase().includes(termoLower)) {
            sugestoes.add(evento.categoria);
        }
    });
    
    // Adicionar histórico relevante
    historicoBuscas.forEach(historico => {
        if (historico.toLowerCase().includes(termoLower)) {
            sugestoes.add(historico);
        }
    });
    
    return Array.from(sugestoes).slice(0, 5);
}

/**
 * Cria dropdown de sugestões
 * @param {Array} sugestoes - Array de sugestões
 * @returns {HTMLElement} Elemento do dropdown
 */
function criarDropdownSugestoes(sugestoes) {
    const dropdown = document.createElement('div');
    dropdown.className = 'sugestoes-dropdown';
    dropdown.id = 'sugestoes-dropdown';
    
    if (sugestoes.length === 0) {
        dropdown.style.display = 'none';
        return dropdown;
    }
    
    const lista = document.createElement('ul');
    lista.className = 'sugestoes-lista';
    
    sugestoes.forEach(sugestao => {
        const item = document.createElement('li');
        item.className = 'sugestao-item';
        item.textContent = sugestao;
        item.addEventListener('click', function() {
            const buscaInput = document.getElementById('busca-input');
            if (buscaInput) {
                buscaInput.value = sugestao;
                if (typeof aplicarFiltrosCombinados === 'function') {
                    aplicarFiltrosCombinados();
                }
                esconderSugestoes();
            }
        });
        lista.appendChild(item);
    });
    
    dropdown.appendChild(lista);
    return dropdown;
}

/**
 * Mostra sugestões
 * @param {Array} sugestoes - Array de sugestões
 */
function mostrarSugestoes(sugestoes) {
    esconderSugestoes();
    
    const buscaContainer = document.querySelector('.busca-container');
    if (!buscaContainer) return;
    
    const dropdown = criarDropdownSugestoes(sugestoes);
    buscaContainer.appendChild(dropdown);
}

/**
 * Esconde sugestões
 */
function esconderSugestoes() {
    const dropdown = document.getElementById('sugestoes-dropdown');
    if (dropdown) {
        dropdown.remove();
    }
}

/**
 * Configura busca melhorada
 */
function configurarBuscaMelhorada() {
    const buscaInput = document.getElementById('busca-input');
    if (!buscaInput) return;
    
    carregarHistoricoBuscas();
    
    let timeoutId;
    
    buscaInput.addEventListener('input', function() {
        const termo = this.value.trim();
        
        clearTimeout(timeoutId);
        
        if (termo.length >= 2) {
            timeoutId = setTimeout(() => {
                const sugestoes = gerarSugestoes(termo);
                mostrarSugestoes(sugestoes);
            }, 300);
        } else {
            esconderSugestoes();
        }
    });
    
    buscaInput.addEventListener('focus', function() {
        const termo = this.value.trim();
        if (termo.length >= 2) {
            const sugestoes = gerarSugestoes(termo);
            mostrarSugestoes(sugestoes);
        } else if (historicoBuscas.length > 0) {
            mostrarSugestoes(historicoBuscas.slice(0, 5));
        }
    });
    
    // Esconder ao clicar fora
    document.addEventListener('click', function(e) {
        if (!buscaInput.contains(e.target) && !document.getElementById('sugestoes-dropdown')?.contains(e.target)) {
            esconderSugestoes();
        }
    });
    
    // Adicionar ao histórico ao buscar
    const formBusca = buscaInput.closest('form') || buscaInput.parentElement;
    if (formBusca) {
        formBusca.addEventListener('submit', function(e) {
            e.preventDefault();
            const termo = buscaInput.value.trim();
            if (termo) {
                adicionarAoHistorico(termo);
            }
        });
    }
    
    // Adicionar ao histórico ao pressionar Enter
    buscaInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const termo = this.value.trim();
            if (termo) {
                adicionarAoHistorico(termo);
                esconderSugestoes();
            }
        }
    });
}

/**
 * Limpa histórico de buscas
 */
function limparHistoricoBuscas() {
    historicoBuscas = [];
    salvarHistoricoBuscas();
}

// Exportar funções
if (typeof window !== 'undefined') {
    window.configurarBuscaMelhorada = configurarBuscaMelhorada;
    window.adicionarAoHistorico = adicionarAoHistorico;
    window.limparHistoricoBuscas = limparHistoricoBuscas;
}
