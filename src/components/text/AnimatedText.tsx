import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const AnimatedText = ({
  Size,
  Text,
  Trigger,
}: {
  Size: string
  Text: string
  Trigger: boolean
}) => {
  const [animationKey, setAnimationKey] = useState(0)

  useEffect(() => {
    setAnimationKey(prev => prev + 1)
  }, [Trigger])

  return (
    <div className='relative inline-block'>
      <motion.span
        key={animationKey}
        initial={{ opacity: 1 }}
        animate={{ opacity: Trigger ? 0.4 : 1}}
        transition={{ duration: 0.5 }}
        className={`relative z-10 ${Size}`}
      >
        {Text}
      </motion.span>

      <motion.div
        key={`line-${animationKey}`}
        initial={{ width: 0 }}
        animate={{ width: Trigger ? '100%' : 0, opacity: Trigger ? 0.4 : 1 }}
        transition={{ duration: 0.6 }}
        className='absolute top-1/2 left-0 h-[2px] bg-black z-20'
      />
    </div>
  )
}

export default AnimatedText
