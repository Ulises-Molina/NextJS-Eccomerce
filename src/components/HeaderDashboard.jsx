import React from 'react'
import { useSession } from 'next-auth/react'
import { useContext } from 'react'
import { ProductosContext } from '../context/ProductosContext'
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Badge from '@mui/material/Badge';
import Link from 'next/link';
import { CarritoContext } from '../context/CarritoContext'

export const HeaderDashboard = ({closeSession}) => {

    const {data: session} = useSession();

    const { handleChange } = useContext(ProductosContext);
    const { favorites, cart} = useContext(CarritoContext);

    return (
        <header className='w-screen min-w-96 sticky top-0 h-16 flex justify-between items-center bg-primary lg:px-8 text-letra z-20'>
            <img src='/nextjs_logo.svg' className='w-16 h-16'></img>
            <input type='text' placeholder='Search products...' className='w-1/6 min-w-32 h-8 xl:ml-72 px-3 rounded-lg text-sm bg-primary border border-letra placeholder:text-letra self-center place-self-center' onChange={(e) => handleChange(e) }></input>
            <div className='flex gap-4 justify-center items-center '>
            {session && <p className='text-md hidden lg:block'>Welcome, <b>{session.user.name}</b></p>}

            <Link href='/dashboard/cart'>
            <IconButton aria-label="cart">
            <Badge badgeContent={cart.length} color="primary">
                <ShoppingCartIcon/>
            </Badge>
            </IconButton>
            </Link>

            <Link href='/dashboard/favorites'>
            <IconButton aria-label="cart">
            <Badge badgeContent={favorites.length} color="primary">
                <FavoriteIcon/>
            </Badge>
            </IconButton>
            </Link>

            <button className='text-xs lg:text-md hover:cursor-pointer border border-letra text-black px-2 py-1 rounded ' onClick={closeSession}>Log out</button>
            </div>
        </header>
    )
}
