import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Compoment/HomePAge.jsx'
import RecervationPage from './Compoment/RecervationPage.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    
   < div className= 'min-h-screen bg-gray-100 items-center justify-content text-center' >
    
   
   <RecervationPage />
    
   </div>
    
    </>
    
  
    
  )
}

export default App
