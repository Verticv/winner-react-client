import HorizontalMenu3 from 'components/horizontalMenus/HorizontalMenu3'
import Footer from 'components/mainPage/Footer'
import Footer2 from 'components/mainPage/Footer2'
import Navbar from 'components/mainPage/Navbar'
import NoticeBanner from 'components/mainPage/NoticeBanner'
import React, { useState } from 'react'
import PowerballIcon from '../images/minigames/powerball.png'
import PowerLadder from '../images/minigames/powerladder.png'
import SpeedKino from '../images/minigames/speedkino.png'
import KinoLadder from '../images/minigames/kinoladder.png'
import MinigamesRightPanel from 'components/minigames/MinigamesRightPanel'
import Placeholder1 from '../images/minigames/placeholder1.png'
import Placeholder2 from '../images/minigames/placeholder2.png'
import Placeholder3 from '../images/minigames/placeholder3.png'
import Placeholder4 from '../images/minigames/placeholder4.png'
import MinigamesPanel from 'components/minigames/MinigamesPanel'


const MinigamesPage = ({isAuthenticated, setAuthenticated}) => {

    const GameTypeArray = [
        { id: 0, img: PowerballIcon, text:"파워볼", time: "02:16", path: "/minigame/powerball" },
        { id: 1, img: PowerLadder, text:"파워사다리", time: "02:50", path: "/minigame/powerladder" },
        { id: 2, img: SpeedKino, text:"스피드키노", time: "02:50", path: "/minigame/speedkino" },
        { id: 3, img: KinoLadder, text:"키노사다리", time: "02:50", path: "/minigame/kinoladder" },
    ]

    const [selectedGame, setSelectedGame] = useState(window.location.pathname)
    const [selectedOption, setSelectedOption] = useState([
        {
            type: "",
            name: "",
            selection: "",
            buttonType: "",
            subtitle: null
        }
    ])

    return (
        <div className="relative flex flex-col justify-center limit:overflow-x-hidden">

            <div className="fixed w-1920 top-0 z-50 flex flex-col items-start limit1920:items-center">
                <NoticeBanner />
                <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
            </div>

            <div className="w-full flex flex-col items-center mt-107px">
                <div className="w-default">


                    <HorizontalMenu3 itemsArray={GameTypeArray} selectedTab={selectedGame} setSelectedTab={setSelectedGame} setSelectedOption={setSelectedOption} />


                    <div className="flex w-full mt-8px space-x-8px">
                        <div 
                            style={{width: "905px", height: "509px", backgroundColor:"#e8e8e8"}}
                            className="rounded-xl  flex justify-center border border-gray-dddddd"
                        >
                            <img
                                className="object-none" 
                                src={
                                    selectedGame === "/minigame/powerball"
                                    ? Placeholder1
                                    : selectedGame === "/minigame/powerladder"
                                    ? Placeholder2
                                    : selectedGame === "/minigame/speedkino"
                                    ? Placeholder3 
                                    : Placeholder4
                                } 
                                alt="" 
                            />
                        </div>
                        <MinigamesRightPanel selectedGame={selectedGame} selectedOption={selectedOption}/>
                    </div>

                    <div className="mt-8px">
                        <MinigamesPanel selectedGame={selectedGame} setSelectedGame={setSelectedGame} setSelectedOption={setSelectedOption} />
                    </div>


                </div>
            </div>




            <div className="flex flex-col items-start limit:items-center mt-92px w-full h-full">
                <div>
                    <Footer2 />
                    <Footer />
                </div>
            </div>

        </div>
    )
}

export default MinigamesPage
