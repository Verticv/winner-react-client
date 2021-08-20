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
registerLocale('ko', ko)

const BetHistory = () => {

    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedSubTab, setSelectedSubTab] = useState(0)
    const [startDate, setStartDate] = useState(new Date());

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
        <div>
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

            <div className="h-63px w-full bg-gray-f9f9f9 mt-20px rounded-2xl border border-gray-dddddd flex items-center justify-center">
                <div className="flex space-x-10px items-center w-303px h-full overflow-hidden">
                    <DatePicker 
                        className="outline-none w-138px h-42px rounded-md border border-gray-dddddd px-10px font-spoqaMedium text-15px tracking-tight text-gray-r8c8c8c focus:ml-10px" 
                        locale="ko" 
                        selected={startDate} 
                        onChange={(date) => setStartDate(date)}
                        dateFormat="yyyy-MM-dd"
                    />
                    <span className="font-spoqaMedium text-14px text-gray-r454545">~</span>
                    <DatePicker 
                        className="relative outline-none w-138px h-42px rounded-md border border-gray-dddddd px-10px font-spoqaMedium text-15px tracking-tight text-gray-r8c8c8c" 
                        locale="ko" 
                        popperClassName="absolute"
                        selected={startDate} 
                        onChange={(date) => setStartDate(date)}
                        dateFormat="yyyy-MM-dd"
                    />
                </div>
                
            </div>

        </div>
    )
}

export default BetHistory
