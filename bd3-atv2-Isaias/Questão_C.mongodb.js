/*NOME DO BANCO DE DADOS*/
const database = "bd3_atv2"

/* NOME DO BANCO DA COLEÇÃO DE DADOS: */
const collection = "bd3_atv2_produtos"

/* CRIAR OU ACESSAR O BANCO DE DADOS: */
use (database);

/* PESQUISA POR PRODUTOS ENTRE... */
db[collection].find({

    valor: { $gte: 100, $lte: 500 }
    
});
