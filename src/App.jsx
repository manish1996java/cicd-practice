import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p title="abc" className="read-the-docs">
       hello world hi
      </p>

      <input type="text" name='search' placeholder='search' />
    </>
  )
}

export default App
