import React from "react";
import ImgHero from '../images/heros_img.png'

function hero() {
    return(
        <div className="bg-indigo-950 flex flex-row w-full gap-10 px-14 py-10">
            <div className="flex flex-col gap-4">
              <h1 className="text-white text-6xl font-thin">Assure ton <br />
               <span className="text-fuchsia-700 font-bold">devenir </span>professionelle</h1>
               <p className="text-white font-thin w-3/4">
               Découvrez notre service unique avec deux offres exceptionnelles ! Avec Wommate,
                vous avez le choix entre une offre complète de formation et d'accompagnement, 
                ou bien la possibilité de trouver des experts pour vous aider à digitaliser 
                votre entreprise.
               </p>
            <div className="flex flex-row gap-6 ">
                <button className="w-1/5 p-1.5 rounded-full duration-500 text-indigo-950 text-xl font-normal bg-fuchsia-700 hover:bg-indigo-800 hover:text-white">Contacter</button>
                <button className="w-1/5 p-1.5 rounded-full duration-500 text-white text-xl font-thin bg-indigo-800 border-2 border border-fuchsia-800  hover:bg-fuchsia-800">Programmes</button>
            </div>
            </div>
            <img src={ImgHero} className="w-80 h-80" alt="Avenir professionel" />
        </div>
    )
}


export default hero