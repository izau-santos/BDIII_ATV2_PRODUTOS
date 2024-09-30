/*NOME DO BANCO DE DADOS*/
const database = "bd3_atv2"

/* NOME DO BANCO DA COLEÇÃO DE DADOS: */
const collection = "bd3_atv2_produtos"

/* CRIAR OU ACESSAR O BANCO DE DADOS: */
use (database);

// /* SELECIONA O PRODUTO COM MAIOR VALOR...*/ 
db[collection].aggregate([
  {
      $group: {
          _id: null,
          maxValor: { $max: "$valor" }
      }
  }
]);

