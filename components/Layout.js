import Head from "next/head"
import Image from "next/image"
import Link from "next/link"


export default function Layout({children, page}){
    return(

    <div className='bg-blue-50 text-center min-h-screen'>
        <Head>
            <title>{page}</title>
        </Head>
        <header className='container-lg'>
            <h1 className='text-5xl mb-2'>CRYPTO À SUIVRE</h1>
            <div className='inline-grid grid-cols-2 gap-x-10 p-4'>
               <Link href='/'>
                <button className='bg-blue-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300'>
                    Accueil
                </button>
               </Link> 
               <Link href='/about'>
                <button className='bg-blue-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300'>
                    À propos
                </button>
               </Link> 
            </div>
            <div>
                <Image src='/main.jpg' alt='crypto' 
                width='400' height= '25' 
                className='rounded-3xl object-cover' quality={100}/>
            </div>
        </header>
        <main className='pt-4 mx-20'>{children}</main>

        <footer className='p-10'>
        <Image src='/main.jpg' alt='crypto' 
                width='1000' height= '30' 
                className='rounded-3xl object-cover' quality={100}/>
                <ul className='pt-10 pb-4 flex justify-around'>
                    <li> À propos</li>
                    <li>Qui sommes-nous</li>
                    <li>ThomasDevWeb94</li>
                </ul>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Laboriosam beatae eius dolores ducimus labore modi impedit natus assumenda, 
                    fugiat qui laudantium obcaecati porro hic cum ab enim fugit dolore earum!
                </p>
        </footer>
        {/*comment modifier uniquement par exemple le p de cette page */}

        <style jsx>{`
            p{
                color:grey;
            }
        `}
        </style>

    </div>

    );
}