import React, { useState } from 'react'
import DateSearchBar from './DateSearchBar'
import MyPageTitle from './MyPageTitle'
import Pagination from './Pagination'
import Diamond from '../../images/myPage/diamond.png'
import WinLoseTable from './tables/WinLoseTable'

const WinLoseSettlement = () => {

    const [page, setPage] = useState(0)
    const [checkedState, setCheckedState] = useState(
        new Array(10).fill(false)
    );
    const [isAllSelected, setAllSelected] = useState(false)

    const AllSelectButtonPressed = () => {

        if (isAllSelected === false) {
            setAllSelected(true)
            setCheckedState(Array(10).fill(true))
        } else {
            setAllSelected(false)
            setCheckedState(Array(10).fill(false))
        }
    };

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
                <WinLoseTable checkedState={checkedState} setCheckedState={setCheckedState}/>
            </div>

            <div className="mt-20px h-36px w-full flex items-center justify-between">
                <div className="flex space-x-2px">
                    <button 
                        style={{borderRadius:"4px"}}
                        className="flex items-center justify-center w-90px h-36px rounded-4px bg-gray-r171a1d hover:opacity-75"
                        onClick={() => AllSelectButtonPressed()}
                    >
                        <div 
                            style={{
                                background: "linear-gradient(to bottom, #555555, #333333)",
                                borderRadius: "3px"
                            }}
                            className="flex items-center justify-center h-34px w-88px rounded-4px border border-gray-r737579 cursor-pointer pt-2px"
                        >
                            <span className="font-spoqaMedium tracking-tight text-14px text-white">{isAllSelected ? "선택해제" : "전체선택"}</span>
                        </div>
                    </button>
                    <button 
                        style={{borderRadius:"4px"}}
                        className="flex items-center justify-center w-90px h-36px rounded-4px bg-red-cb4343 hover:opacity-75"
                    >
                        <div 
                            style={{
                                background: "linear-gradient(to bottom, #f03a50, #cf254d)",
                                borderRadius: "3px"
                            }}
                            className="flex items-center justify-center h-34px w-88px rounded-4px border border-red-f36576 cursor-pointer pt-2px"
                        >
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
