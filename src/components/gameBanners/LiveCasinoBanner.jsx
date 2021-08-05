import React, { useState } from 'react'
import EvolutionBg from '../../images/cardBg/evo_bg.png'
import AsiaBg from '../../images/cardBg/asia_bg.png'
import PragmaticBg from '../../images/cardBg/prag_bg.png'
import DgBg from '../../images/cardBg/dg_bg.png'
import SexyBg from '../../images/cardBg/sexy_bg.png'
import BigBg from '../../images/cardBg/big_bg.png'
import WinnerBg from '../../images/cardBg/winner_bg.png'

const LiveCasinoBanner = () => {

    const cardClass = "relative flex justify-end w-300px h-185px border border-gray-afafaf rounded-lg shadow-plain1 hover:shadow-md transition bg-gradient-to-br from-white via-white to-gray-500 cursor-pointer border border-gray-afafaf"
    const cardSelectedClass = "relative flex justify-end items-start w-300px h-185px border border-gray-afafaf rounded-lg shadow-lg transition bg-gradient-to-r from-blue-cardGradLight to-blue-cardGradDark cursor-pointer"

    const [selectedTab, setSelectedTab] = useState()

    const gamesArray = [
        { id: 0, background: EvolutionBg, color: "bg-teal-r4eb2ba", btnText: "게임시작", class: "" },
        { id: 1, background: AsiaBg, color: "bg-blue-r3384ca", btnText: "게임시작", class: "" },
        { id: 2, background: PragmaticBg, color: "bg-purple-d03ab7", btnText: "게임시작", class: "" },
        { id: 3, background: DgBg, color: "bg-orange-e39e90", btnText: "게임시작", class: "" },
        { id: 4, background: SexyBg, color: "bg-red-db4a4a", btnText: "게임시작", class: "" },
        { id: 5, background: BigBg, color: "bg-yellow-e3ba3c", btnText: "게임시작", class: "" },
        { id: 6, background: WinnerBg, color: "bg-gray-b2b2b2", btnText: "준비중", class: "" },
        { id: 7, background: WinnerBg, color: "bg-gray-b2b2b2", btnText: "준비중", class: "" },
    ];

    function CardList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                className={selectedTab === item.id ? cardSelectedClass : cardClass} 
                onMouseEnter={item.id !== 6 && item.id !== 7 ? () => setSelectedTab(item.id) : () => console.log("clicked")}
                onMouseLeave={() => setSelectedTab(false)}
            >
                <img src={item.background} alt="background" />
                <div className={`absolute left-0 bottom-0 ml-20px mb-20px w-85px h-34px rounded-full flex items-center justify-center text-white font-spoqa text-14px font-bold ${item.color} ${selectedTab === item.id ? "shadow-plain3" : item.class}`}>{item.btnText}</div>
            </button>
        ));
    }

    return (
        <div className="grid grid-cols-4 w-full gap-x-20px gap-y-17px">
            <CardList items={gamesArray} />
        </div>
    )
}

export default LiveCasinoBanner
