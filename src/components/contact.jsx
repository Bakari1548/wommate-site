import React from 'react';
import IconPhone from '../images/icone_phone.png'
import IconMessage from '../images/icone_message.png'
import IconLocalisation from '../images/icone_localisation.png'


const Contact = () => {
    return (
        <div className='flex flex-col gap-16 my-20'>
            <h1 className="text-3xl text-indigo-900 text-center font-semibold" id="contact" data-aos="zoom-in-down">Contact</h1>
                <div className='flex flex-row gap-20 mx-32' data-aos="fade-up">
                    <div className='flex flex-col w-1/2 my-6 gap-5'>
                        <h3 className='text-2xl text-fuchsia-600 font-semibold'>Contactez-nous</h3>
                        <p className='text-sm'>
                            Vous avez des questions ? Vous souhaitez en savoir plus sur nos formations ?
                            Vous avez besoin d'un devis ? N'hésitez pas à nous contacter, nous vous
                            répondrons dans les plus brefs délais !
                        </p>
                        <div className='flex flex-row text-slate-600'>
                            <img src={IconPhone} className='w-7 h-7' alt="Numero de telephone" />
                            <p>+221 77 628 96 74</p>
                        </div>
                        <div className='flex flex-row text-slate-600'>
                            <img src={IconMessage} className='w-7 h-7' alt="Numero de telephone" />
                            <p>contact@womatte.com</p>
                        </div>
                        <div className='flex flex-row text-slate-600'>
                            <img src={IconLocalisation} className='w-7 h-7' alt="Numero de telephone" />
                            <p>Thiés, Sénégal rue 10</p>
                        </div>
                    </div>
                    <div className='w-1/2 my-6 flex flex-col gap-5' data-aos="fade-down">
                        <h3 className='text-2xl text-fuchsia-600 font-semibold'>Nous envoyer un message</h3>
                        <form className='flex flex-col gap-5 mx-5 my-4'>
                            <div className='flex flex-col gap-5'>
                                <input type="text" name="name" placeholder='Prenom & nom' className='border border-gray-600 rounded-full px-4 py-1' id="nameInput" />
                                <input type="email" name="email" placeholder='contact@womatte.com' className='border border-gray-600 rounded-full px-4 py-1' id="enailInput" />
                                <textarea name="message" id="messageInput" placeholder='message' className='border border-gray-600 rounded-xl px-4 py-1'></textarea>
                            </div>
                            <input type="submit" value="Envoyer" className='text-white px-4 py-2 bg-fuchsia-700 w-1/4 rounded-2xl' />                    
                        </form>
                    </div>
                </div>
        </div>
    );
}

export default Contact;
