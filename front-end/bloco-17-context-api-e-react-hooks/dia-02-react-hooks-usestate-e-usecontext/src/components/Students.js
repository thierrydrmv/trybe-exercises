import { useContext } from 'react'
import context from '../context/MyContext';

function Students() {
  const { personList } = useContext(context) 
  return (
    <ul>
      {
        personList.map(({name, age, city , module }, i) => (
          <li key={i}>
            <p>{name}</p>
            <p>{age}</p>
            <p>{city}</p>
            <p>{module}</p>
          </li>
        ))
      }
    </ul>
  )
}

export default Students;