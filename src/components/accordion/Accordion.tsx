import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import UpArrow from '/svg/up-arrow.svg'
import Lock from '/svg/lock.svg'

const Accordion = ({
  Heading,
  Description
}: {
  Heading: string
  Description: string
}) => {
  const [active, setActive] = useState<boolean>(false)
  const [lock, setLock] = useState<boolean>(false)

  return (
    <motion.div
      className={`relative border-[1.5px] border-white max-w-[30rem] px-2 py-1.5 pr-8 cursor-pointer flex flex-col items-center rounded-sm ${
        active || lock
          ? '!bg-zinc-900'
          : 'bg-gradient-to-br from-zinc-900 to-black'
      }`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={() => setLock(prev => !prev)}
    >
      <div className='relative text-lg font-semibold flex items-center justify-center gap-2'>
        <span>
          {Heading.length <= 27
            ? Heading
            : Heading.slice(0, 27).padEnd(30, '.')}
        </span>
        <AnimatePresence>
          {(active || lock) && (
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '90%', opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              className='absolute -bottom-2 h-[1px] bg-white'
            ></motion.span>
          )}
        </AnimatePresence>
      </div>
      <span className={`absolute ${lock ? 'top-3 right-4.5' : 'top-4 right-5'}`}>
        {lock ? (
          <img className={`h-4`} src={Lock} alt='arrow' />
        ) : (
          <img
            className={`h-1.5 ${
              (active || lock) && 'rotate-180'
            } transition-all duration-300`}
            src={UpArrow}
            alt='arrow'
          />
        )}
      </span>
      <AnimatePresence>
        {(active || lock) && (
          <motion.div
            id='accordion-description'
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
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
