/**
 * Sistema de Ordenação
 * Ordena eventos por diferentes critérios
 */

let ordenacaoAtual = 'data'; // data, preco-asc, preco-desc, nome-asc, nome-desc

/**
 * Ordena array de eventos
 * @param {Array} eventos - Array de eventos
 * @param {string} criterio - Critério de ordenação
 * @returns {Array} Array ordenado
 */
function ordenarEventos(eventos, criterio = 'data') {
    const eventosOrdenados = [...eventos];
    
    switch(criterio) {
        case 'data':
            // Ordenar por data (mais próximo primeiro)
            eventosOrdenados.sort((a, b) => {
                const dataA = converterDataParaComparacao(a.data);
                const dataB = converterDataParaComparacao(b.data);
                return dataA - dataB;
            });
            break;
            
        case 'preco-asc':
            eventosOrdenados.sort((a, b) => a.preco - b.preco);
            break;
            
        case 'preco-desc':
            eventosOrdenados.sort((a, b) => b.preco - a.preco);
            break;
            
        case 'nome-asc':
            eventosOrdenados.sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
            break;
            
        case 'nome-desc':
            eventosOrdenados.sort((a, b) => b.nome.localeCompare(a.nome, 'pt-BR'));
            break;
            
        default:
            // Manter ordem original
            break;
    }
    
    return eventosOrdenados;
}

/**
 * Converte data DD/MM/YYYY para objeto Date para comparação
 * @param {string} dataStr - Data no formato DD/MM/YYYY
 * @returns {Date} Objeto Date
 */
function converterDataParaComparacao(dataStr) {
    const partes = dataStr.split('/');
    if (partes.length !== 3) return new Date(0);
    
    const dia = parseInt(partes[0]);
    const mes = parseInt(partes[1]) - 1; // Mês é 0-indexed
    const ano = parseInt(partes[2]);
    
    return new Date(ano, mes, dia);
}

/**
 * Configura ordenação na página de eventos
 */
function configurarOrdenacao() {
    const selectOrdenacao = document.getElementById('ordenacao-select');
    if (!selectOrdenacao) return;
    
    // Restaurar ordenação salva
    if (typeof storage !== 'undefined') {
        const ordenacaoSalva = storage.obter('ordenacaoAtual');
        if (ordenacaoSalva) {
            ordenacaoAtual = ordenacaoSalva;
            selectOrdenacao.value = ordenacaoSalva;
        }
    }
    
    selectOrdenacao.addEventListener('change', function() {
        ordenacaoAtual = this.value;
        
        // Salvar preferência
        if (typeof storage !== 'undefined') {
            storage.salvar('ordenacaoAtual', ordenacaoAtual);
        }
        
        // Aplicar ordenação
        if (typeof aplicarFiltros === 'function') {
            aplicarFiltros();
        }
    });
}

/**
 * Aplica ordenação aos eventos filtrados
 * @param {Array} eventos - Array de eventos já filtrados
 * @returns {Array} Array ordenado
 */
function aplicarOrdenacao(eventos) {
    return ordenarEventos(eventos, ordenacaoAtual);
}

// Exportar funções
if (typeof window !== 'undefined') {
    window.ordenarEventos = ordenarEventos;
    window.configurarOrdenacao = configurarOrdenacao;
    window.aplicarOrdenacao = aplicarOrdenacao;
    window.ordenacaoAtual = ordenacaoAtual;
}
