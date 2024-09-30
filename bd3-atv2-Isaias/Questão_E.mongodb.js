/* NOME DO BANCO DE DADOS */
const database = "bd3_atv2";

/* NOME DO BANCO DA COLEÇÃO DE DADOS: */
const collection = "bd3_atv2_produtos";

/* CRIAR OU ACESSAR O BANCO DE DADOS: */
use (database);

/* PESQUISA POR PRODUTOS NAS CATEGORIAS DESEJADAS... */
db[collection].find({
    
    $or: [
        { categoria: "Acessórios" },
        { categoria: "Eletrônicos" }
    ]
}).limit(5);
