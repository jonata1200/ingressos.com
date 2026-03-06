/**
 * Sistema de Renderização
 * Funções reutilizáveis para renderizar eventos
 */

/**
 * Renderiza eventos em um container
 * @param {Array} eventos - Array de eventos para renderizar
 * @param {string} containerId - ID do container HTML
 */
function renderizarEventos(eventos, containerId = 'eventos-container') {
    const container = document.getElementById(containerId);
    const mensagemVazia = document.getElementById('mensagem-vazia');
    
    if (!container) return;
    
    // Limpar container
    container.innerHTML = '';
    
    if (eventos.length === 0) {
        if (mensagemVazia) {
            mensagemVazia.style.display = 'block';
            container.appendChild(mensagemVazia);
        } else {
            container.innerHTML = '<p class="mensagem-vazia">Nenhum evento encontrado. Tente ajustar os filtros.</p>';
        }
        return;
    }
    
    if (mensagemVazia) {
        mensagemVazia.style.display = 'none';
    }
    
    // Renderizar cada evento
    eventos.forEach((evento, index) => {
        const card = criarCardEvento(evento);
        // Adicionar animação de entrada com delay
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        container.appendChild(card);
        
        // Animar entrada
        setTimeout(() => {
            card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 50);
    });
}

/**
 * Cria um card de evento
 * @param {Object} evento - Objeto do evento
 * @returns {HTMLElement} Elemento do card
 */
function criarCardEvento(evento) {
    const card = document.createElement('div');
    card.className = 'evento-card';
    
    const precoFormatado = typeof formatarPreco === 'function' 
        ? formatarPreco(evento.preco) 
        : new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(evento.preco);
    
    // Badge de categoria
    const badgeCategoria = evento.categoria ? `<span class="evento-badge">${evento.categoria}</span>` : '';
    
    // Indicador de ingressos disponíveis
    let indicadorIngressos = '';
    if (evento.ingressosDisponiveis !== undefined) {
        if (evento.ingressosDisponiveis === 0) {
            indicadorIngressos = '<span class="badge-esgotado">Esgotado</span>';
        } else if (evento.ingressosDisponiveis < 50) {
            indicadorIngressos = `<span class="badge-poucos">Últimas ${evento.ingressosDisponiveis} unidades!</span>`;
        }
    }
    
    // Botão de favorito
    const botaoFavorito = typeof criarBotaoFavorito === 'function' 
        ? criarBotaoFavorito(evento.id) 
        : '';
    
    card.setAttribute('data-evento-id', evento.id);
    
    card.innerHTML = `
        <div class="evento-imagem">
            <img src="${evento.imagem || 'https://via.placeholder.com/400x250/e5e7eb/6b7280?text=Sem+Imagem'}" alt="${evento.nome}" loading="lazy" onerror="this.onerror=null; this.src='https://via.placeholder.com/400x250/e5e7eb/6b7280?text=Sem+Imagem';">
            ${badgeCategoria}
            ${indicadorIngressos}
            ${botaoFavorito ? `<div class="evento-favorito-container">${botaoFavorito}</div>` : ''}
        </div>
        <div class="evento-info">
            <h3 class="evento-titulo">${evento.nome}</h3>
            <p class="evento-data">📅 ${evento.data} ${evento.hora ? 'às ' + evento.hora : ''}</p>
            <p class="evento-local">📍 ${evento.local}</p>
            <p class="evento-preco">${precoFormatado}</p>
            ${evento.ingressosDisponiveis !== undefined ? `<p class="evento-disponiveis">${evento.ingressosDisponiveis} ingressos disponíveis</p>` : ''}
            <button class="btn btn-secondary" onclick="navegarParaDetalhes(${evento.id})">Ver Detalhes</button>
        </div>
    `;
    
    return card;
}

/**
 * Renderiza detalhes completos de um evento
 * @param {Object} evento - Objeto do evento
 * @param {string} containerId - ID do container HTML
 */
function renderizarDetalhesEvento(evento, containerId = 'detalhes-content') {
    const container = document.getElementById(containerId);
    if (!container || !evento) return;
    
    const precoFormatado = typeof formatarPreco === 'function' 
        ? formatarPreco(evento.preco) 
        : new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(evento.preco);
    
    const dataFormatada = typeof formatarData === 'function' 
        ? formatarData(evento.data) 
        : evento.data;
    
    let indicadorIngressos = '';
    if (evento.ingressosDisponiveis !== undefined) {
        if (evento.ingressosDisponiveis === 0) {
            indicadorIngressos = '<p class="alerta-esgotado">⚠️ Este evento está esgotado!</p>';
        } else if (evento.ingressosDisponiveis < 50) {
            indicadorIngressos = `<p class="alerta-poucos">⚠️ Restam apenas ${evento.ingressosDisponiveis} ingressos disponíveis!</p>`;
        }
    }
    
    // Botão de favorito
    const botaoFavorito = typeof criarBotaoFavorito === 'function' 
        ? criarBotaoFavorito(evento.id) 
        : '';
    
    container.innerHTML = `
        <div class="detalhes-imagem">
            <img src="${evento.imagem || 'https://via.placeholder.com/600x400/e5e7eb/6b7280?text=Sem+Imagem'}" alt="${evento.nome}" loading="lazy" onerror="this.onerror=null; this.src='https://via.placeholder.com/600x400/e5e7eb/6b7280?text=Sem+Imagem';">
            ${botaoFavorito ? `<div class="evento-favorito-container">${botaoFavorito}</div>` : ''}
        </div>
        <div class="detalhes-info">
            <span class="detalhes-categoria">${evento.categoria}</span>
            <h1>${evento.nome}</h1>
            <div class="detalhes-meta">
                <p><strong>📅 Data:</strong> ${dataFormatada}</p>
                <p><strong>🕐 Hora:</strong> ${evento.hora || 'A definir'}</p>
                <p><strong>📍 Local:</strong> ${evento.local}</p>
                <p><strong>🏠 Endereço:</strong> ${evento.endereco || 'Não informado'}</p>
            </div>
            ${indicadorIngressos}
            <div class="detalhes-preco">${precoFormatado}</div>
            <p class="detalhes-descricao">${evento.descricao || 'Descrição não disponível.'}</p>
            <div class="detalhes-acoes-compartilhar">
                ${typeof criarBotaoCompartilhar === 'function' ? '<div id="botao-compartilhar-container"></div>' : ''}
            </div>
            <div class="detalhes-acoes">
                <label for="quantidade-ingressos">Quantidade:</label>
                <input 
                    type="number" 
                    id="quantidade-ingressos" 
                    min="1" 
                    max="${evento.ingressosDisponiveis || 10}" 
                    value="1"
                    ${evento.ingressosDisponiveis === 0 ? 'disabled' : ''}
                >
                <button 
                    class="btn btn-primary btn-large" 
                    onclick="adicionarAoCarrinhoDetalhes(${evento.id})"
                    ${evento.ingressosDisponiveis === 0 ? 'disabled' : ''}
                >
                    ${evento.ingressosDisponiveis === 0 ? 'Esgotado' : 'Adicionar ao Carrinho'}
                </button>
            </div>
        </div>
    `;
    
    // Salvar visualização
    if (typeof salvarEventoVisualizado === 'function') {
        salvarEventoVisualizado(evento.id);
    }
    
    // Adicionar botão de compartilhar
    const compartilharContainer = container.querySelector('#botao-compartilhar-container');
    if (compartilharContainer && typeof criarBotaoCompartilhar === 'function') {
        const botaoCompartilhar = criarBotaoCompartilhar(evento);
        compartilharContainer.appendChild(botaoCompartilhar);
    }
}

// Exportar funções para uso global
if (typeof window !== 'undefined') {
    window.renderizarEventos = renderizarEventos;
    window.criarCardEvento = criarCardEvento;
    window.renderizarDetalhesEvento = renderizarDetalhesEvento;
}
