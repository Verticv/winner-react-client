import React, { useState } from 'react'
import MyPageTitle from './MyPageTitle'
import HorizontalMenu from '../horizontalMenus/HorizontalMenu'
import Icon1 from '../../images/myPage/coupon/coupon_img1.png'
import Icon2 from '../../images/myPage/coupon/coupon_img2.png'
import Pagination from './Pagination'
import CouponHistoryTable from './tables/CouponHistoryTable'


const CouponHistory = () => {

    const [selectedTab, setSelectedTab] = useState(0)
    const [page, setPage] = useState(0)

    const tabsArray = [
        { text: "쿠폰발급내역", icon: Icon1, id: 0 },
        { text: "쿠폰선물내역", icon: Icon2, id: 1 }
    ]

    return (
        <div className="flex flex-col w-full items-center">
            <MyPageTitle title="쿠폰내역"  couponCount={32}/>

            <div className="relative w-full mt-20px">
                <HorizontalMenu itemsArray={tabsArray} isState={selectedTab} setState={setSelectedTab} />
                {(selectedTab !== 0 && selectedTab !== 3) && (
                    <div className={`ml-${selectedTab * 116 + 50}px absolute bottom-0 w-20px -mb-10px overflow-hidden inline-block `}>
                        <div className="h-10px w-10px bg-gradient-to-br from-gray-d2dfea via-gray-eff3f6 to-gray-eff3f6 rotate-45 transform origin-bottom-left shadow"></div>
                    </div>
                )}
            </div>
                
            <div className="mt-20px w-full">
                <div className="flex items-center space-x-10px font-spoqaMedium text-16px tracking-tight text-gray-r8c8c8c">
                    
                    <div className="space-x-2px">
                        <div>사용가능: <span className="text-blue-r0056a6 font-spoqaBold">32</span>장</div>
                    </div>

                    <div className="h-12px w-px bg-gray-r8c8c8c" />

                    <div className="space-x-2px">
                        <div>사용완료: <span className="text-red-ff1237 font-spoqaBold">8</span>장</div>
                    </div>

                    <div className="h-12px w-px bg-gray-r8c8c8c" />

                    <div className="space-x-2px">
                        <div>기간만료: <span className="text-black font-spoqaBold">0</span>장</div>
                    </div>

                    <div className="h-12px w-px bg-gray-r8c8c8c" />

                    <div className="space-x-2px">
                        <div>회수된쿠폰: <span className="text-green-r279140 font-spoqaBold">0</span>장</div>
                    </div>
                </div>
            </div>

            <div className="mt-20px">
                <CouponHistoryTable />
            </div>
            
            <div className="mt-60px">
                <Pagination page={page} setPage={setPage}/>   
            </div>


        </div>
    )
}

export default CouponHistory
