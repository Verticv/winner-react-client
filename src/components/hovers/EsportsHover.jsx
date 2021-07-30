import React, { useState } from 'react'
import LolBanner from '../../images/navbarHover/lol_banner.png'
import LolBannerHighlight from '../../images/navbarHover/lol_banner_highlight.png'
import SuddenAttackBanner from '../../images/navbarHover/sudden_attack_banner.png'
import SuddenAttackBannerHighlight from '../../images/navbarHover/sudden_attack_banner_highlight.png'
import OverwatchBanner from '../../images/navbarHover/overwatch_banner.png'
import OverwatchBannerHighlight from '../../images/navbarHover/overwatch_banner_highlight.png'
import PubgBanner from '../../images/navbarHover/pubg_banner.png'
import PubgBannerHighlight from '../../images/navbarHover/pubg_banner_highlight.png'

const EsportsHover = ({setHoveredTab}) => {
    
    const [selectedGame, setSelectedGame] = useState()

    const gamesArray = [
        { id: 0, background: LolBanner, highlight: LolBannerHighlight, color: "bg-purple-a898ee text-white shadow-plain4", btnText: "게임시작", class: "bg-opacity-25" },
        { id: 1, background: SuddenAttackBanner, highlight: SuddenAttackBannerHighlight, color: "bg-red-db4a4a text-white shadow-plain4", btnText: "게임시작", class: "bg-opacity-25" },
        { id: 2, background: OverwatchBanner, highlight: OverwatchBannerHighlight, color: "bg-blue-r3384ca text-white shadow-plain4", btnText: "게임시작", class: "bg-opacity-25" },
        { id: 3, background: PubgBanner, highlight: PubgBannerHighlight, color: "bg-teal-r4eb2ba text-white shadow-plain4", btnText: "게임시작", class: "bg-opacity-25" }
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

export default EsportsHover
