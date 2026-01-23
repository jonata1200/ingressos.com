/**
 * Filtros Avançados
 * Filtros por preço, data e localização
 */

let filtroPrecoMin = null;
let filtroPrecoMax = null;
let filtroDataInicio = null;
let filtroDataFim = null;
let filtroLocalizacao = '';

/**
 * Configura filtros avançados
 */
function configurarFiltrosAvancados() {
    const precoMinInput = document.getElementById('filtro-preco-min');
    const precoMaxInput = document.getElementById('filtro-preco-max');
    const dataInicioInput = document.getElementById('filtro-data-inicio');
    const dataFimInput = document.getElementById('filtro-data-fim');
    const localizacaoInput = document.getElementById('filtro-localizacao');
    
    if (precoMinInput) {
        precoMinInput.addEventListener('input', function() {
            filtroPrecoMin = this.value ? parseFloat(this.value) : null;
            if (typeof aplicarFiltrosCombinados === 'function') {
                aplicarFiltrosCombinados();
            }
        });
    }
    
    if (precoMaxInput) {
        precoMaxInput.addEventListener('input', function() {
            filtroPrecoMax = this.value ? parseFloat(this.value) : null;
            if (typeof aplicarFiltrosCombinados === 'function') {
                aplicarFiltrosCombinados();
            }
        });
    }
    
    if (dataInicioInput) {
        dataInicioInput.addEventListener('change', function() {
            filtroDataInicio = this.value || null;
            if (typeof aplicarFiltrosCombinados === 'function') {
                aplicarFiltrosCombinados();
            }
        });
    }
    
    if (dataFimInput) {
        dataFimInput.addEventListener('change', function() {
            filtroDataFim = this.value || null;
            if (typeof aplicarFiltrosCombinados === 'function') {
                aplicarFiltrosCombinados();
            }
        });
    }
    
    if (localizacaoInput) {
        localizacaoInput.addEventListener('input', function() {
            filtroLocalizacao = this.value.toLowerCase().trim();
            if (typeof aplicarFiltrosCombinados === 'function') {
                aplicarFiltrosCombinados();
            }
        });
    }
}

/**
 * Filtra eventos por faixa de preço
 * @param {Array} eventos - Array de eventos
 * @returns {Array} Array filtrado
 */
function filtrarPorPreco(eventos) {
    if (filtroPrecoMin === null && filtroPrecoMax === null) {
        return eventos;
    }
    
    return eventos.filter(evento => {
        const preco = evento.preco;
        const minOk = filtroPrecoMin === null || preco >= filtroPrecoMin;
        const maxOk = filtroPrecoMax === null || preco <= filtroPrecoMax;
        return minOk && maxOk;
    });
}

/**
 * Converte data DD/MM/YYYY para formato YYYY-MM-DD
 * @param {string} dataStr - Data no formato DD/MM/YYYY
 * @returns {string} Data no formato YYYY-MM-DD
 */
function converterDataParaInput(dataStr) {
    const partes = dataStr.split('/');
    if (partes.length !== 3) return '';
    return `${partes[2]}-${partes[1]}-${partes[0]}`;
}

/**
 * Converte data YYYY-MM-DD para objeto Date
 * @param {string} dataStr - Data no formato YYYY-MM-DD
 * @returns {Date} Objeto Date
 */
function converterDataParaComparacao(dataStr) {
    if (!dataStr) return null;
    return new Date(dataStr + 'T00:00:00');
}

/**
 * Filtra eventos por faixa de data
 * @param {Array} eventos - Array de eventos
 * @returns {Array} Array filtrado
 */
function filtrarPorData(eventos) {
    if (!filtroDataInicio && !filtroDataFim) {
        return eventos;
    }
    
    const dataInicio = filtroDataInicio ? converterDataParaComparacao(filtroDataInicio) : null;
    const dataFim = filtroDataFim ? converterDataParaComparacao(filtroDataFim) : null;
    
    return eventos.filter(evento => {
        const partes = evento.data.split('/');
        if (partes.length !== 3) return false;
        
        const dataEvento = new Date(parseInt(partes[2]), parseInt(partes[1]) - 1, parseInt(partes[0]));
        
        const inicioOk = !dataInicio || dataEvento >= dataInicio;
        const fimOk = !dataFim || dataEvento <= dataFim;
        
        return inicioOk && fimOk;
    });
}

/**
 * Filtra eventos por localização
 * @param {Array} eventos - Array de eventos
 * @returns {Array} Array filtrado
 */
function filtrarPorLocalizacao(eventos) {
    if (!filtroLocalizacao) {
        return eventos;
    }
    
    return eventos.filter(evento => {
        const local = evento.local ? evento.local.toLowerCase() : '';
        const endereco = evento.endereco ? evento.endereco.toLowerCase() : '';
        return local.includes(filtroLocalizacao) || endereco.includes(filtroLocalizacao);
    });
}

/**
 * Aplica todos os filtros avançados
 * @param {Array} eventos - Array de eventos
 * @returns {Array} Array filtrado
 */
function aplicarFiltrosAvancados(eventos) {
    let eventosFiltrados = [...eventos];
    
    eventosFiltrados = filtrarPorPreco(eventosFiltrados);
    eventosFiltrados = filtrarPorData(eventosFiltrados);
    eventosFiltrados = filtrarPorLocalizacao(eventosFiltrados);
    
    return eventosFiltrados;
}

/**
 * Limpa todos os filtros avançados
 */
function limparFiltrosAvancados() {
    filtroPrecoMin = null;
    filtroPrecoMax = null;
    filtroDataInicio = null;
    filtroDataFim = null;
    filtroLocalizacao = '';
    
    const precoMinInput = document.getElementById('filtro-preco-min');
    const precoMaxInput = document.getElementById('filtro-preco-max');
    const dataInicioInput = document.getElementById('filtro-data-inicio');
    const dataFimInput = document.getElementById('filtro-data-fim');
    const localizacaoInput = document.getElementById('filtro-localizacao');
    
    if (precoMinInput) precoMinInput.value = '';
    if (precoMaxInput) precoMaxInput.value = '';
    if (dataInicioInput) dataInicioInput.value = '';
    if (dataFimInput) dataFimInput.value = '';
    if (localizacaoInput) localizacaoInput.value = '';
    
    if (typeof aplicarFiltrosCombinados === 'function') {
        aplicarFiltrosCombinados();
    }
}


// Exportar funções
if (typeof window !== 'undefined') {
    window.configurarFiltrosAvancados = configurarFiltrosAvancados;
    window.aplicarFiltrosAvancados = aplicarFiltrosAvancados;
    window.limparFiltrosAvancados = limparFiltrosAvancados;
}
