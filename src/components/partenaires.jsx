import React from "react";
import ImgPartenaire1 from '../images/imgPartenaire1.png'
// import ImgPartenaire2 from '../images/imgPartenaire2.png'
// import ImgPartenaire3 from '../images/imgPartenaire3.png'
// import ImgPartenaire4 from '../images/imgPartenaire4.png'
import ImgPartenaire5 from '../images/imgPartenaire5.png'

function partenaires() {
    return(
        <div className="mt-36 w-full">
            <h1 className="text-3xl text-indigo-900 text-center">Partenaires</h1>
            <div className="relative">
                <div>
                    <img src={ImgPartenaire1} alt="Partenaire" />
                    {/* <img src={ImgPartenaire2} alt="ODIA CORP" /> */}
                    {/* <img src={ImgPartenaire3} alt="Bellahijabe" /> */}
                    {/* <img src={ImgPartenaire4} alt="Miname Montre" /> */}
                    <img src={ImgPartenaire5} alt="Active Solution" />
                </div>
                <button className="absolute left-48"><i class="bi bi-chevron-left text-2xl font-bold text-fuchsia-800 px-1.5 py-0.5 border border-2  rounded-full border-fuchsia-800"></i></button>
                <button className="absolute right-48"><i className="bi text-2xl font-bold text-fuchsia-800 px-1.5 py-0.5 bi-chevron-right border border-2  rounded-full border-fuchsia-800"></i></button>
            </div>
        </div>
    )
}


export default partenaires