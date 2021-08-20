import Navbar from 'components/Navbar'
import NoticeBanner from 'components/NoticeBanner'
import React from 'react'
import HomeIcon from '../images/myPage/home_icon.png'
import RightArrow from '../images/myPage/right_arrow.png'
import MyPageBanner from '../images/myPage/mypage_banner.png'
import LeftMenu from 'components/myPage/LeftMenu'
import Footer2 from 'components/Footer2'
import Footer from 'components/Footer'
import { Route } from 'react-router-dom'
import BetHistory from 'components/myPage/BetHistory'

const MyPage = ({isAuthenticated, setAuthenticated}) => {
    return (
        <div className="relative flex flex-col justify-center limit:overflow-x-hidden">

        <div className="fixed w-1920 top-0 z-50 flex flex-col items-start limit1920:items-center">
            <NoticeBanner />
            <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
        </div>


        <div className="flex flex-col items-start limit:items-center mt-92px w-full h-full">
            <div className="flex items-center h-22px w-default my-20px space-x-10px">
                <img className="object-none" src={HomeIcon} alt="" />
                <img className="object-none" src={RightArrow} alt="" />
                <span className="font-spoqaMedium text-13px text-gray-r454545 tracking-tight">마이페이지</span>
                <img className="object-none" src={RightArrow} alt="" />
                <span className="font-spoqaBold text-13px text-black tracking-tight">베팅내역</span>
            </div>

            <div className="relative w-default h-225px">
                <label className="text-36px font-spoqaMedium text-blue-r325685 absolute right-0 bottom-0 z-20 mb-86px mr-50px">마이페이지</label>
                <img className="z-10" src={MyPageBanner} alt="" />
            </div>

            <div className="flex mt-20px w-default h-full">
                <LeftMenu />

                <div className="ml-20px w-1040px h-840px">
                    <Route path="/mypage/bet-history">
                        <BetHistory />
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
