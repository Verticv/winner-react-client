import React from 'react'
import EvoBanner from '../../images/navbarHover/evo_banner.png'
import AsiaBanner from '../../images/navbarHover/asia_banner.png'
import PragBanner from '../../images/navbarHover/prag_banner.png'
import DgBanner from '../../images/navbarHover/dg_banner.png'
import SexyBanner from '../../images/navbarHover/sexy_banner.png'
import BigBanner from '../../images/navbarHover/big_banner.png'
import one from '../../images/navbarHover/1.png'
import two from '../../images/navbarHover/2.png'
import three from '../../images/navbarHover/3.png'
import four from '../../images/navbarHover/4.png'
import five from '../../images/navbarHover/5.png'
import six from '../../images/navbarHover/6.png'
import seven from '../../images/navbarHover/7.png'
import eight from '../../images/navbarHover/8.png'

const NavbarHover = ({selection, setHoveredTab}) => {
    return (
        <div className="absolute w-1920 h-350px bg-white bg-opacity-80 shadow-inner border-b-2 border-gray-300 cursor-pointer">
            {selection === 0 ? (
                <div className="space-y-10 h-full w-full" onMouseOver={() => setHoveredTab(0)} onMouseLeave={() => setHoveredTab(false)}>
                    <div className="flex justify-end">
                        <img src={EvoBanner} alt="game_image" />
                        <img src={AsiaBanner} alt="game_image" />
                        <img src={PragBanner} alt="game_image" />
                        <img src={DgBanner} alt="game_image" />
                        <img src={SexyBanner} alt="game_image" />
                        <img src={BigBanner} alt="game_image" />
                    </div>
                    <div className="flex justify-center -space-x-8">
                        <img src={one} alt="game_image" />
                        <img src={two} alt="game_image" />
                        <img src={three} alt="game_image" />
                        <img src={four} alt="game_image" />
                        <img src={five} alt="game_image" />
                        <img src={six} alt="game_image" />
                        <img src={seven} alt="game_image" />
                        <img src={eight} alt="game_image" />
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}

export default NavbarHover
