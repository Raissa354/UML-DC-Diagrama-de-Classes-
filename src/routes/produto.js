const express = require('express');

const router = express.Router();

const produtoController = require('../controllers/produto');

router.get('/', produtoController.listar);

router.get('/:id', produtoController.buscarPorId);

router.post('/', produtoController.criar);

router.put('/:id', produtoController.alterar);

router.delete('/:id', produtoController.excluir);

module.exports = router;
