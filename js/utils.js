/**
 * Funções Utilitárias
 * Funções auxiliares para formatação e manipulação de dados
 */

/**
 * Formata um número como preço em Real brasileiro
 * @param {number} preco - Valor numérico do preço
 * @returns {string} Preço formatado (ex: "R$ 150,50")
 */
function formatarPreco(preco) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(preco);
}

/**
 * Formata uma data para formato legível
 * @param {string} data - Data no formato "DD/MM/YYYY"
 * @returns {string} Data formatada (ex: "25 de Dezembro de 2024")
 */
function formatarData(data) {
    const meses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    
    const partes = data.split('/');
    if (partes.length !== 3) return data;
    
    const dia = partes[0];
    const mes = parseInt(partes[1]) - 1;
    const ano = partes[2];
    
    if (mes < 0 || mes > 11) return data;
    
    return `${dia} de ${meses[mes]} de ${ano}`;
}

/**
 * Obtém um evento pelo ID
 * @param {number} id - ID do evento
 * @returns {object|null} Objeto do evento ou null se não encontrado
 */
function obterEventoPorId(id) {
    if (typeof window !== 'undefined' && window.eventos) {
        return window.eventos.find(evento => evento.id === parseInt(id)) || null;
    }
    return null;
}

/**
 * Filtra eventos por múltiplos critérios
 * @param {Array} eventos - Array de eventos
 * @param {Object} filtros - Objeto com critérios de filtro
 * @returns {Array} Array de eventos filtrados
 */
function filtrarEventos(eventos, filtros = {}) {
    let eventosFiltrados = [...eventos];
    
    // Filtro por categoria
    if (filtros.categoria && filtros.categoria !== 'todos') {
        eventosFiltrados = eventosFiltrados.filter(evento => 
            evento.categoria === filtros.categoria
        );
    }
    
    // Filtro por nome (busca)
    if (filtros.busca && filtros.busca.trim() !== '') {
        const termo = filtros.busca.toLowerCase();
        eventosFiltrados = eventosFiltrados.filter(evento => {
            const nome = evento.nome.toLowerCase();
            const local = evento.local ? evento.local.toLowerCase() : '';
            return nome.includes(termo) || local.includes(termo);
        });
    }
    
    // Filtro por destaque
    if (filtros.destaque !== undefined) {
        eventosFiltrados = eventosFiltrados.filter(evento => 
            evento.destaque === filtros.destaque
        );
    }
    
    return eventosFiltrados;
}

/**
 * Funções para gerenciar LocalStorage
 */
const storage = {
    salvar(chave, dados) {
        try {
            localStorage.setItem(chave, JSON.stringify(dados));
            return true;
        } catch (error) {
            console.error('Erro ao salvar no LocalStorage:', error);
            return false;
        }
    },
    
    obter(chave) {
        try {
            const dados = localStorage.getItem(chave);
            return dados ? JSON.parse(dados) : null;
        } catch (error) {
            console.error('Erro ao obter do LocalStorage:', error);
            return null;
        }
    },
    
    remover(chave) {
        try {
            localStorage.removeItem(chave);
            return true;
        } catch (error) {
            console.error('Erro ao remover do LocalStorage:', error);
            return false;
        }
    },
    
    limpar() {
        try {
            localStorage.clear();
            return true;
        } catch (error) {
            console.error('Erro ao limpar LocalStorage:', error);
            return false;
        }
    }
};

/**
 * Salva evento visualizado no histórico
 * @param {number} eventoId - ID do evento
 */
function salvarEventoVisualizado(eventoId) {
    const historico = storage.obter('historicoVisualizacoes') || [];
    
    // Remove se já existe
    const index = historico.indexOf(eventoId);
    if (index > -1) {
        historico.splice(index, 1);
    }
    
    // Adiciona no início
    historico.unshift(eventoId);
    
    // Limita a 10 itens
    if (historico.length > 10) {
        historico.pop();
    }
    
    storage.salvar('historicoVisualizacoes', historico);
}

/**
 * Obtém histórico de visualizações
 * @returns {Array} Array de IDs de eventos visualizados
 */
function obterHistoricoVisualizacoes() {
    return storage.obter('historicoVisualizacoes') || [];
}

/**
 * Salva filtros selecionados
 * @param {string} categoria - Categoria selecionada
 * @param {string} busca - Termo de busca
 */
function salvarFiltros(categoria, busca) {
    storage.salvar('filtrosUltimos', {
        categoria: categoria,
        busca: busca,
        timestamp: Date.now()
    });
}

/**
 * Obtém últimos filtros salvos
 * @returns {Object|null} Objeto com categoria e busca ou null
 */
function obterUltimosFiltros() {
    const filtros = storage.obter('filtrosUltimos');
    
    // Retorna null se os filtros são muito antigos (mais de 1 hora)
    if (filtros && filtros.timestamp) {
        const umaHora = 60 * 60 * 1000;
        if (Date.now() - filtros.timestamp > umaHora) {
            return null;
        }
    }
    
    return filtros;
}

// Exportar funções para uso global
if (typeof window !== 'undefined') {
    window.formatarPreco = formatarPreco;
    window.formatarData = formatarData;
    window.obterEventoPorId = obterEventoPorId;
    window.filtrarEventos = filtrarEventos;
    window.storage = storage;
    window.salvarEventoVisualizado = salvarEventoVisualizado;
    window.obterHistoricoVisualizacoes = obterHistoricoVisualizacoes;
    window.salvarFiltros = salvarFiltros;
    window.obterUltimosFiltros = obterUltimosFiltros;
}
