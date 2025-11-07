import {motion} from 'motion/react'

const Login = () => {
  return (
    <motion.div className='h-screen overflow-y-scroll w-full bg-white'>
      <div
      className='h-screen w-full bg-cover bg-center absolute top-0 left-0 opacity-30'
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1545377446-446f9f6bd95b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740")`
      }}></div>
  <div className="card w-2/4 h-150 bg-white shadow-md rounded-lg p-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
     <div className="card w-full h-150 bg-linear-to-b from-[#1299ef80] to-white rounded-lg p-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
     
     </div>
   
     </div>
     
    </motion.div>
  )
}

export default Login