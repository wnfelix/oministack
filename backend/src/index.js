const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * instalando nodemon para reinicio automático do server
 * npm install nodemon -D
 */

/**
 * métodos http
 * 
 * get: buscar informação do backend do http
 * post: criar informação no backend
 * put: alterar uma informação no backend
 * delete: deletar uma informação no backend
 */

 /**
  * tipos de parâmetros:
  * 
  * query params: parâmetros nomeados (querystring), servem para filtros, paginação
  * route params: parametros utilizados para identificar recursos (/:id)
  * request body: corpo da requisição, utiliza para criar ou alterar recursos
  */

  /**
   * driver do banco: select * from users
   * query builder: table('users').select('*').where(); npm install knex; npm instal sqlite3
   * montar a conexão do banco: npx knex init
   * criar a tabela ongs: npx knex migrate:make create_ongs
   */


app.listen(3333);