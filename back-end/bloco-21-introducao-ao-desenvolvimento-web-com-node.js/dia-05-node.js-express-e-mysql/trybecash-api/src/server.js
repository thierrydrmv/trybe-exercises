const app = require('./app');
const connection = require('./db/connection');

const PORT = 3001;

app.listen(PORT, async () => {
  console.log(`Api TrybeCash está sendo executada na porta ${PORT}`);

  const [result] = await connection.execute('SELECT * FROM people')
  console.log(result);
})
