import { Outlet } from 'react-router-dom'
import Navbar from '../../components/hotelOwner/Navbar'
import SideBar from '../../components/hotelOwner/SideBar'

const Layout = () => {
  return (
    <div className='flex flex-col h-screen'>
      
    
      <div className='h-20'>
        <Navbar />
      </div>

      
      <div className='flex flex-1 overflow-hidden'>
        
        {/* Sidebar - visible on md+ */}
        <div className='hidden md:block'>
          <SideBar />
        </div>

        {/* Main content - takes remaining space */}
        <main className='flex-1 overflow-y-auto p-10'>
          <Outlet />
        </main>

      </div>

    </div>
  )
}

export default Layout