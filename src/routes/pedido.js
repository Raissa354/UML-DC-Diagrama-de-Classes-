const express = require('express');

const router = express.Router();

const pedidoController = require('../controllers/pedido');

router.get('/', pedidoController.listar);

router.get('/:id', pedidoController.buscarPorId);

router.post('/', pedidoController.criar);

router.put('/:id', pedidoController.alterar);

router.delete('/:id', pedidoController.excluir);

module.exports = router;
