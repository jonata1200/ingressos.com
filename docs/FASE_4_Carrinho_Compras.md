# FASE 4: Carrinho de Compras

## Objetivo
Implementar funcionalidade completa de carrinho de compras

---

## Checklist de Ações

### 1. Estrutura de Dados do Carrinho

- [ ] Criar arquivo `js/carrinho.js`
- [ ] Definir estrutura de item do carrinho:
  - [ ] `eventoId` (ID do evento)
  - [ ] `nome` (nome do evento)
  - [ ] `data` (data do evento)
  - [ ] `local` (local do evento)
  - [ ] `precoUnitario` (preço de um ingresso)
  - [ ] `quantidade` (quantidade de ingressos)
  - [ ] `subtotal` (preço unitário × quantidade)
  - [ ] `imagem` (imagem do evento - opcional)
- [ ] Criar funções de gerenciamento:
  - [ ] `obterCarrinho()` - retorna array do carrinho do LocalStorage
  - [ ] `salvarCarrinho(carrinho)` - salva carrinho no LocalStorage
  - [ ] `limparCarrinho()` - remove todos os itens
  - [ ] `contarItensCarrinho()` - retorna quantidade total de itens

### 2. Adicionar ao Carrinho

- [ ] Criar função `adicionarAoCarrinho(eventoId, quantidade)`:
  - [ ] Validar se quantidade é maior que 0
  - [ ] Verificar se evento existe
  - [ ] Verificar se há ingressos disponíveis
  - [ ] Obter carrinho atual
  - [ ] Verificar se evento já está no carrinho:
    - [ ] Se sim, atualizar quantidade
    - [ ] Se não, adicionar novo item
  - [ ] Validar quantidade total não excede disponível
  - [ ] Salvar carrinho atualizado
  - [ ] Retornar sucesso/erro
- [ ] Atualizar página de detalhes:
  - [ ] Adicionar event listener no botão "Adicionar ao Carrinho"
  - [ ] Obter quantidade selecionada
  - [ ] Chamar função `adicionarAoCarrinho()`
  - [ ] Mostrar mensagem de sucesso
  - [ ] Atualizar contador do carrinho no header
- [ ] Adicionar validações:
  - [ ] Quantidade mínima: 1
  - [ ] Quantidade máxima: ingressos disponíveis
  - [ ] Mensagens de erro claras
  - [ ] Prevenir adicionar evento esgotado

### 3. Exibição do Carrinho

- [ ] Atualizar `carrinho.html`:
  - [ ] Adicionar script `carrinho.js`
  - [ ] Identificar container para itens do carrinho
  - [ ] Identificar área para resumo do pedido
- [ ] Criar função `renderizarCarrinho()`:
  - [ ] Obter carrinho do LocalStorage
  - [ ] Verificar se carrinho está vazio:
    - [ ] Se vazio: mostrar mensagem e botão "Ver Eventos"
    - [ ] Se não vazio: renderizar itens
- [ ] Para cada item do carrinho, criar HTML:
  - [ ] Card do item com:
    - [ ] Imagem do evento (pequena)
    - [ ] Nome do evento
    - [ ] Data e local
    - [ ] Preço unitário
    - [ ] Input/select para quantidade
    - [ ] Subtotal do item
    - [ ] Botão remover
  - [ ] Layout responsivo e organizado
- [ ] Estilizar itens do carrinho no CSS:
  - [ ] Layout flex ou grid
  - [ ] Espaçamento adequado
  - [ ] Bordas e sombras
  - [ ] Responsividade

### 4. Gerenciamento de Quantidades

- [ ] Implementar atualização de quantidade:
  - [ ] Event listener nos inputs de quantidade
  - [ ] Função `atualizarQuantidade(eventoId, novaQuantidade)`:
    - [ ] Validar nova quantidade
    - [ ] Verificar disponibilidade
    - [ ] Atualizar item no carrinho
    - [ ] Recalcular subtotal
    - [ ] Salvar carrinho
    - [ ] Re-renderizar carrinho
- [ ] Adicionar botões +/- (opcional):
  - [ ] Botão para aumentar quantidade
  - [ ] Botão para diminuir quantidade
  - [ ] Desabilitar botão - quando quantidade = 1
  - [ ] Desabilitar botão + quando quantidade = máximo
- [ ] Atualizar subtotal em tempo real:
  - [ ] Recalcular ao mudar quantidade
  - [ ] Atualizar exibição imediatamente

### 5. Remover Itens do Carrinho

- [ ] Criar função `removerDoCarrinho(eventoId)`:
  - [ ] Obter carrinho atual
  - [ ] Filtrar array removendo item com eventoId
  - [ ] Salvar carrinho atualizado
  - [ ] Re-renderizar carrinho
- [ ] Adicionar botão "Remover" em cada item:
  - [ ] Ícone ou texto "Remover"
  - [ ] Event listener no botão
  - [ ] Confirmar remoção (opcional - alert ou modal)
- [ ] Adicionar botão "Limpar Carrinho":
  - [ ] Botão visível quando carrinho não está vazio
  - [ ] Confirmar ação antes de limpar
  - [ ] Limpar LocalStorage
  - [ ] Re-renderizar carrinho

### 6. Cálculo de Totais

- [ ] Criar função `calcularSubtotal(item)`:
  - [ ] Multiplicar preço unitário × quantidade
  - [ ] Retornar valor formatado
- [ ] Criar função `calcularTotalCarrinho()`:
  - [ ] Obter carrinho
  - [ ] Somar todos os subtotais
  - [ ] Retornar valor total
- [ ] Criar função `calcularQuantidadeTotal()`:
  - [ ] Somar quantidades de todos os itens
  - [ ] Retornar número total de ingressos
- [ ] Exibir resumo do pedido:
  - [ ] Quantidade total de itens
  - [ ] Subtotal (soma de todos os itens)
  - [ ] Taxa de serviço (opcional - fixa ou percentual)
  - [ ] Total geral
  - [ ] Layout organizado e destacado

### 7. Contador do Carrinho no Header

- [ ] Criar função `atualizarContadorCarrinho()`:
  - [ ] Obter quantidade total do carrinho
  - [ ] Atualizar badge no ícone do carrinho
  - [ ] Esconder badge se carrinho vazio
- [ ] Chamar função em momentos apropriados:
  - [ ] Ao carregar qualquer página
  - [ ] Ao adicionar item ao carrinho
  - [ ] Ao remover item do carrinho
  - [ ] Ao atualizar quantidade
- [ ] Adicionar ao header de todas as páginas:
  - [ ] Script para atualizar contador
  - [ ] Executar ao carregar página

### 8. Persistência do Carrinho

- [ ] Garantir que carrinho persiste:
  - [ ] Salvar no LocalStorage após cada alteração
  - [ ] Carregar ao abrir página do carrinho
  - [ ] Manter carrinho entre navegações
- [ ] Sincronizar dados:
  - [ ] Se evento foi atualizado, atualizar no carrinho
  - [ ] Verificar se evento ainda existe
  - [ ] Remover itens de eventos inexistentes
- [ ] Validar dados do carrinho:
  - [ ] Verificar se eventos ainda têm ingressos disponíveis
  - [ ] Ajustar quantidades se necessário
  - [ ] Mostrar avisos se houver problemas

### 9. Validações e Tratamento de Erros

- [ ] Validar antes de adicionar:
  - [ ] Evento existe
  - [ ] Há ingressos disponíveis
  - [ ] Quantidade válida
- [ ] Validar ao atualizar quantidade:
  - [ ] Nova quantidade não excede disponível
  - [ ] Quantidade mínima respeitada
- [ ] Tratar erros:
  - [ ] Evento esgotado
  - [ ] Quantidade inválida
  - [ ] Erro ao salvar no LocalStorage
  - [ ] Mensagens de erro claras e amigáveis
- [ ] Adicionar feedback visual:
  - [ ] Mensagem de sucesso ao adicionar
  - [ ] Mensagem de confirmação ao remover
  - [ ] Indicadores de carregamento (opcional)

### 10. Melhorias de UX

- [ ] Adicionar animações:
  - [ ] Fade in ao adicionar item
  - [ ] Slide out ao remover item
  - [ ] Transições suaves nas atualizações
- [ ] Melhorar feedback:
  - [ ] Toast/notificação ao adicionar (opcional)
  - [ ] Confirmação visual de ações
  - [ ] Estados de hover nos botões
- [ ] Adicionar botão "Continuar Comprando":
  - [ ] Link para página de eventos
  - [ ] Manter carrinho ao voltar
- [ ] Adicionar botão "Finalizar Compra":
  - [ ] Link para página de checkout
  - [ ] Desabilitar se carrinho vazio
  - [ ] Destacar visualmente

### 11. Responsividade

- [ ] Ajustar layout do carrinho para mobile:
  - [ ] Cards em coluna única
  - [ ] Imagens menores ou ocultas
  - [ ] Botões maiores para touch
- [ ] Ajustar resumo do pedido:
  - [ ] Posição fixa no mobile (sticky)
  - [ ] Ou abaixo dos itens
- [ ] Testar em diferentes tamanhos de tela

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
