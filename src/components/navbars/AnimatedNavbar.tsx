import type { ReactNode } from 'react'
import React from 'react'
import { useLocation } from 'react-router-dom'

interface ChildProps {
  Content: string
  Active?: boolean
  to?: string
}

const AnimatedNavbar = ({ children }: { children: ReactNode }) => {
  const location = useLocation()

  return (
    <div className='rounded-4xl h-16 w-fit bg-gradient-to-br from-zinc-900 to-black px-6 flex gap-3 items-center justify-between'>
      {React.Children.map(children, child => {
        if (React.isValidElement<ChildProps>(child)) {
          const isActive = child.props.to === location.pathname
          return React.cloneElement(child, {
            Active: isActive
          })
        }
        return child
      })}
    </div>
  )
}

export default AnimatedNavbar
