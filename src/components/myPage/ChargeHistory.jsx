import React, { useState } from 'react'
import DateSearchBar from './DateSearchBar'
import MyPageTitle from './MyPageTitle'
import Pagination from './Pagination'
import ChargeHistoryTable from './tables/ChargeHistoryTable'

const ChargeHistory = () => {

    const [page, setPage] = useState(0)

    return (
        <div className="w-full">
            <MyPageTitle title="충전내역" />
            <DateSearchBar isLeagueSearch={false} />
            <div className="mt-20px">
                <ChargeHistoryTable />
            </div>

            <div className="mt-20px h-36px w-full flex items-center justify-between">
                <div className="flex space-x-2px">
                    <button className="flex items-center justify-center w-90px h-36px rounded-md bg-gray-r171a1d">
                        <div className="flex items-center justify-center h-34px w-88px rounded-4px border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r585b5e to-gray-r303337 cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white">전체선택</span>
                        </div>
                    </button>
                    <button className="flex items-center justify-center w-90px h-36px rounded-md bg-red-cb4343">
                        <div className="flex items-center justify-center h-34px w-88px rounded-4px border border-red-f36576 bg-gradient-to-b from-red-f03a50 via-red-f03a50 to-red-cf254d cursor-pointer">
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

export default ChargeHistory
