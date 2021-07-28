import React, { useState } from 'react'
import VirtualBanner from '../../images/gameBanner/virtual_game_banner.png'

const ARgameBanner = () => {

    const [isSelected, setSelected] = useState(false)

    const cardClass = "relative flex w-full h-386px border border-gray-afafaf justify-end rounded-lg shadow-plain1 hover:shadow-md transition bg-gradient-to-br from-white via-white to-gray-500 cursor-pointer border border-gray-afafaf"
    const cardSelectedClass = "relative flex w-full h-386px border border-gray-afafaf justify-end rounded-lg shadow-lg transition bg-gradient-to-r from-blue-cardGradLight to-blue-cardGradDark cursor-pointer"


    return (
        <button className={isSelected ? cardSelectedClass : cardClass} onClick={() => setSelected(true)}>
            <img className="object-contain h-384px" src={VirtualBanner} alt="game_banner" />
            <div className={`absolute left-0 bottom-0 ml-80px mb-36px w-242px h-74px rounded-full flex items-center justify-center text-white font-spoqa text-30px font-bold bg-green-r7bd26a ${isSelected ? "shadow-plain3" : "bg-opacity-25" }`}>게임시작</div>
        </button>
    )
}

export default ARgameBanner
