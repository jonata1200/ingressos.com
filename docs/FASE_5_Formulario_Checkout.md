# FASE 5: Formulário de Checkout

## Objetivo
Criar processo completo de finalização de compra com validação

---

## Checklist de Ações

### 1. Estrutura da Página de Checkout

- [x] Criar arquivo `checkout.html`:
  - [x] Copiar estrutura base do `index.html`
  - [x] Alterar título para "Checkout - ingressos.com"
  - [x] Criar layout com duas colunas (ou responsivo):
    - [x] Coluna esquerda: Formulário
    - [x] Coluna direita: Resumo do pedido
- [x] Adicionar breadcrumbs (opcional):
  - [x] Home > Carrinho > Checkout
  - [x] Links clicáveis
- [ ] Adicionar indicador de progresso (opcional):
  - [ ] Carrinho > Checkout > Confirmação
  - [ ] Mostrar etapa atual

### 2. Formulário de Dados Pessoais

- [x] Criar seção "Dados Pessoais":
  - [x] Campo Nome Completo (obrigatório):
    - [x] Input type="text"
    - [x] Placeholder
    - [x] Required
    - [x] Minlength (ex: 3 caracteres)
  - [x] Campo Email (obrigatório):
    - [x] Input type="email"
    - [x] Placeholder
    - [x] Required
    - [x] Validação de formato
  - [x] Campo CPF (obrigatório):
    - [x] Input type="text"
    - [x] Máscara de CPF (XXX.XXX.XXX-XX)
    - [x] Validação de CPF
    - [x] Required
  - [x] Campo Telefone (obrigatório):
    - [x] Input type="tel"
    - [x] Máscara de telefone ((XX) XXXXX-XXXX)
    - [x] Required
  - [x] Campo Data de Nascimento (opcional):
    - [x] Input type="date"
    - [ ] Validação de idade mínima (se necessário)

### 3. Formulário de Endereço

- [x] Criar seção "Endereço de Cobrança":
  - [x] Campo CEP (obrigatório):
    - [x] Input type="text"
    - [x] Máscara (XXXXX-XXX)
    - [ ] Buscar endereço por CEP (opcional - API)
  - [x] Campo Rua/Logradouro (obrigatório):
    - [x] Input type="text"
    - [x] Required
  - [x] Campo Número (obrigatório):
    - [x] Input type="text"
    - [x] Required
  - [x] Campo Complemento (opcional):
    - [x] Input type="text"
  - [x] Campo Bairro (obrigatório):
    - [x] Input type="text"
    - [x] Required
  - [x] Campo Cidade (obrigatório):
    - [x] Input type="text"
    - [x] Required
  - [x] Campo Estado (obrigatório):
    - [x] Select com estados brasileiros
    - [x] Required

### 4. Forma de Pagamento

- [x] Criar seção "Forma de Pagamento":
  - [x] Opção Cartão de Crédito:
    - [x] Radio button ou card selecionável
    - [x] Campos condicionais:
      - [x] Número do cartão (máscara)
      - [x] Nome no cartão
      - [x] Validade (MM/AA)
      - [x] CVV (3 dígitos)
      - [x] Parcelas (select 1x a 12x)
  - [x] Opção PIX (simulado):
    - [x] Radio button
    - [x] Mensagem informativa sobre PIX
  - [x] Opção Boleto (simulado):
    - [x] Radio button
    - [x] Mensagem sobre vencimento
- [x] Estilizar opções de pagamento:
  - [x] Cards clicáveis
  - [x] Destaque na opção selecionada
  - [ ] Ícones (opcional)

### 5. Resumo do Pedido

- [x] Criar seção "Resumo do Pedido":
  - [x] Listar itens do carrinho:
    - [x] Nome do evento
    - [x] Quantidade
    - [x] Preço unitário
    - [x] Subtotal
  - [x] Exibir totais:
    - [x] Subtotal dos itens
    - [x] Taxa de serviço (se houver)
    - [ ] Desconto (se houver - opcional)
    - [x] **Total a pagar** (destacado)
  - [x] Informações adicionais:
    - [x] Quantidade total de ingressos
    - [ ] Prazo de entrega (se aplicável)
- [x] Estilizar resumo:
  - [x] Layout destacado
  - [x] Total em destaque
  - [x] Responsivo (pode ficar abaixo no mobile)

### 6. Validação de Formulário - JavaScript

- [x] Criar arquivo `js/checkout.js`
- [x] Função de validação de CPF:
  - [x] Remover formatação
  - [x] Validar 11 dígitos
  - [x] Validar dígitos verificadores
  - [x] Retornar true/false
- [x] Função de validação de email:
  - [x] Regex para formato de email
  - [x] Verificar se é válido
- [x] Função de validação de CEP:
  - [x] Formato correto (8 dígitos)
  - [ ] Verificar se existe (opcional - API)
- [x] Função de validação de cartão:
  - [x] Número do cartão (16 dígitos)
  - [x] Validade (data futura)
  - [x] CVV (3 dígitos)
- [x] Função `validarFormulario()`:
  - [x] Validar todos os campos obrigatórios
  - [x] Validar formato dos campos
  - [x] Retornar objeto com erros
  - [x] Mostrar mensagens de erro

### 7. Máscaras de Input

- [x] Implementar máscara de CPF:
  - [x] Formato: XXX.XXX.XXX-XX
  - [x] Aplicar enquanto digita
  - [x] Permitir apenas números
- [x] Implementar máscara de telefone:
  - [x] Formato: (XX) XXXXX-XXXX
  - [x] Aplicar enquanto digita
- [x] Implementar máscara de CEP:
  - [x] Formato: XXXXX-XXX
  - [x] Aplicar enquanto digita
- [x] Implementar máscara de cartão:
  - [x] Formato: XXXX XXXX XXXX XXXX
  - [x] Aplicar enquanto digita
- [x] Implementar máscara de validade:
  - [x] Formato: MM/AA
  - [x] Validar mês (01-12)
  - [x] Validar ano (futuro)

### 8. Exibição de Erros

- [x] Criar função `mostrarErro(campo, mensagem)`:
  - [x] Adicionar classe de erro no campo
  - [x] Exibir mensagem abaixo do campo
  - [x] Estilizar campo com borda vermelha
- [x] Criar função `limparErros()`:
  - [x] Remover classes de erro
  - [x] Remover mensagens de erro
  - [x] Restaurar estilo normal
- [x] Mensagens de erro específicas:
  - [x] Campo obrigatório
  - [x] Formato inválido
  - [x] CPF inválido
  - [x] Email inválido
  - [x] Cartão inválido
- [x] Estilizar erros no CSS:
  - [x] Borda vermelha
  - [x] Mensagem em vermelho
  - [ ] Ícone de erro (opcional)

### 9. Processamento do Checkout

- [x] Criar função `processarCheckout()`:
  - [x] Validar formulário completo
  - [x] Verificar se carrinho não está vazio
  - [x] Coletar dados do formulário
  - [x] Coletar dados do carrinho
  - [x] Gerar número de pedido (simulado)
  - [x] Salvar pedido no LocalStorage
  - [x] Limpar carrinho
  - [x] Redirecionar para página de confirmação
- [x] Adicionar event listener no botão "Finalizar Compra":
  - [x] Prevenir submit padrão
  - [x] Chamar `processarCheckout()`
  - [ ] Mostrar loading (opcional)
- [x] Validar antes de processar:
  - [x] Todos os campos obrigatórios preenchidos
  - [x] Forma de pagamento selecionada
  - [x] Dados válidos
  - [x] Carrinho não vazio

### 10. Página de Confirmação

- [x] Criar arquivo `confirmacao.html`:
  - [x] Copiar estrutura base
  - [x] Alterar título para "Compra Confirmada - ingressos.com"
- [x] Exibir informações do pedido:
  - [x] Número do pedido (gerado)
  - [x] Data e hora da compra
  - [x] Resumo dos ingressos comprados
  - [x] Total pago
  - [x] Forma de pagamento
  - [x] Dados do comprador (nome, email)
- [x] Adicionar botões de ação:
  - [ ] "Ver Meus Ingressos" (opcional - futuro)
  - [x] "Continuar Comprando" (link para eventos)
  - [x] "Imprimir Comprovante" (opcional)
- [x] Mensagem de sucesso:
  - [x] Ícone de sucesso
  - [x] Mensagem agradecendo
  - [ ] Informações sobre entrega/recebimento

### 11. Persistência de Pedidos

- [x] Criar estrutura para salvar pedidos:
  - [x] Array de pedidos no LocalStorage
  - [x] Cada pedido com:
    - [x] Número do pedido
    - [x] Data/hora
    - [x] Dados do comprador
    - [x] Itens comprados
    - [x] Total
    - [x] Status (opcional)
- [x] Função para salvar pedido:
  - [x] Gerar ID único
  - [x] Adicionar ao array de pedidos
  - [x] Salvar no LocalStorage
- [x] Função para obter pedidos:
  - [x] Retornar array de pedidos
  - [x] Ordenar por data (mais recente primeiro)

### 12. Melhorias de UX

- [x] Adicionar indicadores de progresso:
  - [x] Mostrar qual campo está sendo preenchido
  - [x] Indicar campos obrigatórios
- [ ] Salvar dados do formulário:
  - [ ] Salvar progresso no LocalStorage
  - [ ] Restaurar ao voltar para página
  - [ ] Limpar após confirmação
- [x] Adicionar botão "Voltar":
  - [x] Voltar para carrinho
  - [ ] Manter dados do formulário (se salvos)
- [x] Feedback visual:
  - [ ] Loading ao processar
  - [x] Mensagem de sucesso
  - [x] Animações suaves

### 13. Responsividade

- [x] Ajustar layout para mobile:
  - [x] Formulário em coluna única
  - [x] Resumo abaixo do formulário
  - [x] Campos em largura total
  - [x] Botões maiores
- [x] Ajustar para tablet:
  - [x] Layout em duas colunas (se espaço permitir)
  - [x] Ou manter coluna única
- [x] Testar em diferentes dispositivos

### 14. Validações Adicionais

- [ ] Validar idade mínima (se necessário):
  - [ ] Para certos tipos de eventos
  - [ ] Verificar data de nascimento
- [x] Validar estoque antes de finalizar:
  - [x] Verificar se ingressos ainda disponíveis
  - [x] Ajustar carrinho se necessário
  - [x] Avisar se houver mudanças
- [x] Validar dados do cartão:
  - [x] Algoritmo de Luhn (validação de cartão)
  - [x] Validade não expirada
  - [x] CVV correto

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
