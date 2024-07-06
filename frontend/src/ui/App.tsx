import { useState } from 'react'

import './App.css'
import UserNameForm from './UserNameForm';
import JoinRoom from '../core/useCases/JoinRoom';
import RoomWebSocketRepository from '../core/infrastructure/RoomWebSocketRepository';
import { ContextProvider } from './Context';

function App() {
  const [userName, setUserName] = useState('')

  const onChangeUserName = (newUserName: string) => {
    setUserName(newUserName)

    const roomRepo = new RoomWebSocketRepository()
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
