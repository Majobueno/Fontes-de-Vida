const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModels");
const SECRET = process.env.SECRET;

const createUser = (req, res) => {
  const senhaComHash = bcrypt.hashSync(req.body.senha, 10);
  req.body.senha = senhaComHash;
  const user = new User(req.body);
  user.save(function (err) {
    if (err) {
      res.status(500).send({ message: err.message });
    }
    res.status(201).send(user);
  });
};

const getUser = (req, res) => {
  User.find(function (err, user) {
    if (err) {
      res.status(500).json({ message: error.message });
    }
    res.status(200).send(user);
  });
};

const login = (req, res) => {
  User.findOne({ email: req.body.email }, function (error, user) {
    if (error) {
      return res.status(500).send({ message: "não encontrada" });
    }
    if (!user) {
      return res.status(404).send(`não encontramos este email: ${email}`);
    }
    const senhaCerta = bcrypt.compareSync(req.body.senha, user.senha);
    if (!senhaCerta) {
      return res.status(403).send(`
            Senha Incorreta!
      Por favor, tente novamente.
      `);
    }
    const token = jwt.sign({ email: req.body.email }, SECRET);
    return res.status(200).send(token);
  });
};

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    const message = `Usuário de ID ${id} deleteda(o)`;
    res.status(200).json({ message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getUser,
  login,
  deleteUserById,
};
