import { useEffect, useState } from 'react'
import BasicBtn from './components/buttons/BasicBtn'
import RegisterForm from './components/forms/RegisterForm'
import LoginForm from './components/forms/LoginForm'
import LoadingBtn from './components/buttons/LoadingBtn'
import type { userType } from './types/user.type'
import NextBtn from './components/buttons/NextBtn'
import PrevBtn from './components/buttons/PrevBtn'
import RoundedBtn from './components/buttons/RoundedBtn'
import penSvg from '/svg/pen.svg'
import BasicInp from './components/input/BasicInp'
import Navbar from './components/navbars/Navbar'
import InfoTab from './components/InfoTabs/InfoTab'
import ColoredBtn from './components/buttons/ColoredBtn'
import NavigationMenu from './components/navbars/NavigationMenu'
import type { MenuOptionType } from './types/nav.type'
import Checkbox from './components/checkbox/Checkbox'
import Breadcrumb from './components/breadcrumb/Breadcrumb'
import MenuBtn from './components/navbars/MenuBtn'
import Accordion from './components/accordion/Accordion'
import PasswordInp from './components/input/PasswordInp'
import ExpandableButton from './components/buttons/ExpandableButton'

const menuOptions: MenuOptionType[] = [
  {
    Option: 'About',
    Content: [
      {
        Heading: 'Fuck you 1',
        Description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, expedita.'
      },
      {
        Heading: 'Fuck you 2',
        Description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, expedita.'
      },
      {
        Heading: 'Fuck you 3',
        Description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, expedita.'
      },
      {
        Heading: 'Fuck you 1',
        Description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, expedita.'
      },
      {
        Heading: 'Fuck you 2',
        Description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, expedita.'
      },
      {
        Heading: 'Fuck you 3',
        Description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, expedita.'
      }
    ]
  },
  {
    Option: 'Blog',
    Content: [
      {
        Heading: 'Fuck your blog ',
        Description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, expedita.'
      },
      {
        Heading: 'Fuck you 2',
        Description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, expedita.'
      },
      {
        Heading: 'Fuck you 3',
        Description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, expedita.'
      }
    ]
  },
  {
    Option: 'Career',
    Content: [
      {
        Heading: 'Be unemployed piece of shit',
        Description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, expedita.'
      }
    ]
  }
]

function App () {
  const [registerData, setRegisterData] = useState<userType>({
    username: '',
    email: '',
    password: ''
  })

  const [loginData, setLoginData] = useState<userType>({
    email: '',
    password: ''
  })

  useEffect(() => {
    if (registerData.email) {
      register(registerData)
      return
    }
    if (loginData.email) {
      register(loginData)
      return
    }
  }, [registerData, loginData])

  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function register (data: userType) {
    try {
      setIsLoading(true)

      // simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000))

      console.log(data)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='p-6 text-white flex flex-col gap-5'>
      <h2>Buttons</h2>
      <div className='btn-container flex flex-wrap gap-3'>
        <BasicBtn Content='Click me' Shadow={true} />
        <LoadingBtn Border={true} />
        <PrevBtn onClick={() => console.log('prev')} />
        <NextBtn onClick={() => console.log('next')} />
        <RoundedBtn Src={penSvg} Size='large' />
        <ColoredBtn
          Animated={true}
          Shadow={true}
          Border={true}
          Content='Click me'
          Color='blue' 
        />
        <div onClick={()=>console.log("clicked..")}>
          <ExpandableButton Color='blue' Border={true} BackgroundColor='black' Shadow={true}/>
        </div>
      </div>
      <h2>Info tabs</h2>
      <div className='btn-container flex gap-3'>
        <InfoTab
          Href='/about'
          Border={true}
          Shadow={true}
          Heading='Heading'
          Description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
        accusantium velit ratione, voluptate dicta debitis laboriosam distinctio
        soluta maxime blanditiis nemo molestiae veritatis illum ducimus minima
        eveniet nihil est cupiditate.'
        />
      </div>
      <h2>Input fields</h2>
      <div className='btn-container flex gap-3'>
        <BasicInp Corner='pill' placeholder='username' />
        <PasswordInp Corner='rounded' Placeholder={true} placeholder='jgjdsh' />
      </div>
      <h2>Auth Forms</h2>
      <div className='form-container flex flex-col gap-3'>
        <RegisterForm
          setFormData={setRegisterData}
          isLoading={isLoading}
          Navigate='/login'
        />
        <LoginForm setFormData={setLoginData} isLoading={isLoading} />
      </div>
      <h2>Navbars</h2>
      <div className='container flex flex-wrap gap-3'>
        <Navbar
          Menu={menuOptions}
          onToggle={isActive => {
            console.log('Menu active from navbar:', isActive)
          }}
        />
        <NavigationMenu
          Hidden={false}
          className='w-fit rounded-md bg-zinc-600'
          Menu={menuOptions}
        />
        <MenuBtn
          onToggle={isActive => {
            console.log('Menu active:', isActive)
          }}
        />
      </div>
      <h2>Checkbox</h2>
      <div className='container flex flex-col gap-3'>
        <Checkbox For='Myself Ganesh Digambar Belote I am from Parner District Ahilyanagar' />
      </div>
      <h2>Breadcrumb</h2>
      <div
        id='breadcrum'
        className='container flex flex-col gap-3'
      >
        <Breadcrumb
          Items={[
            { label: 'Home', path: '/' },
            { label: 'Products', path: '/products' },
            { label: 'Electronics', path: '/products/electronics' },
            { label: 'Laptops', path: '/products/electronics/laptops' }
          ]}
        />
      </div>
      <h2>Accordion</h2>
      <div className='container min-h-screen flex flex-col gap-3'>
        <Accordion Heading='Ganesh Belote, I am from Devibhoyare' Description='Myself Ganesh Belote, I am from Devibhoyare Taluka Parner District Ahilyanagar.' />
      </div>
    </div>
  )
}

export default App
