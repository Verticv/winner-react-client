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
import ReactPaginate from 'react-paginate';
import './Pagination.css'
import LeftIcon from '../../images/myPage/betHistory/left.png'
import RightIcon from '../../images/myPage/betHistory/right.png'
import DoubleLeftIcon from '../../images/myPage/betHistory/double_left.png'
import DoubleRightIcon from '../../images/myPage/betHistory/double_right.png'

registerLocale('ko', ko)

const BetHistory = () => {

    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedSubTab, setSelectedSubTab] = useState(0)
    const [startDate, setStartDate] = useState(new Date())
    const [page, setPage] = useState()

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

    const LeftArrow = () => (
        <img src={LeftIcon} alt="arrow" />
    )
    const RightArrow = () => (
        <img src={RightIcon} alt="arrow" />
    )

    return (
        <div className="flex flex-col items-center">
            <div className="flex h-21px w-full">
                <div className="w-8px h-20px bg-gradient-to-b from-blue-gradLight to-blue-gradDark rounded-sm mt-px"/>
                <label className="font-spoqaMedium text-22px text-gray-r585858 ml-4px -mt-5px" >베팅내역</label>
            </div>
            
            <div className="relative w-full mt-20px">
                <HorizontalMenu itemsArray={tabsArray} isState={selectedTab} setState={setSelectedTab} />
                {selectedTab !== 0 && (
                    <div className={`ml-${selectedTab * 116 + 50}px absolute bottom-0 w-20px -mb-10px overflow-hidden inline-block `}>
                        <div className="h-10px w-10px bg-gradient-to-br from-gray-d2dfea via-gray-eff3f6 to-gray-eff3f6 rotate-45 transform origin-bottom-left shadow"></div>
                    </div>
                )}
                
            </div>
            
            {selectedTab !== 0 && (
                <div className="mt-10px h-88px w-full bg-gray-eff3f6 rounded-xl p-4px">
                    <SubHorizontalMenu itemsArray={subTabsArray} isState={selectedSubTab} setState={setSelectedSubTab} />
                </div>
            )}

            <div className="h-63px w-full bg-gray-f9f9f9 mt-20px rounded-2xl border border-gray-dddddd flex items-center justify-center space-x-10px">
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
            {page === 0 && (
                <div className="w-full h-full mt-20px">
                    <table className="shadow-subNavbar rounded-3xl overflow-hidden">
                        <thead className="bg-gray-fafafa rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px">
                            <tr>
                                <th className="w-235px">베팅시간</th>
                                <th className="w-170px">게임종류</th>
                                <th className="w-170px">티켓번호</th>
                                <th className="w-170px">베팅금액</th>
                                <th className="w-170px">적중/손실금액</th>
                                <th className="w-126px">상태</th>
                            </tr>
                        </thead>
                        <tbody className="w-full text-585858 text-14px tracking-tight font-spoqaMedium">
                            <tr className="bg-gray-fefefe rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px w-full">
                                <td className="w-235px font-roboto h-56px text-center">2021-06-29 15:46:13</td>
                                <td className="w-170px h-56px text-center">에볼루션</td>
                                <td className="w-170px h-56px text-center">7193915</td>
                                <td className="w-170px h-56px text-right">12,000</td>
                                <td className="w-170px h-56px text-right">-12,000</td>
                                <td className="w-126px h-56px text-center">패</td>
                            </tr>
                            <tr className="bg-gray-f7f9fc rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px">
                                <td className="w-235px font-roboto h-56px text-center">2021-06-29 15:45:42</td>
                                <td className="w-170px h-56px text-center">에볼루션</td>
                                <td className="w-170px h-56px text-center">7193914</td>
                                <td className="w-170px h-56px text-right">900,000,000</td>
                                <td className="w-170px h-56px text-right text-red-600">+900,000,000</td>
                                <td className="w-126px h-56px text-center text-red-600">승</td>
                            </tr>
                            <tr className="bg-gray-fefefe rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px w-full">
                                <td className="w-235px font-roboto h-56px text-center">2021-06-29 15:46:13</td>
                                <td className="w-170px h-56px text-center">프레그메틱플레이</td>
                                <td className="w-170px h-56px text-center">7193913</td>
                                <td className="w-170px h-56px text-right">800,000</td>
                                <td className="w-170px h-56px text-right">-800,000</td>
                                <td className="w-126px h-56px text-center">패</td>
                            </tr>
                        </tbody>
                    </table>            
                </div>
            )}
              

            <div className="relative flex w-297px h-32px my-60px items-center justify-center">
                <img className="absolute left-0 cursor-pointer h-32px object-none" src={DoubleLeftIcon} alt="" onClick={() => setPage(0)} />
                <ReactPaginate
                    activeClassName={'item active font-roboto w-32px h-32px'}
                    breakClassName={'item'}
                    breakLabel={'...'}
                    containerClassName={'pagination'}
                    disabledClassName={'disabled-page'}
                    marginPagesDisplayed={5}
                    nextClassName={"item next "}
                    nextLabel={<RightArrow />}
                    onPageChange={(selected) => {
                        var s = JSON.stringify(selected.selected);
                        var d = JSON.parse(s);
                        setPage(d); 
                    }}
                    pageCount={5}
                    pageClassName={'item pagination-page font-roboto'}
                    pageRangeDisplayed={5}
                    previousClassName={"previous"}
                    previousLabel={<LeftArrow />}
                    initialPage={0}
                    forcePage={page}
                    pageLinkClassName="p-10px"
                />
                <img className="absolute right-0 cursor-pointer h-32px object-none" src={DoubleRightIcon} alt="" onClick={() => setPage(4)} />
            </div>
        </div>
    )
}

export default BetHistory
