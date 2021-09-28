import BetCombinationPanel from 'components/betCombination/BetCombinationPanel'
import BetCombinationRightPanel from 'components/betCombination/BetCombinationRightPanel'
import Footer from 'components/mainPage/Footer'
import Footer2 from 'components/mainPage/Footer2'
import HorizontalMenu1 from 'components/horizontalMenus/HorizontalMenu1'
import DirectoryComponent from 'components/myPage/DirectoryComponent'
import Navbar from 'components/mainPage/Navbar'
import NoticeBanner from 'components/mainPage/NoticeBanner'
import React, { useState } from 'react'
import { Route } from 'react-router'
import Icon1 from '../images/gameResults/horizontalMenu/icon_1.png'
import Icon2 from '../images/gameResults/horizontalMenu/icon_2.png'
import Icon3 from '../images/gameResults/horizontalMenu/icon_3.png'
import Icon4 from '../images/gameResults/horizontalMenu/icon_4.png'
import Icon5 from '../images/gameResults/horizontalMenu/icon_5.png'
import Icon6 from '../images/gameResults/horizontalMenu/icon_6.png'
import Icon7 from '../images/gameResults/horizontalMenu/icon_7.png'
import Icon8 from '../images/gameResults/horizontalMenu/icon_8.png'

const BetCombinationPage = ({isAuthenticated, setAuthenticated}) => {

    const tabsArray = [
        { text: "전체", icon: Icon1, id: 0, number: 854 },
        { text: "축구", icon: Icon2, id: 1, number: 567 },
        { text: "농구", icon: Icon3, id: 2, number: 227 },
        { text: "야구", icon: Icon4, id: 3, number: 407 },
        { text: "배구", icon: Icon5, id: 4, number: 0 },
        { text: "하키", icon: Icon6, id: 5, number: 0 },
        { text: "미식축구", icon: Icon7, id: 6, number: 0 },
        { text: "격투기", icon: Icon8, id: 7, number: 9 },
    ];

    const [selectedTab, setSelectedTab] = useState(0)
    const [isPanelFixed, setPanelFixed] = useState(false)

    return (
        <div className="relative flex flex-col justify-center limit:overflow-x-hidden">

            <div className="fixed w-1920 top-0 z-50 flex flex-col items-start limit1920:items-center">
                <NoticeBanner />
                <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
            </div>


            <div className="flex flex-col items-start limit:items-center mt-92px w-full h-full">
                <Route path="/bet-combination">
                    <DirectoryComponent
                        branch1="스포츠" 
                        branch2="조합베팅"
                        mainPath="/mypage/bet-history"
                    />
                </Route>

                <div className="flex w-default space-x-20px">

                    <div style={{width: "933px"}}>
                        <HorizontalMenu1 itemsArray={tabsArray} isState={selectedTab} setState={setSelectedTab} />

                        <div className="mt-20px">
                            <BetCombinationPanel />
                        </div>
                    </div>
                    
                    <div style={{width: "307px", right:"326px"}} className={`${isPanelFixed && "fixed"} mb-60px`}>
                        <BetCombinationRightPanel isPanelFixed={isPanelFixed} setPanelFixed={setPanelFixed} />
                    </div>

                </div>

                <div>
                    <Footer2 />
                    <Footer />
                </div>

            </div>
        </div>
    )
}

export default BetCombinationPage
