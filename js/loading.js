/**
 * Sistema de Loading States
 * Gerencia spinners e skeleton loaders
 */

/**
 * Cria um spinner de carregamento
 * @param {string} mensagem - Mensagem opcional
 * @returns {HTMLElement} Elemento do spinner
 */
function criarSpinner(mensagem = 'Carregando...') {
    const spinner = document.createElement('div');
    spinner.className = 'loading-spinner';
    spinner.innerHTML = `
        <div class="spinner"></div>
        <p class="spinner-mensagem">${mensagem}</p>
    `;
    return spinner;
}

/**
 * Mostra spinner em um container
 * @param {string} containerId - ID do container
 * @param {string} mensagem - Mensagem opcional
 */
function mostrarSpinner(containerId, mensagem) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const spinner = criarSpinner(mensagem);
    spinner.id = 'loading-spinner';
    container.appendChild(spinner);
}

/**
 * Remove spinner de um container
 * @param {string} containerId - ID do container
 */
function removerSpinner(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const spinner = container.querySelector('#loading-spinner');
    if (spinner) {
        spinner.remove();
    }
}

/**
 * Cria skeleton loader para card de evento
 * @returns {HTMLElement} Elemento skeleton
 */
function criarSkeletonCard() {
    const skeleton = document.createElement('div');
    skeleton.className = 'skeleton-card';
    skeleton.innerHTML = `
        <div class="skeleton-image"></div>
        <div class="skeleton-content">
            <div class="skeleton-line skeleton-title"></div>
            <div class="skeleton-line skeleton-text"></div>
            <div class="skeleton-line skeleton-text short"></div>
            <div class="skeleton-line skeleton-price"></div>
            <div class="skeleton-button"></div>
        </div>
    `;
    return skeleton;
}

/**
 * Mostra skeleton loaders em um container
 * @param {string} containerId - ID do container
 * @param {number} quantidade - Quantidade de skeletons
 */
function mostrarSkeletons(containerId, quantidade = 6) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // Limpar container
    container.innerHTML = '';
    
    // Adicionar skeletons
    for (let i = 0; i < quantidade; i++) {
        const skeleton = criarSkeletonCard();
        container.appendChild(skeleton);
    }
}

/**
 * Remove skeletons de um container
 * @param {string} containerId - ID do container
 */
function removerSkeletons(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const skeletons = container.querySelectorAll('.skeleton-card');
    skeletons.forEach(skeleton => skeleton.remove());
}

/**
 * Mostra loading durante operação assíncrona
 * @param {Function} operacao - Função assíncrona
 * @param {string} containerId - ID do container
 * @param {string} mensagem - Mensagem de loading
 */
async function executarComLoading(operacao, containerId, mensagem = 'Carregando...') {
    mostrarSpinner(containerId, mensagem);
    try {
        await operacao();
    } finally {
        removerSpinner(containerId);
    }
}

// Exportar funções
if (typeof window !== 'undefined') {
    window.criarSpinner = criarSpinner;
    window.mostrarSpinner = mostrarSpinner;
    window.removerSpinner = removerSpinner;
    window.criarSkeletonCard = criarSkeletonCard;
    window.mostrarSkeletons = mostrarSkeletons;
    window.removerSkeletons = removerSkeletons;
    window.executarComLoading = executarComLoading;
}
