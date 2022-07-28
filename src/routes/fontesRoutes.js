const express = require ('express');
const controller = require('../controller/fontesController.js');

const router = express.Router();

// buscar todas
router.get('/', controller.getAll);
// fonte por id
router.get('/:id', controller.getIdFonte);
// fonte por cidade
router.get('/cidade', controller.getCidade);
// cria fonte
router.post('/add', controller.newFonte);
// atualiza fonte por id
router.put('/:id', controller.updateFonte);
// deleta fonte
router.delete('/:id', controller.deleteFonte);


module.exports = router;
