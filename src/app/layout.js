import "./globals.css";
import { ProductosProvider } from "@/context/ProductosProvider";
import { CarritoProvider } from "@/context/CarritoProvider";
import { Montserrat } from 'next/font/google'


const geist = Montserrat({
  subsets: ['latin'],
  weight: '400'
})

export const metadata = {
  title: "E-Commerce NextJS",
  description: "Eccomerce creado con NextJS",
};

export default function RootLayout({ children }) {
  return (
    <ProductosProvider>
    <CarritoProvider> 
    <html lang="en" className={geist.className}>
    <body className={`font-montserrat ${geist.className}`}>
        {children}
      </body>
    </html>
    </CarritoProvider>
    </ProductosProvider>
  );
}
