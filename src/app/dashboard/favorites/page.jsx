"use client"
import { useContext } from "react"
import { CarritoContext } from "@/context/CarritoContext"
import { CardCart } from "@/components/CardCart";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Link from 'next/link';


export default function Favorites() {

    const { favorites, deleteFavorites, agregarAlCarrito,setFavorites } = useContext(CarritoContext);

    const handleAddCart = () => {
        favorites.forEach((producto) => agregarAlCarrito(producto))
        setFavorites([]);
    };

    return (
        <article id="gradient" className="flex flex-col h-screen w-screen min-w-96 gap-10 items-center relative">
            <Link className='absolute top-10 left-10' href={"/dashboard"}><KeyboardArrowLeftIcon sx={{ fontSize: 50 }}/></Link>
            <h2 className="font-bold text-xl mt-20">Favorites</h2>
            {favorites.length > 0 && <button className="xl:absolute top-[50%] right-40 bg-primary text-letra py-1 px-2 w-fit self-center rounded shadow-md" onClick={handleAddCart}>Add favorites to cart</button>}

            {favorites.length > 0 ? <div className="flex flex-col bg-white w-fit rounded-md shadow-lg gap-2 mx-5">
                {favorites.map((producto) => <CardCart key={producto.id} imagen={producto.image} title={producto.title} id={producto.id} price={producto.price} deleteCart={deleteFavorites}/>)}
            </div>: <p className="font-bold text-lg px-20">Your favorites is empty</p>}
        </article>
    )
}