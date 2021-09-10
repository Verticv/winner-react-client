import Footer from 'components/Footer'
import Footer2 from 'components/Footer2'
import DirectoryComponent from 'components/myPage/DirectoryComponent'
import LeftMenu from 'components/myPage/LeftMenu'
import Navbar from 'components/Navbar'
import NoticeBanner from 'components/NoticeBanner'
import React, { useState } from 'react'
import { Route, useLocation } from 'react-router'
import MoneyChargeBanner from '../images/money/money_charge.png'
import Icon1 from '../images/myPage/leftMenu/icon_1.png'
import IconHighlight1 from '../images/myPage/leftMenu/icon_1_highlight.png'

const MoneyPage = ({isAuthenticated, setAuthenticated}) => {

    const LeftMenuArray = [
        { text: "보유머니 충전", icon: Icon1, iconHighlight: IconHighlight1, id: 0, path: "/money/charge" },
        { text: "보유머니 환전", icon: Icon1, iconHighlight: IconHighlight1, id: 1, path: "/money/exchange" },
    ]

    const location = useLocation();
    const [selectedTab, setSelectedTab] = useState(location.pathname)

    return (
        <div className="relative flex flex-col justify-center limit:overflow-x-hidden">

            <div className="fixed w-1920 top-0 z-50 flex flex-col items-start limit1920:items-center">
                <NoticeBanner />
                <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
            </div>


            <div className="flex flex-col items-start limit:items-center mt-92px w-full h-full">

                <Route path="/money/charge">
                    <DirectoryComponent 
                        branch1="충전/환전"
                        branch2="보유머니 충전" 
                        mainPath="/money/charge"
                        setSelectedTab={setSelectedTab}
                    />
                </Route>
                <Route path="/money/exchange">
                    <DirectoryComponent 
                        branch1="충전/환전"
                        branch2="보유머니 환전" 
                        mainPath="/money/charge"
                        setSelectedTab={setSelectedTab}
                    />
                </Route>

                <div className="relative w-default h-225px">
                    <label className="text-36px font-spoqaMedium text-blue-r325685 absolute right-0 bottom-0 z-20 mb-86px mr-50px">보유머니 충전</label>
                    <img className="z-10" src={MoneyChargeBanner} alt="" />
                </div>

                <div className="flex mt-20px w-default">
                    <div>
                        <LeftMenu 
                            selectedTab={selectedTab} 
                            setSelectedTab={setSelectedTab}
                            array={LeftMenuArray}
                        />
                    </div>

                    <div className="ml-20px w-1040px">
                        <Route path="/money/charge">
                            asd
                        </Route>
                        <Route path="/money/exchange">
                            qwe
                        </Route>
                        <Route path="*">
                        </Route>
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

export default MoneyPage
