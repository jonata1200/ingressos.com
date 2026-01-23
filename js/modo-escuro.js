/**
 * Sistema de Modo Escuro
 * Alterna entre tema claro e escuro
 */

const TEMA_CLARO = 'claro';
const TEMA_ESCURO = 'escuro';
const CHAVE_TEMA = 'temaPreferido';

/**
 * Obtém tema salvo
 * @returns {string} Tema atual
 */
function obterTema() {
    if (typeof obterDoLocalStorage === 'function') {
        return obterDoLocalStorage(CHAVE_TEMA) || TEMA_CLARO;
    }
    try {
        return localStorage.getItem(CHAVE_TEMA) || TEMA_CLARO;
    } catch (error) {
        return TEMA_CLARO;
    }
}

/**
 * Salva tema preferido
 * @param {string} tema - Tema a salvar
 */
function salvarTema(tema) {
    if (typeof salvarNoLocalStorage === 'function') {
        salvarNoLocalStorage(CHAVE_TEMA, tema);
    } else {
        try {
            localStorage.setItem(CHAVE_TEMA, tema);
        } catch (error) {
            console.error('Erro ao salvar tema:', error);
        }
    }
}

/**
 * Aplica tema ao documento
 * @param {string} tema - Tema a aplicar
 */
function aplicarTema(tema) {
    document.documentElement.setAttribute('data-tema', tema);
    salvarTema(tema);
    
    // Atualizar botão toggle
    const toggle = document.getElementById('toggle-tema');
    if (toggle) {
        toggle.setAttribute('aria-label', tema === TEMA_ESCURO ? 'Ativar modo claro' : 'Ativar modo escuro');
        toggle.innerHTML = tema === TEMA_ESCURO ? '☀️' : '🌙';
    }
}

/**
 * Alterna entre tema claro e escuro
 */
function alternarTema() {
    const temaAtual = obterTema();
    const novoTema = temaAtual === TEMA_CLARO ? TEMA_ESCURO : TEMA_CLARO;
    aplicarTema(novoTema);
}

/**
 * Cria botão toggle de tema
 * @returns {HTMLElement} Botão toggle
 */
function criarToggleTema() {
    const toggle = document.createElement('button');
    toggle.id = 'toggle-tema';
    toggle.className = 'toggle-tema';
    toggle.setAttribute('aria-label', 'Alternar tema');
    
    const temaAtual = obterTema();
    toggle.innerHTML = temaAtual === TEMA_ESCURO ? '☀️' : '🌙';
    
    toggle.addEventListener('click', alternarTema);
    
    return toggle;
}

/**
 * Inicializa modo escuro
 */
function inicializarModoEscuro() {
    const tema = obterTema();
    aplicarTema(tema);
    
    // Adicionar toggle ao header se não existir
    const header = document.querySelector('.header-content');
    if (header && !document.getElementById('toggle-tema')) {
        const toggle = criarToggleTema();
        header.insertBefore(toggle, header.lastElementChild);
    }
}

// Inicializar ao carregar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarModoEscuro);
} else {
    inicializarModoEscuro();
}

// Exportar funções
if (typeof window !== 'undefined') {
    window.obterTema = obterTema;
    window.aplicarTema = aplicarTema;
    window.alternarTema = alternarTema;
    window.inicializarModoEscuro = inicializarModoEscuro;
}
