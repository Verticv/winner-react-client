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
import WinLoseSettlement from 'components/myPage/WinLoseSettlement'
import CouponUsage from 'components/myPage/CouponUsage'
import CouponGift from 'components/myPage/CouponGift'
import CouponHistory from 'components/myPage/CouponHistory'
import PointsApply from 'components/myPage/PointsApply'

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
                <Route path="/mypage/win-lose-settlement">
                    <DirectoryComponent branch2="윈루즈정산" />
                </Route>
                <Route path="/mypage/coupon-usage">
                    <DirectoryComponent branch2="쿠폰관리" branch3="쿠폰사용" />
                </Route>
                <Route path="/mypage/coupon-gift">
                    <DirectoryComponent branch2="쿠폰관리" branch3="쿠폰선물" />
                </Route>
                <Route path="/mypage/coupon-history">
                    <DirectoryComponent branch2="쿠폰관리" branch3="쿠폰내역" />
                </Route>
                <Route path="/mypage/points-apply">
                    <DirectoryComponent branch2="포인트" branch3="포인트전환신청" />
                </Route>
                <Route path="/mypage/points-accumulate-history">
                    <DirectoryComponent branch2="포인트" branch3="포인트적립신청" />
                </Route>
                <Route path="/mypage/points-transaction-history">
                    <DirectoryComponent branch2="포인트" branch3="포인트전환내역" />
                </Route>
                <Route path="/mypage/inbox">
                    <DirectoryComponent branch2="쪽지관리" />
                </Route>
                <Route path="/mypage/edit-info">
                    <DirectoryComponent branch2="회원정보수정" />
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
                        <Route path="/mypage/win-lose-settlement">
                            <WinLoseSettlement />
                        </Route>
                        <Route path="/mypage/coupon-usage">
                            <CouponUsage />
                        </Route>
                        <Route path="/mypage/coupon-gift">
                            <CouponGift />
                        </Route>
                        <Route path="/mypage/coupon-history">
                            <CouponHistory />
                        </Route>
                        <Route path="/mypage/points-apply">
                            <PointsApply />
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
