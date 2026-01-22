# FASE 1: Estrutura Base e Layout (HTML + CSS)

## Objetivo
Criar a estrutura HTML e estilização básica do site ingressos.com

---

## Checklist de Ações

### 1. Estrutura HTML Principal

- [x] Criar arquivo `index.html` na raiz do projeto
- [x] Adicionar estrutura HTML5 básica (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`)
- [x] Configurar meta tags (charset, viewport, description)
- [x] Adicionar título da página: "ingressos.com - Seus ingressos aqui"
- [x] Criar elemento `<header>` com:
  - [x] Logo "ingressos.com" (pode ser texto estilizado)
  - [x] Menu de navegação (`<nav>`) com links (Home, Eventos, Carrinho)
  - [x] Ícone de carrinho com contador (inicialmente vazio)
- [x] Criar seção hero/banner principal (`<section class="hero">`):
  - [x] Título chamativo
  - [x] Subtítulo ou descrição
  - [x] Botão CTA (Call to Action) "Ver Eventos"
- [x] Criar seção de eventos em destaque (`<section class="eventos-destaque">`):
  - [x] Título "Eventos em Destaque"
  - [x] Container para cards de eventos (inicialmente vazio ou com placeholder)
- [x] Criar elemento `<footer>` com:
  - [x] Informações de contato
  - [x] Links úteis
  - [x] Copyright

### 2. CSS Base

- [x] Criar pasta `css/` na raiz do projeto
- [x] Criar arquivo `css/styles.css`
- [x] Adicionar link do CSS no `<head>` do HTML
- [x] Implementar reset CSS básico:
  - [x] Reset de margin e padding (`* { margin: 0; padding: 0; }`)
  - [x] Box-sizing border-box
  - [x] Reset de listas (sem bullets)
- [x] Definir variáveis CSS (root):
  - [x] Cores principais (primária, secundária, texto, fundo)
  - [x] Fontes (família principal, tamanhos)
  - [x] Espaçamentos (margens, paddings padrão)
  - [x] Breakpoints para responsividade
- [x] Estilizar body:
  - [x] Fonte padrão
  - [x] Cor de fundo
  - [x] Cor do texto
  - [x] Line-height adequado
- [x] Criar classes utilitárias:
  - [x] `.container` (largura máxima, centralizado, padding)
  - [x] `.btn` (estilo base para botões)
  - [x] `.btn-primary` (botão principal)
  - [x] `.btn-secondary` (botão secundário)

### 3. Estilização do Header

- [x] Estilizar header:
  - [x] Background color
  - [x] Padding vertical e horizontal
  - [x] Box-shadow (opcional)
  - [x] Posicionamento fixo ou relativo
- [x] Estilizar logo:
  - [x] Tamanho da fonte
  - [x] Peso da fonte (bold)
  - [x] Cor
  - [x] Remover decoração de link
- [x] Estilizar menu de navegação:
  - [x] Display flex
  - [x] Espaçamento entre itens
  - [x] Estilo dos links (hover, active)
  - [x] Transições suaves
- [x] Estilizar ícone do carrinho:
  - [x] Posicionamento
  - [x] Badge com contador (círculo com número)
  - [x] Cor de destaque

### 4. Estilização da Seção Hero

- [x] Estilizar seção hero:
  - [x] Altura mínima (viewport height ou fixa)
  - [x] Background (cor sólida ou gradiente)
  - [x] Centralização de conteúdo
  - [x] Padding adequado
- [x] Estilizar título do hero:
  - [x] Tamanho grande
  - [x] Peso da fonte
  - [x] Cor
  - [x] Margem inferior
- [x] Estilizar subtítulo:
  - [x] Tamanho médio
  - [x] Cor mais suave
  - [x] Margem inferior
- [x] Estilizar botão CTA:
  - [x] Tamanho grande
  - [x] Padding generoso
  - [x] Border-radius
  - [x] Efeito hover

### 5. Componentes Visuais - Cards de Eventos

- [x] Criar estrutura HTML para card de evento (placeholder):
  - [x] Container do card
  - [x] Imagem do evento
  - [x] Informações (título, data, local, preço)
  - [x] Botão "Ver Detalhes"
- [x] Estilizar cards:
  - [x] Display grid ou flex
  - [x] Border-radius
  - [x] Box-shadow
  - [x] Overflow hidden (para imagem)
  - [x] Transição para hover
- [x] Estilizar imagem do card:
  - [x] Largura 100%
  - [x] Altura definida (aspect-ratio ou height)
  - [x] Object-fit cover
- [x] Estilizar informações do card:
  - [x] Padding interno
  - [x] Espaçamento entre elementos
  - [x] Tipografia hierárquica
- [x] Adicionar efeito hover no card:
  - [x] Transform scale ou elevation
  - [x] Transição suave

### 6. Estilização do Footer

- [x] Estilizar footer:
  - [x] Background color (mais escuro)
  - [x] Cor do texto (mais clara)
  - [x] Padding generoso
  - [x] Margin-top para separar do conteúdo
- [x] Organizar conteúdo do footer:
  - [x] Display grid ou flex
  - [x] Colunas (se necessário)
  - [x] Espaçamento entre seções
- [x] Estilizar links do footer:
  - [x] Cor
  - [x] Hover effect
  - [x] Remover decoração padrão

### 7. Layout Responsivo Básico

- [x] Adicionar media queries:
  - [x] Mobile (até 768px)
  - [x] Tablet (768px - 1024px)
  - [x] Desktop (acima de 1024px)
- [x] Ajustar header para mobile:
  - [x] Menu hamburger (opcional nesta fase)
  - [x] Logo e carrinho visíveis
- [x] Ajustar hero para mobile:
  - [x] Tamanho de fonte reduzido
  - [x] Padding reduzido
- [x] Ajustar grid de eventos:
  - [x] 1 coluna no mobile
  - [x] 2 colunas no tablet
  - [x] 3-4 colunas no desktop
- [x] Ajustar footer para mobile:
  - [x] Layout em coluna única
  - [x] Texto centralizado ou alinhado

### 8. Tipografia e Espaçamentos

- [x] Definir hierarquia tipográfica:
  - [x] h1, h2, h3 com tamanhos apropriados
  - [x] Parágrafos com tamanho legível
  - [x] Line-height adequado para leitura
- [x] Aplicar espaçamentos consistentes:
  - [x] Margens entre seções
  - [x] Padding interno dos containers
  - [x] Espaçamento entre elementos relacionados

### 9. Testes e Validação

- [ ] Testar HTML em validador (W3C)
- [ ] Testar CSS em validador (W3C)
- [ ] Visualizar página no navegador
- [ ] Testar responsividade em diferentes tamanhos
- [ ] Verificar contraste de cores
- [ ] Testar em diferentes navegadores (Chrome, Firefox, Edge)

---

## Entregáveis da Fase 1

- [x] `index.html` - Página principal com estrutura completa
- [x] `css/styles.css` - Estilos principais e responsivos
- [x] Layout visual funcional e responsivo
- [x] Componentes básicos estilizados (header, hero, cards, footer)

---

## Notas Importantes

- Focar em criar uma base sólida e bem estruturada
- Usar HTML semântico (header, nav, section, footer)
- Manter código limpo e comentado
- CSS organizado por seções
- Testar constantemente no navegador durante o desenvolvimento

---

## Próxima Fase

Após completar esta fase, seguir para: **FASE 2: Funcionalidades de Navegação**
