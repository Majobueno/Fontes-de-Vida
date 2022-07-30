 <h1 align="center">
    <br>
    <p align="center"> Fontes de Vida  <p>
</h1>
<h3>
<p align="center"> {reprograma} - BootCamp BackEnd Dev  <p>
</h3>
<Br>

<!--ts-->

#### Documentação
<Br>
Esta é uma API desenvolvida como entrega final do BootCamp de desenvolvimento BackEnd da {Reprograma}, também se encontra conectada a um banco de dados e inclui as funcionalidades de autenticação por Token e a possibilidade de Login.
<br>
<!--te-->

### Índice

- [Fontes de Vida](#fontes-de-vida)
- [Arquitetura](#arquitetura)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Interface para Teste das Rotas](#interface-para-teste-das-rotas)
- [Preparando o Ambiente para Autenticação](#preparando-o-ambiente-para-autenticação)
- [Testando Rotas de Login e Proteção das Rotas](#testando-rotas-de-login-e-proteção-das-rotas)
- [Documentação](#documentação-1)

<!--te-->

## Fontes de Vida

    A vida em nosso planeta depende de água, mesmo assim o uso indiscriminado e irresponsável das bacias hidrográficas, assim como a poluição em diversos estágios do ciclo da água tem tornado cada vez mais raro encontrar água potável e livre de agentes contaminantes. No Brasil, estudos recentes têm demonstrado que a maioria das fontes de captação utilizadas pelas pessoas, principalmente no sul e sudeste, estão contaminadas com um ou mais agrotóxicos. 
    <https://portrasdoalimento.info/agrotoxico-na-agua/>
    <br>
    Visando a proteção dessas águas, a proposta desse projeto consiste na criação de uma API que facilite o cadastro e compartilhamento de nascentes de água, auxiliando manter atualizadas e acessíveis as informações referentes à testagem de qualidade da água em uso. Dessa maneira, colaborativamente e em rede, podemos fortalecer a fiscalização da qualidade das fontes de água pelo país.
    <br>
    A sociedade civil tem o dever e o direito garantido pela Lei 9433 de 1997 de participar do manejo e decisões referentes ao uso das águas no Brasil, portanto é fundamental a participação coletiva para bom cuidado e manejo pelo Estado. Seria muito interessante que em breve a API possibilite, por exemplo, a interação com mapas, usando o georreferenciamento para localizar facilmente fontes adequadas para consumo e organizar os movimentos de proteção às nascentes de cada região.

## Arquitetura

Esta aplicação está organizada da seguinte maneira:

```
 📁 Fontes de Vida
   |
   |--📁node_modules
   |
   |--📁 src
   |  ||
   |  ||
   |  ||--📁 controller
   |  |    |- 📄 userController.js
   |  |    |- 📄 fontesController.js
   |  |
   |  ||--📁 database
   |  |    |- 📄 dbConnect.js
   |  |
   |  ||--📁 models
   |  |    |- 📄 userModels.js
   |  |    |- 📄 fontesModels.js
   |  |
   |  ||--📁 routes
   |  |    |- 📄 userRoutes.js
   |  |    |- 📄 fontesRoutes.js
   |  |    |- 📄 index.js
   |  |
   |  ||-📄 app.js
   |  |
   |  |--📁 swagger
   |  |   |- 📄 swagger_output.json
   |  |
   |  |--📁 test
   |  |   |- 📄 fontes.test.js
   |  |
   |  |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📄 README.md
   |- 📄 server.js
   |- 📄 swagger.js

```
</br>

## Tecnologias Utilizadas

[JavaScript](https://www.javascript.com) | [Node.js](https://nodejs.org/en/) | [Git](https://git-scm.com) | [VSCode](https://code.visualstudio.com) | [Mongodb](https://www.mongodb.com) | [Heroku](https://www.heroku.com/) | [Postman](https://documenter.getpostman.com/view/16821311/UVRAHSEo)
 
 Dependências:

- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [cors](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://www.npmjs.com/package/express)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [swagger-autogen](https://www.npmjs.com/package/swagger-autogen)
- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)

## Interface para Teste das Rotas

## Preparando o Ambiente para Autenticação

## Testando Rotas de Login e Proteção das Rotas

## Documentação

    