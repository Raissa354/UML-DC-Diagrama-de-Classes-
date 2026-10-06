const pedidos = require('../../pedidos.json');
const produtos = require('../../produtos.json');

const calcTotais = (listaPedidos) => {
    return listaPedidos.map(pedido => {

        let total = 0;

        pedido.itens.forEach(item => {

            const produto = produtos.find(
                produto => produto.id === item.produtoId
            );

            if (produto) {
                total += produto.preco * item.quantidade;
            }
        });

        return {
            ...pedido,
            total
        };
    });
};

const listar = (req, res) => {
    const pedidosComTotal = calcTotais(pedidos);

    res.json(pedidosComTotal);
};

const buscarPorId = (req, res) => {
    const id = Number(req.params.id);

    const pedido = pedidos.find(pedido => pedido.id === id);

    if (!pedido) {
        return res.status(404).json({
            mensagem: 'Pedido não encontrado'
        });
    }

    const pedidoComTotal = calcTotais([pedido]);

    res.json(pedidoComTotal[0]);
};

const criar = (req, res) => {
    const novoPedido = {
        id: pedidos.length + 1,
        ...req.body
    };

    pedidos.push(novoPedido);

    const pedidoComTotal = calcTotais([novoPedido]);

    res.status(201).json(pedidoComTotal[0]);
};

const alterar = (req, res) => {
    const id = Number(req.params.id);

    const indice = pedidos.findIndex(pedido => pedido.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: 'Pedido não encontrado'
        });
    }

    pedidos[indice] = {
        ...pedidos[indice],
        ...req.body,
        id
    };

    const pedidoComTotal = calcTotais([pedidos[indice]]);

    res.json(pedidoComTotal[0]);
};

const excluir = (req, res) => {
    const id = Number(req.params.id);

    const indice = pedidos.findIndex(pedido => pedido.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: 'Pedido não encontrado'
        });
    }

    const pedidoExcluido = pedidos.splice(indice, 1);

    res.json(pedidoExcluido[0]);
};

module.exports = {
    listar,
    buscarPorId,
    criar,
    alterar,
    excluir,
    calcTotais
};
