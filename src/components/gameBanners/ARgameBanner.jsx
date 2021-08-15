import React from 'react'
import VirtualBanner from '../../images/gameBanner/virtual_game_banner.png'
import CardBg from '../../images/cardBg/card_bg_big.png'
import CardBgHighlight from '../../images/cardBg/card_bg_big_highlight.png'

const ARgameBanner = () => {

    return (
        <div className="relative group flex w-full h-387px border border-gray-afafaf justify-end rounded-lg shadow-plain1 transition cursor-pointer" >
            <img className="z-20" src={VirtualBanner} alt="game_banner" />
            <div className="absolute group-hover:opacity-0 rounded-lg"><img src={CardBg} alt="background" /></div>
            <div className="absolute opacity-0 group-hover:opacity-100 rounded-lg"><img src={CardBgHighlight} alt="background" /></div>
            <div className={`absolute left-0 bottom-0 ml-80px mb-36px w-242px h-74px rounded-full flex items-center justify-center text-white font-spoqaBold text-30px bg-green-r7bd26a group-hover:shadow-plain3`}>게임시작</div>
        </div>
    )
}

export default ARgameBanner
