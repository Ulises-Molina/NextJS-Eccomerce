"use client";
import { useContext} from "react";
import { HeaderDashboard } from "@/components/HeaderDashboard";
import { ProductosContext } from "@/context/ProductosContext";
import { PortadaDashboard } from "@/components/Portada";
import { CardDashboard } from "@/components/CardDashboard";
import { signOut } from "next-auth/react";



export default function Dashboard() {

  const { productos , busqueda , isLoading} = useContext(ProductosContext);
  const closeSession = () => signOut();

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
    <HeaderDashboard closeSession={closeSession}/>
    <PortadaDashboard/>
    <div className="grid lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 grid-cols-1 md:grid-cols-3 gap-1 mx-20 mt-32 mb-32 justify-center">
    {isLoading ? <p className="col-span-6 mt-20 text-lg">Loading products...</p> : 
    productosFiltrados.length > 0 ? productosFiltrados.map((producto) => (
      <CardDashboard
        producto={producto}
        key={producto.id}
        id={producto.id}
        title={producto.title}
        price={producto.price}
        image={producto.image}
        rate={producto.rating.rate}
        count={producto.rating.count}
      />
    )) :
    <div className="col-span-6 mt-20"><p>No se ha encontrado ningun producto relacionado con tu busqueda</p></div>}
    </div>
    </>
  );
}