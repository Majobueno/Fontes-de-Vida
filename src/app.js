require("dotenv").config();
// framework express
const express = require("express");
// acesso às rotas
const index = require("./routes/index.js");
const fontes = require("./routes/fontesRoutes.js");
const userRoutes = require("./routes/userRoutes");
// acessar o banco
const mongoose = require("./database/dbConnect.js");
// documentação
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../swagger/swagger_output.json");

//conectar
const app = express();
mongoose.connect();
// parsear
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", index);
app.use("/fontes", fontes);
app.use("/documentacao", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(userRoutes);

module.exports = app;
