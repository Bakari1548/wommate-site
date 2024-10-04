import React from "react";
import './hero.css'
import ImgHero from '../../assets/images/heros_img.png'

function hero() {
    return (
        <div className="container clip-path bg-indigo-950 flex flex-row w-full gap-10 px-14 py-14">
            <div className="flex flex-col gap-4">
                <h1 className="text-white text-6xl font-normal">Assure ton <br />
                    <span className="text-fuchsia-600 font-bold">devenir </span>professionelle</h1>
                <p className="text-white font-normal w-3/4">
                    Découvrez notre service unique avec deux offres exceptionnelles ! Avec Wommate,
                    vous avez le choix entre une offre complète de formation et d'accompagnement,
                    ou bien la possibilité de trouver des experts pour vous aider à digitaliser
                    votre entreprise.
                </p>
                <div className="flex flex-row gap-6">
                    <button className="px-3 py-1 rounded-full duration-500 text-indigo-950 text-lg font-normal bg-fuchsia-600 hover:bg-indigo-800 hover:text-white">Contacter</button>
                    <button className="px-3 py-1 rounded-full duration-500 text-white text-lg font-normal bg-indigo-800 border-2 border-fuchsia-600  hover:bg-fuchsia-600">Programmes</button>
                </div>
            </div>
            <img src={ImgHero} className="img-hero w-96 h-96" alt="Avenir professionel" />
        </div>
    )
}


export default hero