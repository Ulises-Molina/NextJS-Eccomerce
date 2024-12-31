import React from 'react'
import { useContext } from 'react'
import { ProductosContext } from '../context/ProductosContext'
import Link from 'next/link';

export const Header = () => {

    const { handleChange } = useContext(ProductosContext);


    return (
        <header className='w-screen min-w-96 sticky top-0 h-16 flex justify-between items-center bg-primary px-8 text-letra z-20'>
            <img src='/nextjs_logo.svg' className='w-16 h-16'></img>
            <input type='text' placeholder='Search products...' className='w-1/6 min-w-32 h-8 px-3 rounded-lg text-sm bg-primary border border-letra placeholder:text-letra' onChange={(e) => handleChange(e) }></input>
            <Link href='/auth/login' className='hover:cursor-pointer border border-letra text-black px-4 py-1 rounded'>Log In</Link>
        </header>
    )
}

