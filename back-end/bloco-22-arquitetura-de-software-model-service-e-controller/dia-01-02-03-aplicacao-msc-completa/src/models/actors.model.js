const conn = require('./connection');

const findAll = async () => {
  const [result] = await conn.execute('SELECT * FROM actor');

  return result;
};

const findById = async (actorId) => {
  const [[result]] = await conn.execute('SELECT * FROM actor WHERE actor_id = ?', [actorId]);

  return result;
}

const createActor = async ({ first_name, last_name }) => {
  const [{ insertId }] = await conn.execute(
    'INSERT INTO actor (first_name, last_name) VALUES (?, ?)',
  [first_name, last_name],)
  return insertId
};

const editActor = async (actor) => {
  const { first_name, last_name, id } = actor;
  await conn.execute(
    'UPDATE actor SET first_name = ?, last_name = ? WHERE actor_id = ?',
    [first_name, last_name, id],
  );
  return { id, first_name, last_name};
};

const deleteActor = async (actorId) => {
  await conn.execute(
    'DELETE FROM actor WHERE actor_id = ?', [actorId]
  );
};

module.exports = { findAll, findById, createActor, editActor, deleteActor };