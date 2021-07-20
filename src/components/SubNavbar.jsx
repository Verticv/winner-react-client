import React, { useState } from 'react'
import Card from '../images/card.png'
import Slot from '../images/slot.png'
import Sport from '../images/sport.png'
import Esport from '../images/esport.png'
import Minigame from '../images/minigame.png'
import AugmentedGame from '../images/augmented_game.png'
import Fishing from '../images/fishing.png'
import Lottery from '../images/lottery.png'
import CardDefualt from '../images/card_default.png'
import SlotDefault from '../images/slot_default.png'
import SportDefault from '../images/sport_default.png'
import EsportDefault from '../images/esport_default.png'
import MinigameDefault from '../images/minigame_default.png'
import AugmentedGameDefault from '../images/augmented_game_default.png'
import FishingDefault from '../images/fishing_default.png'
import LotteryDefault from '../images/lottery_default.png'
import GameBanner from './GameBanner'

const SubNavbar = () => {

    const [selectedTab, setSelectedTab] = useState()
    const [isGameBanner, setGameBanner] = useState(true)

    const tabClass = "flex items-center justify-center space-x-2 h-full px-4 rounded-full text-gray-500 font-semibold cursor-pointer"
    const selectedTabClass = "flex items-center justify-center space-x-2 h-full px-4 rounded-full text-white font-semibold bg-gradient-to-br from-blue-400 to-blue-700 cursor-pointer shadow-inner"

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
                    setGameBanner(0)
                }}
            >
                <img className="w-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 object-contain" src={selectedTab === item.id ? item.icon : item.iconDefault} alt="icon" />
                <label className="cursor-pointer">{item.text}</label>
            </button>
        ));
    }

    return (
        <div className="relative w-full">
            <div className="flex justify-around w-full rounded-full shadow-plain bg-gradient-to-b from-blue-100 border-2 border-white h-16">
                <TabsList items={tabsArray}/>
            </div>
            {isGameBanner && (
            <div className="absolute flex w-full h-full z-20 mt-4">
              <GameBanner/>
            </div>
          )}
        </div>
    )
}

export default SubNavbar
