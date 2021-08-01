import React, { useState } from 'react'
import MinigameBanner1 from '../../images/gameBanner/minigame_banner_1.png'
import MinigameBanner2 from '../../images/gameBanner/minigame_banner_2.png'
import MinigameBanner3 from '../../images/gameBanner/minigame_banner_3.png'
import MinigameBanner4 from '../../images/gameBanner/minigame_banner_4.png'

const MinigameBanner = () => {

    const cardClass = "relative flex justify-end w-620px h-184px border border-gray-afafaf rounded-lg shadow-plain1 hover:shadow-md transition bg-gradient-to-br from-white via-white to-gray-500 cursor-pointer border border-gray-afafaf"
    const cardSelectedClass = "relative flex justify-end items-start w-620px h-184px border border-gray-afafaf rounded-lg shadow-lg transition bg-gradient-to-r from-blue-cardGradLight to-blue-cardGradDark cursor-pointer"

    const [selectedTab, setSelectedTab] = useState()

    const gamesArray = [
        { id: 0, background: MinigameBanner1, color: "bg-purple-d03ab7", btnText: "게임시작", class: "bg-opacity-25" },
        { id: 1, background: MinigameBanner2, color: "bg-blue-r77a4e0", btnText: "게임시작", class: "bg-opacity-25" },
        { id: 2, background: MinigameBanner3, color: "bg-orange-e39e90", btnText: "게임시작", class: "bg-opacity-25" },
        { id: 3, background: MinigameBanner4, color: "bg-green-r7bd26a", btnText: "게임시작", class: "bg-opacity-25" }
    ];

    function CardList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                className={selectedTab === item.id ? cardSelectedClass : cardClass} 
                onMouseEnter={() => setSelectedTab(item.id)}
                onMouseLeave={() => setSelectedTab(false)}
            >
                <img src={item.background} alt="background" />
                <div className={`absolute left-0 bottom-0 ml-20px mb-20px w-115px h-34px rounded-full flex items-center justify-center text-white font-spoqa text-14px font-bold ${item.color} ${selectedTab === item.id ? "shadow-plain3" : item.class}`}>{item.btnText}</div>
            </button>
        ));
    }

    return (
        <div className="h-384px grid gap-0 grid-cols-2 gap-20px">
            <CardList items={gamesArray} />
        </div>
    )
}

export default MinigameBanner
