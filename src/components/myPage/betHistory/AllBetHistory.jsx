import React, { useState } from 'react'
import DateSearchBar from '../DateSearchBar'
import AllHistoryTable from '../tables/AllHistoryTable'

const AllBetHistory = () => {

    const tableArray = [
        {
            id: 0,
            number: 7193915,
            time: "2021-06-29 15:46:13",
            type: "에볼루션",
            name: "바카라",
            amount: "12,000",
            profit: "-12,000",
            status: "패"
        },
        {
            id: 1,
            number: 7193914,
            time: "2021-06-29 15:45:41",
            type: "에볼루션",
            name: "바카라",
            amount: "900,000,000",
            profit: "+900,000,000",
            status: "승"
        },
        {
            id: 2,
            number: 7193913,
            time: "2021-06-29 15:45:41",
            type: "프레그메틱플레이",
            name: "블랙잭",
            amount: "800,000",
            profit: "-800,000",
            status: "패"
        },
    ];

    const [checkedState, setCheckedState] = useState(new Array(3).fill(false))
    const [isAllSelected, setAllSelected] = useState(false)
    const [isPopupOpen, setPopupOpen] = useState(true)

    function allSelectButtonPressed() {
        if (isAllSelected) {
            setCheckedState(Array(3).fill(false))
        } else {
            setCheckedState(Array(3).fill(true))
        }
        setAllSelected(!isAllSelected)
    }

    return (
        <div>
            <DateSearchBar isLeagueSearch={false} />
            <div className="w-full h-full mt-20px">
                <AllHistoryTable 
                    array={tableArray} 
                    checkedState={checkedState} 
                    setCheckedState={setCheckedState}
                    isPopupOpen={isPopupOpen}
                    setPopupOpen={setPopupOpen}
                />   
            </div>

            <div className="mt-40px h-36px w-full flex items-center justify-start space-x-2px">
                <button 
                    style={{borderRadius:"4px"}}
                    className="flex items-center justify-center w-90px h-36px rounded-4px bg-gray-r171a1d"
                    onClick={() => allSelectButtonPressed()}
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
                    className="flex items-center justify-center w-90px h-36px rounded-4px bg-red-cb4343"
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
    )
}

export default AllBetHistory
