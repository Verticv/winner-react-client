import React from 'react'
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
import one from '../../images/navbarHover/submenus/submenu_normal_1.png'
import oneHighlight from '../../images/navbarHover/submenus/submenu_hover_1.png'
import two from '../../images/navbarHover/submenus/submenu_normal_2.png'
import twoHighlight from '../../images/navbarHover/submenus/submenu_hover_2.png'
import three from '../../images/navbarHover/submenus/submenu_normal_3.png'
import threeHighlight from '../../images/navbarHover/submenus/submenu_hover_3.png'
import four from '../../images/navbarHover/submenus/submenu_normal_4.png'
import fourHighlight from '../../images/navbarHover/submenus/submenu_hover_4.png'
import five from '../../images/navbarHover/submenus/submenu_normal_5.png'
import fiveHighlight from '../../images/navbarHover/submenus/submenu_hover_5.png'
import six from '../../images/navbarHover/submenus/submenu_normal_6.png'
import sixHighlight from '../../images/navbarHover/submenus/submenu_hover_6.png'
import seven from '../../images/navbarHover/submenus/submenu_normal_7.png'
import sevenHighlight from '../../images/navbarHover/submenus/submenu_hover_7.png'
import eight from '../../images/navbarHover/submenus/submenu_normal_8.png'
import eightHighlight from '../../images/navbarHover/submenus/submenu_hover_8.png'
import Subicon1 from '../../images/navbarHover/submenus/subicon_1.png'
import Subicon2 from '../../images/navbarHover/submenus/subicon_2.png'
import Subicon3 from '../../images/navbarHover/submenus/subicon_3.png'
import Subicon4 from '../../images/navbarHover/submenus/subicon_4.png'
import Subicon5 from '../../images/navbarHover/submenus/subicon_5.png'
import Subicon6 from '../../images/navbarHover/submenus/subicon_6.png'
import Subicon7 from '../../images/navbarHover/submenus/subicon_7.png'
import Subicon8 from '../../images/navbarHover/submenus/subicon_8.png'
import Expand from 'react-expand-animated'

const LiveCasinoHover = ({selection}) => {

    const gamesArray = [
        { id: 0, background: EvoBanner, highlight: EvoBannerHighlight, color: "group-hover:bg-teal-r4eb2ba", imgText: "에볼루션", btnText: "게임시작", class: "bg-opacity-25" },
        { id: 1, background: AsiaBanner, highlight: AsiaBannerHighlight, color: "group-hover:bg-blue-r3384ca", imgText: "아시아게이밍", btnText: "게임시작", class: "bg-opacity-25" },
        { id: 2, background: PragBanner, highlight: PragBannerHighlight, color: "group-hover:bg-purple-d03ab7", imgText: "프레그메틱플레이", btnText: "게임시작", class: "bg-opacity-25" },
        { id: 3, background: DgBanner, highlight: DgBannerHighlight, color: "group-hover:bg-orange-e39e90", imgText: "드림게이밍", btnText: "게임시작", class: "bg-opacity-25" },
        { id: 4, background: SexyBanner, highlight: SexyBannerHighlight, color: "group-hover:bg-red-db4a4a", imgText: "섹시게이밍", btnText: "게임시작", class: "bg-opacity-25" },
        { id: 5, background: BigBanner, highlight: BigBannerHighlight, color: "group-hover:bg-yellow-e3ba3c", imgText: "빅게이밍", btnText: "게임시작", class: "bg-opacity-25" }
    ];

    const itemsArray = [
        { id: 0, background: one, highlight: oneHighlight, icon: Subicon1, color: "text-submenu-r8b5f5a", btnText: "일인칭 바카라", customCss: "ml-42px mb-px" },
        { id: 1, background: two, highlight: twoHighlight, icon: Subicon2, color: "text-submenu-r4a6940", btnText: "일인칭 메가볼", customCss: "ml-43px" },
        { id: 2, background: three, highlight: threeHighlight, icon: Subicon3, color: "text-submenu-r72485c", btnText: "RNG 블랙잭", customCss: "ml-42px" },
        { id: 3, background: four, highlight: fourHighlight, icon: Subicon4, color: "text-submenu-r58508e", btnText: "RNG 룰렛", customCss: "ml-43px" },
        { id: 4, background: five, highlight: fiveHighlight, icon: Subicon5, color: "text-submenu-r5a6340", btnText: "일인칭 드림캐쳐", customCss: "ml-42px mb-px" },
        { id: 5, background: six, highlight: sixHighlight, icon: Subicon6, color: "text-submenu-r5a608b", btnText: "일인칭 라이트닝 룰렛", customCss: "ml-43px" },
        { id: 6, background: seven, highlight: sevenHighlight, icon: Subicon7, color: "text-submenu-r87409b", btnText: "일인칭 용호", customCss: "ml-42px" },
        { id: 7, background: eight, highlight: eightHighlight, icon: Subicon8, color: "text-submenu-r9e5959", btnText: "일인칭 탑카드", customCss: "ml-42px" }
    ];

    function GamesList({ items }) {
        return items.map(item => (
            <div key={item.id} className="group relative w-305px h-206px cursor-pointer" >
                <img className={`opacity-100 group-hover:opacity-0 w-305px h-206px object-none object-left`} src={item.background} alt="game_image" />
                <img className={`opacity-0 group-hover:opacity-100 absolute top-0 w-305px h-206px object-none object-left`} src={item.highlight} alt="game_image" />
                <div className="absolute bottom-0 h-20px w-156px right-0 flex items-center justify-center -mb-2px"><span className="ml-10px group-hover:text-black font-spoqaBold tracking-tight text-12px text-gray-r616161">{item.imgText}</span></div>
                <div className={`absolute bottom-0 font-spoqaBold text-12px w-80px h-25px ml-80px -mb-17px flex items-center justify-center rounded-full bg-white text-gray-r888889 group-hover:text-white group-hover:shadow-plain4 ${item.color}`}>게임시작</div>
            </div>
        ));
    }

    function ItemsList({ items }) {
        return items.map(item => (
            <button key={item.id} className="relative group w-254px h-57px">
                <div className="z-20 absolute h-57px flex items-center">
                    <img className={item.customCss} src={item.icon} alt="icon" />
                    <span className={`font-spoqaMedium ml-4px mt-px text-14px tracking-tight ${item.color}`}>{item.btnText}</span>
                </div>
                <img className={`z-10 group-hover:opacity-0`} src={item.background} alt="game_image" />
                <img className={`z-10 opacity-0 group-hover:opacity-100 absolute top-0`} src={item.highlight} alt="game_image" />
            </button>
        ));
    }

    return (
        <Expand 
            open={selection === 0} 
            duration={200} 
            className="absolute w-1920 h-340px bg-white bg-opacity-80 shadow-inner border-b-2 border-gray-300 space-y-50px" 
        >
            <div style={{ width: '1920px', height: '340px'}} className="space-y-50px">
                <div className="flex ml-80px -space-x-2 pt-6px">
                    <GamesList items={gamesArray} />
                </div>
                <div className="ml-60px -space-x-33px">
                    <ItemsList items={itemsArray} />
                </div>
            </div>
        </Expand>
       
    )
}

export default LiveCasinoHover
