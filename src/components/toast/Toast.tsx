const Toast = () => {
  return (
    <div className='max-w-[420px] flex gap-5 items-start justify-between px-4 py-2.5 rounded-xl shadow-lg bg-neutral-900 text-white'>
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
            <span className="font-semibold text-sm lg:text-[16px]">Success notification</span>
          </h4>
          <p className='mt-1 text-xs text-gray-400'>
            Subtitle and associated information pertaining to the event.
            Information to not exceed [x] characters.
          </p>

          {/* Actions */}
          <div className='flex gap-4 mt-2 text-[13px] lg:text-sm font-medium'>
            <button className='cursor-pointer text-white hover:text-blue-400 hover:underline'>Action</button>
            <button className='cursor-pointer text-white hover:text-blue-400 hover:underline'>Action</button>
          </div>
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
    </div>
  )
}

export default Toast
