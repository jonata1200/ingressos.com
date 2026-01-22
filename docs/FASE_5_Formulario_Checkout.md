# FASE 5: Formulário de Checkout

## Objetivo
Criar processo completo de finalização de compra com validação

---

## Checklist de Ações

### 1. Estrutura da Página de Checkout

- [ ] Criar arquivo `checkout.html`:
  - [ ] Copiar estrutura base do `index.html`
  - [ ] Alterar título para "Checkout - ingressos.com"
  - [ ] Criar layout com duas colunas (ou responsivo):
    - [ ] Coluna esquerda: Formulário
    - [ ] Coluna direita: Resumo do pedido
- [ ] Adicionar breadcrumbs (opcional):
  - [ ] Home > Carrinho > Checkout
  - [ ] Links clicáveis
- [ ] Adicionar indicador de progresso (opcional):
  - [ ] Carrinho > Checkout > Confirmação
  - [ ] Mostrar etapa atual

### 2. Formulário de Dados Pessoais

- [ ] Criar seção "Dados Pessoais":
  - [ ] Campo Nome Completo (obrigatório):
    - [ ] Input type="text"
    - [ ] Placeholder
    - [ ] Required
    - [ ] Minlength (ex: 3 caracteres)
  - [ ] Campo Email (obrigatório):
    - [ ] Input type="email"
    - [ ] Placeholder
    - [ ] Required
    - [ ] Validação de formato
  - [ ] Campo CPF (obrigatório):
    - [ ] Input type="text"
    - [ ] Máscara de CPF (XXX.XXX.XXX-XX)
    - [ ] Validação de CPF
    - [ ] Required
  - [ ] Campo Telefone (obrigatório):
    - [ ] Input type="tel"
    - [ ] Máscara de telefone ((XX) XXXXX-XXXX)
    - [ ] Required
  - [ ] Campo Data de Nascimento (opcional):
    - [ ] Input type="date"
    - [ ] Validação de idade mínima (se necessário)

### 3. Formulário de Endereço

- [ ] Criar seção "Endereço de Cobrança":
  - [ ] Campo CEP (obrigatório):
    - [ ] Input type="text"
    - [ ] Máscara (XXXXX-XXX)
    - [ ] Buscar endereço por CEP (opcional - API)
  - [ ] Campo Rua/Logradouro (obrigatório):
    - [ ] Input type="text"
    - [ ] Required
  - [ ] Campo Número (obrigatório):
    - [ ] Input type="text"
    - [ ] Required
  - [ ] Campo Complemento (opcional):
    - [ ] Input type="text"
  - [ ] Campo Bairro (obrigatório):
    - [ ] Input type="text"
    - [ ] Required
  - [ ] Campo Cidade (obrigatório):
    - [ ] Input type="text"
    - [ ] Required
  - [ ] Campo Estado (obrigatório):
    - [ ] Select com estados brasileiros
    - [ ] Required

### 4. Forma de Pagamento

- [ ] Criar seção "Forma de Pagamento":
  - [ ] Opção Cartão de Crédito:
    - [ ] Radio button ou card selecionável
    - [ ] Campos condicionais:
      - [ ] Número do cartão (máscara)
      - [ ] Nome no cartão
      - [ ] Validade (MM/AA)
      - [ ] CVV (3 dígitos)
      - [ ] Parcelas (select 1x a 12x)
  - [ ] Opção PIX (simulado):
    - [ ] Radio button
    - [ ] Mensagem informativa sobre PIX
  - [ ] Opção Boleto (simulado):
    - [ ] Radio button
    - [ ] Mensagem sobre vencimento
- [ ] Estilizar opções de pagamento:
  - [ ] Cards clicáveis
  - [ ] Destaque na opção selecionada
  - [ ] Ícones (opcional)

### 5. Resumo do Pedido

- [ ] Criar seção "Resumo do Pedido":
  - [ ] Listar itens do carrinho:
    - [ ] Nome do evento
    - [ ] Quantidade
    - [ ] Preço unitário
    - [ ] Subtotal
  - [ ] Exibir totais:
    - [ ] Subtotal dos itens
    - [ ] Taxa de serviço (se houver)
    - [ ] Desconto (se houver - opcional)
    - [ ] **Total a pagar** (destacado)
  - [ ] Informações adicionais:
    - [ ] Quantidade total de ingressos
    - [ ] Prazo de entrega (se aplicável)
- [ ] Estilizar resumo:
  - [ ] Layout destacado
  - [ ] Total em destaque
  - [ ] Responsivo (pode ficar abaixo no mobile)

### 6. Validação de Formulário - JavaScript

- [ ] Criar arquivo `js/checkout.js`
- [ ] Função de validação de CPF:
  - [ ] Remover formatação
  - [ ] Validar 11 dígitos
  - [ ] Validar dígitos verificadores
  - [ ] Retornar true/false
- [ ] Função de validação de email:
  - [ ] Regex para formato de email
  - [ ] Verificar se é válido
- [ ] Função de validação de CEP:
  - [ ] Formato correto (8 dígitos)
  - [ ] Verificar se existe (opcional - API)
- [ ] Função de validação de cartão:
  - [ ] Número do cartão (16 dígitos)
  - [ ] Validade (data futura)
  - [ ] CVV (3 dígitos)
- [ ] Função `validarFormulario()`:
  - [ ] Validar todos os campos obrigatórios
  - [ ] Validar formato dos campos
  - [ ] Retornar objeto com erros
  - [ ] Mostrar mensagens de erro

### 7. Máscaras de Input

- [ ] Implementar máscara de CPF:
  - [ ] Formato: XXX.XXX.XXX-XX
  - [ ] Aplicar enquanto digita
  - [ ] Permitir apenas números
- [ ] Implementar máscara de telefone:
  - [ ] Formato: (XX) XXXXX-XXXX
  - [ ] Aplicar enquanto digita
- [ ] Implementar máscara de CEP:
  - [ ] Formato: XXXXX-XXX
  - [ ] Aplicar enquanto digita
- [ ] Implementar máscara de cartão:
  - [ ] Formato: XXXX XXXX XXXX XXXX
  - [ ] Aplicar enquanto digita
- [ ] Implementar máscara de validade:
  - [ ] Formato: MM/AA
  - [ ] Validar mês (01-12)
  - [ ] Validar ano (futuro)

### 8. Exibição de Erros

- [ ] Criar função `mostrarErro(campo, mensagem)`:
  - [ ] Adicionar classe de erro no campo
  - [ ] Exibir mensagem abaixo do campo
  - [ ] Estilizar campo com borda vermelha
- [ ] Criar função `limparErros()`:
  - [ ] Remover classes de erro
  - [ ] Remover mensagens de erro
  - [ ] Restaurar estilo normal
- [ ] Mensagens de erro específicas:
  - [ ] Campo obrigatório
  - [ ] Formato inválido
  - [ ] CPF inválido
  - [ ] Email inválido
  - [ ] Cartão inválido
- [ ] Estilizar erros no CSS:
  - [ ] Borda vermelha
  - [ ] Mensagem em vermelho
  - [ ] Ícone de erro (opcional)

### 9. Processamento do Checkout

- [ ] Criar função `processarCheckout()`:
  - [ ] Validar formulário completo
  - [ ] Verificar se carrinho não está vazio
  - [ ] Coletar dados do formulário
  - [ ] Coletar dados do carrinho
  - [ ] Gerar número de pedido (simulado)
  - [ ] Salvar pedido no LocalStorage
  - [ ] Limpar carrinho
  - [ ] Redirecionar para página de confirmação
- [ ] Adicionar event listener no botão "Finalizar Compra":
  - [ ] Prevenir submit padrão
  - [ ] Chamar `processarCheckout()`
  - [ ] Mostrar loading (opcional)
- [ ] Validar antes de processar:
  - [ ] Todos os campos obrigatórios preenchidos
  - [ ] Forma de pagamento selecionada
  - [ ] Dados válidos
  - [ ] Carrinho não vazio

### 10. Página de Confirmação

- [ ] Criar arquivo `confirmacao.html`:
  - [ ] Copiar estrutura base
  - [ ] Alterar título para "Compra Confirmada - ingressos.com"
- [ ] Exibir informações do pedido:
  - [ ] Número do pedido (gerado)
  - [ ] Data e hora da compra
  - [ ] Resumo dos ingressos comprados
  - [ ] Total pago
  - [ ] Forma de pagamento
  - [ ] Dados do comprador (nome, email)
- [ ] Adicionar botões de ação:
  - [ ] "Ver Meus Ingressos" (opcional - futuro)
  - [ ] "Continuar Comprando" (link para eventos)
  - [ ] "Imprimir Comprovante" (opcional)
- [ ] Mensagem de sucesso:
  - [ ] Ícone de sucesso
  - [ ] Mensagem agradecendo
  - [ ] Informações sobre entrega/recebimento

### 11. Persistência de Pedidos

- [ ] Criar estrutura para salvar pedidos:
  - [ ] Array de pedidos no LocalStorage
  - [ ] Cada pedido com:
    - [ ] Número do pedido
    - [ ] Data/hora
    - [ ] Dados do comprador
    - [ ] Itens comprados
    - [ ] Total
    - [ ] Status (opcional)
- [ ] Função para salvar pedido:
  - [ ] Gerar ID único
  - [ ] Adicionar ao array de pedidos
  - [ ] Salvar no LocalStorage
- [ ] Função para obter pedidos:
  - [ ] Retornar array de pedidos
  - [ ] Ordenar por data (mais recente primeiro)

### 12. Melhorias de UX

- [ ] Adicionar indicadores de progresso:
  - [ ] Mostrar qual campo está sendo preenchido
  - [ ] Indicar campos obrigatórios
- [ ] Salvar dados do formulário:
  - [ ] Salvar progresso no LocalStorage
  - [ ] Restaurar ao voltar para página
  - [ ] Limpar após confirmação
- [ ] Adicionar botão "Voltar":
  - [ ] Voltar para carrinho
  - [ ] Manter dados do formulário (se salvos)
- [ ] Feedback visual:
  - [ ] Loading ao processar
  - [ ] Mensagem de sucesso
  - [ ] Animações suaves

### 13. Responsividade

- [ ] Ajustar layout para mobile:
  - [ ] Formulário em coluna única
  - [ ] Resumo abaixo do formulário
  - [ ] Campos em largura total
  - [ ] Botões maiores
- [ ] Ajustar para tablet:
  - [ ] Layout em duas colunas (se espaço permitir)
  - [ ] Ou manter coluna única
- [ ] Testar em diferentes dispositivos

### 14. Validações Adicionais

- [ ] Validar idade mínima (se necessário):
  - [ ] Para certos tipos de eventos
  - [ ] Verificar data de nascimento
- [ ] Validar estoque antes de finalizar:
  - [ ] Verificar se ingressos ainda disponíveis
  - [ ] Ajustar carrinho se necessário
  - [ ] Avisar se houver mudanças
- [ ] Validar dados do cartão:
  - [ ] Algoritmo de Luhn (validação de cartão)
  - [ ] Validade não expirada
  - [ ] CVV correto

### 15. Testes

- [ ] Testar preenchimento do formulário:
  - [ ] Todos os campos obrigatórios
  - [ ] Campos opcionais
  - [ ] Máscaras funcionando
- [ ] Testar validações:
  - [ ] CPF inválido
  - [ ] Email inválido
  - [ ] Campos vazios
  - [ ] Formato incorreto
- [ ] Testar processamento:
  - [ ] Checkout completo
  - [ ] Geração de pedido
  - [ ] Limpeza do carrinho
  - [ ] Redirecionamento
- [ ] Testar página de confirmação:
  - [ ] Exibição correta dos dados
  - [ ] Número do pedido único
  - [ ] Links funcionando
- [ ] Testar persistência:
  - [ ] Pedidos salvos
  - [ ] Dados corretos
  - [ ] Múltiplos pedidos
- [ ] Testar responsividade:
  - [ ] Mobile
  - [ ] Tablet
  - [ ] Desktop
- [ ] Testar em diferentes navegadores

---

## Entregáveis da Fase 5

- [x] `checkout.html` - Página de checkout completa
- [x] `confirmacao.html` - Página de confirmação
- [x] `js/checkout.js` - Validações e processamento
- [x] Formulário completo e validado
- [x] Máscaras de input funcionando
- [x] Processo de checkout funcional
- [x] Página de confirmação com dados do pedido

---

## Notas Importantes

- Validação rigorosa de todos os campos
- Mensagens de erro claras e amigáveis
- Experiência do usuário fluida
- Dados sensíveis tratados com cuidado (mesmo sendo simulado)
- Testar todos os cenários possíveis

---

## Próxima Fase

Após completar esta fase, seguir para: **FASE 6: Melhorias e Polimento**
