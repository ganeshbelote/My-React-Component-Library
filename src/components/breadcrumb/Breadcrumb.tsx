import { NavLink } from 'react-router-dom'
import type { Crumb } from '../../types/breadcrum.type'

interface BreadcrumbProps {
  Items: Crumb[]
}

const Breadcrumb = ({ Items }: BreadcrumbProps) => {
  return (
    <nav className='flex flex-wrap text-sm text-gray-600'>
      {Items.map((item, index) => (
        <span key={index} className='flex items-center'>
          <NavLink
            to={item.path}
            end  
            className={({ isActive }) =>
              `${isActive && 'underline font-medium'} 
     hover:underline hover:font-medium transition-all text-zinc-400`
            }
          >
            {item.label}
          </NavLink>
          {index < Items.length - 1 && <span className='mx-2'>{'>'}</span>}
        </span>
      ))}
    </nav>
  )
}

export default Breadcrumb
