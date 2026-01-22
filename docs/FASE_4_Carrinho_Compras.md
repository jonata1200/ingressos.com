# FASE 4: Carrinho de Compras

## Objetivo
Implementar funcionalidade completa de carrinho de compras

---

## Checklist de Ações

### 1. Estrutura de Dados do Carrinho

- [x] Criar arquivo `js/carrinho.js`
- [x] Definir estrutura de item do carrinho:
  - [x] `eventoId` (ID do evento)
  - [x] `nome` (nome do evento)
  - [x] `data` (data do evento)
  - [x] `local` (local do evento)
  - [x] `precoUnitario` (preço de um ingresso)
  - [x] `quantidade` (quantidade de ingressos)
  - [x] `subtotal` (preço unitário × quantidade)
  - [x] `imagem` (imagem do evento - opcional)
- [x] Criar funções de gerenciamento:
  - [x] `obterCarrinho()` - retorna array do carrinho do LocalStorage
  - [x] `salvarCarrinho(carrinho)` - salva carrinho no LocalStorage
  - [x] `limparCarrinho()` - remove todos os itens
  - [x] `contarItensCarrinho()` - retorna quantidade total de itens

### 2. Adicionar ao Carrinho

- [x] Criar função `adicionarAoCarrinho(eventoId, quantidade)`:
  - [x] Validar se quantidade é maior que 0
  - [x] Verificar se evento existe
  - [x] Verificar se há ingressos disponíveis
  - [x] Obter carrinho atual
  - [x] Verificar se evento já está no carrinho:
    - [x] Se sim, atualizar quantidade
    - [x] Se não, adicionar novo item
  - [x] Validar quantidade total não excede disponível
  - [x] Salvar carrinho atualizado
  - [x] Retornar sucesso/erro
- [x] Atualizar página de detalhes:
  - [x] Adicionar event listener no botão "Adicionar ao Carrinho"
  - [x] Obter quantidade selecionada
  - [x] Chamar função `adicionarAoCarrinho()`
  - [x] Mostrar mensagem de sucesso
  - [x] Atualizar contador do carrinho no header
- [x] Adicionar validações:
  - [x] Quantidade mínima: 1
  - [x] Quantidade máxima: ingressos disponíveis
  - [x] Mensagens de erro claras
  - [x] Prevenir adicionar evento esgotado

### 3. Exibição do Carrinho

- [x] Atualizar `carrinho.html`:
  - [x] Adicionar script `carrinho.js`
  - [x] Identificar container para itens do carrinho
  - [x] Identificar área para resumo do pedido
- [x] Criar função `renderizarCarrinho()`:
  - [x] Obter carrinho do LocalStorage
  - [x] Verificar se carrinho está vazio:
    - [x] Se vazio: mostrar mensagem e botão "Ver Eventos"
    - [x] Se não vazio: renderizar itens
- [x] Para cada item do carrinho, criar HTML:
  - [x] Card do item com:
    - [x] Imagem do evento (pequena)
    - [x] Nome do evento
    - [x] Data e local
    - [x] Preço unitário
    - [x] Input/select para quantidade
    - [x] Subtotal do item
    - [x] Botão remover
  - [x] Layout responsivo e organizado
- [x] Estilizar itens do carrinho no CSS:
  - [x] Layout flex ou grid
  - [x] Espaçamento adequado
  - [x] Bordas e sombras
  - [x] Responsividade

### 4. Gerenciamento de Quantidades

- [x] Implementar atualização de quantidade:
  - [x] Event listener nos inputs de quantidade
  - [x] Função `atualizarQuantidade(eventoId, novaQuantidade)`:
    - [x] Validar nova quantidade
    - [x] Verificar disponibilidade
    - [x] Atualizar item no carrinho
    - [x] Recalcular subtotal
    - [x] Salvar carrinho
    - [x] Re-renderizar carrinho
- [x] Adicionar botões +/- (opcional):
  - [x] Botão para aumentar quantidade
  - [x] Botão para diminuir quantidade
  - [x] Desabilitar botão - quando quantidade = 1
  - [x] Desabilitar botão + quando quantidade = máximo
- [x] Atualizar subtotal em tempo real:
  - [x] Recalcular ao mudar quantidade
  - [x] Atualizar exibição imediatamente

### 5. Remover Itens do Carrinho

- [x] Criar função `removerDoCarrinho(eventoId)`:
  - [x] Obter carrinho atual
  - [x] Filtrar array removendo item com eventoId
  - [x] Salvar carrinho atualizado
  - [x] Re-renderizar carrinho
- [x] Adicionar botão "Remover" em cada item:
  - [x] Ícone ou texto "Remover"
  - [x] Event listener no botão
  - [x] Confirmar remoção (opcional - alert ou modal)
- [x] Adicionar botão "Limpar Carrinho":
  - [x] Botão visível quando carrinho não está vazio
  - [x] Confirmar ação antes de limpar
  - [x] Limpar LocalStorage
  - [x] Re-renderizar carrinho

### 6. Cálculo de Totais

- [x] Criar função `calcularSubtotal(item)`:
  - [x] Multiplicar preço unitário × quantidade
  - [x] Retornar valor formatado
- [x] Criar função `calcularTotalCarrinho()`:
  - [x] Obter carrinho
  - [x] Somar todos os subtotais
  - [x] Retornar valor total
- [x] Criar função `calcularQuantidadeTotal()`:
  - [x] Somar quantidades de todos os itens
  - [x] Retornar número total de ingressos
- [x] Exibir resumo do pedido:
  - [x] Quantidade total de itens
  - [x] Subtotal (soma de todos os itens)
  - [x] Taxa de serviço (opcional - fixa ou percentual)
  - [x] Total geral
  - [x] Layout organizado e destacado

### 7. Contador do Carrinho no Header

- [x] Criar função `atualizarContadorCarrinho()`:
  - [x] Obter quantidade total do carrinho
  - [x] Atualizar badge no ícone do carrinho
  - [x] Esconder badge se carrinho vazio
- [x] Chamar função em momentos apropriados:
  - [x] Ao carregar qualquer página
  - [x] Ao adicionar item ao carrinho
  - [x] Ao remover item do carrinho
  - [x] Ao atualizar quantidade
- [x] Adicionar ao header de todas as páginas:
  - [x] Script para atualizar contador
  - [x] Executar ao carregar página

### 8. Persistência do Carrinho

- [x] Garantir que carrinho persiste:
  - [x] Salvar no LocalStorage após cada alteração
  - [x] Carregar ao abrir página do carrinho
  - [x] Manter carrinho entre navegações
- [x] Sincronizar dados:
  - [x] Se evento foi atualizado, atualizar no carrinho
  - [x] Verificar se evento ainda existe
  - [x] Remover itens de eventos inexistentes
- [x] Validar dados do carrinho:
  - [x] Verificar se eventos ainda têm ingressos disponíveis
  - [x] Ajustar quantidades se necessário
  - [x] Mostrar avisos se houver problemas

### 9. Validações e Tratamento de Erros

- [x] Validar antes de adicionar:
  - [x] Evento existe
  - [x] Há ingressos disponíveis
  - [x] Quantidade válida
- [x] Validar ao atualizar quantidade:
  - [x] Nova quantidade não excede disponível
  - [x] Quantidade mínima respeitada
- [x] Tratar erros:
  - [x] Evento esgotado
  - [x] Quantidade inválida
  - [x] Erro ao salvar no LocalStorage
  - [x] Mensagens de erro claras e amigáveis
- [x] Adicionar feedback visual:
  - [x] Mensagem de sucesso ao adicionar
  - [x] Mensagem de confirmação ao remover
  - [ ] Indicadores de carregamento (opcional)

### 10. Melhorias de UX

- [x] Adicionar animações:
  - [x] Fade in ao adicionar item
  - [x] Slide out ao remover item
  - [x] Transições suaves nas atualizações
- [x] Melhorar feedback:
  - [ ] Toast/notificação ao adicionar (opcional)
  - [x] Confirmação visual de ações
  - [x] Estados de hover nos botões
- [x] Adicionar botão "Continuar Comprando":
  - [x] Link para página de eventos
  - [x] Manter carrinho ao voltar
- [x] Adicionar botão "Finalizar Compra":
  - [x] Link para página de checkout
  - [x] Desabilitar se carrinho vazio
  - [x] Destacar visualmente

### 11. Responsividade

- [x] Ajustar layout do carrinho para mobile:
  - [x] Cards em coluna única
  - [x] Imagens menores ou ocultas
  - [x] Botões maiores para touch
- [x] Ajustar resumo do pedido:
  - [x] Posição fixa no mobile (sticky)
  - [x] Ou abaixo dos itens
- [x] Testar em diferentes tamanhos de tela

### 12. Testes

- [ ] Testar adicionar ao carrinho:
  - [ ] Adicionar um item
  - [ ] Adicionar múltiplos itens diferentes
  - [ ] Adicionar mesmo item duas vezes (deve atualizar quantidade)
  - [ ] Tentar adicionar mais que disponível
- [ ] Testar atualização de quantidade:
  - [ ] Aumentar quantidade
  - [ ] Diminuir quantidade
  - [ ] Tentar exceder disponível
  - [ ] Verificar subtotal atualiza
- [ ] Testar remoção:
  - [ ] Remover um item
  - [ ] Limpar carrinho completo
  - [ ] Verificar contador atualiza
- [ ] Testar persistência:
  - [ ] Adicionar itens e recarregar página
  - [ ] Navegar entre páginas
  - [ ] Verificar se carrinho mantém itens
- [ ] Testar cálculos:
  - [ ] Verificar subtotais corretos
  - [ ] Verificar total correto
  - [ ] Verificar com múltiplos itens
- [ ] Testar responsividade:
  - [ ] Mobile
  - [ ] Tablet
  - [ ] Desktop

---

## Entregáveis da Fase 4

- [x] `js/carrinho.js` - Lógica completa do carrinho
- [x] Página `carrinho.html` funcional
- [x] Funcionalidade de adicionar itens
- [x] Funcionalidade de remover itens
- [x] Atualização de quantidades
- [x] Cálculo de totais
- [x] Contador no header
- [x] Persistência no LocalStorage

---

## Notas Importantes

- Sempre validar dados antes de modificar carrinho
- Manter carrinho sincronizado com dados dos eventos
- Feedback visual claro para todas as ações
- Código modular e reutilizável
- Testar todos os cenários possíveis

---

## Próxima Fase

Após completar esta fase, seguir para: **FASE 5: Formulário de Checkout**
