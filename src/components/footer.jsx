import React from 'react';
import Logo from '../images/logo_wommate.png'

const Footer = () => {
    return (
        <div>
            <div className='bg-gray-50' data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                <div className='flex flex-row gap-4 px-12 py-20 ml-4'>
                    <div className='flex flex-col mx-18 gap-4 p-4'>
                        <img src={Logo} className='w-1/3 h-1/2 object-cover' alt="Wommate" />
                        <p className='w-3/4'>
                            Ne manquez plus aucune mise à jour ! Inscrivez-vous à
                            notre newsletter dès maintenant.
                        </p>
                        <div className='flex flex-row gap-3'>
                            <input type="email" name="email" className='border-none shadow-md shadow-gray-300 rounded-2xl p-2 w-1/2' id="emailFooter" placeholder='Votre email' />
                            <input type="submit" value="S'inscrire" className='text-white px-2 py-2 shadow-md shadow-gray-300 bg-fuchsia-700 w-1/4 rounded-2xl' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <h3 className='text-lg font-semibold text-fuchsia-600'>OFFRES</h3>
                        <ul className='flex flex-col gap-4'>
                            <li>Porpositions de solutions numérique pour entreprise</li>
                            <li>Formation personnalisées selon vos beosins</li>
                            <li>Conseils et accompagnement</li>
                            <li>Formations et accompagnement pour jeunes chercheurs d'emploie</li>
                            <li>Formation et accompagnement pour jeunes entrepreuneurs</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <h3 className='text-lg font-semibold text-fuchsia-600'>CONTACTS</h3>
                        <ul className='flex flex-col gap-6'>
                            <li>wommateTech@example.com</li>
                            <li>+221 77 628 96 74</li>
                            <li>+221 78 290 25 12</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-6 mx-6 pr-20'>
                        <h3 className='text-lg font-semibold text-fuchsia-600'>RESEAUX</h3>
                        <div className="flex flex-row gap-4 text-fuchsia-600 text-left ">
                            <a href="https://www.facebook.com/profile.php?id=100095123988642" target='_blank' className="m-0 flex justify-end duration-500 hover:text-blue-800 hover:rotate-12">
                                <i className="bi bi-facebook text-3xl"></i>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100095123988642" target='_blank' className="m-0 flex justify-end duration-500 hover:text-blue-800 hover:rotate-12">
                                <i className="bi bi-instagram text-3xl"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/wommate/?viewAsMember=true" target='_blank' className="m-0 flex justify-end duration-500 hover:text-blue-800 hover:rotate-12">
                                <i className="bi bi-linkedin text-3xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-fuchsia-700 p-6 text-center text-white'>
                <p>© 2023 Wommate. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
