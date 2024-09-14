# MySide Test Project

Este é o projeto **MySide Test**, uma aplicação de e-commerce onde os usuários podem visualizar produtos, adicioná-los ao carrinho e filtrar os produtos por categoria e nome. A interface foi construída com foco em uma boa experiência de usuário, tanto para dispositivos móveis quanto para desktop.

## Funcionalidades

- Exibir lista de produtos
- Pesquisa por nome e filtro por categoria
- Paginação dos produtos (limitada a 24 por página)
- Exibição de produtos relacionados na página de detalhes do produto
- Carrinho de compras persistente entre as páginas usando Context API
- Remoção de produtos do carrinho

## Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construir interfaces de usuário
- **Next.js** - Framework React para renderização do lado do servidor e rotas simplificadas
- **Styled Components** - Biblioteca para estilizar componentes de maneira dinâmica
- **Context API** - Para gerenciar o estado global do carrinho de compras

## Instalação

Siga estas etapas para rodar o projeto localmente:

### Pré-requisitos

Certifique-se de ter o **Node.js** instalado na sua máquina. Você pode baixá-lo [aqui](https://nodejs.org/).

### Passo a Passo

1. Clone o repositório para sua máquina local:
    ```
    git clone https://github.com/seu-usuario/my-side-test.git
    ```
2. Acesse o diretório do projeto:
    ```
    cd my-side-test
    ```
3. Instale as dependências:
    ```
    npm install
    ```
4. Rode o servidor de desenvolvimento:
    ```
    npm run dev
    ```
5. Acesse http://localhost:3000 no navegador para ver o projeto em execução.

Estrutura de Pastas
Aqui está uma visão geral da estrutura de pastas do projeto:

```
my-side-test/
├── public/             # Arquivos estáticos (imagens, ícones, etc.)
├── src/
│   ├── app/            # Contém os componentes principais da aplicação
│   ├── components/     # Componentes reutilizáveis (ProductCard, NavBar, etc.)
│   ├── services/       # Serviços como chamadas à API
│   └── styles/         # Arquivos de estilização global e específicos
├── pages/              # Páginas da aplicação (Home, Produto, Carrinho, etc.)
│   └── products/       # Página de detalhes do produto
├── README.md           # Este arquivo de documentação
└── package.json        # Dependências e scripts
```

Como Usar
Carrinho de Compras
Ao clicar em "Adicionar ao Carrinho" em qualquer produto, o item será adicionado ao carrinho.
O carrinho pode ser acessado clicando no ícone de carrinho no canto superior direito da tela.
No carrinho, é possível ver todos os itens adicionados, ajustar a quantidade e remover itens.
Filtros de Pesquisa
A barra de pesquisa permite buscar produtos pelo nome.
O filtro de categoria permite restringir a pesquisa a uma categoria específica.
A pesquisa e os filtros funcionam simultaneamente.
Estilos
O projeto usa Styled Components para gerenciar a estilização, garantindo que os estilos sejam aplicados de maneira modular e eficiente.
