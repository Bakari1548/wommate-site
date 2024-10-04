import React from "react";
import ImgApropos from '../../assets/images/img_apropos.png'

function apropos(){
    return(
        <div className="my-24 w-full flex flex-col gap-16 px-8">
            <h1 className="text-3xl text-indigo-900 text-center font-semibold" id="apropos" data-aos="zoom-in-up">A propos</h1>
            <div className="flex flex-row w-full gap-10">
                <div className="flex flex-col gap-10 ml-6 mt-24" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <h2 className="text-fuchsia-600 text-xl font-semibold">Découvrez Wommate, votre partenaire idéal pour la réussite professionnelle !</h2>
                    <p className="text-gray-600 font-normal">
                        Nous sommes une entreprise spécialisée dans la formation et l'accompagnement sur
                        mesure des <strong>chercheurs d'emploi</strong>, des <strong>entrepreneurs et futurs entrepreneurs</strong>, ainsi
                        que des <strong>petites et moyennes entreprises</strong>. Explorez nos offres variées, comprenant
                        une vaste gamme de ressources, de conseils et de formations adaptées à vos besoins.
                        N'hésitez pas à nous contacter dès maintenant pour bénéficier de nos services. 
                        Faites un pas vers l'excellence et laissez-nous vous aider à réaliser vos objectifs
                        professionnels.
                    </p>
                    <button className="text-fuchsia-600 border-black border-2 
                        shadow-md shadow-fuchsia-800 p-2 text-xl w-40 rounded-full 
                        hover:bg-fuchsia-600 hover:text-white duration-300">
                            <a href="#services">Nos services</a>
                    </button>
                </div>
                <img className="w-1/2 h-1/2" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" src={ImgApropos} alt="A propos" />
            </div>
        </div>
    )
}


export default apropos