"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useContext } from 'react';
import { CarritoContext } from '@/context/CarritoContext';

export const Card = ({title, price,image,id,rate,count,producto}) => {

    const { isProductInFavorites, addFavorites, deleteFavorites } = useContext(CarritoContext);

    const handleAddFavorites = () => {
        addFavorites(producto);
    };

    const handleDeleteFavorites = () => {
        deleteFavorites(id);
    };

    return (
        <>
            
            <div className='flex flex-col min-w-56 gap-8 p-2 max-h-96 h-80 bg-white border text-letra border-gray-100 rounded-lg shadow-md group'>
                <div className='flex justify-between gap-2'>
                    <h2 className='text-sm line-clamp-1 text-center'>{title}</h2>
                    {isProductInFavorites(producto) ? <FavoriteIcon fontSize='small' color='error' className='hover:cursor-pointer' onClick={handleDeleteFavorites}/>:
                    <FavoriteBorderIcon fontSize='small' className='hover:cursor-pointer' onClick={handleAddFavorites}/>}
                </div>
                <Link href={`/products/${id}`} className='h-1/2'><Image className='w-full h-full object-contain group-hover:scale-105 hover:cursor-pointer' src={image} alt='Imagen de producto' width={200} height={100}></Image></Link>
                <div>
                    <Link href={`/products/${id}`} className='flex gap-2 hover:cursor-pointer'>
                        <Image src='/icons8-estrella-48.png' alt='Fav' width={25} height={10}></Image>
                        <p className='text-sm mt-1'>{rate}</p>
                        <p className='text-sm mt-1'>({count})</p>
                    </Link>
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
