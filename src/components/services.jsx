import React from "react";
import IconeOk from '../images/icone_ok.png'
import IconeCafe from '../images/icone_cafe.png'
import IconeEtoile from '../images/icone_etoile.png'
import IconePuzzle from '../images/icone_puzzle.png'



const services = () => {
    return (
        <div>
            <h1 className="text-3xl text-indigo-900 text-center mb-16 font-semibold aos-init aos-animate" data-aos="zoom-in-up" id="services">Nos Services</h1>
            <div className="grid grid-cols-2 grid-rows-2 mx-10">
                <div className="mx-10 border border-gray-300 my-4 p-8 rounded-lg flex flex-col gap-8 hover:shadow-lg" data-aos="fade-up">
                    <div className="flex flex-row gap-4 ">
                        <img src={IconeOk} className="w-14 h-14" alt="Formation" />
                        <h3 className="font-bold text-xl text-fuchsia-600 mt-4">Formation qualifiante et personnalisée</h3>
                    </div>
                    <p className="text-indigo-900 text-xs">
                        Boostez votre carrière grâce à nos formations qualifiantes et
                        personnalisées ! Que vous souhaitiez vous spécialiser dans le
                        développement web, le marketing digital ou l'entrepreneuriat,
                        nous possédons l'expertise et les outils nécessaires pour vous
                        propulser vers le succès. Nos programmes vous préparent à
                        ffronter le monde professionnel et à acquérir les compétences
                        qui vous démarqueront. Prêt à aller plus loin ? Cliquez sur
                        "Voir plus pour" découvrir tous les détails de nos formations
                        et prendre le contrôle de votre avenir professionnel dès maintenant !
                    </p>
                </div>
                <div className="mx-10 border border-gray-300 my-4 p-8 rounded-lg flex flex-col gap-8  hover:shadow-lg" data-aos="fade-down">
                    <div className="flex flex-row gap-4 ">
                        <img src={IconeEtoile} className="w-14 h-14" alt="Formation" />
                        <h3 className="font-bold text-xl text-fuchsia-600 mt-4">Accompagnement jeunes porteurs de projets</h3>
                    </div>
                    <p className="text-indigo-900 text-xs">
                        Développez vos idées et concrétisez vos projets grâce à notre
                        accompagnement personnalisé pour les jeunes entrepreneurs !
                        Que vous ayez une vision novatrice dans le domaine de la
                        technologie, des arts ou des services, nous avons l'expertise
                        et les ressources nécessaires pour vous aider à réussir.
                        Notre programme vous prépare à relever les défis du monde des
                        affaires et à acquérir les compétences qui feront de vous un
                        leader éclairé. Prêt à passer à l'étape suivante ? Cliquez
                        sur "Voir plus" pour découvrir tous les détails de notre
                        accompagnement et prendre le contrôle de votre avenir
                        professionnel dès maintenant !
                    </p>
                </div>
                <div className="mx-10 border border-gray-300 my-4 p-8 rounded-lg flex flex-col gap-8  hover:shadow-lg" data-aos="fade-left">
                    <div className="flex flex-row gap-4 ">
                        <img src={IconePuzzle} className="w-14 h-14" alt="Formation" />
                        <h3 className="font-bold text-xl text-fuchsia-600 mt-4">Accompagnement des entreprises</h3>
                    </div>
                    <p className="text-indigo-900 text-xs">
                        Boostez votre entreprise grâce à notre accompagnement personnalisé.
                        Que vous ayez besoin de conseils stratégiques, de consultations
                        professionnelles ou de solutions informatiques sur mesure, nous
                        sommes là pour vous aider. Notre équipe possède l'expertise
                        nécessaire pour répondre à vos besoins spécifiques. Que ce soit
                        pour optimiser vos processus internes, améliorer votre présence
                        en ligne ou développer des applications sur mesure, nous sommes
                        prêts à vous accompagner à chaque étape de votre croissance.
                        Découvrez tous les détails de notre offre d'accompagnement et
                        prenez le contrôle de l'avenir de votre entreprise dès
                        maintenant !
                    </p>
                </div>
                <div className="mx-10 border border-gray-300 my-4 p-8 rounded-lg flex flex-col gap-8  hover:shadow-lg" data-aos="fade-right">
                    <div className="flex flex-row gap-4 ">
                        <img src={IconeCafe} className="w-14 h-14" alt="Formation" />
                        <h3 className="font-bold text-xl text-fuchsia-600 mt-4">Formation courte durée</h3>
                    </div>
                    <p className="text-indigo-900 text-xs">
                        Que vous cherchiez à acquérir de nouvelles compétences
                        professionnelles ou à vous perfectionner dans un domaine spécifique,
                        nos formations courtes sont là pour répondre à vos besoins.
                        En quelques semaines ou mois, vous pouvez développer des compétences
                        concrètes et pratiques qui auront un impact immédiat sur votre
                        carrière. Que ce soit dans le domaine du développement web, du
                        marketing digital ou de l'entrepreneuriat, nos programmes sont conçus
                        pour vous fournir les connaissances et les outils nécessaires pour
                        réussir. Ne laissez pas le temps être un obstacle, investissez dans
                        votre avenir dès maintenant en découvrant tous les détails de nos
                        formations courtes et en faisant le premier pas vers une nouvelle
                        opportunité professionnelle !
                    </p>
                </div>
            </div>
        </div>
    )
}

export default services