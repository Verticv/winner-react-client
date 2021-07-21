import React from 'react'
import SlotGameBanner from '../images/slot_game_banner.png'

const GameBanner = ({selection}) => {
    return (
        <div className="w-full h-auto bg-white shadow-plain border border-gray-300 rounded-lg flex items-start justify-center bg-gradient-to-br from-white to-gray-400 cursor-pointer pt-1">
            <img className="w-full h-autp pl-20" src={SlotGameBanner} alt="game_banner" />
        </div>
    )
}

export default GameBanner
