import { useState } from 'react';
import MyContext from './MyContext';


function Provider({children}) {
  const [personList, setPerson] = useState([]);

  const addPerson = (person) => {
    setPerson([...personList, person])
  }

  const contextValue = {
    personList,
    setPerson,
    addPerson,
  }

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  )
}

export default Provider;