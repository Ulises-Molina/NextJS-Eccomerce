"use client"
import { Button } from "@mui/material"
import { CarritoContext } from "@/context/CarritoContext"
import { useContext } from "react"

export const ButtonAdd = ({product}) => {

    const { agregarAlCarrito, deleteCart, isProductInCart  } = useContext(CarritoContext);


    const handleAgregarAlCarrito = () => {
        agregarAlCarrito(product)
    }

    const handleQuitarDelCarrito = () => {
        deleteCart(product.id)
    }

    const productoInCart = isProductInCart(product);

    return (
        <>
        {productoInCart ?
        <Button variant="contained" color="error" size="small" className='w-2/3 lg:w-2/3 xl:w-1/3 mt-10 self-center' onClick={() => handleQuitarDelCarrito()}>Remove from cart</Button>
        : 
        <Button variant="contained" color="success" size="small" className='w-2/3 lg:w-2/3 xl:w-1/3 mt-10 self-center' onClick={() => handleAgregarAlCarrito()}>Add to cart</Button>
        }
        </>
        
    )
}