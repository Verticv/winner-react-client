import React, { useState } from 'react'
import Expand from 'react-expand-animated'
import KslotBanner from '../../images/navbarHover/kslot_banner.png'
import KslotBannerHighlight from '../../images/navbarHover/kslot_banner_highlight.png'

const SlotGameHover = ({selection}) => {

    const [selectedGame, setSelectedGame] = useState()

    const gamesArray = [
        { id: 0, background: KslotBanner, highlight: KslotBannerHighlight, color: "bg-green-r7bd26a text-white shadow-plain4", btnText: "게임시작", class: "bg-opacity-25" }
    ];

    function GamesList({ items }) {
        return items.map(item => (
            <div 
                key={item.id} 
                className="relative group w-305px h-206px cursor-pointer" 
                onMouseEnter={() => setSelectedGame(item.id)} 
                onMouseLeave={() => setSelectedGame(false)}
            >
                <img className={`opacity-100 group-hover:opacity-0 w-305px h-206px object-none object-left transition transition-opacity transform duration-200`} src={item.background} alt="game_image" />
                <img className={`opacity-0 group-hover:opacity-100 absolute top-0 transition transition-opacity transform duration-100 w-305px h-206px object-none object-left `} src={item.highlight} alt="game_image" />
                <div className={`absolute bottom-0 font-spoqaBold text-12px w-80px h-25px ml-80px -mb-17px flex items-center justify-center rounded-full ${selectedGame === item.id ? item.color : "bg-white text-gray-r888889"}`}>게임시작</div>
            </div>
        ));
    }

    return (
        <Expand
            open={selection === 1} 
            duration={200} 
            className="absolute w-1920 h-244px bg-white bg-opacity-80 shadow-inner border-b-2 border-gray-300 space-y-50px"
        >
            <div style={{ width: '1920px', height: '244px'}}>
                <div className="flex justify-center pt-6px">
                    <GamesList items={gamesArray} />
                </div>
            </div>
        </Expand>
    )
}

export default SlotGameHover
