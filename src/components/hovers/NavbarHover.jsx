import React, { useState } from 'react'
import KslotBanner from '../../images/navbarHover/kslot_banner.png'
import KslotBannerHighlight from '../../images/navbarHover/kslot_banner_highlight.png'
import LebronBanner from '../../images/navbarHover/lebron_banner.png'
import LebronBannerHighlight from '../../images/navbarHover/lebron_banner_highlight.png'
import TennisBanner from '../../images/navbarHover/tennis_banner.png'
import TennisBannerHighlight from '../../images/navbarHover/tennis_banner_highlight.png'
import MessiBanner from '../../images/navbarHover/messi_banner.png'
import MessiBannerHighlight from '../../images/navbarHover/messi_banner_highlight.png'
import LolBanner from '../../images/navbarHover/lol_banner.png'
import LolBannerHighlight from '../../images/navbarHover/lol_banner_highlight.png'
import SuddenAttackBanner from '../../images/navbarHover/sudden_attack_banner.png'
import SuddenAttackBannerHighlight from '../../images/navbarHover/sudden_attack_banner_highlight.png'
import OverwatchBanner from '../../images/navbarHover/overwatch_banner.png'
import OverwatchBannerHighlight from '../../images/navbarHover/overwatch_banner_highlight.png'
import PubgBanner from '../../images/navbarHover/pubg_banner.png'
import PubgBannerHighlight from '../../images/navbarHover/pubg_banner_highlight.png'
import Powerball from '../../images/navbarHover/powerball.png'
import PowerballHighlight from '../../images/navbarHover/powerball_highlight.png'
import PowerLadder from '../../images/navbarHover/powerladder.png'
import PowerLadderHighlight from '../../images/navbarHover/powerladder_highlight.png'
import Speedkino from '../../images/navbarHover/speedkino.png'
import SpeedkinoHighlight from '../../images/navbarHover/speedkino_highlight.png'
import KinoLadder from '../../images/navbarHover/kinoladder.png'
import KinoLadderHighlight from '../../images/navbarHover/kinoladder_highlight.png'
import AugBanner from '../../images/navbarHover/aug_banner.png'
import AugBannerHighlight from '../../images/navbarHover/aug_banner_highlight.png'
import LiveCasinoHover from './LiveCasinoHover'

const NavbarHover = ({selection, setHoveredTab, setSelectedTab}) => {

    const [slotHover, setSlotHover] = useState()
    const [sportsHover, setSportsHover] = useState()
    const [esportsHover, setEsportsHover] = useState()
    const [minigameHover, setMinigameHover] = useState()
    const [augHover, setAugHover] = useState()

    return (
        <div onMouseLeave={() => setSelectedTab()}>
            {selection === 0 ? (
                <LiveCasinoHover setHoveredTab={setHoveredTab} />
            ) : selection === 1 ? (
                <div className="absolute w-1920 h-250px bg-white bg-opacity-80 shadow-inner border-b-2 border-gray-300 cursor-pointer items-center justify-center flex" onMouseLeave={() => setHoveredTab(false)}>
                    <img src={slotHover === true ? KslotBannerHighlight : KslotBanner} alt="game_image" onMouseEnter={() => setSlotHover(true)} onMouseLeave={() => setSlotHover(false)}/>
                </div>
            ) : selection === 2 ? (
                <div className="absolute w-1920 h-250px bg-white bg-opacity-80 shadow-inner border-b-2 border-gray-300 cursor-pointer items-center justify-center flex" onMouseLeave={() => setHoveredTab(false)}>
                    <img src={sportsHover === 0 ? LebronBannerHighlight : LebronBanner} alt="game_image" onMouseEnter={() => setSportsHover(0)} onMouseLeave={() => setSportsHover()}/>
                    <img src={sportsHover === 1 ? TennisBannerHighlight : TennisBanner} alt="game_image" onMouseEnter={() => setSportsHover(1)} onMouseLeave={() => setSportsHover()}/>
                    <img src={sportsHover === 2 ? MessiBannerHighlight : MessiBanner} alt="game_image" onMouseEnter={() => setSportsHover(2)} onMouseLeave={() => setSportsHover()}/>
                </div>
            ) : selection === 3 ? (
                <div className="absolute w-1920 h-250px bg-white bg-opacity-80 shadow-inner border-b-2 border-gray-300 cursor-pointer items-center justify-center flex" onMouseLeave={() => setHoveredTab(false)}>
                    <img className="w-300px h-240px" src={esportsHover === 0 ? LolBannerHighlight : LolBanner} alt="game_image" onMouseEnter={() => setEsportsHover(0)} onMouseLeave={() => setEsportsHover()}/>
                    <img className="w-300px h-240px" src={esportsHover === 1 ? SuddenAttackBannerHighlight : SuddenAttackBanner} alt="game_image" onMouseEnter={() => setEsportsHover(1)} onMouseLeave={() => setEsportsHover()}/>
                    <img className="w-300px h-240px" src={esportsHover === 2 ? OverwatchBannerHighlight : OverwatchBanner} alt="game_image" onMouseEnter={() => setEsportsHover(2)} onMouseLeave={() => setEsportsHover()}/>
                    <img className="w-300px h-240px" src={esportsHover === 3 ? PubgBannerHighlight : PubgBanner} alt="game_image" onMouseEnter={() => setEsportsHover(3)} onMouseLeave={() => setEsportsHover()}/>
                </div>            
            ) : selection === 4 ? (
                <div className="absolute w-1920 h-250px bg-white bg-opacity-80 shadow-inner border-b-2 border-gray-300 cursor-pointer items-center justify-center flex" onMouseLeave={() => setHoveredTab(false)}>
                    <img className="w-300px h-240px" src={minigameHover === 0 ? PowerballHighlight : Powerball} alt="game_image" onMouseEnter={() => setMinigameHover(0)} onMouseLeave={() => setMinigameHover()}/>
                    <img className="w-300px h-240px" src={minigameHover === 1 ? PowerLadderHighlight : PowerLadder} alt="game_image" onMouseEnter={() => setMinigameHover(1)} onMouseLeave={() => setMinigameHover()}/>
                    <img className="w-300px h-240px" src={minigameHover === 2 ? SpeedkinoHighlight : Speedkino} alt="game_image" onMouseEnter={() => setMinigameHover(2)} onMouseLeave={() => setMinigameHover()}/>
                    <img className="w-300px h-240px" src={minigameHover === 3 ? KinoLadderHighlight : KinoLadder} alt="game_image" onMouseEnter={() => setMinigameHover(3)} onMouseLeave={() => setMinigameHover()}/>
                </div> 
            ) : selection === 5 ? (
                <div className="absolute w-1920 h-250px bg-white bg-opacity-80 shadow-inner border-b-2 border-gray-300 cursor-pointer items-center justify-center flex" onMouseLeave={() => setHoveredTab(false)}>
                    <img src={augHover === true ? AugBannerHighlight : AugBanner} alt="game_image" onMouseEnter={() => setAugHover(true)} onMouseLeave={() => setAugHover(false)}/>
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}

export default NavbarHover
