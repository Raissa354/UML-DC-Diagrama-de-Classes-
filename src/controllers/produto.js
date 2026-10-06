const produtos = require('../../produtos.json');

const listar = (req, res) => {
    res.json(produtos);
};

const buscarPorId = (req, res) => {
    const id = Number(req.params.id);

    const produto = produtos.find(produto => produto.id === id);

    if (!produto) {
        return res.status(404).json({
            mensagem: 'Produto não encontrado'
        });
    }

    res.json(produto);
};

const criar = (req, res) => {
    const novoProduto = {
        id: produtos.length + 1,
        ...req.body
    };

    produtos.push(novoProduto);

    res.status(201).json(novoProduto);
};

const alterar = (req, res) => {
    const id = Number(req.params.id);

    const indice = produtos.findIndex(produto => produto.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: 'Produto não encontrado'
        });
    }

    produtos[indice] = {
        ...produtos[indice],
        ...req.body,
        id
    };

    res.json(produtos[indice]);
};

const excluir = (req, res) => {
    const id = Number(req.params.id);

    const indice = produtos.findIndex(produto => produto.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: 'Produto não encontrado'
        });
    }

    const produtoExcluido = produtos.splice(indice, 1);

    res.json(produtoExcluido[0]);
};

module.exports = {
    listar,
    buscarPorId,
    criar,
    alterar,
    excluir
};
