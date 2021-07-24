import React, { useState } from 'react'
import Card from '../images/subNavbar/card.png'
import Slot from '../images/subNavbar/slot.png'
import Sport from '../images/subNavbar/sport.png'
import Esport from '../images/subNavbar/esport.png'
import Minigame from '../images/subNavbar/minigame.png'
import AugmentedGame from '../images/subNavbar/augmented_game.png'
import Fishing from '../images/subNavbar/fishing.png'
import Lottery from '../images/subNavbar/lottery.png'
import CardDefualt from '../images/subNavbar/card_default.png'
import SlotDefault from '../images/subNavbar/slot_default.png'
import SportDefault from '../images/subNavbar/sport_default.png'
import EsportDefault from '../images/subNavbar/esport_default.png'
import MinigameDefault from '../images/subNavbar/minigame_default.png'
import AugmentedGameDefault from '../images/subNavbar/augmented_game_default.png'
import FishingDefault from '../images/subNavbar/fishing_default.png'
import LotteryDefault from '../images/subNavbar/lottery_default.png'
import GameBanner from './GameBanner'

const SubNavbar = () => {

    const [selectedTab, setSelectedTab] = useState(0)
    const [isGameBanner, setGameBanner] = useState(0)

    const tabClass = "flex items-center justify-center space-x-2 h-full px-4 rounded-full text-gray-subNavbar font-semibold cursor-pointer"
    const selectedTabClass = "flex items-center justify-center space-x-2 h-full px-4 rounded-full text-white font-semibold bg-gradient-to-br from-blue-gradLight to-blue-gradDark cursor-pointer shadow-inner"

    const tabsArray = [
        { text: "라이브카지노", icon: Card, iconDefault: CardDefualt, id: 0 },
        { text: "슬롯게임", icon: Slot, iconDefault: SlotDefault, id: 1 },
        { text: "스포츠", icon: Sport, iconDefault: SportDefault, id: 2 },
        { text: "e-스포츠", icon: Esport, iconDefault: EsportDefault, id: 3 },
        { text: "미니게임", icon: Minigame, iconDefault: MinigameDefault, id: 4 },
        { text: "가상게임", icon: AugmentedGame, iconDefault: AugmentedGameDefault, id: 5 },
        { text: "피싱게임", icon: Fishing, iconDefault: FishingDefault, id: 6 },
        { text: "로터리게임", icon: Lottery, iconDefault: LotteryDefault, id: 7 }
    ];

    function TabsList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                className={selectedTab === item.id ? selectedTabClass : tabClass} 
                onClick={() => {
                    setSelectedTab(item.id)
                    setGameBanner(item.id)
                }}
            >
                <img className="w-12 h-12 object-contain" src={selectedTab === item.id ? item.icon : item.iconDefault} alt="icon" />
                <label className="cursor-pointer flex-shrink-0">{item.text}</label>
            </button>
        ));
    }

    return (
        <div className="relative w-full">
            <div className="flex justify-around w-full rounded-full shadow-plain bg-gradient-to-b from-blue-lightGradLight border-2 border-white h-16">
                <TabsList items={tabsArray}/>
            </div>
            <div className="flex w-full h-400px mt-40px">
                <GameBanner selection={isGameBanner}/>
            </div>
        </div>
    )
}

export default SubNavbar
