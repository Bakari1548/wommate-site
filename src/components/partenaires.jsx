import React from "react";
import ImgPartenaire1 from '../images/imgPartenaire1.png'
// import ImgPartenaire2 from '../images/imgPartenaire2.png'
// import ImgPartenaire3 from '../images/imgPartenaire3.png'
// import ImgPartenaire4 from '../images/imgPartenaire4.png'
import ImgPartenaire5 from '../images/imgPartenaire5.png'

function partenaires() {
    return(
        <div className="mt-36 w-full flex flex-col gap-20">
            <h1 className="text-3xl text-indigo-900 text-center font-semibold" id="partenaires" data-aos="zoom-in-up">Partenaires</h1>
            <div className="flex flex-row w1/4 mx-auto my-0 justify-center gap-10">
                <button><i className="bi bi-chevron-left text-2xl font-bold text-fuchsia-600 px-1.5 py-0.5 border-2 rounded-full border-fuchsia-800"></i></button>
                <div className="flex flex-row gap-20 justify-center mx-0 w-3/5">
                    <img src={ImgPartenaire1} className="w-2/12 h-2/12 rounded-full" alt="Partenaire" />
                    {/* <img src={ImgPartenaire2} alt="ODIA CORP" /> */}
                    {/* <img src={ImgPartenaire3} alt="Bellahijabe" /> */}
                    {/* <img src={ImgPartenaire4} alt="Miname Montre" /> */}
                    <img src={ImgPartenaire5} className="w-2/12 h-2/12 rounded-full" alt="Active Solution" />
                </div>
                <button><i className="bi text-2xl font-bold text-fuchsia-600 px-1.5 py-0.5 bi-chevron-right border-2 rounded-full border-fuchsia-800"></i></button>
            </div>
        </div>
    )
}


export default partenaires