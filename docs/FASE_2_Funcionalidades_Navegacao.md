# FASE 2: Funcionalidades de Navegação

## Objetivo
Implementar navegação entre páginas e filtros básicos

---

## Checklist de Ações

### 1. Criação de Páginas Adicionais

- [x] Criar arquivo `eventos.html`:
  - [x] Copiar estrutura base do `index.html`
  - [x] Alterar título para "Eventos - ingressos.com"
  - [x] Criar seção principal para lista de eventos
  - [x] Adicionar container para filtros e busca
  - [x] Adicionar container para grid de eventos
- [x] Criar arquivo `detalhes.html`:
  - [x] Copiar estrutura base do `index.html`
  - [x] Alterar título para "Detalhes do Evento - ingressos.com"
  - [x] Criar seção para detalhes completos do evento
  - [x] Adicionar área para imagem grande
  - [x] Adicionar área para informações detalhadas
  - [x] Adicionar botão "Adicionar ao Carrinho"
- [x] Criar arquivo `carrinho.html`:
  - [x] Copiar estrutura base do `index.html`
  - [x] Alterar título para "Carrinho - ingressos.com"
  - [x] Criar seção para itens do carrinho
  - [x] Adicionar área para resumo do pedido
  - [x] Adicionar botão "Finalizar Compra"
  - [x] Adicionar mensagem para carrinho vazio

### 2. Sistema de Navegação

- [x] Atualizar menu de navegação em todas as páginas:
  - [x] Link "Home" apontando para `index.html`
  - [x] Link "Eventos" apontando para `eventos.html`
  - [x] Link "Carrinho" apontando para `carrinho.html`
  - [x] Ícone do carrinho também linkando para `carrinho.html`
- [x] Adicionar classe ativa no menu:
  - [x] Identificar página atual
  - [x] Adicionar classe `.active` no link correspondente
  - [x] Estilizar link ativo no CSS
- [x] Criar função JavaScript para navegação:
  - [x] Criar arquivo `js/navegacao.js`
  - [x] Função para destacar página atual no menu
  - [x] Função para atualizar contador do carrinho (preparação)
- [x] Adicionar links de navegação nos cards:
  - [x] Botão "Ver Detalhes" nos cards de eventos
  - [x] Link para página de detalhes (usando parâmetros na URL ou localStorage)

### 3. Estrutura de Filtros Básicos

- [x] Criar HTML para filtros na página `eventos.html`:
  - [x] Container para barra de busca
  - [x] Input de busca com placeholder "Buscar eventos..."
  - [x] Container para filtros por categoria
  - [x] Botões ou checkboxes para categorias:
    - [x] Todos
    - [x] Shows
    - [x] Teatro
    - [x] Esportes
    - [x] Festivais
    - [x] Outros
- [x] Estilizar filtros no CSS:
  - [x] Layout flex ou grid para organização
  - [x] Estilo dos botões de categoria
  - [x] Estado ativo para categoria selecionada
  - [x] Estilo do input de busca
  - [x] Responsividade dos filtros

### 4. Funcionalidade de Busca

- [x] Criar arquivo `js/busca.js`:
  - [x] Função para capturar texto da busca
  - [x] Função para filtrar eventos por nome
  - [x] Event listener no input de busca
  - [x] Função para exibir resultados filtrados
- [x] Implementar busca em tempo real:
  - [x] Usar evento `input` ou `keyup`
  - [x] Filtrar eventos conforme usuário digita
  - [x] Mostrar mensagem quando não houver resultados
- [x] Adicionar funcionalidade de limpar busca:
  - [x] Botão "X" ou "Limpar" no input
  - [x] Restaurar lista completa ao limpar

### 5. Funcionalidade de Filtro por Categoria

- [x] Criar arquivo `js/filtros.js`:
  - [x] Array de categorias disponíveis
  - [x] Função para filtrar eventos por categoria
  - [x] Event listeners nos botões de categoria
  - [x] Função para atualizar visualização dos eventos
- [x] Implementar lógica de filtro:
  - [x] Marcar categoria selecionada
  - [x] Filtrar eventos baseado na categoria
  - [x] Combinar filtro de categoria com busca (se ambos ativos)
  - [x] Mostrar mensagem quando não houver resultados
- [x] Adicionar botão "Limpar Filtros":
  - [x] Resetar categoria para "Todos"
  - [x] Limpar campo de busca
  - [x] Restaurar lista completa

### 6. Integração entre Páginas

- [x] Implementar navegação para detalhes:
  - [x] Ao clicar em "Ver Detalhes", passar ID do evento
  - [x] Usar URL parameters (`?id=1`) ou localStorage
  - [x] Carregar dados do evento na página de detalhes
- [x] Adicionar botão "Voltar" na página de detalhes:
  - [x] Link para página anterior ou lista de eventos
  - [x] Usar `history.back()` ou link fixo
- [x] Adicionar breadcrumbs (opcional):
  - [x] Navegação: Home > Eventos > Detalhes
  - [x] Links clicáveis em cada nível

### 7. Melhorias de UX na Navegação

- [x] Adicionar indicadores visuais:
  - [x] Loading state ao navegar (opcional)
  - [x] Feedback visual ao clicar em links
- [x] Implementar scroll suave:
  - [x] CSS `scroll-behavior: smooth`
  - [x] Ou JavaScript para scroll animado
- [x] Adicionar transições de página:
  - [x] Fade in/out (opcional, avançado)
  - [x] Ou manter simples e direto

### 8. Responsividade da Navegação

- [x] Ajustar menu para mobile:
  - [x] Menu hamburger (se necessário)
  - [x] Menu dropdown ou sidebar
  - [x] Fechar menu ao clicar em link
- [x] Ajustar filtros para mobile:
  - [x] Layout em coluna
  - [x] Botões de categoria em grid responsivo
  - [x] Input de busca em largura total
- [x] Testar navegação em diferentes dispositivos:
  - [x] Mobile
  - [x] Tablet
  - [x] Desktop

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
