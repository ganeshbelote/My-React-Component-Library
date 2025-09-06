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
import InfoTab from './components/tabs/InfoTab'
import ColoredBtn from './components/buttons/ColoredBtn'
import NavigationMenu from './components/navigation/NavigationMenu'
import type { MenuOptionType } from './types/nav.type'
import Checkbox from './components/checkbox/Checkbox'
import Breadcrumb from './components/breadcrumb/Breadcrumb'
import MenuBtn from './components/navigation/MenuBtn'
import Accordion from './components/accordion/Accordion'
import PasswordInp from './components/input/PasswordInp'
import ExpandableBtn from './components/buttons/ExpandableBtn'
import Tooltip from './components/tooltip/Tooltip'
import Card from './components/cards/Card'
import dummyImg from './assets/dummy.jpg'
import TabBar from './components/bars/TabBar'
import NavBar from './components/bars/NavBar'
import Select from './components/select-option/Select'
import Option from './components/select-option/Option'
import {toast, Toast} from './components/toast/Toast'
import Tab from './components/tabs/Tab'
import SearchBar from './components/input/SearchBar'

const menuOptions: MenuOptionType[] = [
  {
    Option: 'About',
    Content: [
      {
        Href: '/about/projects',
        Heading: 'Projects',
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
  const [isLoading, setIsLoading] = useState<boolean>(false)
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
    <div className='p-6 text-white flex flex-col gap-5 overflow-hidden'>
      <h2>Buttons</h2>
      <div className='btn-container flex flex-wrap gap-3'>
        <BasicBtn Content='Click me' Shadow={true} onClick={() => console.log('basic')}/>
        <LoadingBtn Border={true} />
        <PrevBtn onClick={() => console.log('prev')} />
        <NextBtn onClick={() => console.log('next')} />
        <RoundedBtn Src={penSvg} Size='large' onClick={() => console.log('rounded')}/>
        <ColoredBtn
          Animated={true}
          Shadow={true}
          Border={true}
          Content='Click me'
          Color='blue'
          onClick={() => console.log('colored')}
        />
        <ExpandableBtn
          onToggle={(active) => console.log('animated' + active)}
          NavIcon='Home'
          Content='Accusantium'
          Color='blue'
          Border={true}
          BackgroundColor='black'
          Shadow={true}
        />
      </div>
      <h2>Tabs</h2>
      <div className='btn-container flex flex-wrap gap-3'>
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
        <Tab Tabs = {["Ganesh", "My self ganesh belote", "q",'123']} onClick={(e) => console.log(e.currentTarget.value,e.currentTarget.textContent)}/>
      </div>
      <h2>Input fields</h2>
      <div className='btn-container flex flex-wrap gap-3'>
        <BasicInp Shadow={false} Corner='pill' placeholder='username' onChange={e => console.log(e.target.value)}/>
        <PasswordInp Corner='rounded' Placeholder={true} placeholder='jgjdsh' onChange={e => console.log(e.target.value)}/>
        <SearchBar Corner='pill' onChange={e => console.log(e.target.value)}/>
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
        <NavBar
          Menu={menuOptions}
          onToggle={isActive => {
            console.log('Menu active from navbar:', isActive)
          }}
        />
        <TabBar>
          <ExpandableBtn
            to='/'
            Color='black'
            BackgroundColor='white'
            NavIcon='Home'
            Content='Home'
          />
          <ExpandableBtn
            to='/about'
            Color='black'
            BackgroundColor='white'
            NavIcon='About'
            Content='About'
          />
          <ExpandableBtn
            to='/contact'
            Color='black'
            BackgroundColor='white'
            NavIcon='Contact'
            Content='Contact'
          />
          <ExpandableBtn
            to='/profile'
            Color='black'
            BackgroundColor='white'
            NavIcon='Profile'
            Content='Profile'
          />
          <ExpandableBtn
            to='/settings'
            Color='black'
            BackgroundColor='white'
            NavIcon='Settings'
            Content='Settings'
          />
        </TabBar>
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
        <Checkbox Size='small' onToggle={(active) => console.log(active)} For='Myself Ganesh Digambar Belote I am from Parner District Ahilyanagar' />
        <Checkbox Type='todo' onToggle={(done) => console.log(done)} For='Myself Ganesh Digambar Belote I am from Parner District Ahilyanagar' />
      </div>
      <h2>Breadcrumb</h2>
      <div id='breadcrum' className='container flex flex-col gap-3'>
        <Breadcrumb />
      </div>
      <h2>Accordion</h2>
      <div className='container flex flex-col gap-3'>
        <Accordion
          Heading='Ganesh Belote, I am from Devibhoyare'
          Description='Myself Ganesh Belote, I am from Devibhoyare Taluka Parner District Ahilyanagar.'
          Border={true}
          Color='white'
          BackgroundColor='black'
        />
      </div>
      <h2>Tooltip</h2>
      <div className='container flex flex-col gap-3'>
        <Tooltip Content='Hey Buddy !' />
      </div>
      <h2>Card</h2>
      <div className='container flex flex-col gap-3'>
        <Card
          Src={dummyImg}
          Heading='Ganesh Belote'
          Description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis dolores, voluptatibus reiciendis aut ex provident exercitationem distinctio. Laboriosam architecto expedita natus fugiat molestias inventore omnis beatae ipsum, tempore quam vero reiciendis excepturi sapiente eum sint ea similique dolorem odio dolorum.'
          Date={String(Date.now())}
        />
      </div>
      <h2>Select option</h2>
      <div className='container flex flex-wrap gap-3'>
          <Select Title='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ad reprehenderit dolor harum omnis mollitia ex magnam recusandae eligendi molestiae.' onChange={e => console.log(e.target.value)}>
            <Option value='male'>Male</Option>
            <Option value='female'>Female</Option>
            <Option value='others'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ad reprehenderit dolor harum omnis mollitia ex magnam recusandae eligendi molestiae.</Option>
          </Select>
          <Select onChange={e => console.log(e.target.value)}>
            <Option value='open'>Open</Option>
            <Option value='OBC'>OBC</Option>
            <Option value='others'>SC/ST</Option>
          </Select>
      </div>
      <h2>Toast Messages</h2>
      <div className='container flex flex-wrap gap-3'>
          <Toast duration={500}/>
          <BasicBtn Content='Success' onClick={() => toast.success("Chaltay ...")}/>
          <BasicBtn Content='Info' onClick={() => toast.info("Chaltay ...")}/>
          <BasicBtn Content='Warning' onClick={() => toast.warning("Chaltay ...")}/>
          <BasicBtn Content='Error' onClick={() => toast.error("Chaltay ...")}/>
      </div>
    </div>
  )
}

export default App
