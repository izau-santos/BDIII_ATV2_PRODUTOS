/* NOME DO BANCO DE DADOS */
const database = "bd3_atv2";

/* NOME DO BANCO DA COLEÇÃO DE DADOS: */
const collection = "bd3_atv2_produtos";

/* CRIAR OU ACESSAR O BANCO DE DADOS: */
use(database);

/* PESQUISA EXCLUINDO DUAS CATEGORIAS */
db[collection].find({

    categoria: { $nin: ["Acessórios", "Papeleria"] }
    
}).limit(10); 
