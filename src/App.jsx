import { useState } from 'react'

import './App.css'
import { Button } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Button variant='contained' color='success'>Trial button</Button>
    </>
  )
}

export default App
