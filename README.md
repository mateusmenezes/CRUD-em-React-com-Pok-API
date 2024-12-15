**Desafio Técnico - CRUD em React com PokéAPI**

### Descrição:
Este projeto é uma aplicação web desenvolvida em React que permite ao usuário visualizar uma lista de Pokémons, adicionar Pokémons aos favoritos e gerenciá-los. O projeto utiliza a API [PokéAPI](https://pokeapi.co/) para obter os dados.

---

### Tecnologias utilizadas:
   - React: Biblioteca para criação da interface de usuário.
   - React Router DOM: Gerenciamento de rotas.
   - Axios: Requisições HTTP para a API Pokémon.
   Toastify: Exibição de notificações amigáveis.
   CSS: Estilização da interface.

### Estrutura do projeto:

- src/
    - components/
        - Header
- pages/
    - Home: Página principal que lista os Pokémons.
    - Favoritos: Página para gerenciar os Pokémons favoritos.
    - Erro: Página de erro para rotas inexistentes.
- services
    - Api: Configuração da base URL para as requisições HTTP.
- RoutesApp.js: Configuração das rotas da aplicação.


### Configuração e execução do projeto:

1. **Clonar o repositório**

        $ git clone https://github.com/mateusmenezes/CRUD-em-React-com-Pok-API.git
        $ cd CRUD-em-React-com-Pok-API
2. **Instalar Dependências**

        $ npm install
        # ou
        $ yarn install

2. **Executar o projeto**

       $ npm start
       # ou
       $ yarn start



### Explicação das Funções:
   
**Rotas (RoutesApp.js)** 

Define as seguintes rotas:

- /: Redireciona para a página Home.

- /favoritos: Redireciona para a página Favoritos.

- *: Renderiza a página Erro para rotas não encontradas.



**Home.js**

- useEffect: Faz a chamada à API para buscar a lista de Pokémons e suas informações detalhadas.

- savePokemon: Salva um Pokémon na lista de favoritos no localStorage.

**Favoritos.js**

- useEffect: Carrega os Pokémons salvos no localStorage ao montar o componente.

- deletePokemon: Remove um Pokémon da lista de favoritos e atualiza o localStorage.

- editPokemonName: Atualiza o nome do Pokémon da lista de favoritos e atualiza o localStorage.
