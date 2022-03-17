import Layout from "../components/Layout";



export default function About(){
    return(
        <Layout page='À propos'>
            <div>
            <h1 className='text-4xl'>À propos</h1> 
             <br/>
            <p>
                Ce projet a été réalisé dans le cadre de l'apprentissage du métier de développeur web.
                Ce projet a été réalisé avec Next.js et Tailwindcss.
                Next.js est le framework de React, Tailwindcss est un framework CSS permettant de construire rapidement
                des sites web modernes sans jamais quitter notre HTML. Je me suis servi de l'API de Nomics pour les cryptos monnaies.
                    
            </p>
            <br/>
            <div className='flex justify-between text-amber-300'>
            <a href="https://tailwindcss.com" rel = "noopener noreferrer" target="_blank"   >https://tailwindcss.com/</a>
            
            <a href="https://nextjs.org/" rel = "noopener noreferrer" target="_blank"  >https://nextjs.org/</a>

            <a href="https://nomics.com/" rel = "noopener noreferrer" target="_blank" >https://nomics.com/</a>
            </div>
            </div>
             
            <br/>
            
            
            
            

        </Layout>
      
    )
}