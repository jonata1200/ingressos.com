# FASE 2: Funcionalidades de Navegação

## Objetivo
Implementar navegação entre páginas e filtros básicos

---

## Checklist de Ações

### 1. Criação de Páginas Adicionais

- [ ] Criar arquivo `eventos.html`:
  - [ ] Copiar estrutura base do `index.html`
  - [ ] Alterar título para "Eventos - ingressos.com"
  - [ ] Criar seção principal para lista de eventos
  - [ ] Adicionar container para filtros e busca
  - [ ] Adicionar container para grid de eventos
- [ ] Criar arquivo `detalhes.html`:
  - [ ] Copiar estrutura base do `index.html`
  - [ ] Alterar título para "Detalhes do Evento - ingressos.com"
  - [ ] Criar seção para detalhes completos do evento
  - [ ] Adicionar área para imagem grande
  - [ ] Adicionar área para informações detalhadas
  - [ ] Adicionar botão "Adicionar ao Carrinho"
- [ ] Criar arquivo `carrinho.html`:
  - [ ] Copiar estrutura base do `index.html`
  - [ ] Alterar título para "Carrinho - ingressos.com"
  - [ ] Criar seção para itens do carrinho
  - [ ] Adicionar área para resumo do pedido
  - [ ] Adicionar botão "Finalizar Compra"
  - [ ] Adicionar mensagem para carrinho vazio

### 2. Sistema de Navegação

- [ ] Atualizar menu de navegação em todas as páginas:
  - [ ] Link "Home" apontando para `index.html`
  - [ ] Link "Eventos" apontando para `eventos.html`
  - [ ] Link "Carrinho" apontando para `carrinho.html`
  - [ ] Ícone do carrinho também linkando para `carrinho.html`
- [ ] Adicionar classe ativa no menu:
  - [ ] Identificar página atual
  - [ ] Adicionar classe `.active` no link correspondente
  - [ ] Estilizar link ativo no CSS
- [ ] Criar função JavaScript para navegação:
  - [ ] Criar arquivo `js/navegacao.js`
  - [ ] Função para destacar página atual no menu
  - [ ] Função para atualizar contador do carrinho (preparação)
- [ ] Adicionar links de navegação nos cards:
  - [ ] Botão "Ver Detalhes" nos cards de eventos
  - [ ] Link para página de detalhes (usando parâmetros na URL ou localStorage)

### 3. Estrutura de Filtros Básicos

- [ ] Criar HTML para filtros na página `eventos.html`:
  - [ ] Container para barra de busca
  - [ ] Input de busca com placeholder "Buscar eventos..."
  - [ ] Container para filtros por categoria
  - [ ] Botões ou checkboxes para categorias:
    - [ ] Todos
    - [ ] Shows
    - [ ] Teatro
    - [ ] Esportes
    - [ ] Festivais
    - [ ] Outros
- [ ] Estilizar filtros no CSS:
  - [ ] Layout flex ou grid para organização
  - [ ] Estilo dos botões de categoria
  - [ ] Estado ativo para categoria selecionada
  - [ ] Estilo do input de busca
  - [ ] Responsividade dos filtros

### 4. Funcionalidade de Busca

- [ ] Criar arquivo `js/busca.js`:
  - [ ] Função para capturar texto da busca
  - [ ] Função para filtrar eventos por nome
  - [ ] Event listener no input de busca
  - [ ] Função para exibir resultados filtrados
- [ ] Implementar busca em tempo real:
  - [ ] Usar evento `input` ou `keyup`
  - [ ] Filtrar eventos conforme usuário digita
  - [ ] Mostrar mensagem quando não houver resultados
- [ ] Adicionar funcionalidade de limpar busca:
  - [ ] Botão "X" ou "Limpar" no input
  - [ ] Restaurar lista completa ao limpar

### 5. Funcionalidade de Filtro por Categoria

- [ ] Criar arquivo `js/filtros.js`:
  - [ ] Array de categorias disponíveis
  - [ ] Função para filtrar eventos por categoria
  - [ ] Event listeners nos botões de categoria
  - [ ] Função para atualizar visualização dos eventos
- [ ] Implementar lógica de filtro:
  - [ ] Marcar categoria selecionada
  - [ ] Filtrar eventos baseado na categoria
  - [ ] Combinar filtro de categoria com busca (se ambos ativos)
  - [ ] Mostrar mensagem quando não houver resultados
- [ ] Adicionar botão "Limpar Filtros":
  - [ ] Resetar categoria para "Todos"
  - [ ] Limpar campo de busca
  - [ ] Restaurar lista completa

### 6. Integração entre Páginas

- [ ] Implementar navegação para detalhes:
  - [ ] Ao clicar em "Ver Detalhes", passar ID do evento
  - [ ] Usar URL parameters (`?id=1`) ou localStorage
  - [ ] Carregar dados do evento na página de detalhes
- [ ] Adicionar botão "Voltar" na página de detalhes:
  - [ ] Link para página anterior ou lista de eventos
  - [ ] Usar `history.back()` ou link fixo
- [ ] Adicionar breadcrumbs (opcional):
  - [ ] Navegação: Home > Eventos > Detalhes
  - [ ] Links clicáveis em cada nível

### 7. Melhorias de UX na Navegação

- [ ] Adicionar indicadores visuais:
  - [ ] Loading state ao navegar (opcional)
  - [ ] Feedback visual ao clicar em links
- [ ] Implementar scroll suave:
  - [ ] CSS `scroll-behavior: smooth`
  - [ ] Ou JavaScript para scroll animado
- [ ] Adicionar transições de página:
  - [ ] Fade in/out (opcional, avançado)
  - [ ] Ou manter simples e direto

### 8. Responsividade da Navegação

- [ ] Ajustar menu para mobile:
  - [ ] Menu hamburger (se necessário)
  - [ ] Menu dropdown ou sidebar
  - [ ] Fechar menu ao clicar em link
- [ ] Ajustar filtros para mobile:
  - [ ] Layout em coluna
  - [ ] Botões de categoria em grid responsivo
  - [ ] Input de busca em largura total
- [ ] Testar navegação em diferentes dispositivos:
  - [ ] Mobile
  - [ ] Tablet
  - [ ] Desktop

### 9. Validação e Testes

- [ ] Testar todos os links de navegação:
  - [ ] Verificar se todos funcionam
  - [ ] Verificar se páginas carregam corretamente
- [ ] Testar funcionalidade de busca:
  - [ ] Buscar por nome existente
  - [ ] Buscar por nome inexistente
  - [ ] Buscar com texto vazio
  - [ ] Buscar com caracteres especiais
- [ ] Testar filtros de categoria:
  - [ ] Selecionar cada categoria
  - [ ] Combinar categoria com busca
  - [ ] Limpar filtros
- [ ] Testar em diferentes navegadores:
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Edge
- [ ] Verificar acessibilidade:
  - [ ] Navegação por teclado (Tab)
  - [ ] Foco visível nos links
  - [ ] Labels adequados nos inputs

---

## Entregáveis da Fase 2

- [x] `eventos.html` - Página de lista de eventos
- [x] `detalhes.html` - Página de detalhes do evento
- [x] `carrinho.html` - Página do carrinho
- [x] `js/navegacao.js` - Lógica de navegação
- [x] `js/busca.js` - Funcionalidade de busca
- [x] `js/filtros.js` - Funcionalidade de filtros
- [x] Sistema de navegação funcional entre todas as páginas
- [x] Filtros básicos de eventos funcionando

---

## Notas Importantes

- Manter consistência visual entre todas as páginas
- Reutilizar header e footer em todas as páginas
- Código JavaScript modular e organizado
- Comentar código para facilitar entendimento
- Testar funcionalidades após cada implementação

---

## Próxima Fase

Após completar esta fase, seguir para: **FASE 3: Sistema de Eventos e Dados**
