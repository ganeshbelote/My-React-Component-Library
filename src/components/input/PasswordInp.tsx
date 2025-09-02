import { useEffect, useState } from 'react'
import clsx from 'clsx'
import type { ColorType, cornerType } from '../../types/btn.type'

const textColors: Record<ColorType, string> = {
  transparent: 'text-black',
  white: 'text-white',
  black: 'text-black',
  pink: 'text-pink-500',
  red: 'text-red-500',
  blue: 'text-blue-500',
  green: 'text-green-500',
  yellow: 'text-yellow-500',
  gray: 'text-gray-500',
  purple: 'text-purple-500'
}

const PasswordInp = ({
  id = 'password-field',
  Border = true,
  Color = 'white',
  Corner,
  Lable,
  Placeholder,
  className,
  ...rest
}: {
  id?: string
  Border?: boolean
  Color?: ColorType
  Corner?: cornerType
  Lable?: boolean
  Placeholder?: boolean
  className?: string
} & React.InputHTMLAttributes<HTMLInputElement>) => {
  const [cornerStyle, setCorner] = useState<string>('rounded-md')
  const [showPassword, setShowPassword] = useState<boolean>(false)

  useEffect(() => {
    switch (Corner) {
      case 'rounded':
        break
      case 'pill':
        setCorner('rounded-3xl')
        break
      case 'square':
        setCorner('rounded-none')
        break
    }
  }, [Corner])

  return (
    <div className='relative min-w-[220px] max-w-3xs flex flex-col justify-center'>
      {Lable && <label htmlFor={id}>Password</label>}
      <input
        id={id}
        name={id}
        {...rest}
        className={clsx(
          'outline-0 px-4 py-2.5 pr-10 text-sm',
          Border && 'border-[1.5px]',
          textColors[Color],
          cornerStyle,
          className
        )}
        placeholder= {Placeholder ? 'password' : ''}
        type={showPassword ? 'text' : 'password'}
      />
      <img
        className='show-pass h-5 w-5 cursor-pointer absolute right-4'
        src={showPassword ? '/svg/eye-close.svg' : '/svg/eye-open.svg'}
        alt={showPassword ? 'Hide password' : 'Show password'}
        draggable={false}
        onClick={() => setShowPassword(!showPassword)}
      />
    </div>
  )
}

export default PasswordInp
