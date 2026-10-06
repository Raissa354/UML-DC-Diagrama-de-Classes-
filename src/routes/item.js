const express = require('express');

const router = express.Router();

const itemController = require('../controllers/item');

router.get('/', itemController.listar);

router.get('/:id', itemController.buscarPorId);

router.post('/', itemController.criar);

router.put('/:id', itemController.alterar);

router.delete('/:id', itemController.excluir);

module.exports = router;
