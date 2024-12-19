"use client"
import React from 'react'
import Link from 'next/link';

export const Card = ({title, price,image , originalPrice,id}) => {

    const formatPrice = (amount) => {
        return amount.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' }).replace(',00', '');
    };

    return (
        <>
            <Link href={`/productos/${id}`}>
            <div className='flex flex-col justify-between gap-3 p-2 items-center max-h-72 h-72 bg-white border text-letra border-gray-100 rounded-lg shadow-md group hover:cursor-pointer'>
                <h2 className='text-sm line-clamp-1 text-center'>{title}</h2>
                <div className='h-1/2'><img className='h-full w-full object-contain group-hover:scale-105' src={image}></img></div>
                <div>
                {originalPrice ? <p className='line-through text-sm opacity-80'>{formatPrice(originalPrice)}</p> : <p></p>}
                <p className='text-lg font-semibold'>{formatPrice(price)}</p>
                </div>
            </div>
            </Link>
        </>
    )
}
