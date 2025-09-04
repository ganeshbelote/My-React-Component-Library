import { createContext, useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type toastType = {
  id?: number
  message: string
  type: 'success' | 'info' | 'error' | 'warning'
}
type funcType = (
  message: string,
  type: 'success' | 'info' | 'error' | 'warning'
) => void

const ToastContext = createContext<funcType | null>(null)

let addToastExternal: funcType

export const Toast = ({
  position = 'top-right',
  duration = 3000
}: {
  position?: 'top-right' | 'top-left' | 'bottom-left' | 'bottom-right'
  duration?: number
}) => {
  const [toasts, setToasts] = useState<toastType[]>([])

  const addToast: funcType = useCallback(
    (message: string, type: 'success' | 'info' | 'error' | 'warning') => {
      const id = Date.now()
      setToasts(prev => [...prev, { id, message, type }])

      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id))
      }, duration)
    },
    [duration]
  )

  addToastExternal = addToast

  return (
    <ToastContext.Provider value={{ addToast }}>
      {/* Toast container */}
      <div className={`fixed ${getPosition(position)} space-y-2`}>
        <AnimatePresence>
          {toasts.map(toast => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className='overflow-hidden relative lg:w-[420px] md:w-[380px] w-[340px] flex gap-5 items-start justify-between px-4 py-2.5 rounded-xl shadow-lg bg-neutral-900 text-white'
            >
              {/* Left Section */}
              <div className='flex items-start gap-3'>
                {/* Icon */}
                <div className='pt-1 flex-shrink-0'>
                  <svg
                    className='w-5 h-5 text-green-400'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </div>

                {/* Content */}
                <div>
                  <h4 className='flex gap-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-5 h-5 blink'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                    >
                      <path d='M12 2l1.7 5.3 5.3 1.7-5.3 1.7-1.7 5.3-1.7-5.3-5.3-1.7 5.3-1.7L12 2z' />
                      <path d='M4 12l1 .3.3 1L4 13l-1-.3-.3-1L4 12zm16 0l1 .3.3 1L20 13l-1-.3-.3-1L20 12zM12 20l.3 1 1 .3-1 .3-.3 1-.3-1-1-.3 1-.3.3-1z' />
                    </svg>
                    <span className='font-medium text-sm lg:text-[16px]'>
                      {toast.type} notification
                    </span>
                  </h4>
                  <p className='mt-1 text-xs text-gray-400'>{toast.message}</p>
                </div>
              </div>

              {/* Close Button */}
              <button className='cursor-pointer pt-1 text-gray-400 hover:text-gray-200'>
                <svg
                  className='w-5 h-5'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
              {/* Progress bar */}
              <motion.div
                className={`absolute left-0 bottom-0 h-0.5 ${getBgColor(
                  toast.type
                )}`}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: duration / 1000, ease: 'linear' }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}

// Exposed toast functions
export const toast = {
  success: (msg: string) => addToastExternal(msg, 'success'),
  error: (msg: string) => addToastExternal(msg, 'error'),
  info: (msg: string) => addToastExternal(msg, 'info'),
  warning: (msg: string) => addToastExternal(msg, 'warning')
}

// Helpers
function getPosition (
  pos: 'top-right' | 'top-left' | 'bottom-left' | 'bottom-right'
) {
  const map: {
    'top-right': string
    'top-left': string
    'bottom-right': string
    'bottom-left': string
  } = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4'
  }
  return map[pos] || map['top-right']
}

function getBgColor (type: 'success' | 'info' | 'error' | 'warning') {
  const map: {
    success: string
    error: string
    info: string
    warning: string
  } = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
    warning: 'bg-yellow-500 text-black'
  }
  return map[type] || 'bg-gray-800'
}
