# FASE 3: Sistema de Eventos e Dados

## Objetivo
Criar estrutura de dados e exibição dinâmica de eventos

---

## Checklist de Ações

### 1. Estrutura de Dados

- [ ] Criar arquivo `js/eventos.js`
- [ ] Definir array de eventos com pelo menos 8-10 eventos de exemplo
- [ ] Cada evento deve conter:
  - [ ] `id` (número único)
  - [ ] `nome` (string)
  - [ ] `data` (string formatada: "DD/MM/YYYY")
  - [ ] `hora` (string: "HH:MM")
  - [ ] `local` (string com nome do local)
  - [ ] `endereco` (string com endereço completo)
  - [ ] `preco` (número - valor do ingresso)
  - [ ] `categoria` (string: "Show", "Teatro", "Esporte", "Festival", etc.)
  - [ ] `imagem` (string com caminho da imagem)
  - [ ] `descricao` (string com descrição detalhada)
  - [ ] `ingressosDisponiveis` (número - quantidade disponível)
  - [ ] `destaque` (boolean - se aparece na home)
- [ ] Criar eventos variados:
  - [ ] Diferentes categorias
  - [ ] Diferentes preços
  - [ ] Alguns em destaque, outros não
  - [ ] Datas futuras variadas

### 2. Funções Utilitárias

- [ ] Criar arquivo `js/utils.js`
- [ ] Função para formatar preço:
  - [ ] Converter número para formato "R$ XX,XX"
  - [ ] Exemplo: `formatarPreco(150.50)` → `"R$ 150,50"`
- [ ] Função para formatar data:
  - [ ] Converter data para formato legível
  - [ ] Exemplo: `formatarData("2024-12-25")` → `"25 de Dezembro de 2024"`
- [ ] Função para obter evento por ID:
  - [ ] Receber ID como parâmetro
  - [ ] Retornar objeto do evento correspondente
  - [ ] Retornar null se não encontrar
- [ ] Função para filtrar eventos:
  - [ ] Por categoria
  - [ ] Por nome (busca)
  - [ ] Por data (opcional)
  - [ ] Combinar múltiplos filtros

### 3. Renderização Dinâmica - Cards de Eventos

- [ ] Criar função `renderizarEventos()`:
  - [ ] Receber array de eventos como parâmetro
  - [ ] Receber container HTML onde renderizar
  - [ ] Limpar container antes de renderizar
- [ ] Para cada evento, criar HTML do card:
  - [ ] Estrutura do card (div com classes)
  - [ ] Imagem do evento (com alt text)
  - [ ] Badge de categoria (opcional)
  - [ ] Título do evento
  - [ ] Data e hora formatadas
  - [ ] Local do evento
  - [ ] Preço formatado
  - [ ] Botão "Ver Detalhes" com link
  - [ ] Indicador de ingressos disponíveis (se baixo)
- [ ] Adicionar evento de clique no botão:
  - [ ] Salvar ID do evento no localStorage
  - [ ] Redirecionar para página de detalhes
- [ ] Adicionar mensagem quando não houver eventos:
  - [ ] Exibir mensagem amigável
  - [ ] Sugerir limpar filtros

### 4. Renderização na Página Inicial

- [ ] Atualizar `index.html`:
  - [ ] Adicionar script `eventos.js`
  - [ ] Adicionar script `utils.js`
  - [ ] Adicionar script para renderização
- [ ] Criar função para carregar eventos em destaque:
  - [ ] Filtrar eventos com `destaque: true`
  - [ ] Limitar a 4-6 eventos
  - [ ] Chamar `renderizarEventos()`
- [ ] Executar ao carregar página:
  - [ ] Usar `DOMContentLoaded` ou colocar script no final do body
  - [ ] Renderizar eventos na seção correta

### 5. Renderização na Página de Eventos

- [ ] Atualizar `eventos.html`:
  - [ ] Adicionar scripts necessários
  - [ ] Identificar container para lista de eventos
- [ ] Criar função para carregar todos os eventos:
  - [ ] Carregar todos os eventos (ou filtrados)
  - [ ] Renderizar na página
- [ ] Integrar com filtros existentes:
  - [ ] Ao aplicar filtro, atualizar lista renderizada
  - [ ] Ao buscar, atualizar lista renderizada
  - [ ] Combinar filtros e busca

### 6. Página de Detalhes Dinâmica

- [ ] Atualizar `detalhes.html`:
  - [ ] Adicionar scripts necessários
  - [ ] Identificar elementos para preencher:
    - [ ] Imagem grande
    - [ ] Título
    - [ ] Data e hora
    - [ ] Local e endereço
    - [ ] Preço
    - [ ] Descrição
    - [ ] Categoria
    - [ ] Ingressos disponíveis
- [ ] Criar função `carregarDetalhesEvento()`:
  - [ ] Obter ID do evento (URL parameter ou localStorage)
  - [ ] Buscar evento pelo ID
  - [ ] Preencher todos os campos
  - [ ] Tratar caso evento não encontrado (404)
- [ ] Adicionar seleção de quantidade:
  - [ ] Input number ou select para quantidade
  - [ ] Validação: não pode ser maior que disponível
  - [ ] Validação: mínimo 1 ingresso
- [ ] Atualizar botão "Adicionar ao Carrinho":
  - [ ] Preparar para receber quantidade selecionada
  - [ ] Salvar dados no localStorage (preparação para Fase 4)

### 7. Armazenamento Local (LocalStorage)

- [ ] Criar funções para gerenciar LocalStorage:
  - [ ] `salvarNoLocalStorage(chave, dados)`
  - [ ] `obterDoLocalStorage(chave)`
  - [ ] `removerDoLocalStorage(chave)`
  - [ ] `limparLocalStorage()` (opcional)
- [ ] Salvar evento visualizado:
  - [ ] Ao acessar detalhes, salvar no histórico
  - [ ] Array de IDs de eventos visualizados
  - [ ] Limitar histórico (ex: últimos 10)
- [ ] Implementar favoritos (opcional):
  - [ ] Botão "Favoritar" nos cards e detalhes
  - [ ] Salvar array de IDs favoritados
  - [ ] Alternar estado (adicionar/remover)
  - [ ] Indicador visual de favoritado
- [ ] Persistir filtros selecionados:
  - [ ] Salvar última categoria filtrada
  - [ ] Salvar último termo de busca
  - [ ] Restaurar ao voltar para página de eventos

### 8. Melhorias na Exibição

- [ ] Adicionar loading state:
  - [ ] Mostrar spinner ou skeleton enquanto carrega
  - [ ] Esconder após carregar eventos
- [ ] Adicionar animação de entrada:
  - [ ] Fade in nos cards
  - [ ] Stagger animation (aparecer um por vez)
- [ ] Melhorar feedback visual:
  - [ ] Destaque em eventos com poucos ingressos
  - [ ] Badge "Esgotado" se não houver ingressos
  - [ ] Badge "Novo" para eventos recentes (opcional)
- [ ] Adicionar paginação (opcional):
  - [ ] Limitar eventos por página
  - [ ] Botões de navegação
  - [ ] Ou scroll infinito (mais avançado)

### 9. Validação e Tratamento de Erros

- [ ] Validar dados dos eventos:
  - [ ] Verificar se todos os campos obrigatórios existem
  - [ ] Validar formato de data
  - [ ] Validar preço (deve ser positivo)
- [ ] Tratar erros:
  - [ ] Evento não encontrado (404)
  - [ ] Erro ao carregar dados
  - [ ] Erro ao salvar no LocalStorage
- [ ] Adicionar fallbacks:
  - [ ] Se imagem não carregar, usar placeholder
  - [ ] Se dados corrompidos, usar valores padrão

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
