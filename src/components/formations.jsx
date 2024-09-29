import React from 'react';
import ImgMarketng from '../images/marketing.png'
import ImgDevWeb from '../images/dev_web.png'


const Formations = () => {
    return (
        <div className='flex flex-col gap-16 my-20'>
            <h1 className="text-3xl text-indigo-900 text-center font-semibold aos-init aos-animate" id="formations" data-aos="zoom-in-down">Formations disponibles</h1>
            <div className='flex flex-row gap-16 justify-center'>
                <div className='flex flex-col gap-3 rounded-t-2xl w-1/5 h-1/5 shadow-slate-400 shadow-inner p-3'>
                    <img src={ImgDevWeb} className='rounded-t-2xl h-1/6' alt="Developpement web" />
                    <h4 className='font-semibold text-lg text-indigo-800 px-2'>Développement Web</h4>
                    <p className='text-sm px-2'> 
                        Créer votre propre site web, trouver votre premier emploie,
                        ou bien développer votre propre bussiness en ligne.
                    </p>
                    <div className='flex justify-between mx-4'>
                        <button className='text-fuchsia-600 text-sm font-semibold'>Brochure ⬇</button>
                        <button className='text-white text-sm font-semibold bg-fuchsia-600 py-2 px-4 rounded-lg'>S'incrire</button>
                    </div>
                </div>
                <div className='flex flex-col gap-3 rounded-t-2xl w-1/5 h-1/5 shadow-slate-400 shadow-inner p-3'>
                    <img src={ImgMarketng} className='rounded-t-2xl h-1/6' alt="Marketing digital" />
                    <h4 className='font-semibold text-lg text-indigo-800 px-2'>Marketing digital</h4>
                    <p className='text-sm px-2'>
                        Devenez autonome en marketing digitale, apprenez à créer
                        des campagnes publicitaires, et à gérer vos réseaux sociaux.
                    </p>
                    <div className='flex justify-between mx-4'>
                        <button className='text-fuchsia-600 text-sm font-semibold'>Brochure ⬇</button>
                        <button className='text-white text-sm font-semibold bg-fuchsia-700 py-2 px-4 rounded-lg'>S'incrire</button>
                    </div>
                </div>
            </div>    
        </div>
    );
}

export default Formations;
