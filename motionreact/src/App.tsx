import { Route, Routes } from 'react-router-dom'
import './App.css'
// import Content from './Content'
import Finta from './finta/Finta.tsx'
import Founders from './finta/Founders.tsx'
import Guide from './finta/Guide.tsx'
import Pricing from './finta/Pricing.tsx'
import Login from './finta/Login.tsx'
import { motion } from 'motion/react'
function App() {
   
  return (
    <motion.div 
    initial={{ backgroundColor:"linear-gradient(to bottom, transparent, #90caf9)",opacity: 0 }}
  whileInView={{  opacity: 1,  }}
    className='h-screen w-full bg-linear-to-b from-transparent via-blue-200 to-transparent'>
    <Routes>
      <Route path='/' element={<Finta/>}/>
    <Route path='/founders' element={<Founders/>}/>
    <Route path='/guide' element={<Guide/>}/>
    <Route path='/pricing' element={<Pricing/>}/>
    <Route path='/login' element={<Login/>}/>
    </Routes>
    </motion.div>
  )
}

export default App
