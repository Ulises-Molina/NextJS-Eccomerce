"use client"
import { useState, useEffect } from 'react'
import { CarritoContext } from './CarritoContext'

export const CarritoProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
        setCart(JSON.parse(storedCart));
        }
    }, []);

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const isProductInCart = (product) => {
        return cart.some((item) => item.id === product.id);
    };

    const isProductInFavorites= (product) => {
        return favorites.some((item) => item.id === product.id);
    };

    const agregarAlCarrito = (producto) => {
        setCart((prev) => [...prev, producto]);
    };

    const deleteCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const addFavorites = (product) => {
        setFavorites((prev) => [...prev, product]);
        console.log(favorites)
    };

    const deleteFavorites = (id) => {
        setFavorites((prev) => prev.filter((item) => item.id !== id));
    };



    return (
        <CarritoContext.Provider value={{ agregarAlCarrito, deleteCart,isProductInCart, cart, addFavorites, deleteFavorites, favorites, isProductInFavorites,setFavorites}}>
            {children}
        </CarritoContext.Provider>
    )
}
