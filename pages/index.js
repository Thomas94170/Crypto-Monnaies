import Link from "next/link";
import Layout from "../components/Layout";



export default function Home({res}) {
  console.log(res);
  return (
    <div>
      <Layout page = {'Crypto Watch - Accueil'}>
       <ul className="flex justify-around py-10">
         {res.map((crypto, index) =>(
           <li key={index} className='relative hover:shadow-md p-8
           border border-blue-300 rounded-3xl bg-blue-100 md:w-auto flex-1 mx-5'>

             <div>
             <a className='rounded-md'>
               <div className="text-center">
                 <img src={crypto.logo_url} alt={crypto.name}
                  className='w-20 h-20 mx-auto mb-6'/>
               </div>
               <h2 className='text-2xl mb-6 uppercase tracking-wider'>
                 {crypto.name}
               </h2>
               <h3 className='font-bold text-2xl mb-4'>
                 {parseFloat(crypto.price).toFixed(6)} $
               </h3>
               <p>1 jour: <span className='font-bold'>
                 {""}
                 {parseFloat(crypto["1d"].price_change_pct * 100).toFixed(2) + "%"}
                 </span>
                 {crypto['1d'].price_change_pct < 0 ? (
                   <span className= 'text-red-500'>&#x2798;</span>
                 ) : (
                  <span className= 'text-green-500'>&#x279A;</span> 
                 )}
                </p>
                <p>1 mois: <span className='font-bold'>
                 {""}
                 {parseFloat(crypto["30d"].price_change_pct * 100).toFixed(2) + "%"}
                 </span>
                 {crypto['30d'].price_change_pct < 0 ? (
                   <span className= 'text-red-500'>&#x2798;</span>
                 ) : (
                  <span className= 'text-green-500'>&#x279A;</span> 
                 )}
                </p>
                <p>1 an: <span className='font-bold'>
                 {""}
                 {parseFloat(crypto["365d"].price_change_pct * 100).toFixed(2) + "%"}
                 </span>
                 {crypto['365d'].price_change_pct < 0 ? (
                   <span className= 'text-red-500'>&#x2798;</span>
                 ) : (
                  <span className= 'text-green-500'>&#x279A;</span> 
                 )}
                </p>
              </a>
             </div>
           </li>
         ))}
       </ul>
      </Layout>
       
    </div>
  )
}

// rendu coté serveur
// ce n'est pas le client depuis son serveur qui fait la requete
//  c'est nous qui faisons la requete depuis notre serveur et qui lui envoyons directement le resultat 

export async function getStaticProps(context){
  try {
    const res = await fetch(
      "https://api.nomics.com/v1/currencies/ticker?key=7c4e15aae8080b4402222a3d8a932738023db374&ids=BTC,SHIB,XRP&interval=1d,30d,365d&convert=EUR&platform-currency=&per-page=100&page=1%22 ")
      .then((res) => res.json());

    return{
      props: {res}
    }

  } catch (err){
    console.error(err);
  }
}