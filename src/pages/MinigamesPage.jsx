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
import Placeholder from '../images/minigames/placeholder.png'


const MinigamesPage = ({isAuthenticated, setAuthenticated}) => {

    const GameTypeArray = [
        { id: 0, img: PowerballIcon, time: "02:16" },
        { id: 1, img: PowerLadder, time: "02:50" },
        { id: 2, img: SpeedKino, time: "02:50" },
        { id: 3, img: KinoLadder, time: "02:50" },
    ]

    const [selectedTab, setSelectedTab] = useState(0)

    return (
        <div className="relative flex flex-col justify-center limit:overflow-x-hidden">

            <div className="fixed w-1920 top-0 z-50 flex flex-col items-start limit1920:items-center">
                <NoticeBanner />
                <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
            </div>

            <div className="w-full flex flex-col items-center mt-107px">
                <div className="w-default">


                    <HorizontalMenu3 itemsArray={GameTypeArray} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />


                    <div className="flex w-full mt-8px space-x-8px">
                        <div 
                            style={{width: "905px", height: "509px", backgroundColor:"#e8e8e8"}}
                            className="rounded-xl  flex justify-center border border-gray-dddddd"
                        >
                            <img className="object-none" src={Placeholder} alt="" />
                        </div>
                        <MinigamesRightPanel />
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
