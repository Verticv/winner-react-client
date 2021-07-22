import React from 'react'
import SlotGameBanner from '../images/gameBanner/slot_game_banner.png'
import SportsBanner1 from '../images/gameBanner/sports_banner_1.png'
import SportsBanner2 from '../images/gameBanner/sports_banner_2.png'
import SportsBanner3 from '../images/gameBanner/sports_banner_3.png'
import EsportsBanner from '../images/gameBanner/esports_banner.png'
import MinigameBanner1 from '../images/gameBanner/minigame_banner_1.png'
import MinigameBanner2 from '../images/gameBanner/minigame_banner_2.png'
import MinigameBanner3 from '../images/gameBanner/minigame_banner_3.png'
import MinigameBanner4 from '../images/gameBanner/minigame_banner_4.png'
import VirtualBanner from '../images/gameBanner/virtual_game_banner.png'
import FishingBanner from '../images/gameBanner/fishing_game_banner.png'
import LotteryBanner from '../images/gameBanner/lottery_game_banner.png'
import Cards from './Cards'

const GameBanner = ({selection}) => {
    return (
        <>
            {selection === 0 ? (
                <Cards />
            ) : selection === 1 ? (
                <div className="w-full h-auto bg-white shadow-plain border border-gray-300 rounded-lg flex items-start justify-center bg-gradient-to-br from-white via-white to-gray-300 cursor-pointer pt-1">
                    <img className="w-full h-auto pl-20" src={SlotGameBanner} alt="game_banner" />
                </div>
            ) : selection === 2 ? (
                <div className="flex bg-white w-full h-full justify-between rounded">
                    <img src={SportsBanner1} alt="game_banner" />
                    <img src={SportsBanner2} alt="game_banner" />
                    <img src={SportsBanner3} alt="game_banner" />
                </div>
            ) : selection === 3 ? (
                <div className="w-full h-auto bg-white shadow-plain border border-gray-300 rounded-lg flex items-start justify-center bg-gradient-to-br from-white via-white to-gray-300 cursor-pointer pt-1">
                    <img className="w-full h-auto pl-20" src={EsportsBanner} alt="game_banner" />
                </div>          
            ) : selection === 4 ? (
                <div className="flex flex-col space-y-10px bg-white">
                    <div className="flex justify-between space-x-4px">
                        <img src={MinigameBanner1} alt="game_banner" />
                        <img src={MinigameBanner2} alt="game_banner" />
                    </div>
                    <div className="flex justify-between space-x-4px">
                        <img src={MinigameBanner3} alt="game_banner" />
                        <img src={MinigameBanner4} alt="game_banner" />
                    </div>
                </div>
            ) : selection === 5 ? (
                <div className="w-full h-auto bg-white shadow-plain border border-gray-300 rounded-lg flex items-start justify-center bg-gradient-to-br from-white via-white to-gray-300 cursor-pointer pt-1">
                    <img className="w-full h-auto pl-20" src={VirtualBanner} alt="game_banner" />
                </div>
            ) : selection === 6 ? (
                <div className="w-full h-auto bg-white shadow-plain border border-gray-300 rounded-lg flex items-start justify-center bg-gradient-to-br from-white via-white to-gray-300 cursor-pointer pt-1">
                    <img className="w-full h-auto pl-20" src={FishingBanner} alt="game_banner" />
                </div>
            ) : selection === 7 ? (
                <div className="w-full h-auto bg-white shadow-plain border border-gray-300 rounded-lg flex items-start justify-center bg-gradient-to-br from-white via-white to-gray-300 cursor-pointer">
                    <img className="w-full h-auto pl-20" src={LotteryBanner} alt="game_banner" />
                </div>
            ) : (
                <></>
            )}
        </>
    )
}

export default GameBanner
