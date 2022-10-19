import { useState, useContext } from 'react';
import context from '../context/MyContext';

function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [module, setModule] = useState('');

  const { addPerson } = useContext(context);

  return (
    <div>
      <form>
        <label htmlFor='name'>Nome Completo
          <input type='text' value={ name } id='name' onChange={({target}) => setName(target.value)} />
        </label>
        <label>Idade
          <input type='number' value={ age } id='age' onChange={({target}) => setAge(target.value)}  />
        </label>
        <label>Cidade
          <input type='text' value={ city } id='city' onChange={({target}) => setCity(target.value)} />
        </label>
        <label htmlFor='fundamentals'>
          <input
          id='fundamentals'
          type='radio' 
          name="module"
          value='fundamentos'
          checked={ module === 'fundamentos'} 
          onChange={({ target }) => setModule(target.value)} />
          Módulo Fundamentos
        </label>
        <label htmlFor='front-end'>
          <input
          id='front-end'
          type='radio'
          name="module"
          value='front-end'
          checked={ module === 'front-end'}
          onChange={({ target }) => setModule(target.value)}
          />
          Módulo Front-end
        </label>
        <label htmlFor='back-end'>
          <input
          id='back-end'
          type='radio'
          name="module"
          value='back-end'
          checked={ module === 'back-end'}
          onChange={ ({target}) => setModule(target.value)}
          />
          Módulo Back-end
        </label>
        <label htmlFor='computer-sciencie'>
          <input
          id='computer-sciencie'
          type='radio'
          name="module"
          value='computer-sciencie'
          checked={ module === 'computer-sciencie'}
          onChange={ ({target}) => setModule(target.value)}
          />
          Módulo Ciência da Computação
        </label>
      <button
        type='button'
        onClick={
        () => {
          const personInfo = {
            name,
            age,
            city,
            module,
          };
          addPerson(personInfo);
        } }
      >
        Submit</button>
      </form>
    </div>
  )
}

export default Form;