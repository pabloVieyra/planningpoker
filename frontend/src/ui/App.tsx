import { useState } from 'react'

import './App.css'
import UserNameForm from './UserNameForm';
import JoinRoom from '../core/useCases/JoinRoom';
import RoomApiRepository from '../core/infrastructure/RoomApiRepository';
import { ContextProvider } from './Context';

function App() {
  const [userName, setUserName] = useState('')

  const onChangeUserName = (newUserName: string) => {
    setUserName(newUserName)

    const roomRepo = new RoomApiRepository()
    const useCase = new JoinRoom(roomRepo)
    useCase.execute(newUserName)
  }

  if (!userName) return <UserNameForm onChangeUserName={onChangeUserName} />
  return (
    <ContextProvider userName={userName}>
      <h1>Hola</h1>
    </ContextProvider>
  )
}

export default App
