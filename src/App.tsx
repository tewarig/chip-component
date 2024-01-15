import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChipContainer from './ui/chipContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChipContainer
       width="1000px"    
      />
    </>
  )
}

export default App
