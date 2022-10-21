import React, { useContext, useEffect, useState } from 'react'
import context from '../context/MAILContext';

function EmailList() {
  const { emailList, setChangeState } = useContext(context);
  const [state, setState] = useState(emailList)

  const allRead = state.reduce((prev, curr) => prev + curr.status, 0) === 3;

  useEffect(() => {
    setChangeState(state)

    allRead && alert('Parabéns! Você leu todas suas mensagens!');

  }, [state, setChangeState, allRead])

  const read = (id) => {
    const newState = state.map((email) => email.id === id ? {...email, status: 1} : email);
    setState(newState);
  }

  const notRead = (id) => {
    const newState = state.map((email) => email.id === id ? {...email, status: 0} : email);
    setState(newState);
  }

  const setAllRead = () => {
    const newState = state.map((email) => ({...email, status: 1}));
    setState(newState);
  }

  const setAllNotRead = () => {
    const newState = state.map((email) => ({...email, status: 0}));
    setState(newState);
  }
  return (
    <section>
      <button type='button' onClick={() => setAllRead()}>Todos Lidos</button>
      <button type='button' onClick={() => setAllNotRead()}>Nenhum Lido</button>
      <div>{state.map((email) => (
        <div key={email.id}>
          <p>{email.title}</p>
          <p>{email.status === 1 ? 'lido' : 'não lido'}</p>
          <button type='button' onClick={() => read(email.id)}>Ler</button>
          <button type='button' onClick={() => notRead(email.id)}>Marcar como não Lido</button>
        </div>
      ))}</div>
    </section>
  )
}
export default EmailList;