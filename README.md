# 🎫 ingressos.com

Sistema completo de compra de ingressos desenvolvido com HTML, CSS e JavaScript puro (Vanilla JS). Projeto desenvolvido para fins educacionais e ilustração em curso.

## 📋 Sobre o Projeto

O **ingressos.com** é uma aplicação web completa que simula uma plataforma de venda de ingressos para eventos. O projeto demonstra conceitos fundamentais de desenvolvimento web front-end, incluindo:

- Estruturação semântica com HTML5
- Estilização responsiva com CSS3
- Interatividade e manipulação do DOM com JavaScript
- Persistência de dados com LocalStorage
- Boas práticas de UX/UI e acessibilidade

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica das páginas
- **CSS3** - Estilização, layout responsivo e animações
- **JavaScript (Vanilla)** - Lógica de negócio e interatividade
- **LocalStorage** - Armazenamento local de dados

## 📁 Estrutura de Arquivos

```
ingressos.com/
│
├── index.html              # Página inicial
├── eventos.html            # Lista de eventos
├── detalhes.html           # Detalhes do evento
├── carrinho.html           # Carrinho de compras
├── checkout.html           # Formulário de checkout
├── confirmacao.html        # Confirmação de compra
│
├── css/
│   └── styles.css          # Estilos principais
│
├── js/
│   ├── eventos.js         # Dados dos eventos
│   ├── utils.js           # Funções utilitárias
│   ├── renderizacao.js    # Renderização de componentes
│   ├── navegacao.js       # Sistema de navegação
│   ├── busca.js           # Funcionalidade de busca
│   ├── filtros.js         # Filtros de eventos
│   ├── carrinho.js        # Lógica do carrinho
│   ├── checkout.js        # Validação e processamento
│   ├── favoritos.js       # Sistema de favoritos
│   ├── ordenacao.js       # Ordenação de eventos
│   └── mobile-menu.js     # Menu mobile hamburger
│
└── docs/
    ├── README.md          # Documentação das fases
    ├── FASE_1_Estrutura_Base_Layout.md
    ├── FASE_2_Funcionalidades_Navegacao.md
    ├── FASE_3_Sistema_Eventos_Dados.md
    ├── FASE_4_Carrinho_Compras.md
    ├── FASE_5_Formulario_Checkout.md
    └── FASE_6_Melhorias_Polimento.md
```

## 🎯 Funcionalidades

### ✅ Implementadas

- **Navegação Completa**
  - Menu responsivo com hamburger para mobile
  - Navegação entre todas as páginas
  - Breadcrumbs e links funcionais

- **Sistema de Eventos**
  - Exibição dinâmica de eventos
  - Cards com informações completas
  - Página de detalhes com todas as informações
  - Eventos em destaque na home

- **Busca e Filtros**
  - Busca por nome, local, categoria e endereço
  - Filtros por categoria
  - Ordenação por data, preço e nome
  - Combinação de filtros e busca

- **Carrinho de Compras**
  - Adicionar/remover itens
  - Atualizar quantidades
  - Cálculo automático de totais
  - Taxa de serviço (10%)
  - Persistência no LocalStorage

- **Checkout Completo**
  - Formulário de dados pessoais
  - Formulário de endereço
  - Seleção de forma de pagamento
  - Validação completa de campos
  - Máscaras de input (CPF, telefone, CEP, cartão)
  - Validação de CPF e cartão de crédito

- **Melhorias e Polimento**
  - Sistema de favoritos
  - Menu mobile hamburger
  - Animações e transições suaves
  - Responsividade completa
  - Acessibilidade básica (ARIA, navegação por teclado)
  - Feedback visual em todas as ações

## 🖥️ Como Executar

1. **Clone ou baixe o repositório**

2. **Abra o projeto**
   - Abra o arquivo `index.html` em um navegador moderno
   - Ou use um servidor local (recomendado):
     ```bash
     # Com Python 3
     python -m http.server 8000
     
     # Com Node.js (http-server)
     npx http-server
     
     # Com PHP
     php -S localhost:8000
     ```

3. **Acesse no navegador**
   - Abra `http://localhost:8000` (ou a porta configurada)
   - Ou simplesmente abra `index.html` diretamente

## 📱 Responsividade

O projeto é totalmente responsivo e foi testado em:
- **Mobile**: 320px, 375px, 414px
- **Tablet**: 768px, 1024px
- **Desktop**: 1280px, 1920px

## ♿ Acessibilidade

- Atributos ARIA implementados
- Navegação por teclado funcional
- Contraste de cores adequado (WCAG)
- Textos alternativos em imagens
- Estrutura semântica HTML5

## 🎨 Características de Design

- Design moderno e limpo
- Cores harmoniosas e consistentes
- Tipografia legível
- Animações suaves
- Feedback visual em todas as interações
- Layout intuitivo e fácil de usar

## 📚 Documentação

A documentação completa do projeto está na pasta `docs/`, incluindo:
- Checklist detalhado de cada fase
- Objetivos e entregáveis
- Notas importantes
- Guia de implementação

## 🔧 Estrutura de Dados

### Evento
```javascript
{
  id: number,
  nome: string,
  data: string,        // "DD/MM/YYYY"
  hora: string,        // "HH:MM"
  local: string,
  endereco: string,
  preco: number,
  categoria: string,
  imagem: string,
  descricao: string,
  ingressosDisponiveis: number,
  destaque: boolean
}
```

### Item do Carrinho
```javascript
{
  eventoId: number,
  nome: string,
  data: string,
  local: string,
  precoUnitario: number,
  quantidade: number,
  subtotal: number,
  imagem: string
}
```

## 🧪 Testes

Para testar o projeto:
1. Navegue entre todas as páginas
2. Teste a busca e filtros
3. Adicione itens ao carrinho
4. Complete um checkout
5. Verifique a persistência dos dados (recarregue a página)

## 📝 Notas Importantes

- Este é um projeto educacional, não utiliza APIs reais
- Os dados são armazenados apenas no LocalStorage do navegador
- O sistema de pagamento é simulado
- As imagens são placeholders (via.placeholder.com)

## 🚧 Melhorias Futuras (Opcional)

- Integração com API real
- Sistema de autenticação
- Painel administrativo
- Histórico de compras
- Sistema de avaliações
- Integração com gateway de pagamento real
- Modo escuro
- Página de favoritos
- Loading states com spinners
- Toast notifications

## 👨‍💻 Desenvolvimento

Este projeto foi desenvolvido seguindo uma metodologia de desenvolvimento em fases:

1. **FASE 1**: Estrutura base e layout
2. **FASE 2**: Funcionalidades de navegação
3. **FASE 3**: Sistema de eventos e dados
4. **FASE 4**: Carrinho de compras
5. **FASE 5**: Formulário de checkout
6. **FASE 6**: Melhorias e polimento

Cada fase possui documentação detalhada na pasta `docs/`.

## 📄 Licença

Este projeto é de uso educacional e livre para fins de aprendizado.

---

**Desenvolvido para fins educacionais** 🎓
