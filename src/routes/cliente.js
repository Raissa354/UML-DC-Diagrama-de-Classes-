const express = require('express');

const router = express.Router();

const clienteController = require('../controllers/cliente');

router.get('/', clienteController.listar);

router.get('/:id', clienteController.buscarPorId);

router.post('/', clienteController.criar);

router.put('/:id', clienteController.alterar);

router.delete('/:id', clienteController.excluir);

module.exports = router;
