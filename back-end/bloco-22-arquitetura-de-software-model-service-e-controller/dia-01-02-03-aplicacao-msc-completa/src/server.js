const app = require('./app');
require('dotenv').config();

app.listen(3000, () => {
  console.log(`Escutando na porta ${process.env.PORT}`)
})