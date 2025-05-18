import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import MobileMenu from './component/MobileMenu.jsx'
import LogoNike from './component/LogoNike.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Navbar/>
   <MobileMenu/>
   <LogoNike/>
   </>
  )
}

export default App
