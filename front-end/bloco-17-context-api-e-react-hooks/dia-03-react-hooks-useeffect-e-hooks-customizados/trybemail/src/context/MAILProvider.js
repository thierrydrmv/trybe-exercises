import React, { useState } from "react";
import MAILContext from './MAILContext';

const MAILProvider = ({children}) => {
  const [state, setChangeState] = useState([{
    id: 1,
    title: "Nubank",
    status: 0
  },
  {
    id: 2,
    title: "RE: entrevista",
    status: 0
  },
  {
    id: 3,
    title: "The News",
    status: 0
  }]);

  return (
    <MAILContext.Provider value={{emailList: state, setChangeState}}>
      {children}
    </MAILContext.Provider>
  )
}

export default MAILProvider;