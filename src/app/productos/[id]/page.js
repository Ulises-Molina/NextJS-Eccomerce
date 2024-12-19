    import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
    import Link from 'next/link';
    export default async function ProductPage({ params }) {

    const res = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=deporte");
    const productos = await res.json();

    const product = productos.results.find((product) => product.id === params.id);

    const formatPrice = (amount) => {
        if(amount === null) return;
        return amount.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' }).replace(',00', '');
    };
    
    return (
        <main>
            <div id='gradient' className="h-screen w-screen flex justify-center items-center">
                <Link className='absolute top-10 left-10' href={"/"}><KeyboardArrowLeftIcon sx={{ fontSize: 50 }}/></Link>
                <div className="w-2/3 h-[75%] bg-white flex flex-row rounded-lg shadow-lg">
                    <div className="w-1/2 h-full flex justify-center items-center">
                        <img src={product.thumbnail} className="w-3/4 h-full object-contain" alt={product.title}></img>
                    </div>
                    <div className="w-1/2 h-full flex flex-col justify-center gap-20">
                        <h1 className="text-2xl font-bold">{product.title}</h1>
                        <div><h2 className="text-xl line-through opacity-80">{formatPrice(product.original_price)}</h2>
                        <h2 className="text-xl font-semibold">{formatPrice(product.price)}</h2></div>
                        <p>Vendedor: {product.seller.nickname}</p>
                        <p>Estado: {product.condition}</p>
                        <a href={product.permalink} target="_blank"><button className="w-1/3 h-10 bg-primary text-letra rounded-lg">Comprar</button></a>
                    </div>
                </div>
            </div>
        </main>
    );
}