import Footer from 'components/Footer'
import Footer2 from 'components/Footer2'
import Pagination from 'components/myPage/Pagination'
import Navbar from 'components/Navbar'
import NoticeBanner from 'components/NoticeBanner'
import React, { useState } from 'react'
import DistributorBanner from '../images/myPage/distributor/distributor_banner.png'
import SummaryIcon from '../images/myPage/distributor/summary_icon.png'
import SummaryIcon1 from '../images/myPage/distributor/summary/img1.png'

const DistributorPage = ({
    isAuthenticated,
    setAuthenticated
}) => {

    const [page, setPage] = useState(0)

    const SummaryCard = () => (
        <div className="w-227px h-165px rounded-lg border border-gray-dddddd bg-gray-f8f8fa flex flex-col items-center justify-start shadow-plain8">
            <img className="mt-20px object-none" src={SummaryIcon1} alt="" />
            <span className="mt-8px font-spoqaMedium tracking-tight text-18px text-gray-r616161">전체 유저</span>
            <span className="font-spoqaBold tracking-tight text-26px text-blue-r0056a6">5</span>
        </div>
    )

    return (
        <div className="relative flex flex-col justify-center limit:overflow-x-hidden">
             <div className="fixed w-1920 top-0 z-50 flex flex-col items-start limit1920:items-center">
                <NoticeBanner />
                <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
            </div>
            
            <div className="flex flex-col items-start limit:items-center mt-92px w-full h-full">
                <div className="relative w-default h-225px mt-20px">
                    <label className="text-36px font-spoqaMedium text-blue-r325685 absolute right-0 bottom-0 z-20 mb-86px mr-50px">마이페이지</label>
                    <img className="z-10" src={DistributorBanner} alt="" />
                </div>
                
                <div className="space-x-2px h-76px w-734px border-b border-gray-r868686 flex items-center justify-center text-24px tracking-tight text-gray-r454545">
                    <span className="font-spoqaBold text-blue-r0056a6">
                        Louie3
                    </span>
                    <span className="font-spoqaMedium">
                        님의 총판 정보입니다.
                    </span>
                </div>

                <div className="mt-42px w-1836px">
                    <div className="h-29px w-full flex items-center space-x-6px text-24px tracking-tight text-gray-r7b7b7b font-spoqaMedium">
                        <img src={SummaryIcon} alt="" />
                        <span>총판현황</span>
                    </div>
                    <div className="flex h-165px w-full mt-20px space-x-4px">
                        <SummaryCard />
                        <SummaryCard />
                        <SummaryCard />
                        <SummaryCard />
                        <SummaryCard />
                        <SummaryCard />
                        <SummaryCard />
                        <SummaryCard />
                    </div>
                </div>
 

                <div className="mt-60px">
                    <Pagination page={page} setPage={setPage}/>   
                </div>

                <div>
                    <Footer2 />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default DistributorPage
