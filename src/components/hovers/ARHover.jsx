import React, { useState } from 'react'
import Expand from 'react-expand-animated'
import AugBanner from '../../images/navbarHover/aug_banner.png'
import AugBannerHighlight from '../../images/navbarHover/aug_banner_highlight.png'

const ARHover = ({selection}) => {

    const [selectedGame, setSelectedGame] = useState()

    const gamesArray = [
        { id: 0, background: AugBanner, highlight: AugBannerHighlight, color: "bg-blue-r3384ca text-white shadow-plain4", btnText: "게임시작", class: "bg-opacity-25" }
    ];

    function GamesList({ items }) {
        return items.map(item => (
            <div 
                key={item.id} 
                className="relative w-305px h-206px" 
                onMouseEnter={() => setSelectedGame(item.id)} 
                onMouseLeave={() => setSelectedGame(false)}
            >
                <img className={`opacity-100 hover:opacity-0 w-305px h-206px object-cover object-left`} src={item.background} alt="game_image" />
                <img className={`opacity-0 hover:opacity-100 absolute top-0 transition transition-opacity transform duration-200 w-305px h-206px object-cover object-left `} src={item.highlight} alt="game_image" />
                <div className={`absolute bottom-0 font-spoqaBold text-12px w-80px h-25px ml-80px -mb-17px flex items-center justify-center rounded-full ${selectedGame === item.id ? item.color : "bg-white text-gray-r888889"}`}>게임시작</div>
            </div>
        ));
    }

    return (
        <Expand
            open={selection === 5} 
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

export default ARHover
