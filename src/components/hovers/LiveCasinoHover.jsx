import React, { useState } from 'react'
import EvoBanner from '../../images/navbarHover/evo_banner.png'
import EvoBannerHighlight from '../../images/navbarHover/evo_banner_highlight.png'
import AsiaBanner from '../../images/navbarHover/asia_banner.png'
import AsiaBannerHighlight from '../../images/navbarHover/asia_banner_highlight.png'
import PragBanner from '../../images/navbarHover/prag_banner.png'
import PragBannerHighlight from '../../images/navbarHover/prag_banner_highlight.png'
import DgBanner from '../../images/navbarHover/dg_banner.png'
import DgBannerHighlight from '../../images/navbarHover/dg_banner_highlight.png'
import SexyBanner from '../../images/navbarHover/sexy_banner.png'
import SexyBannerHighlight from '../../images/navbarHover/sexy_banner_highlight.png'
import BigBanner from '../../images/navbarHover/big_banner.png'
import BigBannerHighlight from '../../images/navbarHover/big_banner_highlight.png'
import one from '../../images/navbarHover/1.png'
import oneHighlight from '../../images/navbarHover/1_highlight.png'
import two from '../../images/navbarHover/2.png'
import twoHighlight from '../../images/navbarHover/2_highlight.png'
import three from '../../images/navbarHover/3.png'
import threeHighlight from '../../images/navbarHover/3_highlight.png'
import four from '../../images/navbarHover/4.png'
import fourHighlight from '../../images/navbarHover/4_highlight.png'
import five from '../../images/navbarHover/5.png'
import fiveHighlight from '../../images/navbarHover/5_highlight.png'
import six from '../../images/navbarHover/6.png'
import sixHighlight from '../../images/navbarHover/6_highlight.png'
import seven from '../../images/navbarHover/7.png'
import sevenHighlight from '../../images/navbarHover/7_highlight.png'
import eight from '../../images/navbarHover/8.png'
import eightHighlight from '../../images/navbarHover/8_highlight.png'

const LiveCasinoHover = ({setHoveredTab}) => {

    const [selectedGame, setSelectedGame] = useState()
    const [selectedItem, setSelectedItem] = useState()

    const gamesArray = [
        { id: 0, background: EvoBanner, highlight: EvoBannerHighlight, color: "bg-teal-r4eb2ba text-white shadow-plain4", btnText: "게임시작", class: "bg-opacity-25" },
        { id: 1, background: AsiaBanner, highlight: AsiaBannerHighlight, color: "bg-blue-r3384ca text-white shadow-plain4", btnText: "게임시작", class: "bg-opacity-25" },
        { id: 2, background: PragBanner, highlight: PragBannerHighlight, color: "bg-purple-d03ab7 text-white shadow-plain4", btnText: "게임시작", class: "bg-opacity-25" },
        { id: 3, background: DgBanner, highlight: DgBannerHighlight, color: "bg-orange-e39e90 text-white shadow-plain4", btnText: "게임시작", class: "bg-opacity-25" },
        { id: 4, background: SexyBanner, highlight: SexyBannerHighlight, color: "bg-red-db4a4a text-white shadow-plain4", btnText: "게임시작", class: "bg-opacity-25" },
        { id: 5, background: BigBanner, highlight: BigBannerHighlight, color: "bg-yellow-e3ba3c text-white shadow-plain4", btnText: "게임시작", class: "bg-opacity-25" }
    ];

    function GamesList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                className="relative w-305px h-206px" 
                onMouseEnter={() => setSelectedGame(item.id)} 
                onMouseLeave={() => setSelectedGame(false)}
            >
                <img className={`opacity-100 hover:opacity-0`} src={item.background} alt="game_image" />
                <img className={`opacity-0 hover:opacity-100 absolute top-0 transition transition-opacity transform duration-300`} src={item.highlight} alt="game_image" />
                <div className={`absolute bottom-0 font-spoqa text-12px font-bold  w-80px h-25px ml-80px -mb-17px flex items-center justify-center rounded-full ${selectedGame === item.id ? item.color : "bg-white text-gray-r888889"}`}>게임시작</div>
            </button>
        ));
    }

    return (
        <div className="absolute w-1920 h-350px bg-white bg-opacity-80 shadow-inner border-b-2 border-gray-300 space-y-10" onMouseLeave={() => setHoveredTab(false)}>
                    <div className="flex">
                        <GamesList items={gamesArray} />
                    </div>
                    <div className="flex justify-center -space-x-8">
                        <img src={selectedItem === 0 ? oneHighlight : one} alt="game_image" onMouseEnter={() => setSelectedItem(0)} onMouseLeave={() => setSelectedItem()}/>
                        <img src={selectedItem === 1 ? twoHighlight : two} alt="game_image" onMouseEnter={() => setSelectedItem(1)} onMouseLeave={() => setSelectedItem()}/>
                        <img src={selectedItem === 2 ? threeHighlight : three} alt="game_image" onMouseEnter={() => setSelectedItem(2)} onMouseLeave={() => setSelectedItem()}/>
                        <img src={selectedItem === 3 ? fourHighlight : four} alt="game_image" onMouseEnter={() => setSelectedItem(3)} onMouseLeave={() => setSelectedItem()}/>
                        <img src={selectedItem === 4 ? fiveHighlight : five} alt="game_image" onMouseEnter={() => setSelectedItem(4)} onMouseLeave={() => setSelectedItem()}/>
                        <img src={selectedItem === 5 ? sixHighlight : six} alt="game_image" onMouseEnter={() => setSelectedItem(5)} onMouseLeave={() => setSelectedItem()}/>
                        <img src={selectedItem === 6 ? sevenHighlight : seven} alt="game_image" onMouseEnter={() => setSelectedItem(6)} onMouseLeave={() => setSelectedItem()}/>
                        <img src={selectedItem === 7 ? eightHighlight : eight} alt="game_image" onMouseEnter={() => setSelectedItem(7)} onMouseLeave={() => setSelectedItem()}/>
                    </div>
                </div>
    )
}

export default LiveCasinoHover
