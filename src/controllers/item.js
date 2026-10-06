const itens = require('../../item.json');

const listar = (req, res) => {
    res.json(itens);
};

const buscarPorId = (req, res) => {
    const id = Number(req.params.id);

    const item = itens.find(item => item.id === id);

    if (!item) {
        return res.status(404).json({
            mensagem: 'Item não encontrado'
        });
    }

    res.json(item);
};

const criar = (req, res) => {
    const novoItem = {
        id: itens.length + 1,
        ...req.body
    };

    itens.push(novoItem);

    res.status(201).json(novoItem);
};

const alterar = (req, res) => {
    const id = Number(req.params.id);

    const indice = itens.findIndex(item => item.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: 'Item não encontrado'
        });
    }

    itens[indice] = {
        ...itens[indice],
        ...req.body,
        id
    };

    res.json(itens[indice]);
};

const excluir = (req, res) => {
    const id = Number(req.params.id);

    const indice = itens.findIndex(item => item.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: 'Item não encontrado'
        });
    }

    const itemExcluido = itens.splice(indice, 1);

    res.json(itemExcluido[0]);
};

module.exports = {
    listar,
    buscarPorId,
    criar,
    alterar,
    excluir
};
