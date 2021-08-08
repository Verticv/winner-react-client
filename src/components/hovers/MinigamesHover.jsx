import React, { useState } from 'react'
import Powerball from '../../images/navbarHover/powerball_banner.png'
import PowerballHighlight from '../../images/navbarHover/powerball_banner_highlight.png'
import PowerLadder from '../../images/navbarHover/powerladder_banner.png'
import PowerLadderHighlight from '../../images/navbarHover/powerladder_banner_highlight.png'
import Speedkino from '../../images/navbarHover/speedkino_banner.png'
import SpeedkinoHighlight from '../../images/navbarHover/speedkino_banner_highlight.png'
import KinoLadder from '../../images/navbarHover/kinoladder_banner.png'
import KinoLadderHighlight from '../../images/navbarHover/kinoladder_banner_highlight.png'
import Expand from 'react-expand-animated'

const MinigamesHover = ({setHoveredTab, selection}) => {

    const [selectedGame, setSelectedGame] = useState()

    const gamesArray = [
        { id: 0, background: Powerball, highlight: PowerballHighlight, color: "bg-purple-d03ab7 text-white shadow-plain4", btnText: "게임시작", class: "bg-opacity-25" },
        { id: 1, background: PowerLadder, highlight: PowerLadderHighlight, color: "bg-blue-r3384ca text-white shadow-plain4", btnText: "게임시작", class: "bg-opacity-25" },
        { id: 2, background: Speedkino, highlight: SpeedkinoHighlight, color: "bg-red-db4a4a text-white shadow-plain4", btnText: "게임시작", class: "bg-opacity-25" },
        { id: 3, background: KinoLadder, highlight: KinoLadderHighlight, color: "bg-green-r7bd26a text-white shadow-plain4", btnText: "게임시작", class: "bg-opacity-25" }
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
                <div className={`absolute bottom-0 font-spoqaBold text-12px w-80px h-25px ml-80px -mb-17px flex items-center justify-center rounded-full ${selectedGame === item.id ? item.color : "bg-white text-gray-r888889"}`}>게임시작</div>
            </button>
        ));
    }

    return (
        <Expand
            open={selection === 4} 
            duration={200} 
            className="absolute w-1920 h-244px bg-white bg-opacity-80 shadow-inner border-b-2 border-gray-300 space-y-50px"
        >
            <div style={{ width: '1920px', height: '244px'}} onMouseLeave={() => setHoveredTab(false)}>
                <div className="flex justify-center pt-6px">
                    <GamesList items={gamesArray} />
                </div>
            </div>
        </Expand>
    )
}

export default MinigamesHover
