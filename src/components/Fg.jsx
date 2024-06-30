import React, { useRef } from 'react'
import Card from './Card'

export default function Fg()  {
  const ref = useRef(null)
  
  const data=[

    {
      desc:"How far can you throw me?", 
      location:"👇",
      close:false,
      tag:{isopen : true, tagTitle : "Download Now",tagColor : "green"}

    },
    {
      desc:"Wanna tryna throw me?",
      location:"👇",
      close:false,
      tag:{isopen : true, tagTitle : "Download Now",tagColor : "green"}

    },
    {
      desc:"Now it's my turn",
      location:"👇",
      close:false,
      tag:{isopen : true, tagTitle : "Download Now",tagColor : "green"}

    },
  ];
  return (
    <div ref={ref}  className='fixed top-0 left-0 z-[3] w-full h-full flex flex-wrap gap-5'>
        {data.map((item,index) =>(
          <Card data={item}  reference = {ref}/>
        ))}
    </div>
  )
}
