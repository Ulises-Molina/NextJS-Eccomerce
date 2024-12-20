"use client";
import { useContext} from "react";
import { Header } from "@/components/Header";
import { ProductosContext } from "@/context/ProductosContext";
import { Portada } from "@/components/Portada";
import { Card } from "../components/Card";



export default function Home() {

  const { productos , busqueda} = useContext(ProductosContext);

  const filtrarProductos = (productos) => {
    if (busqueda.length > 2) {
      return productos.filter((producto) => 
        producto.title.toLowerCase().includes(busqueda.toLowerCase())
      );
    }
    return productos;
  }

  const productosFiltrados = filtrarProductos(productos);


  return (
    <>
    <Header/>
    <Portada/>
    <div className="grid lg:grid-cols-6 grid-cols-1 gap-1 mx-20 mt-32 mb-32">
    { productosFiltrados.length > 0 ? productosFiltrados.map((producto) => (
      <Card
        key={producto.id}
        id={producto.id}
        title={producto.title}
        price={producto.price}
        image={producto.thumbnail}
        condition={producto.condition}
        originalPrice={producto.original_price}
      />
    )) :
    <div className="col-span-6"><p>No se ha encontrado ningun producto relacionado con tu busqueda</p></div>}
    </div>
    </>
  );
}
