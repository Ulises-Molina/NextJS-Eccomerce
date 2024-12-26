import Image from 'next/image'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';


export const CardCart = ({imagen,title , id ,deleteCart, price }) => {
return (
    <div className='flex flex-row gap-5 p-2 pr-6 shadow bg-transparent justify-between px-8 max-w-[650px] lg:min-w-[650px]'> 
        <div className="h-32 max-h-36 max-w-32 flex justify-center"><Image src={imagen} alt="Producto" className='object-contain' width={80} height={70}></Image></div>
        <div className='flex flex-col gap-8 self-center w-[60%]'>
        <p className='line-clamp-1'>{title}</p>
        <p>$ {price}</p>
        </div>
        <DeleteIcon className='hover:cursor-pointer self-center' onClick={() => deleteCart(id)}/>
    </div>
)
}
