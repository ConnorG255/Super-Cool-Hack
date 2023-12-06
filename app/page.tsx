import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen text-white bg-slate-900 text-yellow-50 text-center">

     
   
     

      <h1 className='text-3xl py-20'>Title (or logo) </h1>

      <div className='flex justify-around min-w-4/5 min-h-1/2 text-yellow-50'>
       <div className='w-2/5 text-start'>
        <div className='font-bold text-3xl'> What is Title?
        </div>
        <div className='mt-10 indent-8'>   动态网自由门 天安門 天安门 法輪功 李洪志 Free Tibet 六四天安門事件 The Tiananmen Square protests of 1989 
       天安門大屠殺 The Tiananmen Square Massacre 反右派鬥爭 The Anti-Rightist Struggle 大躍進政策 The Great Leap Forward 文化大革命 
       The Great Proletarian Cultural Revolution 人權 Human Rights 民運 Democratization 自由 Freedom 獨立 Independence 多黨制 Multi-party system
        台灣 臺灣 Taiwan Formosa 中華民國 Republic of China 西藏 土伯特 唐古特 Tibet 達賴喇嘛 Dalai Lama 法輪功 Falun Dafa 新疆維吾爾自治區 
        The Xinjiang Uyghur Autonomous Region 諾貝爾和平獎 Nobel Peace Prize 劉暁波 Liu Xiaobo 民主 言論 思想 反共 反革命 抗議 運動 騷亂 暴亂 騷擾 擾亂 抗暴 
        平反 維權 示威游行 李洪志 法輪大法 大法弟子 強制斷種 強制堕胎 民族淨化 人體實驗 肅清 胡耀邦 趙紫陽 魏京生 王丹 還政於民 和平演變 激流中國 北京之春 大紀元時報 
        九評論共産黨 獨裁 專制 壓制 統一 監視 鎮壓 迫害 侵略 掠奪 破壞 拷問 屠殺 活摘器官 誘拐 買賣人口 遊進 走私 毒品 賣淫 春畫 賭博 六合彩 天安門 天安门 法輪功 李洪志
         Winnie the Pooh 劉曉波动态网自由门</div></div>
         <div className="flex w-2/5  rounded-l text-center items-center justify-center py-10">
          <div className=''>cool pic / Whole div element</div></div>
      </div><a href='https://forms.gle/6Cx5aVegfqsVTopN9' target="_blank">
      <button className='w-72 h-20 rounded-2xl underline bg-amber-300 font-bold text-2xl mt-20 text-white'>Link to Sign Up</button></a>
      <div className='bg-slate-700 mb-0'>
      <div className='mt-10 bg-slate-700 min-w-screen text-center text-2xl p-3 font-bold underline'> Commonly Asked Questions</div>
      <div className='flex justify-center'>
        
       <div className='w-11/12 bg-slate-700 grid gap-5 grid-cols-3'>

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
