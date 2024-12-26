"use client";
import React from 'react'
import { ProductosContext } from './ProductosContext'
import { useState, useEffect } from "react";

export const ProductosProvider = ({children}) => {

    const [productos, setProductos] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [isLoading, setIsLoading] = useState(true);

        const handleChange = (e) => {
            const value = e.target.value;
            setBusqueda(value);
        }            
    
        const obtenerProductos = async () => {
            try {
                const res = await fetch("/api.json");
                const data = await res.json();
                setProductos(data);
                console.log(data);
            } catch (err) {
                console.error("Error al obtener productos:", err);
            } finally {
                setIsLoading(false);
            }
        };
    
    
        useEffect(() => {
        obtenerProductos();
        }, []);

    return (
        <ProductosContext.Provider value={{productos, setProductos, handleChange, busqueda, isLoading}}>
            {children}
        </ProductosContext.Provider>
    )
}
