import React from "react";
import ImgApropos from '../images/img_apropos.png'

function apropos(){
    return(
        <div className="my-28 w-full flex flex-col gap-10 px-8 py-0">
            <h1 className="text-3xl text-indigo-900 text-center">A propos</h1>
            <div className="flex flex-row w-full gap-10">
                <div className="flex flex-col gap-10 ml-6 mt-24">
                    <h2 className="text-fuchsia-800 text-xl">Découvrez Wommate, votre partenaire idéal pour la réussite professionnelle !</h2>
                    <p className="text-gray-600 font-thin">
                        Nous sommes une entreprise spécialisée dans la formation et l'accompagnement sur
                        mesure des <strong>chercheurs d'emploi</strong>, des <strong>entrepreneurs et futurs entrepreneurs</strong>, ainsi
                        que des <strong>petites et moyennes entreprises</strong>. Explorez nos offres variées, comprenant
                        une vaste gamme de ressources, de conseils et de formations adaptées à vos besoins.
                        N'hésitez pas à nous contacter dès maintenant pour bénéficier de nos services. 
                        Faites un pas vers l'excellence et laissez-nous vous aider à réaliser vos objectifs
                        professionnels.
                    </p>
                    <button className="text-fuchsia-900 border border-black border-2 
                        shadow-md shadow-fuchsia-900 p-2 text-xl w-40 rounded-full 
                        hover:bg-fuchsia-900 hover:text-white duration-300">
                            <a href="#services">Nos services</a>
                    </button>
                </div>
                <img className="w-1/2 h-1/2" src={ImgApropos} alt="A propos" />
            </div>
        </div>
    )
}


export default apropos