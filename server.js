// dá acesso ao app
const app = require('./src/app')
// define uma porta
const PORT = process.env.PORT
// escuto e me diz que escuta
app.listen(PORT, () => console.log(`Conected on ${PORT}`))