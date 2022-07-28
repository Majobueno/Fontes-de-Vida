const fontes = require("../models/fontesModels.js");

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
    const { cidade: cidade } = req.query;
    const findcidade = await fontesModels.find({ cidade: cidade });
    res.status(200).json(findcidade);
  } catch (err) {
    res.status(500).send({ message: "Cidade não encontrada" });
  }
};

const newFonte = async (req, res) => {
  try {
    const { nome, cidade, vazao, gps } = req.body;

    const newFonte = new fontes({
      nome,
      cidade,
      vazao,
      gps,
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
    const { nome, cidade, vazao, gps } = req.body;

    const updatedFonte = await fontes.findByIdAndUpdate(req.params.id, ({
      nome,
      cidade,
      vazao,
      gps,
    }));

    res.status(200).json(updatedFonte);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const deleteFonte = (req, res) => {
  const id = req.params.id;

  fontes.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.status(200).json({ message: "Fonte deleteda com sucesso" });
    } else {
      res.status(500).send({ message: err.message });
    }
  });
};

module.exports = {
getAll,
getIdFonte,
getCidade,
newFonte,
updateFonte,
deleteFonte
};
