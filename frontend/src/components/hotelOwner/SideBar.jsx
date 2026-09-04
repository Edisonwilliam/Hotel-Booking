import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const SIDEBAR_LINKS = [
  { name: 'Dashboard', path: '/owner', icon: assets.dashboardIcon },
  { name: 'Add Room', path: '/owner/add-room', icon: assets.addIcon },
  { name: 'List Room', path: '/owner/list-room', icon: assets.listIcon },
]

const SideBar = () => {
  return (
    <div className='md:w-64 w-16 border-r h-full text-base border-gray-300 pt-4 flex flex-col transition-all duration-300'>
      {SIDEBAR_LINKS.map((item) => (
        <div key={item.path} className="relative group">
          <NavLink
            to={item.path}
            end={item.path === '/owner'}
            className={({ isActive }) =>
              `flex items-center py-3 px-4 md:px-8 gap-3 transition-colors ${
                isActive
                  ? 'border-r-[6px] bg-blue-600/10 border-blue-600 text-blue-600'
                  : 'hover:bg-gray-100/90 text-gray-700'
              } focus:outline-none focus:ring-2 focus:ring-blue-600`
            }
          >
            <img
              src={item.icon}
              alt=""
              aria-hidden="true"
              className='w-5 h-5'
            />
            <span className='md:block hidden'>{item.name}</span>
          </NavLink>
          
          {/* Mobile tooltip */}
          <span className='md:hidden absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity'>
            {item.name}
          </span>
        </div>
      ))}
    </div>
  )
}

export default SideBar