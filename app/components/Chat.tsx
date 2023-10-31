'use client'

import { useEffect, useRef, useState } from "react"
import { Image } from "next/dist/client/image-component"
import Pusher from 'pusher-js'

interface iAppProps {
    data: {
        User:{
            image: string | null,
            name: string | null
        }
        message: string
    }[]
}

export default function ChatComponent({data}: iAppProps){
    const [totalcoments, setTotalcoments] = useState(data)

    const messageEnd = useRef<HTMLInputElement>(null)

    var pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY as string, {
        cluster: 'sa1'
      });
  
      var channel = pusher.subscribe('chat');
      channel.bind('event', function(data: any) {
        const parsedComments = JSON.parse(data.message)

        setTotalcoments((prev) => [...prev, parsedComments])
      });

      const scrollbot = () =>{
        messageEnd.current?.scrollIntoView({
          behavior:'smooth'
        })
      }

      useEffect(()=>{
        scrollbot();
      },[totalcoments])

    return (
        <div>
            <div>
       {totalcoments.map((message, index)=>(
        <div key={index}>
            <div>
              <Image src={message.User.image as string} width={50} height={50} alt='profile'/>
              <p>{message.message}</p>
              <p>name: {message.User.name}</p>
            </div>
        </div>
       ))}
       <div ref={messageEnd}></div>
            </div>
        </div>
    )
}