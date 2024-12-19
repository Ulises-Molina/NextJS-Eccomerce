"use client";
import React from 'react'
import { ProductosContext } from './ProductosContext'
import { useState, useEffect } from "react";

export const ProductosProvider = ({children}) => {

    const [productos, setProductos] = useState([]);
    const [busqueda, setBusqueda] = useState("");

        const handleChange = (e) => {
            const value = e.target.value;
            setBusqueda(value);
        }            
    
        const obtenerProductos = async () => {
        const res = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=deporte");
        const data = await res.json();
        setProductos(data.results);
        };
    
    
        useEffect(() => {
        obtenerProductos();
        }, []);

    return (
        <ProductosContext.Provider value={{productos, setProductos, handleChange, busqueda}}>
            {children}
        </ProductosContext.Provider>
    )
}
