import {AddTask, ListTask} from '../components'

export default function Home() {
  return (
    <main className='w-screen h-screen flex p-10 gap-x-5'>
      <section className='p-5 shrink-0 w-80 h-60 rounded-lg shadow-lg'>
        <h1 className='text-3xl font-bold mb-10'>Add Task</h1>
        <AddTask />
      </section>
      <section className='p-5 flex-1'>
        <h1 className='text-3xl font-bold mb-10'>Tasks</h1>
        <ListTask />
      </section>
    </main>
  )
}
