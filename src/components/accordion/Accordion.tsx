import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import UpArrow from '/svg/up-arrow.svg'
import Lock from '/svg/lock.svg'
import type { BgColorType, ColorType } from '../../types/btn.type'

const bgColors: Record<BgColorType, string> = {
  transparent: 'bg-transparent',
  white: 'bg-white',
  black: 'bg-black',
  blue: 'bg-blue-500',
  red: 'bg-red-500',
  green: 'bg-green-500',
  pink: 'bg-pink-500',
  yellow: 'bg-yellow-500',
  gray: 'bg-gray-500',
  purple: 'bg-purple-500'
}

const bgColorsHover: Record<BgColorType, string> = {
  transparent: 'bg-transparent',
  white: 'bg-white/60',
  black: 'bg-black/60',
  blue: 'bg-blue-500/60',
  red: 'bg-red-500/60',
  green: 'bg-green-500/60',
  pink: 'bg-pink-500/60',
  yellow: 'bg-yellow-500/60',
  gray: 'bg-gray-500/60',
  purple: 'bg-purple-500/60'
}

const textColors: Partial<Record<ColorType, string>> = {
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

const Accordion = ({
  Heading = 'Heading',
  Description = 'Description',
  Color = 'white',
  BackgroundColor = 'transparent',
  Shadow,
  Border
}: {
  Heading: string
  Description: string
  Color?: ColorType
  BackgroundColor?: BgColorType
  Shadow?: boolean
  Border?: boolean
}) => {
  const [active, setActive] = useState<boolean>(false)
  const [lock, setLock] = useState<boolean>(false)

  return (
    <motion.div
      className={`relative ${textColors[Color]} ${
        Border && 'border-[1.5px]'
      } max-w-[30rem] px-2 py-1.5 pr-8 cursor-pointer flex flex-col items-center rounded-sm ${
        active || lock
          ? bgColorsHover[BackgroundColor]
          : bgColors[BackgroundColor]
      }`}
      style={{
        boxShadow: Shadow
          ? `0 1px 8px -4px ${Color}`
          : '0 1px 8px -4px rgba(0,0,0,0.25)'
      }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onDoubleClick={() => setLock(prev => !prev)}
    >
      <div className='w-full relative text-lg font-semibold flex items-center justify-center gap-2'>
        <span
          className={`w-full text-center`}
          onClick={() => setActive(prev => !prev)}
        >
          {Heading.length <= 27
            ? Heading
            : Heading.slice(0, 27).padEnd(30, '.')}
        </span>
        <AnimatePresence mode='wait'>
          {(active || lock) && (
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '90%', opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className={`absolute -bottom-2 h-[1px] ${bgColors[Color]}`}
            ></motion.span>
          )}
        </AnimatePresence>
      </div>
      <span
        className={`absolute ${lock ? 'top-3 right-4.5' : 'top-4 right-5'}`}
      >
        {lock ? (
          <motion.img
            initial={{ x: 0 }}
            animate={{ x: [0, -10, 10, -6, 6, -3, 3, 0] }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className={`h-4`}
            src={Lock}
            alt='arrow'
            onClick={() => setLock(prev => !prev)}
          />
        ) : (
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className={`h-1.5 ${
              (active || lock) && 'rotate-180'
            } transition-transform duration-300`}
            src={UpArrow}
            alt='arrow'
            onClick={() => setActive(prev => !prev)}
          />
        )}
      </span>
      <AnimatePresence mode='wait'>
        {(active || lock) && (
          <motion.div
            layout
            layoutRoot
            id='accordion-description'
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ delay: -0.3, duration: 0.8, ease: 'easeInOut' }}
            className='overflow-hidden w-full pt-2'
          >
            <p className='p-2'>{Description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Accordion
