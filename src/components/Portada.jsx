import React from 'react'

export const Portada = () => {
    return (
        <div className="w-screen min-w-96 h-[40vh] bg-primary flex justify-center relative">
        <img className="w-[60%] lg:w-[50%] h-full object-cover" src="/portada.png" alt="Portada">
        </img>
        <div id='gradient' className='w-screen absolute -bottom-6 xl:-bottom-20  h-[10vh] min-w-96'></div>
        </div>
    )
}

export const PortadaDashboard = () => {
    return (
        <div className="w-screen min-w-96 h-[40vh] bg-primary flex justify-center relative">
        <img className="w-[60%] lg:w-[25%] h-[125%] object-cover absolute top-12 z-20" src="/remera.png" alt="Portada">
        </img>
        <div id='gradient' className='w-screen absolute -bottom-6 xl:-bottom-20  h-[10vh] min-w-96'></div>
        </div>
    )
}