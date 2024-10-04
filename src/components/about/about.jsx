import React from "react";
import Oumar from '../../assets/images/oumar.jpg'
import Maimouna from '../../assets/images/maimouna.png'
import Libscode from '../../assets/images/libscode.png'


function about() {
    return (
        <div className="flex flex-row gap-10 bg-gray-100 px-6 py-10">
            <div className="flex flex-col gap-8 w-1/2 p-2 my-10" data-aos="zoom-in-down">
                <h4 className="text-xl  text-fuchsia-800 text-center font-semibold" data-aos="zoom-in-up" data-aos-duration="500">Notre mission</h4>
                <p className="mx-4">
                    Wommate accélère la transition vers le numérique. Notre mission est d'accompagner
                    toute personne souhaitant acquérir des compétences dans les métiers du numérique
                    afin d'être apte a affronter le monde professionnel, ou digitaliser son entreprise,
                    que ce soit au stade de l'idéation ou déjà en cours de développement.
                </p>
            </div>
            <div className="flex flex-col gap-5 my-6">
                <h4 className="text-xl text-fuchsia-800 text-center font-semibold" data-aos="zoom-in-up" data-aos-duration="500">Notre équipe</h4>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col m-6 justify-between" data-aos="fade-right" data-aos-anchor-placement="bottom-bottom">
                        <img src={Oumar} className="w-24 mx-auto rounded-full" alt="Oumar  DIAGNE" />
                        <p className="font-semibold text-base text-center">Oumar DIAGNE</p>
                        <p className="text-sm text-center text-indigo-900">Développeur web IOT, ingénieur SI</p>
                    </div>
                    <div className="flex flex-col m-6" data-aos="fade-left" data-aos-anchor-placement="bottom-bottom">
                        <img src={Maimouna} className="w-24 h-24 object-cover mx-auto rounded-full" alt="Maimouna DIALLO" />
                        <p className="font-semibold text-base text-center">Maimouna DIALLO</p>
                        <p className="text-sm text-center text-indigo-900">Développeur web, coach formatrice</p>
                    </div>
                    <div className="flex flex-col m-6 justify-center" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                        <img src={Libscode} className="w-24 h-24 object-cover mx-auto rounded-full" alt="Libasse THIAM" />
                        <p className="font-semibold text-base text-center">Libasse THIAM</p>
                        <p className="text-sm text-center text-indigo-900">Développeur web, ingénieur SI</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default about