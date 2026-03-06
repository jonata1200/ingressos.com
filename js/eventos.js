/**
 * Dados dos Eventos
 * Array completo de eventos disponíveis
 */

const eventos = [
    {
        id: 1,
        nome: 'Show de Rock Nacional',
        data: '15/12/2024',
        hora: '20:00',
        local: 'Teatro Municipal',
        endereco: 'Praça das Artes, s/n - Centro, São Paulo - SP',
        preco: 120.00,
        categoria: 'Show',
        imagem: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        descricao: 'Uma noite inesquecível com as maiores bandas de rock nacional. Venha celebrar a música brasileira com apresentações ao vivo de artistas consagrados. Ingressos limitados!',
        ingressosDisponiveis: 150,
        destaque: true
    },
    {
        id: 2,
        nome: 'Hamlet - Clássico do Teatro',
        data: '20/12/2024',
        hora: '19:30',
        local: 'Teatro Nacional',
        endereco: 'Av. Rio Branco, 241 - Centro, Rio de Janeiro - RJ',
        preco: 80.00,
        categoria: 'Teatro',
        imagem: 'https://images.pexels.com/photos/2372945/pexels-photo-2372945.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        descricao: 'A clássica obra de Shakespeare encenada por uma companhia renomada. Uma produção moderna que mantém a essência da tragédia original. Imperdível para amantes do teatro.',
        ingressosDisponiveis: 80,
        destaque: true
    },
    {
        id: 3,
        nome: 'Campeonato Brasileiro - Final',
        data: '22/12/2024',
        hora: '16:00',
        local: 'Estádio do Maracanã',
        endereco: 'Av. Pres. Castelo Branco, Portão 3 - Maracanã, Rio de Janeiro - RJ',
        preco: 150.00,
        categoria: 'Esporte',
        imagem: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        descricao: 'A grande final do Campeonato Brasileiro. Venha assistir ao jogo mais importante da temporada. Garanta seu lugar na arquibancada e viva a emoção do futebol brasileiro!',
        ingressosDisponiveis: 5000,
        destaque: true
    },
    {
        id: 4,
        nome: 'Festival de Verão 2024',
        data: '30/12/2024',
        hora: '14:00',
        local: 'Praia de Copacabana',
        endereco: 'Praia de Copacabana - Copacabana, Rio de Janeiro - RJ',
        preco: 200.00,
        categoria: 'Festival',
        imagem: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        descricao: 'O maior festival de música do verão! Múltiplos palcos, diversos artistas nacionais e internacionais. Uma experiência única à beira-mar. Não perca!',
        ingressosDisponiveis: 10000,
        destaque: true
    },
    {
        id: 5,
        nome: 'Concerto de Orquestra Sinfônica',
        data: '18/12/2024',
        hora: '20:30',
        local: 'Sala São Paulo',
        endereco: 'Praça Júlio Prestes, 16 - Campos Elíseos, São Paulo - SP',
        preco: 90.00,
        categoria: 'Show',
        imagem: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        descricao: 'A Orquestra Sinfônica apresenta um repertório clássico com obras de grandes compositores. Uma experiência musical única em um dos melhores espaços acústicos do país.',
        ingressosDisponiveis: 200,
        destaque: false
    },
    {
        id: 6,
        nome: 'Romeu e Julieta',
        data: '25/12/2024',
        hora: '20:00',
        local: 'Teatro Municipal',
        endereco: 'Praça das Artes, s/n - Centro, São Paulo - SP',
        preco: 75.00,
        categoria: 'Teatro',
        imagem: 'https://images.pexels.com/photos/2372945/pexels-photo-2372945.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        descricao: 'A eterna história de amor de Shakespeare em uma produção contemporânea. Direção inovadora e elenco de primeira linha. Uma experiência teatral memorável.',
        ingressosDisponiveis: 120,
        destaque: false
    },
    {
        id: 7,
        nome: 'Jogo de Basquete - Playoffs',
        data: '19/12/2024',
        hora: '19:00',
        local: 'Ginásio do Ibirapuera',
        endereco: 'Av. Pedro Álvares Cabral - Ibirapuera, São Paulo - SP',
        preco: 60.00,
        categoria: 'Esporte',
        imagem: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        descricao: 'Partida decisiva dos playoffs do campeonato de basquete. Alta tensão e muita emoção garantidas. Venha torcer pelo seu time!',
        ingressosDisponiveis: 3000,
        destaque: false
    },
    {
        id: 8,
        nome: 'Festival de Jazz',
        data: '28/12/2024',
        hora: '18:00',
        local: 'Centro Cultural',
        endereco: 'Rua das Flores, 123 - Centro, São Paulo - SP',
        preco: 110.00,
        categoria: 'Festival',
        imagem: 'https://images.pexels.com/photos/325521/pexels-photo-325521.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        descricao: 'Três dias de puro jazz com artistas nacionais e internacionais. Workshops, jam sessions e muito mais. Para os amantes da boa música.',
        ingressosDisponiveis: 500,
        destaque: false
    },
    {
        id: 9,
        nome: 'Stand-up Comedy Night',
        data: '21/12/2024',
        hora: '21:00',
        local: 'Comedy Club',
        endereco: 'Av. Paulista, 1000 - Bela Vista, São Paulo - SP',
        preco: 50.00,
        categoria: 'Show',
        imagem: 'https://images.pexels.com/photos/18424685/pexels-photo-18424685.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        descricao: 'Noite de muito riso com os melhores comediantes do país. Stand-up de qualidade em um ambiente descontraído. Garanta sua diversão!',
        ingressosDisponiveis: 100,
        destaque: false
    },
    {
        id: 10,
        nome: 'O Fantasma da Ópera',
        data: '27/12/2024',
        hora: '20:30',
        local: 'Teatro Municipal',
        endereco: 'Praça das Artes, s/n - Centro, São Paulo - SP',
        preco: 130.00,
        categoria: 'Teatro',
        imagem: 'https://images.pexels.com/photos/2372945/pexels-photo-2372945.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        descricao: 'O clássico musical em uma produção grandiosa. Cenários deslumbrantes, figurinos luxuosos e performances inesquecíveis. Um espetáculo imperdível!',
        ingressosDisponiveis: 250,
        destaque: false
    }
];

// Exportar para uso em outros arquivos
if (typeof window !== 'undefined') {
    window.eventos = eventos;
}
