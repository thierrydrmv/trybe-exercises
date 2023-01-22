const conn = require('./connection');

const findAll = async () => {
  const [result] = await conn.execute('SELECT * FROM actor');

  return result;
};

const findById = async (actorId) => {
  const [result] = await conn.execute('SELECT * FROM actor WHERE actor_id = ?', [actorId]);

  return result;
}

module.exports = { findAll, findById };