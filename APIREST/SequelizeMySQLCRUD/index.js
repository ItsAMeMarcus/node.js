(async () => {

   const database = require ('./db');
    const Produto = require('./produto')
    await database.sync();

/*  //(C)RUD -> Criando o Produto

     const novoProduto = await Produto.create({
        nome: 'Placa de Video Palit GeForce RTX 3050',
        preco: 2599,
        descricao: 'A mais nova placa de video da Nvidia :)'
    })
    console.log(novoProduto);*/

/* //C(R)UD -> Procurando um produto

    const produto = await Produto.findByPk(3);
    console.log(produto);

//ou

    const produto = await Produto.findAll();
    console.log(produto);*/

/* //CR(U)D -> Atualizando os dados de um produto
    
    const produto = await Produto.findAll();
    console.log(produto);

    produto.descricao = 'Fiz uma alteração';
    produto.save();*/

//  CRU(D) -> Deletando um produto

    await Produto.destroy({
        where:{
            nome: 'nintendo switch'
        }
    });

})();