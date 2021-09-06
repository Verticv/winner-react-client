import React, { useState } from 'react'
import DateSearchBar from './DateSearchBar'
import MyPageTitle from './MyPageTitle'
import Pagination from './Pagination'
import Diamond from '../../images/myPage/diamond.png'
import WinLoseTable from './tables/WinLoseTable'

const WinLoseSettlement = () => {

    const [page, setPage] = useState(0)

    return (
        <div className="w-full">
            <MyPageTitle title="윈루즈정산" />
            <DateSearchBar isLeagueSearch={false} />

            <div className="flex h-48px w-full mt-20px space-x-12px">
                <div className="w-255px h-48px rounded-full border-2 border-gray-b4b4b4 bg-gray-r5a6067 flex items-center justify-center font-spoqaMedium text-16px tracking-tight">
                    <img className="mr-16px" src={Diamond} alt="" />
                    <div className="flex items-center space-x-4px pt-2px">
                        <span className="text-white">진행중인 금액:</span>
                        <span className="text-yellow-ffcc00">78,308</span>
                    </div>
                </div>

                <div className="w-255px h-48px rounded-full border-2 border-gray-b4b4b4 bg-gray-r5a6067 flex items-center justify-center font-spoqaMedium text-16px tracking-tight">
                    <img className="mr-16px" src={Diamond} alt="" />
                    <div className="flex items-center space-x-4px pt-2px">
                        <span className="text-white">정산 총 금액:</span>
                        <span className="text-yellow-ffcc00">24,393,246</span>
                    </div>
                </div>

            </div>

            <div className="mt-20px">
                <WinLoseTable />
            </div>

            <div className="mt-20px h-36px w-full flex items-center justify-between">
                <div className="flex space-x-2px">
                    <button className="flex items-center justify-center w-90px h-36px rounded-md bg-gray-r171a1d">
                        <div className="flex items-center justify-center h-34px w-88px rounded-4px border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r45484c to-gray-r303337 cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white">전체선택</span>
                        </div>
                    </button>
                    <button className="flex items-center justify-center w-90px h-36px rounded-md bg-red-cb4343">
                        <div className="flex items-center justify-center h-34px w-88px rounded-4px border border-red-f36576 bg-gradient-to-b from-red-f03a50 via-red-e2314f to-red-cf254d cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white">선택삭제</span>
                        </div>
                    </button>
                </div>
            </div>

            <div className="flex w-full justify-center mt-4px">
                <Pagination page={page} setPage={setPage}/>   
            </div>
            
        </div>
    )
}

export default WinLoseSettlement
