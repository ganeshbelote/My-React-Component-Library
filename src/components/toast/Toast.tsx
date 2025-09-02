const Toast = () => {
  return (
    <div className='max-w-sm mx-auto mt-10'>
      <div className='flex items-start justify-between p-4 rounded-xl shadow-lg bg-neutral-900 text-white'>
        {/* Left Section */}
        <div className='flex items-start gap-3'>
          {/* Icon */}
          <div className='flex-shrink-0'>
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
            <h4 className='font-semibold'>Success notification</h4>
            <p className='text-sm text-gray-400'>
              Subtitle and associated information pertaining to the event.
              Information to not exceed [x] characters.
            </p>

            {/* Actions */}
            <div className='flex gap-4 mt-2 text-sm font-medium text-blue-400'>
              <button className='hover:underline'>Action</button>
              <button className='hover:underline'>Action</button>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button className='text-gray-400 hover:text-gray-200'>
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
    </div>
  )
}

export default Toast
