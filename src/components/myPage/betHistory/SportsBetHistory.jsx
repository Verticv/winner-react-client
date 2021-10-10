import React, { useState } from 'react'
import DateSearchBar from '../DateSearchBar';
import SportsBetHistoryPanel from './SportsBetHistoryPanel'

const SportsBetHistory = ({checkedState, setCheckedState}) => {

    const [isAllSelected, setAllSelected] = useState(false)

    const AllSelectButtonPressed = () => {

        if (isAllSelected === false) {
            setAllSelected(true)
            setCheckedState(Array(3).fill(true))
        } else {
            setAllSelected(false)
            setCheckedState(Array(3).fill(false))
        }
    };

    return (
        <div className="w-full">

            <DateSearchBar isLeagueSearch={true} />

            <div className="w-full h-full mt-20px">
                <div className="space-y-15px">
                    <SportsBetHistoryPanel type={0} checkedState={checkedState} setCheckedState={setCheckedState}/>
                    <SportsBetHistoryPanel type={1} winAmount="+900,000,000" checkedState={checkedState} setCheckedState={setCheckedState}/>
                    <SportsBetHistoryPanel type={2} checkedState={checkedState} setCheckedState={setCheckedState} />
                </div>
                <div className="mt-40px h-36px w-full flex items-center justify-between">
                    <div className="flex space-x-2px">
                        <button 
                            className="flex items-center justify-center w-90px h-36px rounded-md bg-gray-r171a1d"
                            onClick={() => AllSelectButtonPressed()}
                        >
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
                    <button className="flex items-center justify-center w-159px h-36px rounded-md bg-blue-r0070d9">
                        <div className="flex items-center justify-center h-34px w-157px rounded-4px border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white">게시판에 내역올리기</span>
                        </div>
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default SportsBetHistory