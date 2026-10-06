const clientes = require('../../clientes.json');

const listar = (req, res) => {
    res.json(clientes);
};

const buscarPorId = (req, res) => {
    const id = Number(req.params.id);

    const cliente = clientes.find(cliente => cliente.id === id);

    if (!cliente) {
        return res.status(404).json({
            mensagem: 'Cliente não encontrado'
        });
    }

    res.json(cliente);
};

const criar = (req, res) => {
    const novoCliente = {
        id: clientes.length + 1,
        ...req.body
    };

    clientes.push(novoCliente);

    res.status(201).json(novoCliente);
};

const alterar = (req, res) => {
    const id = Number(req.params.id);

    const indice = clientes.findIndex(cliente => cliente.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: 'Cliente não encontrado'
        });
    }

    clientes[indice] = {
        ...clientes[indice],
        ...req.body,
        id
    };

    res.json(clientes[indice]);
};

const excluir = (req, res) => {
    const id = Number(req.params.id);

    const indice = clientes.findIndex(cliente => cliente.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: 'Cliente não encontrado'
        });
    }

    const clienteExcluido = clientes.splice(indice, 1);

    res.json(clienteExcluido[0]);
};

module.exports = {
    listar,
    buscarPorId,
    criar,
    alterar,
    excluir
};