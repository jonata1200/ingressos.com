/**
 * Sistema de Checkout
 * Validações, máscaras e processamento do checkout
 */

// Máscaras de Input
function aplicarMascaraCPF(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length <= 11) {
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        input.value = value;
    }
}

function aplicarMascaraTelefone(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length <= 11) {
        if (value.length <= 10) {
            value = value.replace(/(\d{2})(\d)/, '($1) $2');
            value = value.replace(/(\d{4})(\d)/, '$1-$2');
        } else {
            value = value.replace(/(\d{2})(\d)/, '($1) $2');
            value = value.replace(/(\d{5})(\d)/, '$1-$2');
        }
        input.value = value;
    }
}

function aplicarMascaraCEP(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length <= 8) {
        value = value.replace(/(\d{5})(\d)/, '$1-$2');
        input.value = value;
    }
}

function aplicarMascaraCartao(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length <= 16) {
        value = value.replace(/(\d{4})(\d)/, '$1 $2');
        value = value.replace(/(\d{4})(\d)/, '$1 $2');
        value = value.replace(/(\d{4})(\d)/, '$1 $2');
        input.value = value.trim();
    }
}

function aplicarMascaraValidade(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length <= 4) {
        if (value.length >= 2) {
            value = value.replace(/(\d{2})(\d)/, '$1/$2');
        }
        input.value = value;
    }
}

// Validações
function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    
    if (cpf.length !== 11) return false;
    if (/^(\d)\1{10}$/.test(cpf)) return false; // Todos os dígitos iguais
    
    let soma = 0;
    let resto;
    
    // Validar primeiro dígito verificador
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;
    
    // Validar segundo dígito verificador
    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;
    
    return true;
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validarCEP(cep) {
    cep = cep.replace(/\D/g, '');
    return cep.length === 8;
}

function validarCartao(numero) {
    numero = numero.replace(/\D/g, '');
    if (numero.length !== 16) return false;
    
    // Algoritmo de Luhn
    let soma = 0;
    let isEven = false;
    
    for (let i = numero.length - 1; i >= 0; i--) {
        let digito = parseInt(numero[i]);
        
        if (isEven) {
            digito *= 2;
            if (digito > 9) {
                digito -= 9;
            }
        }
        
        soma += digito;
        isEven = !isEven;
    }
    
    return soma % 10 === 0;
}

function validarValidade(validade) {
    const partes = validade.split('/');
    if (partes.length !== 2) return false;
    
    const mes = parseInt(partes[0]);
    const ano = parseInt(partes[1]);
    
    if (mes < 1 || mes > 12) return false;
    
    const hoje = new Date();
    const anoAtual = hoje.getFullYear() % 100;
    const mesAtual = hoje.getMonth() + 1;
    
    if (ano < anoAtual || (ano === anoAtual && mes < mesAtual)) {
        return false; // Cartão expirado
    }
    
    return true;
}

// Exibição de Erros
function mostrarErro(campoId, mensagem) {
    const campo = document.getElementById(campoId);
    const erroElement = document.getElementById(`erro-${campoId}`);
    
    if (campo) {
        campo.classList.add('campo-erro');
    }
    
    if (erroElement) {
        erroElement.textContent = mensagem;
        erroElement.style.display = 'block';
    }
}

function limparErro(campoId) {
    const campo = document.getElementById(campoId);
    const erroElement = document.getElementById(`erro-${campoId}`);
    
    if (campo) {
        campo.classList.remove('campo-erro');
    }
    
    if (erroElement) {
        erroElement.textContent = '';
        erroElement.style.display = 'none';
    }
}

function limparTodosErros() {
    const campos = ['nome', 'email', 'cpf', 'telefone', 'cep', 'rua', 'numero', 'bairro', 'cidade', 'estado', 'numero-cartao', 'nome-cartao', 'validade-cartao', 'cvv', 'pagamento'];
    campos.forEach(campo => limparErro(campo));
}

// Validação do Formulário
function validarFormulario() {
    let valido = true;
    limparTodosErros();
    
    // Dados Pessoais
    const nome = document.getElementById('nome').value.trim();
    if (!nome || nome.length < 3) {
        mostrarErro('nome', 'Nome deve ter pelo menos 3 caracteres');
        valido = false;
    }
    
    const email = document.getElementById('email').value.trim();
    if (!email) {
        mostrarErro('email', 'Email é obrigatório');
        valido = false;
    } else if (!validarEmail(email)) {
        mostrarErro('email', 'Email inválido');
        valido = false;
    }
    
    const cpf = document.getElementById('cpf').value;
    if (!cpf) {
        mostrarErro('cpf', 'CPF é obrigatório');
        valido = false;
    } else if (!validarCPF(cpf)) {
        mostrarErro('cpf', 'CPF inválido');
        valido = false;
    }
    
    const telefone = document.getElementById('telefone').value;
    const telefoneLimpo = telefone.replace(/\D/g, '');
    if (!telefone) {
        mostrarErro('telefone', 'Telefone é obrigatório');
        valido = false;
    } else if (telefoneLimpo.length < 10 || telefoneLimpo.length > 11) {
        mostrarErro('telefone', 'Telefone inválido');
        valido = false;
    }
    
    // Endereço
    const cep = document.getElementById('cep').value;
    if (!cep) {
        mostrarErro('cep', 'CEP é obrigatório');
        valido = false;
    } else if (!validarCEP(cep)) {
        mostrarErro('cep', 'CEP inválido');
        valido = false;
    }
    
    const rua = document.getElementById('rua').value.trim();
    if (!rua) {
        mostrarErro('rua', 'Rua é obrigatória');
        valido = false;
    }
    
    const numero = document.getElementById('numero').value.trim();
    if (!numero) {
        mostrarErro('numero', 'Número é obrigatório');
        valido = false;
    }
    
    const bairro = document.getElementById('bairro').value.trim();
    if (!bairro) {
        mostrarErro('bairro', 'Bairro é obrigatório');
        valido = false;
    }
    
    const cidade = document.getElementById('cidade').value.trim();
    if (!cidade) {
        mostrarErro('cidade', 'Cidade é obrigatória');
        valido = false;
    }
    
    const estado = document.getElementById('estado').value;
    if (!estado) {
        mostrarErro('estado', 'Estado é obrigatório');
        valido = false;
    }
    
    // Forma de Pagamento
    const pagamento = document.querySelector('input[name="pagamento"]:checked');
    if (!pagamento) {
        mostrarErro('pagamento', 'Selecione uma forma de pagamento');
        valido = false;
    } else if (pagamento.value === 'cartao') {
        // Validar campos do cartão
        const numeroCartao = document.getElementById('numero-cartao').value;
        if (!numeroCartao) {
            mostrarErro('numero-cartao', 'Número do cartão é obrigatório');
            valido = false;
        } else if (!validarCartao(numeroCartao)) {
            mostrarErro('numero-cartao', 'Número do cartão inválido');
            valido = false;
        }
        
        const nomeCartao = document.getElementById('nome-cartao').value.trim();
        if (!nomeCartao) {
            mostrarErro('nome-cartao', 'Nome no cartão é obrigatório');
            valido = false;
        }
        
        const validade = document.getElementById('validade-cartao').value;
        if (!validade) {
            mostrarErro('validade-cartao', 'Validade é obrigatória');
            valido = false;
        } else if (!validarValidade(validade)) {
            mostrarErro('validade-cartao', 'Validade inválida ou expirada');
            valido = false;
        }
        
        const cvv = document.getElementById('cvv').value;
        if (!cvv) {
            mostrarErro('cvv', 'CVV é obrigatório');
            valido = false;
        } else if (cvv.length !== 3) {
            mostrarErro('cvv', 'CVV deve ter 3 dígitos');
            valido = false;
        }
    }
    
    return valido;
}

// Processamento do Checkout
function processarCheckout() {
    // Verificar se carrinho não está vazio
    const carrinho = obterCarrinho();
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        window.location.href = 'carrinho.html';
        return;
    }
    
    // Validar formulário
    if (!validarFormulario()) {
        alert('Por favor, corrija os erros no formulário');
        return;
    }
    
    // Coletar dados do formulário
    const dadosFormulario = {
        nome: document.getElementById('nome').value.trim(),
        email: document.getElementById('email').value.trim(),
        cpf: document.getElementById('cpf').value,
        telefone: document.getElementById('telefone').value,
        dataNascimento: document.getElementById('data-nascimento').value,
        cep: document.getElementById('cep').value,
        rua: document.getElementById('rua').value.trim(),
        numero: document.getElementById('numero').value.trim(),
        complemento: document.getElementById('complemento').value.trim(),
        bairro: document.getElementById('bairro').value.trim(),
        cidade: document.getElementById('cidade').value.trim(),
        estado: document.getElementById('estado').value,
        pagamento: document.querySelector('input[name="pagamento"]:checked').value,
        numeroCartao: document.getElementById('numero-cartao')?.value || '',
        nomeCartao: document.getElementById('nome-cartao')?.value || '',
        validadeCartao: document.getElementById('validade-cartao')?.value || '',
        cvv: document.getElementById('cvv')?.value || '',
        parcelas: document.getElementById('parcelas')?.value || '1'
    };
    
    // Calcular totais
    const subtotal = calcularTotalCarrinho();
    const taxa = subtotal * 0.1;
    const total = subtotal + taxa;
    
    // Gerar número do pedido
    const numeroPedido = 'PED-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
    
    // Criar objeto do pedido
    const pedido = {
        numeroPedido: numeroPedido,
        dataHora: new Date().toISOString(),
        dadosComprador: dadosFormulario,
        itens: carrinho.map(item => ({
            eventoId: item.eventoId,
            nome: item.nome,
            quantidade: item.quantidade,
            precoUnitario: item.precoUnitario,
            subtotal: item.subtotal
        })),
        subtotal: subtotal,
        taxa: taxa,
        total: total,
        status: 'confirmado'
    };
    
    // Salvar pedido
    const pedidos = storage.obter('pedidos') || [];
    pedidos.push(pedido);
    storage.salvar('pedidos', pedidos);
    
    // Salvar último pedido para página de confirmação
    storage.salvar('ultimoPedido', pedido);
    
    // Limpar carrinho
    limparCarrinho();
    
    // Redirecionar para confirmação
    window.location.href = 'confirmacao.html';
}

// Renderizar resumo do pedido
function renderizarResumoCheckout() {
    const container = document.getElementById('checkout-resumo');
    if (!container) return;
    
    const carrinho = obterCarrinho();
    if (carrinho.length === 0) {
        container.innerHTML = '<p>Carrinho vazio. <a href="eventos.html">Voltar para eventos</a></p>';
        return;
    }
    
    const subtotal = calcularTotalCarrinho();
    const taxa = subtotal * 0.1;
    const total = subtotal + taxa;
    
    const subtotalFormatado = typeof formatarPreco === 'function' ? formatarPreco(subtotal) : new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(subtotal);
    const taxaFormatada = typeof formatarPreco === 'function' ? formatarPreco(taxa) : new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(taxa);
    const totalFormatado = typeof formatarPreco === 'function' ? formatarPreco(total) : new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total);
    
    let html = '<h3 class="resumo-titulo">Resumo do Pedido</h3>';
    html += '<div class="resumo-itens">';
    
    carrinho.forEach(item => {
        const precoFormatado = typeof formatarPreco === 'function' ? formatarPreco(item.precoUnitario) : new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.precoUnitario);
        const subtotalFormatado = typeof formatarPreco === 'function' ? formatarPreco(item.subtotal) : new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.subtotal);
        
        html += `
            <div class="resumo-item-lista">
                <div class="resumo-item-nome">${item.nome}</div>
                <div class="resumo-item-detalhes">${item.quantidade}x ${precoFormatado}</div>
                <div class="resumo-item-subtotal">${subtotalFormatado}</div>
            </div>
        `;
    });
    
    html += '</div>';
    html += `
        <div class="resumo-item">
            <span>Subtotal:</span>
            <span>${subtotalFormatado}</span>
        </div>
        <div class="resumo-item">
            <span>Taxa de serviço (10%):</span>
            <span>${taxaFormatada}</span>
        </div>
        <div class="resumo-total">
            <span>Total:</span>
            <span>${totalFormatado}</span>
        </div>
    `;
    
    container.innerHTML = html;
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se carrinho está vazio
    const carrinho = obterCarrinho();
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        window.location.href = 'carrinho.html';
        return;
    }
    
    // Renderizar resumo
    renderizarResumoCheckout();
    
    // Aplicar máscaras
    const cpfInput = document.getElementById('cpf');
    if (cpfInput) {
        cpfInput.addEventListener('input', () => aplicarMascaraCPF(cpfInput));
    }
    
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', () => aplicarMascaraTelefone(telefoneInput));
    }
    
    const cepInput = document.getElementById('cep');
    if (cepInput) {
        cepInput.addEventListener('input', () => aplicarMascaraCEP(cepInput));
    }
    
    const cartaoInput = document.getElementById('numero-cartao');
    if (cartaoInput) {
        cartaoInput.addEventListener('input', () => aplicarMascaraCartao(cartaoInput));
    }
    
    const validadeInput = document.getElementById('validade-cartao');
    if (validadeInput) {
        validadeInput.addEventListener('input', () => aplicarMascaraValidade(validadeInput));
    }
    
    // Mostrar/ocultar campos do cartão
    const pagamentoInputs = document.querySelectorAll('input[name="pagamento"]');
    pagamentoInputs.forEach(input => {
        input.addEventListener('change', function() {
            const camposCartao = document.getElementById('campos-cartao');
            if (this.value === 'cartao') {
                camposCartao.style.display = 'block';
            } else {
                camposCartao.style.display = 'none';
            }
        });
    });
    
    // Limpar erros ao digitar
    const campos = document.querySelectorAll('#form-checkout input, #form-checkout select');
    campos.forEach(campo => {
        campo.addEventListener('input', () => limparErro(campo.id));
        campo.addEventListener('change', () => limparErro(campo.id));
    });
    
    // Submeter formulário
    const form = document.getElementById('form-checkout');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            processarCheckout();
        });
    }
    
    // Atualizar contador
    if (typeof atualizarContadorCarrinho === 'function') {
        atualizarContadorCarrinho();
    }
});

// Exportar funções
if (typeof window !== 'undefined') {
    window.validarCPF = validarCPF;
    window.validarEmail = validarEmail;
    window.validarCartao = validarCartao;
    window.processarCheckout = processarCheckout;
}
