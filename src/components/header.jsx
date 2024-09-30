import React from "react"
import Logo from '../images/logo_wommate.png'
import { logDOM } from "@testing-library/react";


function header() {
   
    return(
        <header className="flex flex-row justify-between w-full sticky top-0 bg-white bg-opacity-90 z-50">
            <a href="#" className="ml-6 p-0 cursor-pointer">
                <img src={Logo} className="object-cover w-24 my-0 p-0 " />
            </a>
            <nav className="flex flex-row gap-4 text-lg mt-4 p-4">
                <a href="#" className="text-gray-600 duration-500  font-normal hover:text-fuchsia-800">Accueil</a>
                <a href="#partenaires" target="_top" className="text-gray-600 duration-500  font-normal hover:text-fuchsia-800">Partenaires</a>
                <a href="#apropos" className="text-gray-600 duration-500  font-normal hover:text-fuchsia-800">A propos</a>
                <a href="#services" className="text-gray-600 duration-500  font-normal hover:text-fuchsia-800">Services</a>
                <a href="#contact" className="text-gray-600 duration-500  font-normal hover:text-fuchsia-800">Contact</a>
            </nav>
            <div className="flex flex-row gap-6 text-blue-800 my-6 mr-6 text-left">
                <a href="https://www.facebook.com/profile.php?id=100095123988642" target='_blank' className="m-0 flex justify-end duration-500 hover:text-fuchsia-800 hover:rotate-12">
                    <i className="bi bi-facebook text-3xl"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100095123988642" target='_blank' className="m-0 flex justify-end duration-500 hover:text-fuchsia-800 hover:rotate-12">
                    <i className="bi bi-instagram text-3xl"></i>
                </a>
                <a href="https://www.linkedin.com/company/wommate/?viewAsMember=true" target='_blank' className="m-0 flex justify-end duration-500 hover:text-fuchsia-800 hover:rotate-12">
                    <i className="bi bi-linkedin text-3xl"></i>
                </a>
            </div>
        </header>
    )
}

export default header