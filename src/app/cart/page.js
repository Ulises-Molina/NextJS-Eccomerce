"use client"
import { useContext } from "react"
import { CarritoContext } from "@/context/CarritoContext"
import { CardCart } from "@/components/CardCart";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Link from 'next/link';

export default function Cart() {
    
    const { cart, deleteCart } = useContext(CarritoContext);

    const priceProducts = cart.reduce((total, producto) => total + producto.price, 0);
    const priceTaxes = 2.50;

    return (
        <main id="gradient" className="h-screen w-screen flex justify-evenly pt-40">
            <Link className='absolute top-10 left-10' href={"/"}><KeyboardArrowLeftIcon sx={{ fontSize: 50 }}/></Link>
        <div className="flex flex-col bg-white h-fit rounded-md shadow-lg gap-2">
        {cart.length > 0 ? cart.map((producto) => 
            <CardCart key={producto.id} imagen={producto.image} title={producto.title} id={producto.id} price={producto.price} deleteCart={deleteCart}/>):
            <p className="font-bold text-lg px-20">Your cart is empty</p>}
        </div>
        <div className="flex flex-col bg-white w-fit h-fit gap-3 py-5 rounded-md shadow-lg">
            <p className="font-bold text-lg px-20">Purchase summary</p>
            <div className="flex flex-row justify-between px-4">
                <p>Products ({cart.length})</p>
                <p>$ {(priceProducts).toFixed(2)}</p>
            </div>
            <div className="flex flex-row justify-between px-4">
                <p>Taxes</p>
                <p>$ {priceTaxes}</p>
            </div>
            <div className="flex flex-row justify-between px-4">
                <p className="font-bold">Total</p>
                <p className="font-bold">$ {(priceProducts + priceTaxes).toFixed(2)}</p>
            </div>
            <button className="bg-primary text-letra py-1 w-[45%] self-center rounded shadow-md">Buy</button>
        </div>
        </main>
    )
}