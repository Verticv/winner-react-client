import React, { useState } from 'react'
import EvolutionBg from '../images/cardBg/evo_bg.png'
import AsiaBg from '../images/cardBg/asia_bg.png'
import PragmaticBg from '../images/cardBg/prag_bg.png'
import DgBg from '../images/cardBg/dream_bg.png'
import SexyBg from '../images/cardBg/sexy_bg.png'
import BigBg from '../images/cardBg/big_bg.png'
import WinnerBg from '../images/cardBg/winner_bg.png'

const Cards = () => {

    const cardClass = "w-300px h-185px border border-gray-afafaf rounded-lg shadow-plain1 hover:shadow-md transition bg-gradient-to-br from-white via-white to-gray-500 cursor-pointer border border-gray-afafaf"
    const cardSelectedClass = "w-300px h-185px border border-gray-afafaf rounded-lg shadow-lg transition bg-gradient-to-r from-blue-cardGradLight to-blue-cardGradDark cursor-pointer"

    const [selectedTab, setSelectedTab] = useState()

    const gamesArray = [
        { id: 0, background: EvolutionBg },
        { id: 1, background: AsiaBg },
        { id: 2, background: PragmaticBg },
        { id: 3, background: DgBg },
        { id: 4, background: SexyBg },
        { id: 5, background: BigBg },
        { id: 6, background: WinnerBg },
        { id: 7, background: WinnerBg },
    ];

    function CardList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                className={selectedTab === item.id ? cardSelectedClass : cardClass} 
                onClick={item.id !== 6 && item.id !== 7 ? () => setSelectedTab(item.id) : () => console.log("clicked")}
            >
                <img className="object-fill w-full h-full rounded-lg pl-5" src={item.background} alt="background" />
            </button>
        ));
    }

    return (
        <div className="grid grid-cols-4 w-full gap-3">
            <CardList items={gamesArray} />
        </div>
    )
}

export default Cards
