import clsx from 'clsx'
import Option from './Option'
import { useState } from 'react'
import type { SelectProps } from '../../types/selectOption.type'
import { motion, AnimatePresence } from 'framer-motion'

const Select = ({ children, onChange }: SelectProps) => {
  const [expand, setExpand] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handleSelect = (index: number, value: string) => {
    setSelectedIndex(index)
    setExpand(false)

    if (onChange) {
      const event = {
        target: { value } as HTMLSelectElement
      } as React.ChangeEvent<HTMLSelectElement>

      onChange(event)
    }
  }

  return (
    <div className='relative w-fit flex flex-col items-center justify-center gap-2'>
      <div
        className={clsx(
          'cursor-pointer w-full max-w-fit flex flex-col items-center gap-1 px-6 py-1.5 rounded-md bg-gradient-to-r from-zinc-900 to-zinc-950 font-medium text-center text-nowrap'
        )}
        onClick={() => setExpand(prev => !prev)}
      >
        {selectedIndex !== null
          ? children[selectedIndex].props.children
          : 'Select'}
      </div>

      <AnimatePresence>
        {expand && (
          <motion.div
            key='dropdown'
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 90 }}
            exit={{ opacity: 0, y: 70 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className={clsx(
              'absolute flex flex-col items-center gap-1 w-fit p-2.5 rounded-xl bg-gradient-to-r from-zinc-900 to-zinc-950'
            )}
          >
            {children.map((el, index) => (
              <Option
                key={index}
                value={el.props.value}
                Active={selectedIndex === index}
                onClick={() => handleSelect(index, el.props.value)}
              >
                {el.props.children}
              </Option>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Select
