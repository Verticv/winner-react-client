import Navbar from 'components/Navbar'
import NoticeBanner from 'components/NoticeBanner'
import React from 'react'
import MyPageBanner from '../images/myPage/mypage_banner.png'
import LeftMenu from 'components/myPage/LeftMenu'
import Footer2 from 'components/Footer2'
import Footer from 'components/Footer'
import { Route } from 'react-router-dom'
import BetHistory from 'components/myPage/BetHistory'
import DirectoryComponent from 'components/myPage/DirectoryComponent'
import ChargeHistory from 'components/myPage/ChargeHistory'
import ExchangeHistory from 'components/myPage/ExchangeHistory'

const MyPage = ({isAuthenticated, setAuthenticated}) => {

    return (
        <div className="relative flex flex-col justify-center limit:overflow-x-hidden">

            <div className="fixed w-1920 top-0 z-50 flex flex-col items-start limit1920:items-center">
                <NoticeBanner />
                <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
            </div>


            <div className="flex flex-col items-start limit:items-center mt-92px w-full h-full">

                <Route path="/mypage/bet-history">
                    <DirectoryComponent branch2="베팅내역" />
                </Route>
                <Route path="/mypage/charge-history">
                    <DirectoryComponent branch2="충/환전내역" branch3="충전내역" />
                </Route>
                <Route path="/mypage/exchange-history">
                    <DirectoryComponent branch2="충/환전내역" branch3="환전내역" />
                </Route>

                <div className="relative w-default h-225px">
                    <label className="text-36px font-spoqaMedium text-blue-r325685 absolute right-0 bottom-0 z-20 mb-86px mr-50px">마이페이지</label>
                    <img className="z-10" src={MyPageBanner} alt="" />
                </div>

                <div className="flex mt-20px w-default">
                    <div><LeftMenu /></div>

                    <div className="ml-20px w-1040px">
                        <Route path="/mypage/bet-history">
                            <BetHistory />
                        </Route>
                        <Route path="/mypage/charge-history">
                            <ChargeHistory />
                        </Route>
                        <Route path="/mypage/exchange-history">
                            <ExchangeHistory />
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

export default MyPage
