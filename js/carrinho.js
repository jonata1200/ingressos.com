/**
 * Sistema de Carrinho de Compras
 * Gerencia adição, remoção e atualização de itens no carrinho
 */

/**
 * Obtém o carrinho do LocalStorage
 * @returns {Array} Array de itens do carrinho
 */
function obterCarrinho() {
    if (typeof storage !== 'undefined') {
        return storage.obter('carrinho') || [];
    }
    try {
        const carrinho = localStorage.getItem('carrinho');
        return carrinho ? JSON.parse(carrinho) : [];
    } catch (error) {
        console.error('Erro ao obter carrinho:', error);
        return [];
    }
}

/**
 * Salva o carrinho no LocalStorage
 * @param {Array} carrinho - Array de itens do carrinho
 * @returns {boolean} Sucesso da operação
 */
function salvarCarrinho(carrinho) {
    if (typeof storage !== 'undefined') {
        return storage.salvar('carrinho', carrinho);
    }
    try {
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        return true;
    } catch (error) {
        console.error('Erro ao salvar carrinho:', error);
        return false;
    }
}

/**
 * Limpa o carrinho completamente
 */
function limparCarrinho() {
    salvarCarrinho([]);
    atualizarContadorCarrinho();
}

/**
 * Conta o total de itens no carrinho
 * @returns {number} Quantidade total de itens
 */
function contarItensCarrinho() {
    const carrinho = obterCarrinho();
    return carrinho.reduce((total, item) => total + item.quantidade, 0);
}

/**
 * Adiciona um evento ao carrinho
 * @param {number} eventoId - ID do evento
 * @param {number} quantidade - Quantidade de ingressos
 * @returns {Object} Resultado da operação {sucesso: boolean, mensagem: string}
 */
function adicionarAoCarrinho(eventoId, quantidade) {
    // Validações
    if (!eventoId || quantidade <= 0) {
        return { sucesso: false, mensagem: 'Quantidade inválida!' };
    }

    // Obter evento
    const evento = obterEventoPorId(eventoId);
    if (!evento) {
        return { sucesso: false, mensagem: 'Evento não encontrado!' };
    }

    // Verificar ingressos disponíveis
    if (evento.ingressosDisponiveis === 0) {
        return { sucesso: false, mensagem: 'Este evento está esgotado!' };
    }

    // Obter carrinho atual
    const carrinho = obterCarrinho();
    
    // Verificar se evento já está no carrinho
    const itemExistente = carrinho.find(item => item.eventoId === eventoId);
    
    if (itemExistente) {
        // Calcular nova quantidade total
        const novaQuantidadeTotal = itemExistente.quantidade + quantidade;
        
        // Validar se não excede disponível
        if (novaQuantidadeTotal > evento.ingressosDisponiveis) {
            return { 
                sucesso: false, 
                mensagem: `Apenas ${evento.ingressosDisponiveis} ingressos disponíveis. Você já tem ${itemExistente.quantidade} no carrinho.` 
            };
        }
        
        // Atualizar quantidade
        itemExistente.quantidade = novaQuantidadeTotal;
        itemExistente.subtotal = itemExistente.precoUnitario * novaQuantidadeTotal;
    } else {
        // Validar quantidade não excede disponível
        if (quantidade > evento.ingressosDisponiveis) {
            return { 
                sucesso: false, 
                mensagem: `Apenas ${evento.ingressosDisponiveis} ingressos disponíveis!` 
            };
        }
        
        // Adicionar novo item
        const novoItem = {
            eventoId: evento.id,
            nome: evento.nome,
            data: evento.data,
            local: evento.local,
            precoUnitario: evento.preco,
            quantidade: quantidade,
            subtotal: evento.preco * quantidade,
            imagem: evento.imagem
        };
        
        carrinho.push(novoItem);
    }
    
    // Salvar carrinho
    if (salvarCarrinho(carrinho)) {
        atualizarContadorCarrinho();
        return { 
            sucesso: true, 
            mensagem: `${quantidade} ingresso(s) adicionado(s) ao carrinho!` 
        };
    } else {
        return { sucesso: false, mensagem: 'Erro ao salvar no carrinho!' };
    }
}

/**
 * Remove um item do carrinho
 * @param {number} eventoId - ID do evento
 */
function removerDoCarrinho(eventoId) {
    const carrinho = obterCarrinho();
    const carrinhoAtualizado = carrinho.filter(item => item.eventoId !== eventoId);
    
    salvarCarrinho(carrinhoAtualizado);
    atualizarContadorCarrinho();
    
    // Re-renderizar se estiver na página do carrinho
    if (document.getElementById('carrinho-itens')) {
        renderizarCarrinho();
    }
}

/**
 * Atualiza a quantidade de um item no carrinho
 * @param {number} eventoId - ID do evento
 * @param {number} novaQuantidade - Nova quantidade
 * @returns {Object} Resultado da operação
 */
function atualizarQuantidade(eventoId, novaQuantidade) {
    // Validações
    if (novaQuantidade <= 0) {
        return { sucesso: false, mensagem: 'Quantidade deve ser maior que zero!' };
    }

    // Obter evento para validar disponibilidade
    const evento = obterEventoPorId(eventoId);
    if (!evento) {
        return { sucesso: false, mensagem: 'Evento não encontrado!' };
    }

    // Validar disponibilidade
    if (novaQuantidade > evento.ingressosDisponiveis) {
        return { 
            sucesso: false, 
            mensagem: `Apenas ${evento.ingressosDisponiveis} ingressos disponíveis!` 
        };
    }

    // Obter carrinho
    const carrinho = obterCarrinho();
    const item = carrinho.find(item => item.eventoId === eventoId);
    
    if (!item) {
        return { sucesso: false, mensagem: 'Item não encontrado no carrinho!' };
    }

    // Atualizar quantidade e subtotal
    item.quantidade = novaQuantidade;
    item.subtotal = item.precoUnitario * novaQuantidade;

    // Salvar carrinho
    if (salvarCarrinho(carrinho)) {
        atualizarContadorCarrinho();
        renderizarCarrinho();
        return { sucesso: true };
    } else {
        return { sucesso: false, mensagem: 'Erro ao atualizar carrinho!' };
    }
}

/**
 * Calcula o subtotal de um item
 * @param {Object} item - Item do carrinho
 * @returns {number} Subtotal
 */
function calcularSubtotal(item) {
    return item.precoUnitario * item.quantidade;
}

/**
 * Calcula o total do carrinho
 * @returns {number} Total do carrinho
 */
function calcularTotalCarrinho() {
    const carrinho = obterCarrinho();
    return carrinho.reduce((total, item) => total + item.subtotal, 0);
}

/**
 * Calcula a quantidade total de ingressos
 * @returns {number} Quantidade total
 */
function calcularQuantidadeTotal() {
    return contarItensCarrinho();
}

/**
 * Renderiza o carrinho na página
 */
function renderizarCarrinho() {
    const container = document.getElementById('carrinho-itens');
    const resumo = document.getElementById('carrinho-resumo');
    const carrinhoVazio = document.getElementById('carrinho-vazio');
    
    if (!container) return;
    
    const carrinho = obterCarrinho();
    
    // Limpar container
    container.innerHTML = '';
    
    if (carrinho.length === 0) {
        // Mostrar mensagem de carrinho vazio
        if (carrinhoVazio) {
            carrinhoVazio.style.display = 'block';
        }
        if (resumo) {
            resumo.style.display = 'none';
        }
        return;
    }
    
    // Esconder mensagem de vazio
    if (carrinhoVazio) {
        carrinhoVazio.style.display = 'none';
    }
    if (resumo) {
        resumo.style.display = 'block';
    }
    
    // Renderizar cada item
    carrinho.forEach(item => {
        const itemElement = criarItemCarrinho(item);
        container.appendChild(itemElement);
    });
    
    // Atualizar resumo
    atualizarResumo();
}

/**
 * Cria o HTML de um item do carrinho
 * @param {Object} item - Item do carrinho
 * @returns {HTMLElement} Elemento do item
 */
function criarItemCarrinho(item) {
    const div = document.createElement('div');
    div.className = 'carrinho-item';
    
    const precoUnitarioFormatado = typeof formatarPreco === 'function' 
        ? formatarPreco(item.precoUnitario) 
        : new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.precoUnitario);
    
    const subtotalFormatado = typeof formatarPreco === 'function' 
        ? formatarPreco(item.subtotal) 
        : new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.subtotal);
    
    // Obter evento para validar disponibilidade
    const evento = obterEventoPorId(item.eventoId);
    const maxQuantidade = evento ? evento.ingressosDisponiveis : item.quantidade;
    
    div.innerHTML = `
        <div class="carrinho-item-imagem">
            <img src="${item.imagem}" alt="${item.nome}" onerror="this.src='https://via.placeholder.com/120x120/e5e7eb/6b7280?text=Sem+Imagem'">
        </div>
        <div class="carrinho-item-info">
            <h3 class="carrinho-item-titulo">${item.nome}</h3>
            <p class="carrinho-item-detalhes">📅 ${item.data} | 📍 ${item.local}</p>
            <p class="carrinho-item-preco-unitario">${precoUnitarioFormatado} cada</p>
            <div class="carrinho-item-acoes">
                <div class="carrinho-item-quantidade">
                    <label>Quantidade:</label>
                    <button class="btn-quantidade" onclick="diminuirQuantidade(${item.eventoId})" ${item.quantidade <= 1 ? 'disabled' : ''}>-</button>
                    <input 
                        type="number" 
                        id="quantidade-${item.eventoId}" 
                        value="${item.quantidade}" 
                        min="1" 
                        max="${maxQuantidade}"
                        onchange="atualizarQuantidadeInput(${item.eventoId})"
                    >
                    <button class="btn-quantidade" onclick="aumentarQuantidade(${item.eventoId})" ${item.quantidade >= maxQuantidade ? 'disabled' : ''}>+</button>
                </div>
                <button class="btn-remover" onclick="removerDoCarrinho(${item.eventoId})">Remover</button>
            </div>
        </div>
        <div class="carrinho-item-preco">
            ${subtotalFormatado}
        </div>
    `;
    
    return div;
}

/**
 * Atualiza o resumo do pedido
 */
function atualizarResumo() {
    const subtotalElement = document.getElementById('resumo-subtotal');
    const totalElement = document.getElementById('resumo-total');
    const taxaElement = document.getElementById('resumo-taxa');
    
    const subtotal = calcularTotalCarrinho();
    const taxa = subtotal * 0.1; // 10% de taxa de serviço
    const total = subtotal + taxa;
    
    const subtotalFormatado = typeof formatarPreco === 'function' 
        ? formatarPreco(subtotal) 
        : new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(subtotal);
    
    const taxaFormatada = typeof formatarPreco === 'function' 
        ? formatarPreco(taxa) 
        : new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(taxa);
    
    const totalFormatado = typeof formatarPreco === 'function' 
        ? formatarPreco(total) 
        : new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total);
    
    if (subtotalElement) subtotalElement.textContent = subtotalFormatado;
    if (taxaElement) taxaElement.textContent = taxaFormatada;
    if (totalElement) totalElement.textContent = totalFormatado;
}

/**
 * Atualiza o contador do carrinho no header
 */
function atualizarContadorCarrinho() {
    const total = contarItensCarrinho();
    const badges = document.querySelectorAll('.carrinho-badge');
    
    badges.forEach(badge => {
        if (total > 0) {
            badge.textContent = total;
            badge.style.display = 'flex';
        } else {
            badge.textContent = '0';
            badge.style.display = 'none';
        }
    });
}

/**
 * Funções auxiliares para botões de quantidade
 */
function aumentarQuantidade(eventoId) {
    const input = document.getElementById(`quantidade-${eventoId}`);
    if (input) {
        const novaQuantidade = parseInt(input.value) + 1;
        input.value = novaQuantidade;
        atualizarQuantidadeInput(eventoId);
    }
}

function diminuirQuantidade(eventoId) {
    const input = document.getElementById(`quantidade-${eventoId}`);
    if (input) {
        const novaQuantidade = Math.max(1, parseInt(input.value) - 1);
        input.value = novaQuantidade;
        atualizarQuantidadeInput(eventoId);
    }
}

function atualizarQuantidadeInput(eventoId) {
    const input = document.getElementById(`quantidade-${eventoId}`);
    if (input) {
        const novaQuantidade = parseInt(input.value) || 1;
        const resultado = atualizarQuantidade(eventoId, novaQuantidade);
        
        if (!resultado.sucesso && resultado.mensagem) {
            alert(resultado.mensagem);
            // Restaurar valor anterior
            const carrinho = obterCarrinho();
            const item = carrinho.find(item => item.eventoId === eventoId);
            if (item) {
                input.value = item.quantidade;
            }
        }
    }
}

// Exportar funções para uso global
if (typeof window !== 'undefined') {
    window.obterCarrinho = obterCarrinho;
    window.salvarCarrinho = salvarCarrinho;
    window.limparCarrinho = limparCarrinho;
    window.contarItensCarrinho = contarItensCarrinho;
    window.adicionarAoCarrinho = adicionarAoCarrinho;
    window.removerDoCarrinho = removerDoCarrinho;
    window.atualizarQuantidade = atualizarQuantidade;
    window.calcularSubtotal = calcularSubtotal;
    window.calcularTotalCarrinho = calcularTotalCarrinho;
    window.calcularQuantidadeTotal = calcularQuantidadeTotal;
    window.renderizarCarrinho = renderizarCarrinho;
    window.atualizarResumo = atualizarResumo;
    window.atualizarContadorCarrinho = atualizarContadorCarrinho;
    window.aumentarQuantidade = aumentarQuantidade;
    window.diminuirQuantidade = diminuirQuantidade;
    window.atualizarQuantidadeInput = atualizarQuantidadeInput;
}
