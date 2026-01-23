/**
 * Sistema de Compartilhamento
 * Compartilha eventos via link ou Web Share API
 */

/**
 * Gera link único para evento
 * @param {number} eventoId - ID do evento
 * @returns {string} URL completa
 */
function gerarLinkEvento(eventoId) {
    const urlBase = window.location.origin + window.location.pathname.replace(/[^/]*$/, '');
    return `${urlBase}detalhes.html?id=${eventoId}`;
}

/**
 * Copia link para área de transferência
 * @param {number} eventoId - ID do evento
 * @returns {Promise<boolean>} Sucesso da operação
 */
async function copiarLinkEvento(eventoId) {
    const link = gerarLinkEvento(eventoId);
    
    try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(link);
            return true;
        } else {
            // Fallback para navegadores antigos
            const textArea = document.createElement('textarea');
            textArea.value = link;
            textArea.style.position = 'fixed';
            textArea.style.opacity = '0';
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            return true;
        }
    } catch (error) {
        console.error('Erro ao copiar link:', error);
        return false;
    }
}

/**
 * Compartilha evento usando Web Share API
 * @param {Object} evento - Objeto do evento
 * @returns {Promise<boolean>} Sucesso da operação
 */
async function compartilharEvento(evento) {
    const link = gerarLinkEvento(evento.id);
    const texto = `Confira este evento: ${evento.nome} - ${evento.data} em ${evento.local}`;
    
    if (navigator.share) {
        try {
            await navigator.share({
                title: evento.nome,
                text: texto,
                url: link
            });
            return true;
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error('Erro ao compartilhar:', error);
            }
            return false;
        }
    } else {
        // Fallback: copiar link
        return await copiarLinkEvento(evento.id);
    }
}

/**
 * Cria botão de compartilhar
 * @param {Object} evento - Objeto do evento
 * @returns {HTMLElement} Botão de compartilhar
 */
function criarBotaoCompartilhar(evento) {
    const botao = document.createElement('button');
    botao.className = 'btn-compartilhar';
    botao.innerHTML = '🔗 Compartilhar';
    botao.setAttribute('aria-label', 'Compartilhar evento');
    
    botao.addEventListener('click', async function() {
        const sucesso = await compartilharEvento(evento);
        if (sucesso) {
            if (navigator.share) {
                // Web Share API foi usada
                mostrarMensagem('Evento compartilhado!', 'sucesso');
            } else {
                // Link foi copiado
                mostrarMensagem('Link copiado para a área de transferência!', 'sucesso');
            }
        } else {
            mostrarMensagem('Erro ao compartilhar. Tente novamente.', 'erro');
        }
    });
    
    return botao;
}

/**
 * Mostra mensagem de feedback
 * @param {string} mensagem - Mensagem a exibir
 * @param {string} tipo - Tipo: 'sucesso' ou 'erro'
 */
function mostrarMensagem(mensagem, tipo = 'sucesso') {
    // Criar elemento de mensagem
    const mensagemEl = document.createElement('div');
    mensagemEl.className = `mensagem-feedback mensagem-${tipo}`;
    mensagemEl.textContent = mensagem;
    
    document.body.appendChild(mensagemEl);
    
    // Mostrar com animação
    setTimeout(() => {
        mensagemEl.classList.add('mostrar');
    }, 10);
    
    // Remover após 3 segundos
    setTimeout(() => {
        mensagemEl.classList.remove('mostrar');
        setTimeout(() => {
            mensagemEl.remove();
        }, 300);
    }, 3000);
}

// Exportar funções
if (typeof window !== 'undefined') {
    window.gerarLinkEvento = gerarLinkEvento;
    window.copiarLinkEvento = copiarLinkEvento;
    window.compartilharEvento = compartilharEvento;
    window.criarBotaoCompartilhar = criarBotaoCompartilhar;
}
