const express = require('express');

const app = express();

app.use(express.json());

const clienteRoutes = require('./src/routes/cliente');
const produtoRoutes = require('./src/routes/produto');
const itemRoutes = require('./src/routes/item');
const pedidoRoutes = require('./src/routes/pedido');

app.use('/clientes', clienteRoutes);
app.use('/produtos', produtoRoutes);
app.use('/itens', itemRoutes);
app.use('/pedidos', pedidoRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
