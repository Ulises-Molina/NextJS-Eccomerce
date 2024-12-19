import "./globals.css";
import { ProductosProvider } from "@/context/ProductosProvider";

export const metadata = {
  title: "E-Commerce NextJS",
  description: "Eccomerce creado con NextJS",
};

export default function RootLayout({ children }) {
  return (
    <ProductosProvider>
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
    </ProductosProvider>
  );
}
