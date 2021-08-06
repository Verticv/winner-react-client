import React from 'react'
import FishingBanner from '../../images/gameBanner/fishing_game_banner.png'
import LotteryBanner from '../../images/gameBanner/lottery_game_banner.png'
import LiveCasinoBanner from './LiveCasinoBanner'
import SlotsBanner from './SlotsBanner'
import SportsBanner from './SportsBanner'
import EsportsBanner from './EsportsBanner'
import MinigameBanner from './MinigameBanner'
import ARgameBanner from './ARgameBanner'

const GameBanner = ({selection}) => {
    return (
        <>
            {selection === 0 ? (
                <LiveCasinoBanner />
            ) : selection === 1 ? (
                <SlotsBanner />
            ) : selection === 2 ? (
                <SportsBanner />
            ) : selection === 3 ? (
                <EsportsBanner />      
            ) : selection === 4 ? (
                <MinigameBanner />
            ) : selection === 5 ? (
                <ARgameBanner />
            ) : selection === 6 ? (
                <div className="relative flex w-full h-386px border border-gray-afafaf justify-end rounded-lg shadow-plain1 transition bg-gradient-to-br from-white via-white to-gray-300 cursor-pointer border border-gray-afafaf">
                    <img className="w-full h-auto pl-20" src={FishingBanner} alt="game_banner" />
                    <div className={`absolute left-0 bottom-0 ml-80px mb-36px w-242px h-74px rounded-full flex items-center justify-center text-white font-spoqa text-30px font-bold bg-gray-b2b2b2`}>준비중</div>
                </div>
            ) : selection === 7 ? (
                <div className="relative flex w-full h-386px border border-gray-afafaf justify-end rounded-lg shadow-plain1 transition bg-gradient-to-br from-white via-white to-gray-300 cursor-pointer border border-gray-afafaf">
                    <img className="w-full h-auto pl-20" src={LotteryBanner} alt="game_banner" />
                    <div className={`absolute left-0 bottom-0 ml-80px mb-36px w-242px h-74px rounded-full flex items-center justify-center text-white font-spoqa text-30px font-bold bg-gray-b2b2b2`}>준비중</div>
                </div>
            ) : (
                <></>
            )}
        </>
    )
}

export default GameBanner
