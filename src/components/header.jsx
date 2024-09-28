import React from "react"
import Logo from '../images/logo_wommate.png'


function header() {
    return(
        <header className="flex flex-row justify-between w-full bg-slate-50 bg-opacity-30">
            <img src={Logo} className="w-1/12 h-24 mx-4 p-0 " />
            <nav className="flex flex-row gap-4 text-lg my-4 p-4">
                <a href="#" className="text-gray-500 duration-500  font-normal hover:text-fuchsia-800">Accueil</a>
                <a href="#" className="text-gray-500 duration-500  font-normal hover:text-fuchsia-800">Partenaires</a>
                <a href="#" className="text-gray-500 duration-500  font-normal hover:text-fuchsia-800">A propos</a>
                <a href="#" className="text-gray-500 duration-500  font-normal hover:text-fuchsia-800">Services</a>
                <a href="#" className="text-gray-500 duration-500  font-normal hover:text-fuchsia-800">Contact</a>
            </nav>
            <div className="flex flex-row gap-6 text-blue-800 my-6 mx-8 text-left ">
                <a href="https://facebook.com" className="m-0 flex justify-end duration-500 hover:text-fuchsia-800 hover:rotate-12">
                    <i className="bi bi-facebook text-3xl"></i>
                </a>
                <a href="https://www.instagram.com" className="m-0 flex justify-end duration-500 hover:text-fuchsia-800 hover:rotate-12">
                    <i className="bi bi-instagram text-3xl"></i>
                </a>
                <a href="https://linkedin.com" className="m-0 flex justify-end duration-500 hover:text-fuchsia-800 hover:rotate-12">
                    <i className="bi bi-linkedin text-3xl"></i>
                </a>
            </div>
        </header>
    )
}

export default header