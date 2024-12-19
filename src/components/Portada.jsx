import React from 'react'

export const Portada = () => {
    return (
        <div className="w-screen h-[40vh] bg-primary flex justify-center relative">
        <img className="w-[50%] h-full object-cover" src="/portada.png">
        </img>
        <div id='gradient' className='w-screen absolute -bottom-20 h-[10vh]'></div>
        </div>
    )
}
