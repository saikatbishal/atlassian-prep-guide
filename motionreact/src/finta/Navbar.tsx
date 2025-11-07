import { Link } from 'react-router-dom'

const Navbar = () => {

 

  return (
        <ul className={`flex gap-6 items-center`}>
          <Link to="/founders" className='hover:text-neutral-500 transition-colors duration-300 text-sm'>Founders</Link>
          <Link to="/guide" className='hover:text-neutral-500 transition-colors duration-300 text-sm'>Guide</Link>
          <Link to="/pricing" className='hover:text-neutral-500 transition-colors duration-300 text-sm'>Pricing</Link>
          <li><a href='/login' target='_blank' className='hover:text-neutral-500 transition-colors duration-300 text-sm'>Log In</a></li>
        </ul>
  )
}

export default Navbar