const Fonte = require("../src/models/fontes.js")

describe("Teste de models", () => {
  const fontes = new Fonte({
    id: " ",
    nome: " ",
    cidade: " ",
    vazao: " ",
    gps: " "
  })

  it("Deve chamar o Schema e retornar a fonte criada", () => {
    expect(fontes.title).toBe(" ")
  });
  it("Deve salvar a fonte no banco de dados", () => {
    fontes.save().then((dados) => {
      expect(dados.title).toBe(" ")
    })
  })
})
