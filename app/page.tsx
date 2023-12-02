import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen  bg-slate-900 text-center">
      <div className='min-w-screen bg-red-200 h-min-1/6 flex justify-between'>
        <div className="text-white text-lg font-bold">Title</div>


        <div className="space-x-4">
        
          <button className="text-white">About</button>
          <button className="text-white">Sign up</button>
        </div>
        </div>

      <h1 className='text-white text-3xl'>Title </h1>

      <div></div>

    </main>
  )
}
