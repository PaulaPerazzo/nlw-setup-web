import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Habit } from './components/Habit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Habit completed={3} />
      <Habit completed={132}/>
      <Habit completed={4}/>
      <Habit completed={3}/>
    </>
  )
}

export default App
