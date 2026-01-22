# Plano de Desenvolvimento - ingressos.com

## Visão Geral
Projeto simples de site de compra de ingressos para fins educacionais, desenvolvido com HTML, CSS e JavaScript puro (sem frameworks).

---

## FASE 1: Estrutura Base e Layout (HTML + CSS)
**Objetivo:** Criar a estrutura HTML e estilização básica do site

### Tarefas:
1. **Estrutura HTML principal**
   - Header com logo e navegação
   - Seção hero/banner principal
   - Área de eventos em destaque
   - Footer com informações

2. **CSS Base**
   - Reset CSS básico
   - Variáveis CSS (cores, fontes)
   - Layout responsivo básico
   - Tipografia e espaçamentos

3. **Componentes visuais**
   - Cards de eventos
   - Botões de ação
   - Formulários básicos

**Entregáveis:**
- `index.html` - Página principal
- `styles.css` - Estilos principais
- Layout visual funcional e responsivo

---

## FASE 2: Funcionalidades de Navegação
**Objetivo:** Implementar navegação entre páginas e filtros básicos

### Tarefas:
1. **Páginas adicionais**
   - `eventos.html` - Lista de todos os eventos
   - `detalhes.html` - Detalhes de um evento específico
   - `carrinho.html` - Carrinho de compras

2. **Sistema de navegação**
   - Menu de navegação funcional
   - Links entre páginas
   - Navegação com JavaScript

3. **Filtros básicos**
   - Filtro por categoria (Show, Teatro, Esporte, etc.)
   - Busca simples por nome

**Entregáveis:**
- Múltiplas páginas HTML conectadas
- Sistema de navegação funcional
- Filtros básicos de eventos

---

## FASE 3: Sistema de Eventos e Dados
**Objetivo:** Criar estrutura de dados e exibição de eventos

### Tarefas:
1. **Estrutura de dados**
   - Array de eventos em JavaScript
   - Cada evento com: nome, data, local, preço, imagem, categoria

2. **Renderização dinâmica**
   - Função para exibir eventos na página
   - Cards de eventos gerados dinamicamente
   - Página de detalhes dinâmica

3. **Armazenamento local**
   - Usar LocalStorage para persistir dados
   - Salvar eventos favoritos
   - Histórico de visualizações

**Entregáveis:**
- Sistema de dados de eventos
- Renderização dinâmica de conteúdo
- Persistência básica de dados

---

## FASE 4: Carrinho de Compras
**Objetivo:** Implementar funcionalidade de carrinho de compras

### Tarefas:
1. **Adicionar ao carrinho**
   - Botão "Comprar" em cada evento
   - Seleção de quantidade de ingressos
   - Validação de estoque (simulado)

2. **Gerenciamento do carrinho**
   - Visualizar itens no carrinho
   - Remover itens
   - Atualizar quantidades
   - Calcular total

3. **Persistência do carrinho**
   - Salvar carrinho no LocalStorage
   - Manter carrinho entre páginas
   - Limpar carrinho após compra

**Entregáveis:**
- Carrinho de compras funcional
- Adição/remoção de itens
- Cálculo de totais

---

## FASE 5: Formulário de Checkout
**Objetivo:** Criar processo de finalização de compra

### Tarefas:
1. **Página de checkout**
   - Formulário de dados pessoais
   - Seleção de forma de pagamento (simulado)
   - Resumo do pedido

2. **Validação de formulário**
   - Validação de campos obrigatórios
   - Validação de email e CPF
   - Mensagens de erro amigáveis

3. **Confirmação de compra**
   - Página de confirmação
   - Exibir número de pedido (simulado)
   - Limpar carrinho após confirmação

**Entregáveis:**
- Formulário de checkout completo
- Validações funcionais
- Página de confirmação

---

## FASE 6: Melhorias e Polimento
**Objetivo:** Adicionar funcionalidades extras e melhorar UX

### Tarefas:
1. **Melhorias visuais**
   - Animações suaves (CSS transitions)
   - Efeitos hover nos cards
   - Loading states
   - Mensagens de feedback

2. **Funcionalidades extras**
   - Busca avançada
   - Ordenação de eventos (data, preço)
   - Favoritos/lista de desejos
   - Contador de ingressos disponíveis

3. **Responsividade completa**
   - Teste em diferentes tamanhos de tela
   - Menu mobile (hamburger)
   - Otimização para tablets

4. **Acessibilidade básica**
   - Atributos ARIA básicos
   - Navegação por teclado
   - Contraste adequado

**Entregáveis:**
- Site polido e funcional
- Boa experiência do usuário
- Responsivo e acessível

---

## Estrutura de Arquivos Final

```
ingressos.com/
│
├── index.html          # Página inicial
├── eventos.html        # Lista de eventos
├── detalhes.html       # Detalhes do evento
├── carrinho.html       # Carrinho de compras
├── checkout.html       # Finalização de compra
├── confirmacao.html    # Confirmação de pedido
│
├── css/
│   └── styles.css      # Estilos principais
│
├── js/
│   ├── eventos.js      # Dados e lógica de eventos
│   ├── carrinho.js     # Lógica do carrinho
│   ├── checkout.js     # Validação e checkout
│   └── utils.js        # Funções utilitárias
│
├── images/             # Imagens dos eventos
│
└── README.md           # Documentação do projeto
```

---

## Tecnologias Utilizadas
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização e layout responsivo
- **JavaScript (Vanilla)** - Funcionalidades interativas
- **LocalStorage** - Persistência de dados

---

## Funcionalidades Principais
✅ Visualização de eventos  
✅ Busca e filtros  
✅ Carrinho de compras  
✅ Processo de checkout  
✅ Validação de formulários  
✅ Design responsivo  
✅ Persistência de dados (LocalStorage)  

---

## Notas para o Curso
- Projeto focado em conceitos fundamentais de web development
- Sem uso de frameworks para facilitar aprendizado
- Código comentado e didático
- Estrutura simples e fácil de entender
- Pronto para ser expandido com novas funcionalidades

---

## Próximos Passos (Opcional - Futuro)
- Integração com API real
- Sistema de autenticação
- Painel administrativo
- Histórico de compras
- Sistema de avaliações
