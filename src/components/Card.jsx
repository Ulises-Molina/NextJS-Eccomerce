"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import { CarritoContext } from '@/context/CarritoContext';

export const Card = ({title, price,image,id,rate,count}) => {

    const showModal = () => {
        alert("You must log in to see this product")
    }


    return (
        <>
            
            <div className='flex flex-col min-w-56 gap-8 p-2 max-h-96 h-80 bg-white border text-letra border-gray-100 rounded-lg shadow-md group'>
                <div className='flex justify-between gap-2'>
                    <h2 className='text-sm line-clamp-1 text-center'>{title}</h2>
                </div>
                <div className='h-1/2' onClick={showModal}><Image className='w-full h-full object-contain group-hover:scale-105 hover:cursor-pointer' src={image} alt='Imagen de producto' width={200} height={100}></Image></div>
                <div>
                    <div className='flex gap-2'>
                        <Image src='/icons8-estrella-48.png' alt='Fav' width={25} height={10}></Image>
                        <p className='text-sm mt-1'>{rate}</p>
                        <p className='text-sm mt-1'>({count})</p>
                    </div>
                <Link href={`/products/${id}`} className='w-full flex gap-2 mt-2 relative hover:cursor-pointer'>
                    <p className='text-lg font-semibold ml-8'>{price}
                        </p>
                        <p className='text-xs font-normal absolute top-1'>US$</p>
                </Link>
                </div>
            </div>
        </>
    )
}