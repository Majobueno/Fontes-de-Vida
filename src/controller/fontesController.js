const fontes = require("../models/fontesModels.js");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const getAll = (req, res) => {
  fontes.find((err, fontes) => {
    if (err) {
      res.status(500).send({ message: "server error" });
    } else {
      res.status(200).json(fontes);
    }
  });
};

const getIdFonte = (req, res) => {
  const id = req.params.id;

  fontes.findById(id, (err, fontes) => {
    if (err) {
      res.status(404).send({ message: `${err.message} - NAO ENCONTRADA` });
    } else {
      res.status(200).send(fontes);
    }
  });
};

const getCidade = async (req, res) => {
  try {
//     const { cidade } = req.query.cidade;
//     const findCidade = await fontes.find({ cidade: cidade });
//     res.status(200).json(findCidade);
//   } catch (err) {
//     res.status(500).send({ message: "Cidade não encontrada" });
//   }
// };

      const cidadeReq = req.query.cidade;

     const findCidade = await fontes.find({
      cidade: { $regex: cidadeReq, $options: "i" },
    });

    if (findCidade.length > 0) {
      res.status(200).json(findCidade);
    } else {
      return res.status(404).json({ message: "Nçao Encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const newFonte = async (req, res) => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader) {
      return res.status(401).json("por favor, identifique-se");
    }
    const token = authHeader.split(" ")[1];
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Por favor, tente novamente");
      }
    });
    const { nome, cidade, vazao, gps, testada } = req.body;

    const newFonte = new fontes({
      nome,
      cidade,
      vazao,
      gps,
      testada,
    });

    const savedFonte = await newFonte.save();

    res.status(201).json(savedFonte);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const updateFonte = async (req, res) => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader) {
      return res.status(401).json("Por favor, identifique-se");
    }
    const token = authHeader.split(" ")[1];
    await jwt.verify(token, SECRET, async function (err) {
      if (err) {
        return res.status(403).send("Por favor, tente novamente");
      }
    });

        const { id } = req.params;
        const { nome, cidade, vazao, gps, testada } =
          req.body;
    
        const findFonte = await fontes.findById(id);
        if (findFonte == null) {
          return res.status(404).json({ message: "Fonte Não Encontrada" });
        }
    
        findFonte.nome = nome || findFonte.nome;
        findFonte.cidade = cidade || findFonte.cidade;
        findFonte.vazao = vazao || findFonte.vazao;
        findFonte.gps = gps || findFonte.gps;
        findFonte.testada = testada || findFonte.testada;
    
        const savedFonte = await findFonte.save();
        res.status(200).json(savedFonte);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
      }
    };
    

const deleteFonte = async (req, res) => {
  try {
    const authHeader = req.get("authorization");

    if (!authHeader) {
      return res.status(401).send("Por favor, identifique-se");
    }

    const token = authHeader.split(" ")[1];

    await jwt.verify(token, SECRET, async function (err) {
      if (err) {
        return res.status(403).send("Por favor, tente novamente");
      }
    });
    const { id } = req.params;
    const findByIdAndDelete = await fontes.findByIdAndDelete(id);

    if (findByIdAndDelete == null) {
      return res.status(404).json({ message: `ID não encontrado` });
    }

    await findByIdAndDelete.remove();

    res.status(200).json({ message: "Fonte Deleteda" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getAll,
  getIdFonte,
  getCidade,
  newFonte,
  updateFonte,
  deleteFonte,
};
