import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from 'react-toastify'

import {store} from '../state/store'
import {LayoutHydrated} from '.'

export function ListTask() {
  const list = store((state) => state.tasks)
  const update = store((state) => state.updateTask)
  const remove = store((state) => state.removeTask)

  if (list.length === 0) {
    return (
      <LayoutHydrated>
        <p className='text-lg text-red-800'>Not there are tasks...</p>
      </LayoutHydrated>
    )
  }

  return (
    <LayoutHydrated>
      <ToastContainer
        position='top-right'
        autoClose={1000}
        hideProgressBar
        newestOnTop
        closeOnClick
      />

      <div className='space-y-4 w-full flex flex-wrap'>
        {list.map(({id, task}) => (
          <div key={id} className='w-[400px] p-3 flex gap-x-3 items-center'>
            <span className='p-3 shadow-sm'>{id}</span>
            <input
              type='text'
              defaultValue={task}
              className='border py-4 px-3 rounded-lg border-gray-300 w-full outline-0 focus:border-gray-500'
              onChange={(evt) =>
                update && update({id: id, task: evt.target.value})
              }
            />

            <svg
              onClick={() => id && remove && remove(id)}
              className='w-6 h-6 hover:text-gray-600 cursor-pointer'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
              />
            </svg>
          </div>
        ))}
      </div>
    </LayoutHydrated>
  )
}
