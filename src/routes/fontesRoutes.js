const express = require("express");
const controller = require("../controller/fontesController.js");

const router = express.Router();

// buscar todas
router.get("/", controller.getAll);
// fonte por id
router.get("/fonte/:id", controller.getIdFonte);
// fonte por cidade
router.get("/cidade", controller.getCidade);
// cria fonte
router.post("/novafonte", controller.newFonte);
// atualiza fonte por id
router.patch("/:id", controller.updateFonte);
// deleta fonte
router.delete("/delete/:id", controller.deleteFonte);

module.exports = router;
