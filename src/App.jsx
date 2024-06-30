import React from 'react'
import Bg from "./components/Bg"
import Fg from './components/Fg'
function App() {

  return (
    <>
     <div className='relative w-full h-screen bg-zinc-800'>
       <Bg />
        <Fg />
     </div>
    </>
  )
}

export default App
