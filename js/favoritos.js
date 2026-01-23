/**
 * Sistema de Favoritos
 * Gerencia favoritos de eventos
 */

/**
 * Obtém lista de favoritos
 * @returns {Array} Array de IDs de eventos favoritados
 */
function obterFavoritos() {
    if (typeof obterDoLocalStorage === 'function') {
        return obterDoLocalStorage('favoritos') || [];
    }
    try {
        const favoritos = localStorage.getItem('favoritos');
        return favoritos ? JSON.parse(favoritos) : [];
    } catch (error) {
        console.error('Erro ao obter favoritos:', error);
        return [];
    }
}

/**
 * Salva lista de favoritos
 * @param {Array} favoritos - Array de IDs
 */
function salvarFavoritos(favoritos) {
    if (typeof salvarNoLocalStorage === 'function') {
        salvarNoLocalStorage('favoritos', favoritos);
    } else {
        try {
            localStorage.setItem('favoritos', JSON.stringify(favoritos));
        } catch (error) {
            console.error('Erro ao salvar favoritos:', error);
        }
    }
}

/**
 * Verifica se evento está favoritado
 * @param {number} eventoId - ID do evento
 * @returns {boolean} True se favoritado
 */
function isFavoritado(eventoId) {
    const favoritos = obterFavoritos();
    return favoritos.includes(eventoId);
}

/**
 * Alterna favorito (adiciona ou remove)
 * @param {number} eventoId - ID do evento
 * @returns {boolean} True se foi favoritado, false se desfavoritado
 */
function toggleFavorito(eventoId) {
    const favoritos = obterFavoritos();
    const index = favoritos.indexOf(eventoId);
    
    if (index > -1) {
        // Remover
        favoritos.splice(index, 1);
        salvarFavoritos(favoritos);
        atualizarIndicadoresFavorito(eventoId, false);
        return false;
    } else {
        // Adicionar
        favoritos.push(eventoId);
        salvarFavoritos(favoritos);
        atualizarIndicadoresFavorito(eventoId, true);
        return true;
    }
}

/**
 * Atualiza indicadores visuais de favorito
 * @param {number} eventoId - ID do evento
 * @param {boolean} favoritado - Se está favoritado
 */
function atualizarIndicadoresFavorito(eventoId, favoritado) {
    const botoes = document.querySelectorAll(`[data-evento-id="${eventoId}"] .btn-favorito`);
    botoes.forEach(btn => {
        if (favoritado) {
            btn.classList.add('favoritado');
            btn.innerHTML = '❤️';
            btn.setAttribute('aria-label', 'Remover dos favoritos');
        } else {
            btn.classList.remove('favoritado');
            btn.innerHTML = '🤍';
            btn.setAttribute('aria-label', 'Adicionar aos favoritos');
        }
    });
}

/**
 * Renderiza botão de favorito
 * @param {number} eventoId - ID do evento
 * @returns {string} HTML do botão
 */
function criarBotaoFavorito(eventoId) {
    const favoritado = isFavoritado(eventoId);
    const icon = favoritado ? '❤️' : '🤍';
    const ariaLabel = favoritado ? 'Remover dos favoritos' : 'Adicionar aos favoritos';
    
    return `<button class="btn-favorito ${favoritado ? 'favoritado' : ''}" onclick="toggleFavorito(${eventoId})" aria-label="${ariaLabel}">${icon}</button>`;
}

// Exportar funções
if (typeof window !== 'undefined') {
    window.obterFavoritos = obterFavoritos;
    window.salvarFavoritos = salvarFavoritos;
    window.isFavoritado = isFavoritado;
    window.toggleFavorito = toggleFavorito;
    window.atualizarIndicadoresFavorito = atualizarIndicadoresFavorito;
    window.criarBotaoFavorito = criarBotaoFavorito;
}
