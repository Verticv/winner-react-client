import React from 'react'
import DateSearchBar from '../DateSearchBar'
import EsportsBetHistoryTable from '../tables/EsportsBetHistoryTable'

const ESportsBetHistory = () => {
    return (
        <div className="w-full">

            <DateSearchBar isLeagueSearch={false} />

            <div className="w-full h-full mt-20px">
                <EsportsBetHistoryTable />  
            </div>

            <div className="mt-40px h-36px w-full flex items-center justify-between">
                <div className="flex space-x-2px">
                    <button 
                        style={{borderRadius:"4px"}}
                        className="flex items-center justify-center w-90px h-36px rounded-md bg-gray-r171a1d hover:opacity-75"
                    >
                        <div 
                            style={{
                                background: "linear-gradient(to bottom, #555555, #333333)",
                                borderRadius: "3px"
                            }}
                            className="flex items-center justify-center h-34px w-88px rounded-4px border border-gray-r737579 cursor-pointer"
                        >
                            <span className="font-spoqaMedium tracking-tight text-14px text-white pt-2px">전체선택</span>
                        </div>
                    </button>
                    <button 
                        style={{borderRadius:"4px"}}
                        className="flex items-center justify-center w-90px h-36px rounded-md bg-red-cb4343 hover:opacity-75"
                    >
                        <div 
                            style={{
                                background: "linear-gradient(to bottom, #f03a50, #cf254d)",
                                borderRadius: "3px"
                            }}
                            className="flex items-center justify-center h-34px w-88px rounded-4px border border-red-f36576 cursor-pointer"
                        >
                            <span className="font-spoqaMedium tracking-tight text-14px text-white pt-2px">선택삭제</span>
                        </div>
                    </button>
                </div>
                <button className="flex items-center justify-center w-159px h-36px rounded-4px bg-blue-r0070d9 hover:opacity-75">
                    <div className="flex items-center justify-center h-34px w-157px rounded-4px border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db cursor-pointer">
                        <span className="font-spoqaMedium tracking-tight text-14px text-white pt-2px">게시판에 내역올리기</span>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default ESportsBetHistory
