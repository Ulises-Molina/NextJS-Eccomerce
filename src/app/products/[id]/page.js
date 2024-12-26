import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Link from 'next/link';
import Image from 'next/image';
import { ButtonAdd } from '@/components/ButtonAdd';


    export default async function ProductPage({ params }) {

    const { id } = await params;

    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await res.json();

    //const res = await fetch("/api.json");
    //const products = await res.json();

    //const product = products.find((product) => product.id === id);
    
    return (
        <main>
            <div id='gradient' className="h-screen w-screen min-w-96 flex justify-center items-center">
                <Link className='absolute top-10 left-10' href={"/"}><KeyboardArrowLeftIcon sx={{ fontSize: 50 }}/></Link>
                <div className="w-2/3 min-w-[280px] h-fit lg:h-[60%] flex flex-col lg:flex-row items-center lg:items-start rounded-lg shadow-xl gap-8 border border-gray-400 mt-32 md:mt-72 lg:mt-10 pb-10 lg:pb-0">
                    <div className="w-full lg:w-1/2 h-full flex justify-center items-center p-10 bg-white rounded-lg">
                        <Image src={product.image}  width={450} height={450} className="w-3/4 h-full object-contain rounded-lg" alt={product.title}></Image>
                    </div>
                    <div className="w-full lg:w-1/2 h-full flex flex-col lg:justify-start gap-10 mt-10 bg-transparent px-5">
                        <h1 className="text-lg lg:text-2xl font-bold line-clamp-2">{product.title}</h1>
                        <div className='relative ml-10'>
                        <p className="text-sm lg:text-xl font-semibold">{product.price}</p>
                        <p className='text-sm lg:text-md absolute top-1 -left-10'>US$</p>
                        </div>
                        <div className='flex gap-2'>
                            <Image src={'/icons8-estrella-48.png'} alt='Fav' width={25} height={10} className=''></Image>
                            <p className="text-md mt-1">{product.rating.rate}</p>
                            <p className='text-md mt-1'>({product.rating.count})</p>
                        </div>
                        <p className="text-md pr-5 mt-10 line-clamp-4 self-center">{product.description}</p>
                        <ButtonAdd product={product}/>
                    </div>
                </div>
            </div>
        </main>
    );
}