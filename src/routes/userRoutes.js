const controller = require("../controller/loginController");
const express = require("express");
const router = express.Router();

// cadastrar novo usuario
router.post("/user", controller.createUser);
// buscar e trazer usuários cadastrados
router.get("/user", controller.getUser);
// fazer o login
router.post("/user/login", controller.login);
// deletar pessoa usuária
router.delete("/user/:id", controller.deleteUserById);

module.exports = router;
