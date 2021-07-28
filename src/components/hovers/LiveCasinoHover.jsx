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
    // const [selectedItem, setSelectedItem] = useState()

    const gamesArray = [
        { id: 0, background: EvoBanner, highlight: EvoBannerHighlight, color: "bg-teal-r4eb2ba text-white shadow-plain4", btnText: "게임시작", class: "bg-opacity-25" },
        { id: 1, background: AsiaBanner, highlight: AsiaBannerHighlight, color: "bg-blue-r3384ca text-white shadow-plain4", btnText: "게임시작", class: "bg-opacity-25" },
        { id: 2, background: PragBanner, highlight: PragBannerHighlight, color: "bg-purple-d03ab7 text-white shadow-plain4", btnText: "게임시작", class: "bg-opacity-25" },
        { id: 3, background: DgBanner, highlight: DgBannerHighlight, color: "bg-orange-e39e90 text-white shadow-plain4", btnText: "게임시작", class: "bg-opacity-25" },
        { id: 4, background: SexyBanner, highlight: SexyBannerHighlight, color: "bg-red-db4a4a text-white shadow-plain4", btnText: "게임시작", class: "bg-opacity-25" },
        { id: 5, background: BigBanner, highlight: BigBannerHighlight, color: "bg-yellow-e3ba3c text-white shadow-plain4", btnText: "게임시작", class: "bg-opacity-25" }
    ];

    const itemsArray = [
        { id: 0, background: one, highlight: oneHighlight, color: "bg-teal-r4eb2ba text-white shadow-plain4", btnText: "일인칭 바카라" },
        { id: 1, background: two, highlight: twoHighlight, color: "bg-blue-r3384ca text-white shadow-plain4", btnText: "일인칭 메가볼" },
        { id: 2, background: three, highlight: threeHighlight, color: "bg-purple-d03ab7 text-white shadow-plain4", btnText: "RNG 블랙잭" },
        { id: 3, background: four, highlight: fourHighlight, color: "bg-orange-e39e90 text-white shadow-plain4", btnText: "RNG 룰렛" },
        { id: 4, background: five, highlight: fiveHighlight, color: "bg-red-db4a4a text-white shadow-plain4", btnText: "일인칭 드림캐쳐" },
        { id: 5, background: six, highlight: sixHighlight, color: "bg-yellow-e3ba3c text-white shadow-plain4", btnText: "일인칭 라이트닝 룰렛" },
        { id: 6, background: seven, highlight: sevenHighlight, color: "bg-yellow-e3ba3c text-white shadow-plain4", btnText: "일인칭 용호" },
        { id: 7, background: eight, highlight: eightHighlight, color: "bg-yellow-e3ba3c text-white shadow-plain4", btnText: "일인칭 탑카드" }
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

    function ItemsList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                className="relative w-254px h-56px" 
                // onMouseEnter={() => setSelectedItem(item.id)} 
                // onMouseLeave={() => setSelectedItem(false)}
            >
                <img className={`opacity-100 hover:opacity-0`} src={item.background} alt="game_image" />
                <img className={`opacity-0 hover:opacity-100 absolute top-0 transition transition-opacity transform duration-200`} src={item.highlight} alt="game_image" />
            </button>
        ));
    }

    return (
        <div className="absolute w-1920 h-340px bg-white bg-opacity-80 shadow-inner border-b-2 border-gray-300 space-y-50px" onMouseLeave={() => setHoveredTab(false)}>
            <div className="flex ml-80px -space-x-2 pt-6px">
                <GamesList items={gamesArray} />
            </div>
            <div className="ml-60px -space-x-8">
                <ItemsList items={itemsArray} />
            </div>
        </div>
    )
}

export default LiveCasinoHover
