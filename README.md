# 🎫 ingressos.com

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Completo-success?style=for-the-badge)

Sistema completo de compra de ingressos desenvolvido com **HTML5**, **CSS3** e **JavaScript Vanilla**. Uma aplicação web moderna, responsiva e totalmente funcional que demonstra boas práticas de desenvolvimento front-end.

## 📋 Sobre o Projeto

O **ingressos.com** é uma plataforma web completa que simula um sistema de venda de ingressos para eventos diversos (shows, teatros, esportes, festivais). O projeto foi desenvolvido como uma aplicação educacional que demonstra conceitos fundamentais e avançados de desenvolvimento web front-end.

### 🎯 Objetivos do Projeto

- Demonstrar estruturação semântica com HTML5
- Implementar estilização responsiva e moderna com CSS3 modular
- Criar interatividade e manipulação dinâmica do DOM com JavaScript puro
- Implementar persistência de dados com LocalStorage
- Aplicar boas práticas de UX/UI e acessibilidade web
- Organizar código de forma modular e escalável

### ✨ Destaques Técnicos

- **Arquitetura CSS Modular**: 25 arquivos CSS organizados por responsabilidade
- **Design System Completo**: Variáveis CSS, paleta de cores consistente, tipografia profissional
- **Responsividade Total**: Testado em múltiplos dispositivos e breakpoints
- **Acessibilidade**: Atributos ARIA, navegação por teclado, contraste adequado
- **Performance**: Código otimizado, animações suaves, loading states
- **Manutenibilidade**: Código organizado, comentado e bem estruturado

## 🚀 Tecnologias Utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| **HTML5** | Estrutura semântica das páginas, acessibilidade e SEO |
| **CSS3** | Estilização modular, layout responsivo, animações e transições |
| **JavaScript (ES6+)** | Lógica de negócio, manipulação do DOM, validações e interatividade |
| **LocalStorage API** | Persistência de dados do carrinho, favoritos e preferências |
| **CSS Variables** | Design system centralizado e fácil manutenção |
| **CSS Grid & Flexbox** | Layouts modernos e responsivos |

## 🏗️ Arquitetura CSS

O projeto utiliza uma **arquitetura CSS modular** organizada em 25 arquivos especializados, importados através do arquivo principal `main.css`. Esta estrutura facilita manutenção, escalabilidade e colaboração.

### Benefícios da Arquitetura Modular

- ✅ **Manutenibilidade**: Fácil localização e edição de estilos específicos
- ✅ **Escalabilidade**: Adição de novos componentes sem afetar existentes
- ✅ **Performance**: Carregamento otimizado via @import
- ✅ **Colaboração**: Múltiplos desenvolvedores podem trabalhar simultaneamente
- ✅ **Organização**: Separação clara de responsabilidades

## 📁 Estrutura de Arquivos

```
ingressos.com/
│
├── index.html                    # Página inicial com eventos em destaque
├── eventos.html                  # Lista completa de eventos
├── detalhes.html                 # Detalhes do evento selecionado
├── carrinho.html                 # Carrinho de compras
├── checkout.html                 # Formulário de checkout
├── confirmacao.html              # Confirmação de compra
├── vistos-recentemente.html      # Histórico de eventos visualizados
│
├── css/
│   ├── main.css                  # Arquivo principal (importa todos os módulos)
│   ├── reset.css                 # Reset CSS
│   ├── variables.css             # Variáveis CSS
│   ├── base.css                  # Estilos base
│   ├── utilities.css             # Classes utilitárias
│   ├── header.css                # Header
│   ├── hero.css                  # Hero section
│   ├── events.css                # Eventos
│   ├── footer.css                # Footer
│   ├── filters.css               # Filtros
│   ├── breadcrumbs.css           # Breadcrumbs
│   ├── details.css                # Detalhes
│   ├── cart.css                  # Carrinho
│   ├── checkout.css              # Checkout
│   ├── confirmation.css          # Confirmação
│   ├── badges.css                # Badges
│   ├── menu-mobile.css           # Menu mobile
│   ├── favorites.css             # Favoritos
│   ├── ordering.css              # Ordenação
│   ├── accessibility.css         # Acessibilidade
│   ├── animations.css            # Animações
│   ├── loading.css               # Loading
│   ├── advanced-filters.css      # Filtros avançados
│   ├── search-enhanced.css       # Busca melhorada
│   ├── share.css                 # Compartilhar
│   ├── dark-mode.css             # Modo escuro
│   └── responsive.css            # Responsividade
│
├── js/
│   ├── eventos.js                # Dados dos eventos
│   ├── utils.js                  # Funções utilitárias
│   ├── renderizacao.js            # Renderização de componentes
│   ├── navegacao.js              # Sistema de navegação
│   ├── busca.js                  # Funcionalidade de busca básica
│   ├── busca-melhorada.js        # Busca com sugestões
│   ├── filtros.js                # Filtros de eventos
│   ├── filtros-avancados.js      # Filtros avançados
│   ├── carrinho.js               # Lógica do carrinho
│   ├── checkout.js               # Validação e processamento
│   ├── favoritos.js              # Sistema de favoritos
│   ├── ordenacao.js              # Ordenação de eventos
│   ├── mobile-menu.js            # Menu mobile hamburger
│   ├── modo-escuro.js            # Toggle de modo escuro
│   ├── loading.js                # Estados de carregamento
│   └── compartilhar.js           # Funcionalidade de compartilhar
│
└── README.md                     # Documentação do projeto
```

## 🎯 Funcionalidades

### ✅ Navegação e Interface

- **Menu Responsivo**: Menu hamburger para dispositivos móveis
- **Navegação Completa**: Links funcionais entre todas as páginas
- **Breadcrumbs**: Navegação hierárquica para melhor UX
- **Modo Escuro**: Toggle para alternar entre tema claro e escuro
- **Menu Mobile**: Menu lateral deslizante com overlay

### ✅ Sistema de Eventos

- **Exibição Dinâmica**: Cards de eventos renderizados dinamicamente
- **Página de Detalhes**: Informações completas do evento
- **Eventos em Destaque**: Seção especial na home
- **Imagens Reais**: Imagens de alta qualidade do Unsplash
- **Badges Informativos**: Indicadores de categoria, disponibilidade e status

### ✅ Busca e Filtros

- **Busca Inteligente**: Busca por nome, local, categoria e endereço
- **Busca com Sugestões**: Dropdown com sugestões em tempo real
- **Filtros por Categoria**: Filtros rápidos por tipo de evento
- **Filtros Avançados**: Filtros por data, preço e localização
- **Ordenação**: Ordenação por data, preço e nome
- **Combinação de Filtros**: Múltiplos filtros aplicados simultaneamente

### ✅ Carrinho de Compras

- **Adicionar/Remover Itens**: Controle completo do carrinho
- **Atualizar Quantidades**: Ajuste de quantidades com validação
- **Cálculo Automático**: Subtotal, taxa de serviço (10%) e total
- **Persistência**: Dados salvos no LocalStorage
- **Resumo Visual**: Resumo do pedido sempre visível

### ✅ Checkout Completo

- **Formulário de Dados Pessoais**: Nome, CPF, email, telefone
- **Formulário de Endereço**: CEP, rua, número, complemento, cidade, estado
- **Seleção de Pagamento**: Múltiplas formas de pagamento
- **Validação Completa**: Validação em tempo real de todos os campos
- **Máscaras de Input**: CPF, telefone, CEP e cartão formatados
- **Validação de CPF**: Algoritmo de validação de CPF brasileiro
- **Validação de Cartão**: Validação básica de cartão de crédito

### ✅ Funcionalidades Extras

- **Sistema de Favoritos**: Salvar eventos favoritos
- **Vistos Recentemente**: Histórico de eventos visualizados
- **Compartilhar Eventos**: Compartilhamento via Web Share API
- **Loading States**: Spinners e skeleton loaders
- **Feedback Visual**: Mensagens de sucesso e erro
- **Animações Suaves**: Transições e animações em todas as interações

## 🎨 Design System

### Paleta de Cores

O projeto utiliza uma paleta de cores vermelha como cor primária, criando uma identidade visual forte e moderna.

| Cor | Variável | Valor | Uso |
|-----|----------|-------|-----|
| Primária | `--cor-primaria` | `#dc2626` | Botões, links, destaques |
| Primária Escura | `--cor-primaria-escura` | `#b91c1c` | Hover states |
| Secundária | `--cor-secundaria` | `#ef4444` | Gradientes, acentos |
| Texto | `--cor-texto` | `#1f2937` | Texto principal |
| Texto Claro | `--cor-texto-claro` | `#6b7280` | Texto secundário |
| Fundo | `--cor-fundo` | `#ffffff` | Fundo principal |
| Fundo Claro | `--cor-fundo-claro` | `#f9fafb` | Fundos alternativos |
| Sucesso | `--cor-sucesso` | `#10b981` | Mensagens de sucesso |
| Erro | `--cor-erro` | `#ef4444` | Mensagens de erro |

### Tipografia

- **Fonte Principal**: Inter (Google Fonts)
- **Fallback**: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
- **Tamanhos**: 14px (pequeno), 16px (base), 18px (grande)
- **Hierarquia**: H1 (2.5rem), H2 (2rem), H3 (1.5rem)

### Espaçamentos

Sistema de espaçamento consistente usando rem:
- `--espacamento-xs`: 0.5rem
- `--espacamento-sm`: 1rem
- `--espacamento-md`: 1.5rem
- `--espacamento-lg`: 2rem
- `--espacamento-xl`: 3rem
- `--espacamento-xxl`: 4rem

### Breakpoints

- **Mobile**: até 768px
- **Tablet**: 768px - 1024px
- **Desktop**: acima de 1024px

## 🖥️ Como Executar

### Pré-requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Servidor local (opcional, mas recomendado)

### Instalação

1. **Clone ou baixe o repositório**
   ```bash
   git clone https://github.com/jonata1200/ingressos.com.git
   cd ingressos.com
   ```

2. **Abra o projeto**

   **Opção 1: Servidor Local (Recomendado)**
   
   ```bash
   # Com Python 3
   python -m http.server 8000
   
   # Com Node.js (http-server)
   npx http-server
   
   # Com PHP
   php -S localhost:8000
   ```
   
   **Opção 2: Abrir Diretamente**
   - Abra o arquivo `index.html` em um navegador moderno

3. **Acesse no navegador**
   - Se usando servidor: `http://localhost:8000`
   - Se abrindo diretamente: Navegue até o arquivo `index.html`

## 📱 Responsividade

O projeto é **totalmente responsivo** e foi testado em múltiplos dispositivos:

- **Mobile Pequeno**: 320px, 375px, 414px
- **Mobile**: 480px, 768px
- **Tablet**: 768px, 1024px
- **Desktop**: 1280px, 1920px

### Características Responsivas

- Layout adaptativo com CSS Grid e Flexbox
- Menu hamburger em dispositivos móveis
- Imagens responsivas com object-fit
- Tipografia escalável
- Espaçamentos ajustáveis
- Formulários otimizados para mobile

## ♿ Acessibilidade

O projeto segue as diretrizes de acessibilidade web (WCAG 2.1):

- ✅ **Atributos ARIA**: Labels e roles apropriados
- ✅ **Navegação por Teclado**: Todos os elementos são acessíveis via teclado
- ✅ **Contraste de Cores**: Contraste adequado (WCAG AA)
- ✅ **Textos Alternativos**: Imagens com descrições apropriadas
- ✅ **Estrutura Semântica**: HTML5 semântico
- ✅ **Focus Visible**: Indicadores de foco claros
- ✅ **Skip Links**: Links para pular navegação

## 🔧 Estrutura de Dados

### Evento

```javascript
{
  id: number,                    // ID único do evento
  nome: string,                  // Nome do evento
  data: string,                  // Data no formato "DD/MM/YYYY"
  hora: string,                  // Hora no formato "HH:MM"
  local: string,                 // Nome do local
  endereco: string,              // Endereço completo
  preco: number,                 // Preço do ingresso
  categoria: string,             // Categoria (Show, Teatro, Esporte, Festival)
  imagem: string,                // URL da imagem (Unsplash)
  descricao: string,             // Descrição detalhada
  ingressosDisponiveis: number,  // Quantidade disponível
  destaque: boolean              // Se aparece na home
}
```

### Item do Carrinho

```javascript
{
  eventoId: number,             // ID do evento
  nome: string,                  // Nome do evento
  data: string,                  // Data do evento
  local: string,                 // Local do evento
  precoUnitario: number,        // Preço unitário
  quantidade: number,            // Quantidade de ingressos
  subtotal: number,              // Subtotal (preço × quantidade)
  imagem: string                 // URL da imagem
}
```

## 🧪 Testes

Para testar todas as funcionalidades do projeto:

1. **Navegação**
   - Navegue entre todas as páginas
   - Teste o menu mobile
   - Verifique os breadcrumbs

2. **Busca e Filtros**
   - Teste a busca por diferentes termos
   - Aplique filtros por categoria
   - Combine busca e filtros
   - Teste a ordenação

3. **Carrinho**
   - Adicione itens ao carrinho
   - Atualize quantidades
   - Remova itens
   - Verifique os cálculos

4. **Checkout**
   - Preencha o formulário completo
   - Teste as validações
   - Verifique as máscaras de input
   - Complete uma compra

5. **Persistência**
   - Recarregue a página e verifique se os dados persistem
   - Teste favoritos e histórico

6. **Responsividade**
   - Teste em diferentes tamanhos de tela
   - Verifique o menu mobile
   - Teste formulários em mobile

## 📝 Notas Importantes

- ⚠️ **Projeto Educacional**: Este é um projeto de aprendizado, não utiliza APIs reais
- 💾 **Armazenamento Local**: Os dados são armazenados apenas no LocalStorage do navegador
- 💳 **Pagamento Simulado**: O sistema de pagamento é simulado, não processa transações reais
- 🖼️ **Imagens**: Imagens de alta qualidade do Unsplash (requer conexão com internet)
- 🔒 **Sem Backend**: Não há servidor ou banco de dados, tudo funciona no front-end

## 🚧 Melhorias Futuras

### Funcionalidades Planejadas

- [ ] Integração com API real de eventos
- [ ] Sistema de autenticação de usuários
- [ ] Painel administrativo
- [ ] Histórico de compras persistente
- [ ] Sistema de avaliações e comentários
- [ ] Integração com gateway de pagamento real
- [ ] Página dedicada de favoritos
- [ ] Notificações toast melhoradas
- [ ] PWA (Progressive Web App)
- [ ] Internacionalização (i18n)

### Boas Práticas Implementadas

- ✅ Código limpo e comentado
- ✅ Separação de responsabilidades
- ✅ Nomenclatura consistente
- ✅ CSS modular e organizado
- ✅ JavaScript ES6+ moderno
- ✅ Acessibilidade desde o início
- ✅ Performance otimizada

## 📄 Licença

Este projeto é de **uso educacional** e livre para fins de aprendizado e estudo.

---

## 👨‍💻 Autor

<div align="center">

**Jonata Jesus**  
*Desenvolvedor Front-End*

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jj-shineider/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/jonata1200)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:jonatajesus9@gmail.com)

</div>

---

<div align="center">

**Desenvolvido para fins educacionais** 🎓

⭐️ Se este projeto foi útil, considere dar uma estrela!

</div>
