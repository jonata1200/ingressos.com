# FASE 3: Sistema de Eventos e Dados

## Objetivo
Criar estrutura de dados e exibição dinâmica de eventos

---

## Checklist de Ações

### 1. Estrutura de Dados

- [x] Criar arquivo `js/eventos.js`
- [x] Definir array de eventos com pelo menos 8-10 eventos de exemplo
- [x] Cada evento deve conter:
  - [x] `id` (número único)
  - [x] `nome` (string)
  - [x] `data` (string formatada: "DD/MM/YYYY")
  - [x] `hora` (string: "HH:MM")
  - [x] `local` (string com nome do local)
  - [x] `endereco` (string com endereço completo)
  - [x] `preco` (número - valor do ingresso)
  - [x] `categoria` (string: "Show", "Teatro", "Esporte", "Festival", etc.)
  - [x] `imagem` (string com caminho da imagem)
  - [x] `descricao` (string com descrição detalhada)
  - [x] `ingressosDisponiveis` (número - quantidade disponível)
  - [x] `destaque` (boolean - se aparece na home)
- [x] Criar eventos variados:
  - [x] Diferentes categorias
  - [x] Diferentes preços
  - [x] Alguns em destaque, outros não
  - [x] Datas futuras variadas

### 2. Funções Utilitárias

- [x] Criar arquivo `js/utils.js`
- [x] Função para formatar preço:
  - [x] Converter número para formato "R$ XX,XX"
  - [x] Exemplo: `formatarPreco(150.50)` → `"R$ 150,50"`
- [x] Função para formatar data:
  - [x] Converter data para formato legível
  - [x] Exemplo: `formatarData("2024-12-25")` → `"25 de Dezembro de 2024"`
- [x] Função para obter evento por ID:
  - [x] Receber ID como parâmetro
  - [x] Retornar objeto do evento correspondente
  - [x] Retornar null se não encontrar
- [x] Função para filtrar eventos:
  - [x] Por categoria
  - [x] Por nome (busca)
  - [x] Por data (opcional)
  - [x] Combinar múltiplos filtros

### 3. Renderização Dinâmica - Cards de Eventos

- [x] Criar função `renderizarEventos()`:
  - [x] Receber array de eventos como parâmetro
  - [x] Receber container HTML onde renderizar
  - [x] Limpar container antes de renderizar
- [x] Para cada evento, criar HTML do card:
  - [x] Estrutura do card (div com classes)
  - [x] Imagem do evento (com alt text)
  - [x] Badge de categoria (opcional)
  - [x] Título do evento
  - [x] Data e hora formatadas
  - [x] Local do evento
  - [x] Preço formatado
  - [x] Botão "Ver Detalhes" com link
  - [x] Indicador de ingressos disponíveis (se baixo)
- [x] Adicionar evento de clique no botão:
  - [x] Salvar ID do evento no localStorage
  - [x] Redirecionar para página de detalhes
- [x] Adicionar mensagem quando não houver eventos:
  - [x] Exibir mensagem amigável
  - [x] Sugerir limpar filtros

### 4. Renderização na Página Inicial

- [x] Atualizar `index.html`:
  - [x] Adicionar script `eventos.js`
  - [x] Adicionar script `utils.js`
  - [x] Adicionar script para renderização
- [x] Criar função para carregar eventos em destaque:
  - [x] Filtrar eventos com `destaque: true`
  - [x] Limitar a 4-6 eventos
  - [x] Chamar `renderizarEventos()`
- [x] Executar ao carregar página:
  - [x] Usar `DOMContentLoaded` ou colocar script no final do body
  - [x] Renderizar eventos na seção correta

### 5. Renderização na Página de Eventos

- [x] Atualizar `eventos.html`:
  - [x] Adicionar scripts necessários
  - [x] Identificar container para lista de eventos
- [x] Criar função para carregar todos os eventos:
  - [x] Carregar todos os eventos (ou filtrados)
  - [x] Renderizar na página
- [x] Integrar com filtros existentes:
  - [x] Ao aplicar filtro, atualizar lista renderizada
  - [x] Ao buscar, atualizar lista renderizada
  - [x] Combinar filtros e busca

### 6. Página de Detalhes Dinâmica

- [x] Atualizar `detalhes.html`:
  - [x] Adicionar scripts necessários
  - [x] Identificar elementos para preencher:
    - [x] Imagem grande
    - [x] Título
    - [x] Data e hora
    - [x] Local e endereço
    - [x] Preço
    - [x] Descrição
    - [x] Categoria
    - [x] Ingressos disponíveis
- [x] Criar função `carregarDetalhesEvento()`:
  - [x] Obter ID do evento (URL parameter ou localStorage)
  - [x] Buscar evento pelo ID
  - [x] Preencher todos os campos
  - [x] Tratar caso evento não encontrado (404)
- [x] Adicionar seleção de quantidade:
  - [x] Input number ou select para quantidade
  - [x] Validação: não pode ser maior que disponível
  - [x] Validação: mínimo 1 ingresso
- [x] Atualizar botão "Adicionar ao Carrinho":
  - [x] Preparar para receber quantidade selecionada
  - [x] Salvar dados no localStorage (preparação para Fase 4)

### 7. Armazenamento Local (LocalStorage)

- [x] Criar funções para gerenciar LocalStorage:
  - [x] `salvarNoLocalStorage(chave, dados)`
  - [x] `obterDoLocalStorage(chave)`
  - [x] `removerDoLocalStorage(chave)`
  - [x] `limparLocalStorage()` (opcional)
- [x] Salvar evento visualizado:
  - [x] Ao acessar detalhes, salvar no histórico
  - [x] Array de IDs de eventos visualizados
  - [x] Limitar histórico (ex: últimos 10)
- [x] Implementar favoritos (opcional):
  - [x] Botão "Favoritar" nos cards e detalhes
  - [x] Salvar array de IDs favoritados
  - [x] Alternar estado (adicionar/remover)
  - [x] Indicador visual de favoritado
  
  **Nota:** Implementado na FASE 6 - Melhorias e Polimento
- [x] Persistir filtros selecionados:
  - [x] Salvar última categoria filtrada
  - [x] Salvar último termo de busca
  - [x] Restaurar ao voltar para página de eventos

### 8. Melhorias na Exibição

- [ ] Adicionar loading state:
  - [ ] Mostrar spinner ou skeleton enquanto carrega
  - [ ] Esconder após carregar eventos
- [x] Adicionar animação de entrada:
  - [x] Fade in nos cards
  - [x] Stagger animation (aparecer um por vez)
- [x] Melhorar feedback visual:
  - [x] Destaque em eventos com poucos ingressos
  - [x] Badge "Esgotado" se não houver ingressos
  - [ ] Badge "Novo" para eventos recentes (opcional)
- [ ] Adicionar paginação (opcional):
  - [ ] Limitar eventos por página
  - [ ] Botões de navegação
  - [ ] Ou scroll infinito (mais avançado)

### 9. Validação e Tratamento de Erros

- [x] Validar dados dos eventos:
  - [x] Verificar se todos os campos obrigatórios existem
  - [x] Validar formato de data
  - [x] Validar preço (deve ser positivo)
- [x] Tratar erros:
  - [x] Evento não encontrado (404)
  - [x] Erro ao carregar dados
  - [x] Erro ao salvar no LocalStorage
- [x] Adicionar fallbacks:
  - [x] Se imagem não carregar, usar placeholder
  - [x] Se dados corrompidos, usar valores padrão

### 10. Testes

- [ ] Testar renderização de eventos:
  - [ ] Verificar se todos aparecem corretamente
  - [ ] Verificar formatação de preços e datas
  - [ ] Verificar links funcionando
- [ ] Testar filtros e busca:
  - [ ] Filtrar por categoria
  - [ ] Buscar por nome
  - [ ] Combinar filtros
- [ ] Testar página de detalhes:
  - [ ] Acessar diferentes eventos
  - [ ] Verificar se todos os dados aparecem
  - [ ] Testar seleção de quantidade
- [ ] Testar LocalStorage:
  - [ ] Verificar se dados são salvos
  - [ ] Verificar se dados persistem após refresh
  - [ ] Testar em modo anônimo (se possível)
- [ ] Testar responsividade:
  - [ ] Cards em diferentes tamanhos de tela
  - [ ] Página de detalhes em mobile

---

## Entregáveis da Fase 3

- [x] `js/eventos.js` - Array de dados dos eventos
- [x] `js/utils.js` - Funções utilitárias
- [x] Funções de renderização dinâmica
- [x] Páginas atualizadas com conteúdo dinâmico
- [x] Sistema de LocalStorage implementado
- [x] Persistência básica de dados funcionando

---

## Notas Importantes

- Manter dados dos eventos organizados e consistentes
- Funções de renderização reutilizáveis
- Código JavaScript bem estruturado e comentado
- Tratar casos de erro e dados ausentes
- Testar todas as funcionalidades após implementação

---

## Próxima Fase

Após completar esta fase, seguir para: **FASE 4: Carrinho de Compras**
