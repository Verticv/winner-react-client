import React, { useState } from 'react'
import KslotBanner from '../../images/navbarHover/kslot_banner.png'
import KslotBannerHighlight from '../../images/navbarHover/kslot_banner_highlight.png'

const SlotGameHover = ({setHoveredTab}) => {

    const [selectedGame, setSelectedGame] = useState()

    const gamesArray = [
        { id: 0, background: KslotBanner, highlight: KslotBannerHighlight, color: "bg-green-r7bd26a text-white shadow-plain4", btnText: "게임시작", class: "bg-opacity-25" }
    ];

    function GamesList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                className="relative w-305px h-206px" 
                onMouseEnter={() => setSelectedGame(item.id)} 
                onMouseLeave={() => setSelectedGame(false)}
            >
                <img className={`opacity-100 hover:opacity-0 w-305px h-206px object-cover object-left`} src={item.background} alt="game_image" />
                <img className={`opacity-0 hover:opacity-100 absolute top-0 transition transition-opacity transform duration-200 w-305px h-206px object-cover object-left `} src={item.highlight} alt="game_image" />
                <div className={`absolute bottom-0 font-spoqa text-12px font-bold  w-80px h-25px ml-80px -mb-17px flex items-center justify-center rounded-full ${selectedGame === item.id ? item.color : "bg-white text-gray-r888889"}`}>게임시작</div>
            </button>
        ));
    }

    return (
        <div className="absolute w-1920 h-244px bg-white bg-opacity-80 shadow-inner border-b-2 border-gray-300 space-y-50px" onMouseLeave={() => setHoveredTab(false)}>
            <div className="flex justify-center pt-6px">
                <GamesList items={gamesArray} />
            </div>
        </div>
    )
}

export default SlotGameHover
