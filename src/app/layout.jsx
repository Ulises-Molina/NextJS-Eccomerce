import "./globals.css";
import { ProductosProvider } from "@/context/ProductosProvider";
import { CarritoProvider } from "@/context/CarritoProvider";



export const metadata = {
  title: "E-Commerce NextJS",
  description: "Eccomerce creado con NextJS",
};

export default function RootLayout({ children }) {
  return (
    <ProductosProvider>
    <CarritoProvider> 
    <html lang="en">
    <body>
        {children}
      </body>
    </html>
    </CarritoProvider>
    </ProductosProvider>
  );
}

