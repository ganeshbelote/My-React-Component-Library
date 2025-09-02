import { useState } from 'react'
import BasicBtn from '../buttons/BasicBtn'
import { Link } from 'react-router-dom'
import type { userType } from '../../types/user.type'
import LoadingBtn from '../buttons/LoadingBtn'

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/
const ERROR = {
  all: 'All fields are necessary !',
  email: 'Domain required (for ex. @gmail.com)',
  password:
    'Password must contain atleast 6 characters consisting atleast one uppercase, one lowercase , special character and number !'
}

const RegisterForm = ({
  setFormData,
  Navigate = '/login',
  isLoading
}: {
  setFormData: React.Dispatch<React.SetStateAction<userType>>
  Navigate?: string
  isLoading?: boolean
}) => {
  const [user, setUser] = useState<userType>({
    username: '',
    email: '',
    password: ''
  })
  const [error, setError] = useState<userType>({
    username: '',
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!user.email || !user.username || !user.password) {
      setError({
        username: ERROR.all,
        email: ERROR.all,
        password: ERROR.all
      })
      return
    }

    if (!user.email.toLowerCase().endsWith('@gmail.com')) {
      setError({
        username: '',
        email: ERROR.email,
        password: ''
      })
      return
    }

    if (!passwordRegex.test(user.password)) {
      setError({
        username: '',
        email: '',
        password: ERROR.password
      })
      return
    }

    setFormData(user)

    setError({
      username: '',
      email: '',
      password: ''
    })

    setUser({
      username: '',
      email: '',
      password: ''
    })
  }

  return (
    <div className='w-fit flex items-center justify-center'>
      <form
        onSubmit={handleRegister}
        className='border-[1.2px] border-white py-6 px-7 rounded-md flex flex-col gap-5 bg-gradient-to-br from-zinc-900 to-black shadow-[0_1px_6px_-4px_rgba(0,0,0,0.25)] shadow-white'
      >
        <h2 className='text-center text-xl font-medium'>Register</h2>

        <div id='username' className='flex flex-col'>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            name='username'
            value={user.username}
            className='text-sm min-w-[220px] max-w-3xs border-[1.2px] border-white bg-zinc-950 rounded-md py-1.5 px-4 outline-0'
            type='text'
            onChange={e => setUser({ ...user, username: e.target.value })}
          />
          {error.username && (
            <p className='mt-1 text-red-500 text-xs text-center min-w-[220px] max-w-3xs'>
              {error.username}
            </p>
          )}
        </div>

        <div id='email-block' className='flex flex-col'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            name='email'
            value={user.email}
            className='text-sm min-w-[220px] max-w-3xs border-[1.2px] border-white rounded-md py-1.5 px-4 outline-0'
            type='text'
            onChange={e => setUser({ ...user, email: e.target.value })}
          />
          {error.email && (
            <p className='mt-1 text-red-500 text-xs text-center min-w-[220px] max-w-3xs'>
              {error.email}
            </p>
          )}
        </div>

        <div id='password-block' className='flex flex-col'>
          <label htmlFor='password'>Password</label>
          <div
            id='password-input'
            className='relative flex items-center justify-center'
          >
            <input
              id='password'
              name='password'
              value={user.password}
              className='text-sm min-w-[220px] max-w-3xs border-[1.2px] border-white rounded-md py-1.5 px-4 pr-10 outline-0'
              type={showPassword ? 'text' : 'password'}
              onChange={e => setUser({ ...user, password: e.target.value })}
            />
            <img
              className='show-pass h-5 w-5 cursor-pointer absolute right-3'
              src={showPassword ? '/svg/eye-close.svg' : '/svg/eye-open.svg'}
              alt={showPassword ? 'Hide password' : 'Show password'}
              draggable={false}
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          {error.password && (
            <p className='mt-1 text-red-500 text-xs text-center min-w-[220px] max-w-3xs'>
              {error.password}
            </p>
          )}
        </div>

        {isLoading ? (
          <LoadingBtn className='mt-2' Border={true} />
        ) : (
          <BasicBtn
            className='mt-2'
            Type='submit'
            Content='Register'
            Shadow={false}
            Border={true}
          />
        )}

        <p className='text-center text-sm'>
          Already have account ?{' '}
          <Link to={Navigate}>
            <span className='text-blue-500 underline cursor-pointer'>
              Login
            </span>
          </Link>
        </p>
      </form>
    </div>
  )
}

export default RegisterForm
