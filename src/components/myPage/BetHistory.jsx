import React, { useState } from 'react'
import HorizontalMenu from './HorizontalMenu'
import Icon1 from '../../images/myPage/betHistory/ico_1.png'
import Icon2 from '../../images/myPage/betHistory/ico_2.png'
import Icon3 from '../../images/myPage/betHistory/ico_3.png'
import Icon4 from '../../images/myPage/betHistory/ico_4.png'
import Icon5 from '../../images/myPage/betHistory/ico_5.png'
import Icon6 from '../../images/myPage/betHistory/ico_6.png'
import Icon7 from '../../images/myPage/betHistory/ico_7.png'
import Icon8 from '../../images/myPage/betHistory/ico_8.png'
import Icon9 from '../../images/myPage/betHistory/ico_8.png'
import SubHorizontalMenu from './SubHorizontalMenu'
import AllIcon from '../../images/myPage/betHistory/all.png'
import EvoIcon from '../../images/myPage/betHistory/evolution.png'
import AsiaIcon from '../../images/myPage/betHistory/asia.png'
import PragIcon from '../../images/myPage/betHistory/pragmatic.png'
import DgIcon from '../../images/myPage/betHistory/dg.png'
import SexyIcon from '../../images/myPage/betHistory/sexy.png'
import BigIcon from '../../images/myPage/betHistory/big.png'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from  "react-datepicker";
import ko from 'date-fns/locale/ko';
import CalendarIcon from '../../images/myPage/betHistory/calendar.png'
import BetHistoryTable from './BetHistoryTable'
import SportsBetHistory from './SportsBetHistory'
import Pagination from './Pagination'

registerLocale('ko', ko)

const BetHistory = () => {

    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedSubTab, setSelectedSubTab] = useState(0)
    const [startDate, setStartDate] = useState(new Date())
    const [page, setPage] = useState(0)

    const tabsArray = [
        { text: "전체", icon: Icon1, id: 0 },
        { text: "라이브카지노", icon: Icon2, id: 1 },
        { text: "슬롯게임", icon: Icon3, id: 2 },
        { text: "스포츠", icon: Icon4, id: 3 },
        { text: "e-스포츠", icon: Icon5, id: 4 },
        { text: "미니게임", icon: Icon6, id: 5 },
        { text: "가상게임", icon: Icon7, id: 6 },
        { text: "피싱게임", icon: Icon8, id: 7 },
        { text: "로터리게임", icon: Icon9, id: 8 }
    ];

    const subTabsArray = [
        { text: "전체", icon: AllIcon, id: 0 },
        { text: "에볼루션", icon: EvoIcon, id: 1 },
        { text: "아시아게이밍", icon: AsiaIcon, id: 2 },
        { text: "프레그메틱플레이", icon: PragIcon, id: 3, custom: "mt-8px" },
        { text: "드임게이밍", icon: DgIcon, id: 4 },
        { text: "섹시게이밍", icon: SexyIcon, id: 5 },
        { text: "빅게이밍", icon: BigIcon, id: 6 },
    ];

    

    return (
        <div className="flex flex-col items-center">
            <div className="flex h-21px w-full">
                <div className="w-8px h-20px bg-gradient-to-b from-blue-gradLight to-blue-gradDark rounded-sm mt-px"/>
                <label className="font-spoqaMedium text-22px text-gray-r585858 ml-4px -mt-5px" >베팅내역</label>
            </div>
            
            <div className="relative w-full mt-20px">
                <HorizontalMenu itemsArray={tabsArray} isState={selectedTab} setState={setSelectedTab} />
                {(selectedTab !== 0 && selectedTab !== 3) && (
                    <div className={`ml-${selectedTab * 116 + 50}px absolute bottom-0 w-20px -mb-10px overflow-hidden inline-block `}>
                        <div className="h-10px w-10px bg-gradient-to-br from-gray-d2dfea via-gray-eff3f6 to-gray-eff3f6 rotate-45 transform origin-bottom-left shadow"></div>
                    </div>
                )}
            </div>
            
            {(selectedTab !== 0 && selectedTab !== 3) && (
                <div className="mt-10px h-88px w-full bg-gray-eff3f6 rounded-xl p-4px">
                    <SubHorizontalMenu itemsArray={subTabsArray} isState={selectedSubTab} setState={setSelectedSubTab} />
                </div>
            )}

            <div className="h-63px w-full bg-gray-f9f9f9 mt-20px rounded-2xl border border-gray-dddddd flex items-center justify-center space-x-10px">
                
                {selectedTab === 3 && (
                    <div className="space-x-5px">
                        <input 
                            placeholder="리그선택"
                            className="flex-shrink-0 outline-none w-138px h-42px rounded-md border border-gray-dddddd px-10px font-spoqaMedium text-15px tracking-tight text-gray-r8c8c8c" 
                        />
                        <input
                            placeholder="팀명검색" 
                            className="flex-shrink-0 outline-none w-138px h-42px rounded-md border border-gray-dddddd px-10px font-spoqaMedium text-15px tracking-tight text-gray-r8c8c8c" />
                    </div>
                )}

                <div className="flex space-x-10px items-center w-304px h-full">
                    <div className="relative">
                        <DatePicker 
                            className="flex-shrink-0 outline-none w-138px h-42px rounded-md border border-gray-dddddd px-10px font-spoqaMedium text-15px tracking-tight text-gray-r8c8c8c focus:ml-10px"
                            locale="ko" 
                            selected={startDate} 
                            onChange={(date) => setStartDate(date)}
                            dateFormat="yyyy-MM-dd"
                        />
                        <img src={CalendarIcon} alt="" className="absolute top-0 right-0 mt-11px mr-10px" />
                    </div>
                    <span className="font-spoqaMedium text-14px text-gray-r454545">~</span>
                    <div className="relative">
                        <DatePicker 
                            className="flex-shrink-0 outline-none w-138px h-42px rounded-md border border-gray-dddddd px-10px font-spoqaMedium text-15px tracking-tight text-gray-r8c8c8c" 
                            locale="ko"
                            selected={startDate} 
                            onChange={(date) => setStartDate(date)}
                            dateFormat="yyyy-MM-dd"
                        />
                        <img src={CalendarIcon} alt="" className="absolute top-0 right-0 mt-11px mr-10px" />
                    </div>
                </div>
                <div className="flex h-full space-x-6px items-center">
                    <div className="flex items-center justify-center h-42px w-75px rounded-4px bg-blue-r004b8a">
                        <div className="flex items-center justify-center h-40px w-73px bg-black rounded-4px border border-blue-r2a699c bg-gradient-to-b from-blue-r004b8a via-blue-r004b8a to-blue-r012d53 cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white">오늘</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-center h-42px w-75px rounded-4px bg-blue-r2068b2">
                        <div className="flex items-center justify-center h-40px w-73px bg-black rounded-4px border border-blue-r3975ae bg-gradient-to-b from-blue-r125a9e via-blue-r125a9e to-blue-r0b447a cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white">1주일</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-center h-42px w-75px rounded-4px bg-blue-r286fce">
                        <div className="flex items-center justify-center h-40px w-73px bg-black rounded-4px border border-blue-r538dcf bg-gradient-to-b from-blue-r3176c5 via-blue-r3176c5 to-blue-r1c5ca5 cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white">15일</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-center h-42px w-75px rounded-4px bg-blue-r286fce">
                        <div className="flex items-center justify-center h-40px w-73px bg-black rounded-4px border border-blue-r70a8f5 bg-gradient-to-b from-blue-r5497f4 via-blue-r5497f4 to-blue-r3d71b8 cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white">1개월</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-center h-42px w-75px rounded-4px bg-gray-r171a1d">
                        <div className="flex items-center justify-center h-40px w-73px bg-black rounded-4px border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r585b5e to-gray-r303337 cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white">검색</span>
                        </div>
                    </div>
                </div>

            </div>
            {selectedTab !== 3 && (
                <div className="w-full h-full mt-20px mb-60px">
                    <BetHistoryTable />   
                </div>
            )}
            
            {selectedTab === 3 && (
                <div className="w-full h-full mt-20px">
                    <div className="space-y-15px">
                        <SportsBetHistory />
                        <SportsBetHistory />
                    </div>
                    <div className="mt-40px h-36px w-full flex items-center justify-between">
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
                        <button className="flex items-center justify-center w-159px h-36px rounded-md bg-blue-r0070d9">
                            <div className="flex items-center justify-center h-34px w-157px rounded-4px border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r1491fc to-blue-r0675db cursor-pointer">
                                <span className="font-spoqaMedium tracking-tight text-14px text-white">게시판에 내역올리기</span>
                            </div>
                        </button>
                    </div>
                </div>
            )}

            <Pagination page={page} setPage={setPage}/>   

        </div>
    )
}

export default BetHistory
