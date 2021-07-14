import React, { useState } from 'react'
import EvolutionBg from '../images/evolution_bg.png'
import AsiaBg from '../images/asia_bg.png'
import PragmaticBg from '../images/pragmatic_bg.png'
import DgBg from '../images/dg_bg.png'
import SexyBg from '../images/sexy_bg.png'
import BigBg from '../images/big_bg.png'
import WinnerBg from '../images/winner_ready_bg.png'
import EvolutionLogo from '../images/evolution_logo.png'
import AsiaLogo from '../images/asia_logo.png'
import PragmaticLogo from '../images/pragmatic_logo.png'
import DGLogo from '../images/dg_logo.png'
import SexyLogo from '../images/sexy_logo.png'
import BigLogo from '../images/big_logo.png'
import WinnerLogo from '../images/winner_logo_gray.png'

const Cards = () => {

    const cardClass = "relative flex w-full h-56 rounded-lg shadow-lg hover:shadow-plain transition hover:bg-blue-100 cursor-pointer"
    const cardSelectedClass = "relative flex w-full h-56 rounded-lg shadow-lg hover:shadow-plain transition bg-blue-100 cursor-pointer border-2 border-blue-400"

    const [selectedTab, setSelectedTab] = useState()

    const gamesArray = [
        { id: 0, background: EvolutionBg, logo: EvolutionLogo, button: "게임시작", color: "bg-green-400" },
        { id: 1, background: AsiaBg, logo: AsiaLogo, button: "게임시작", color: "bg-blue-500" },
        { id: 2, background: PragmaticBg, logo: PragmaticLogo, button: "게임시작", color: "bg-pink-400" },
        { id: 3, background: DgBg, logo: DGLogo, button: "게임시작", color: "bg-red-300" },
        { id: 4, background: SexyBg, logo: SexyLogo, button: "게임시작", color: "bg-red-500" },
        { id: 5, background: BigBg, logo: BigLogo, button: "게임시작", color: "bg-yellow-400" },
        { id: 6, background: WinnerBg, logo: WinnerLogo, button: "준비중", color: "bg-gray-400" },
        { id: 7, background: WinnerBg, logo: WinnerLogo, button: "준비중", color: "bg-gray-400" },
    ];

    function CardList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                className={selectedTab === item.id ? cardSelectedClass : cardClass} 
                onClick={() => setSelectedTab(item.id)}
            >
                <img className="object-cover w-full h-full rounded-lg border" src={item.background} alt="background" />
                <img className="absolute top-0 ml-6 mt-6 w-1/4 " src={item.logo} alt="logo" />
                <button className={`absolute bottom-0 ml-6 mb-6 rounded-full w-28 h-12 shadow-md font-semibold text-white ${item.color}`}>{item.button}</button>
            </button>
        ));
    }

    return (
        <div className="grid grid-cols-4 py-14 w-full gap-4">
            <CardList items={gamesArray} />
        </div>
    )
}

export default Cards
