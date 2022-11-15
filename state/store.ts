import create from 'zustand'
import {devtools, persist} from 'zustand/middleware'
import {toast} from 'react-toastify'

export type Task = {id: number; task: string}

type Store = {
  tasks: Task[]
  addTask?: (task: string) => void
  updateTask?: (task: Task) => void
  removeTask?: (id: number) => void
}

const KEY_STORAGE = 'task_list'

const add = (state: Store, task: string) => {
  return {
    ...state,
    tasks: [
      {
        id: Math.max(0, Math.max(...state.tasks.map(({id}) => id))) + 1,
        task: task,
      },
      ...state.tasks,
    ],
  }
}

const update = (state: Store, task: Task) => {
  return {
    ...state,
    tasks: state.tasks.map((value) => {
      return {
        ...value,
        task: task.id === value.id ? task.task : value.task,
      }
    }),
  }
}

const remove = (state: Store, id: number) => {
  return {
    ...state,
    tasks: state.tasks.filter((old) => old.id !== id),
  }
}

export const store = create<
  Store,
  [['zustand/devtools', never], ['zustand/persist', Store]]
>(
  devtools(
    persist(
      (set): Store => {
        return {
          tasks: [],
          addTask: (task: string) => {
            toast('Task added!!')
            return set((state: Store) => add(state, task))
          },
          updateTask: (task: Task) => {
            toast(`Task ${task.id} updated!!`)
            return set((state) => update(state, task))
          },
          removeTask: (id: number) => {
            toast(`Task ${id} removed!!`)
            return set((state) => remove(state, id))
          },
        }
      },
      {
        name: KEY_STORAGE,
      }
    )
  )
)
