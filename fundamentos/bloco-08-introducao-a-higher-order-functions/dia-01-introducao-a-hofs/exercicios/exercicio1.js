const newEmployees = () => {
  const employees = {
    id1: funcionario('Pedro Guerra', emailo),
    id2: funcionario('Luiza Drumond', emailo),
    id3: funcionario('Carla Paiva', emailo),
  }
  return employees;
};

const funcionario = (nome, emails) => ({
  nomecompleto: nome,
  email: emails(nome),
})

const emailo = (nomecompleto) => {
  let email = nomecompleto.replace(' ', '_')
  return email = `${email}@trybe.com`
}

console.log(newEmployees());