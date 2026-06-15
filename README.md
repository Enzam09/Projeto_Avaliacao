# Projeto_Avaliacao
[https://www.figma.com/make/7ge9FirqCHfCEsrv1PhmfT/Copa-do-Mundo-Tabela-Layout?t=giBSaivWBJMVpck7-0](https://www.figma.com/make/7ge9FirqCHfCEsrv1PhmfT/Copa-do-Mundo-Tabela-Layout?t=giBSaivWBJMVpck7-1)


DOCUMENTAÇÃO DO SISTEMA: PAINEL COPA DO MUNDO 2026
1. Visão Geral do Projeto
* O Painel Copa do Mundo 2026 é uma aplicação web Front-End interativa projetada para exibir a tabela de classificação da fase de grupos do mundial. O design foi fielmente adaptado em modo escuro (Dark Mode), com navegação dinâmica entre todas as chaves do torneio expandido de 48 seleções.

* O principal diferencial técnico é a arquitetura baseada em dados (Data-Driven UI): em vez de escrever 12 tabelas estáticas no HTML, o sistema utiliza uma única tabela genérica que se reestrutura dinamicamente via JavaScript conforme a navegação do usuário.

2. Arquitetura de Arquivos
O projeto adota o padrão de separação de responsabilidades em arquivos limpos:

Plaintext
├── index.html        # Estrutura semântica e esqueleto da página
├── style.css         # Identidade visual, variáveis de cor e responsividade
└── script.js         # Inteligência do sistema e banco de dados local

3. Especificações Técnicas dos Componentes

3.1. Estrutura (HTML)

O arquivo index.html utiliza tags semânticas do padrão HTML5 para garantir acessibilidade e uma boa estrutura de leitura pelos navegadores:

* <header>: Contém a marca institucional (FIFA COPA DO MUNDO 2026) e o indicador de fase ativa.
* <nav id="groupTabs">: Área reservada para receber os botões seletores de grupos (A até L) que são gerados dinamicamente.
* <main>: Bloco central que encapsula a tabela de classificação.
* <div class="responsive-table">: Camada protetora (wrapper) que adiciona rolagem horizontal em telas pequenas, impedindo a quebra do layout em smartphones.

3.2. Estilização e Identidade Visual (CSS)

* O arquivo style.css centraliza os estilos e adota propriedades modernas para manutenção ágil:
* Variáveis Globais (:root): Armazenam a paleta de cores oficial (tons de azul escuro, dourado da FIFA e cores das badges de forma). Mudar uma cor na raiz altera o site inteiro instantaneamente.
* Flexbox & CSS Grid: Utilizados para distribuição de elementos no cabeçalho, alinhamento centralizado das badges de jogos e organização do rodapé.
* Zonas de Classificação: Aplicação de uma borda dourada (border-left: 3px solid var(--accent-gold);) nas linhas (<tr>) que ocupam a 1ª e 2ª colocação, indicando visualmente quem avança para a fase eliminatória.

3.3. Lógica e Inteligência (JavaScript)
* O arquivo script.js funciona como o "motor" da aplicação:
Objeto de Dados (worldCupData): Uma estrutura em formato JSON contendo todos os 12 grupos preenchidos com os dados de cada país (Jogos, Vitórias, Empates, Derrotas, Gols Pró, Gols Contra, Saldo de Gols e Histórico).

Ciclo de Renderização:

* renderTabs(): Varre as chaves do objeto de dados, cria os botões de A a L na tela e adiciona escutadores de clique (addEventListener).
* renderTabela(): Captura as informações do grupo selecionado, calcula a classe visual do saldo de gols (verde para positivo, vermelho para negativo) e injeta as linhas na tabela através da propriedade innerHTML.

4. Regras de Negócio Implementadas no Código

* Destaque de Classificação: O sistema analisa o atributo posicao do objeto. Se for menor ou igual a 2, a linha do time ganha automaticamente os estilos da zona de classificação.
* Tratamento de Saldo de Gols (SG): O código intercepta o valor numérico. Se for maior que zero, ele concatena o símbolo + e aplica a classe .sg-positive. Se for menor que zero, aplica a classe .sg-negative.
* Mapeamento de Histórico (Forma): O histórico de jogos finais (['V', 'E', 'D']) passa por uma função de mapeamento que converte as letras em elementos visuais HTML estilizados (Badges coloridas).
