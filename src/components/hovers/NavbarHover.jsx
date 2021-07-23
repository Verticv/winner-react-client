import React, { useState } from 'react'
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
import one from '../../images/navbarHover/1.png'
import oneHighlight from '../../images/navbarHover/1_highlight.png'
import two from '../../images/navbarHover/2.png'
import twoHighlight from '../../images/navbarHover/2_highlight.png'
import three from '../../images/navbarHover/3.png'
import threeHighlight from '../../images/navbarHover/3_highlight.png'
import four from '../../images/navbarHover/4.png'
import fourHighlight from '../../images/navbarHover/4_highlight.png'
import five from '../../images/navbarHover/5.png'
import fiveHighlight from '../../images/navbarHover/5_highlight.png'
import six from '../../images/navbarHover/6.png'
import sixHighlight from '../../images/navbarHover/6_highlight.png'
import seven from '../../images/navbarHover/7.png'
import sevenHighlight from '../../images/navbarHover/7_highlight.png'
import eight from '../../images/navbarHover/8.png'
import eightHighlight from '../../images/navbarHover/8_highlight.png'
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

const NavbarHover = ({selection, setHoveredTab, setSelectedTab}) => {

    const [selectedGame, setSelectedGame] = useState()
    const [selectedItem, setSelectedItem] = useState()
    const [slotHover, setSlotHover] = useState()
    const [sportsHover, setSportsHover] = useState()
    const [esportsHover, setEsportsHover] = useState()
    const [minigameHover, setMinigameHover] = useState()
    const [augHover, setAugHover] = useState()

    return (
        <div onMouseLeave={() => setSelectedTab()}>
            {selection === 0 ? (
                <div className="absolute w-1920 h-350px bg-white bg-opacity-80 shadow-inner border-b-2 border-gray-300 cursor-pointer space-y-10" onMouseLeave={() => setHoveredTab(false)}>
                    <div className="flex justify-end">
                        <img src={selectedGame === 0 ? EvoBannerHighlight : EvoBanner} alt="game_image" onMouseEnter={() => setSelectedGame(0)} onMouseLeave={() => setSelectedGame()}/>
                        <img src={selectedGame === 1 ? AsiaBannerHighlight : AsiaBanner} alt="game_image" onMouseEnter={() => setSelectedGame(1)} onMouseLeave={() => setSelectedGame()}/>
                        <img src={selectedGame === 2 ? PragBannerHighlight : PragBanner} alt="game_image" onMouseEnter={() => setSelectedGame(2)} onMouseLeave={() => setSelectedGame()}/>
                        <img src={selectedGame === 3 ? DgBannerHighlight : DgBanner} alt="game_image" onMouseEnter={() => setSelectedGame(3)} onMouseLeave={() => setSelectedGame()}/>
                        <img src={selectedGame === 4 ? SexyBannerHighlight : SexyBanner} alt="game_image" onMouseEnter={() => setSelectedGame(4)} onMouseLeave={() => setSelectedGame()}/>
                        <img src={selectedGame === 5 ? BigBannerHighlight : BigBanner} alt="game_image" onMouseEnter={() => setSelectedGame(5)} onMouseLeave={() => setSelectedGame()}/>
                    </div>
                    <div className="flex justify-center -space-x-8">
                        <img src={selectedItem === 0 ? oneHighlight : one} alt="game_image" onMouseEnter={() => setSelectedItem(0)} onMouseLeave={() => setSelectedItem()}/>
                        <img src={selectedItem === 1 ? twoHighlight : two} alt="game_image" onMouseEnter={() => setSelectedItem(1)} onMouseLeave={() => setSelectedItem()}/>
                        <img src={selectedItem === 2 ? threeHighlight : three} alt="game_image" onMouseEnter={() => setSelectedItem(2)} onMouseLeave={() => setSelectedItem()}/>
                        <img src={selectedItem === 3 ? fourHighlight : four} alt="game_image" onMouseEnter={() => setSelectedItem(3)} onMouseLeave={() => setSelectedItem()}/>
                        <img src={selectedItem === 4 ? fiveHighlight : five} alt="game_image" onMouseEnter={() => setSelectedItem(4)} onMouseLeave={() => setSelectedItem()}/>
                        <img src={selectedItem === 5 ? sixHighlight : six} alt="game_image" onMouseEnter={() => setSelectedItem(5)} onMouseLeave={() => setSelectedItem()}/>
                        <img src={selectedItem === 6 ? sevenHighlight : seven} alt="game_image" onMouseEnter={() => setSelectedItem(6)} onMouseLeave={() => setSelectedItem()}/>
                        <img src={selectedItem === 7 ? eightHighlight : eight} alt="game_image" onMouseEnter={() => setSelectedItem(7)} onMouseLeave={() => setSelectedItem()}/>
                    </div>
                </div>

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
                    <img src={esportsHover === 0 ? LolBannerHighlight : LolBanner} alt="game_image" onMouseEnter={() => setEsportsHover(0)} onMouseLeave={() => setEsportsHover()}/>
                    <img src={esportsHover === 1 ? SuddenAttackBannerHighlight : SuddenAttackBanner} alt="game_image" onMouseEnter={() => setEsportsHover(1)} onMouseLeave={() => setEsportsHover()}/>
                    <img src={esportsHover === 2 ? OverwatchBannerHighlight : OverwatchBanner} alt="game_image" onMouseEnter={() => setEsportsHover(2)} onMouseLeave={() => setEsportsHover()}/>
                    <img src={esportsHover === 3 ? PubgBannerHighlight : PubgBanner} alt="game_image" onMouseEnter={() => setEsportsHover(3)} onMouseLeave={() => setEsportsHover()}/>
                </div>            
            ) : selection === 4 ? (
                <div className="absolute w-1920 h-250px bg-white bg-opacity-80 shadow-inner border-b-2 border-gray-300 cursor-pointer items-center justify-center flex" onMouseLeave={() => setHoveredTab(false)}>
                    <img src={minigameHover === 0 ? PowerballHighlight : Powerball} alt="game_image" onMouseEnter={() => setMinigameHover(0)} onMouseLeave={() => setMinigameHover()}/>
                    <img src={minigameHover === 1 ? PowerLadderHighlight : PowerLadder} alt="game_image" onMouseEnter={() => setMinigameHover(1)} onMouseLeave={() => setMinigameHover()}/>
                    <img src={minigameHover === 2 ? SpeedkinoHighlight : Speedkino} alt="game_image" onMouseEnter={() => setMinigameHover(2)} onMouseLeave={() => setMinigameHover()}/>
                    <img src={minigameHover === 3 ? KinoLadderHighlight : KinoLadder} alt="game_image" onMouseEnter={() => setMinigameHover(3)} onMouseLeave={() => setMinigameHover()}/>
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
