import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { UserButton } from '@clerk/clerk-react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center justify-between px-4 md:px-8 border-b border-gray-200 bg-white">
      
      <Link to="/">
        <img
          src={assets.logo}
          alt="Logo"
          className="h-8 md:h-10 invert"
        />
      </Link>

      <UserButton />
      
    </nav>
  )
}

export default Navbar