import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen text-white bg-slate-900 text-yellow-50 text-center">

     
   
     

      <h1 className='text-5xl py-20 font-semibold'> Super Cool Hackathon </h1>

      <div className='flex justify-around min-w-4/5 min-h-1/2 text-yellow-50'>
       <div className='w-2/5 text-start'>
        <div className='font-bold text-3xl'> What is Title?
        </div>
        <div className='mt-10 indent-8 text-lg'> Random discrpton that needs to be long I dont know if this site is ever going up</div></div>
         <div className="flex w-2/5  rounded-l text-center items-center justify-center py-10">
          <div className=''>cool pic / Whole div element</div></div>
      </div><a href='https://forms.gle/6Cx5aVegfqsVTopN9' target="_blank">
      <button className='w-72 h-20 rounded-2xl underline bg-amber-300 font-bold text-2xl mt-20 text-white'>Link to Sign Up</button></a>
      <div className='bg-slate-700 mb-0'>
      <div className='mt-14 bg-slate-700 min-w-screen text-center text-2xl p-3 font-bold underline '> Frequently Asked Questions</div>
      <div className='flex justify-center'>
        
       <div className='w-11/12 mt-5 bg-slate-700 grid gap-5 grid-cols-3'>

        {qanda("Will there be anything to eat there?", "Yes, free food, its FREE, YOU NEED THE FREE FOOD, it very good")}
        {qanda("when?", "idk man")}
        {qanda("why did she sell sea shells on the sea shore?", "You have to find that out yourself")}
        {qanda("Will there be anything to eat there?", "Yes, free food, its FREE, YOU NEED THE FREE FOOD, it very good")}
        {qanda("when?", "idk man")}
        {qanda("why did she sell sea shells on the sea shore?", "You have to find that out yourself")}
        

       </div></div></div>
    </main>
  )



  function qanda(question, answer) {
    return <div className='w-full h/20 bg-slate-500 flex flex-col justify-center text-center rounded-xl p-4'>
      <div className='text-xl font-medium'>{question} </div>
      <p className='text-md mt-5 '>{answer}</p>
    </div>
  }
}
