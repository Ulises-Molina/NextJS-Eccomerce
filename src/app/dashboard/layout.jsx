"use client"
import "../globals.css";
import { ProductosProvider } from "@/context/ProductosProvider";
import { CarritoProvider } from "@/context/CarritoProvider";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
return (
    <ProductosProvider>
    <CarritoProvider>
    <html lang="en">
    <body>
        <SessionProvider>{children}</SessionProvider>
    </body>
    </html>
    </CarritoProvider>
    </ProductosProvider>
);
}