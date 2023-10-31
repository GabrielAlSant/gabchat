'use client'

import { postData } from "../action"
import { useRef } from 'react';

export default function Form(){
    const formnull = useRef<HTMLFormElement>(null);
    return (
        <form ref={formnull} action={async (formData)=>{
            await postData(formData);
            formnull.current?.reset()
        }}>
            <div>
                <input  name='message' placeholder="Type your message"></input>
        <button type="submit">Send</button>
             </div>
        </form>
    )
}