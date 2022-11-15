import {useState} from 'react'

import {store} from '../state/store'

export function AddTask() {
  const [task, setTask] = useState<string>('')
  const addTask = store((state) => state.addTask)

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    if (task && addTask) {
      addTask(task)
      setTask('')
    }
  }

  return (
    <form className='flex flex-col' onSubmit={handleSubmit}>
      <div className='flex-1'>
        <input
          value={task}
          type='text'
          placeholder='New todo'
          className='border py-4 px-3 rounded-lg border-gray-300 w-full outline-0 focus:border-gray-500'
          onChange={(evt) => setTask(evt.target.value)}
        />
        <small className='text-sm text-blue-300'>Enter for add task</small>
      </div>
      <button className='rounded-lg bg-gray-800 text-white p-2 self-end w-12'>
        +
      </button>
    </form>
  )
}
