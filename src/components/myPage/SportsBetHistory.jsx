import React, { useState } from 'react'
import './RadioButton.css'
import FootballIcon from '../../images/myPage/betHistory/football.png'
import USFlagIcon from '../../images/myPage/betHistory/us_flag.png'
import ClockIcon from '../../images/myPage/betHistory/clock.png'

const SportsBetHistory = () => {

    const [isChecked, setChecked] = useState(false)

    const CardContent = ({bet, result, choice, score}) => (
        <div className="flex items-center w-full h-56px bg-gray-fefefe border-b border-gray-dddddd">
            <div className="-space-y-4px flex flex-col items-center justify-center w-122px h-56px font-spoqaMedium text-14px tracking-tight text-gray-r454545">
                <span>승무패</span> 
                <span>(연장포함)</span>
            </div>
            <div className="flex space-x-4px">
                <button className={`flex items-center justify-center w-285px h-36px rounded-lg ${bet === "left" ? "bg-red-cb4343" : "bg-gray-dddddd"}`}>
                    <div className={`${
                        bet === "left" 
                        ? "text-white border-red-ff7982 from-red-ff535f via-red-ff535f to-red-ee4e5a" 
                        : "border-white from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb text-gray-r454545"} 
                        flex items-center justify-between h-34px w-283px rounded-lg border bg-gradient-to-b cursor-pointer px-10px`
                    }>
                        <span className="truncate w-108px text-left font-spoqaMedium tracking-tight text-14px">CF파추카</span>
                        <span className="font-spoqaMedium tracking-tight text-14px">2.26</span>
                    </div>
                </button>

                <button className={`flex group items-center justify-center w-81px h-36px rounded-lg bg-gray-dddddd ${bet === "middle" ? "bg-red-cb4343" : "bg-gray-dddddd"}`}>
                    <div className={`${
                        bet === "middle" 
                        ? "text-white border-red-ff7982 from-red-ff535f via-red-ff535f to-red-ee4e5a" 
                        : "border-white from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb text-gray-r454545"}
                        flex items-center justify-center h-34px w-79px rounded-lg border border-white bg-gradient-to-b from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb cursor-pointer`}>
                        <span className="font-spoqaMedium tracking-tight text-14px">2.96</span>
                    </div>
                </button>

                <button className={`${bet === "right" ? "bg-red-cb4343" : "bg-gray-dddddd"} flex group items-center justify-center w-285px h-36px rounded-lg bg-gray-dddddd`}>
                    <div className={`${
                        bet === "right" 
                        ? "text-white border-red-ff7982 from-red-ff535f via-red-ff535f to-red-ee4e5a" 
                        : "border-white from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb text-gray-r454545"} 
                        flex items-center justify-between h-34px w-283px rounded-lg border border-white bg-gradient-to-b from-gray-f9f9f9 via-gray-f9f9f9 to-gray-ebebeb cursor-pointer px-10px`}>
                        <span className="font-spoqaMedium tracking-tight text-14px">2.26</span>
                        <span className="truncate w-108px font-spoqaMedium tracking-tight text-14px">과달라하라 차바스</span>
                    </div>
                </button>
            </div>

            <div className="flex ml-10px font-spoqaMedium tracking-tight text-14px text-center">
                <div className="w-99px">{score}</div>
                <div className="w-61px">{choice === "home" ? "홈팀 승" : "원정팀 승"}</div>
                <div className={`${
                    result === "win" 
                    ? "text-red-500" 
                    : result === "lose" 
                    ? "text-gray-r454545" 
                    : result === "cancel" 
                    ? "text-blue-r0056a6" 
                    : "text-gray-r454545"} 
                    w-73px`}
                >{
                    result === "win" 
                    ? "승" 
                    : result === "lose" 
                    ? "패" 
                    : result === "cancel" 
                    ? "취소" 
                    : "결과없음"}</div>
            </div>
        </div>
    )

    const Cards = () => (
        <div className="w-full rounded-lg overflow-hidden shadow-subNavbar">
            <div className="flex items-center justify-between h-56px w-full bg-blue-r3591d5 border-b border-gray-dddddd px-20px">
                <div className="flex items-center">
                    <img src={FootballIcon} alt="" />
                    <img className="ml-5px" src={USFlagIcon} alt="" />
                    <span className="ml-5px font-spoqaMedium text-20px tracking-tight text-white">MLS</span>
                </div>
                <div className="flex items-center">
                    <img src={ClockIcon} alt="" />
                    <span className="ml-5px font-spoqa text-16px tracking-tight text-white">2021-06-29 15:45</span>
                </div>
            </div>
            <div className="flex flex-col w-full bg-gray-fefefe border-b border-gray-dddddd">
                <CardContent bet="left" result="win" choice="home" score="4 : 4"/>
                <CardContent bet="middle" result="lose" choice="away" score="1 : 2"/>
                <CardContent bet="right" result="cancel"  choice="home" score="3 : 9"/>
            </div>
        </div>
    )

    const Cards1 = () => (
        <div className="w-full rounded-lg overflow-hidden shadow-subNavbar">
            <div className="flex items-center justify-between h-56px w-full bg-blue-r3591d5 border-b border-gray-dddddd px-20px">
                <div className="flex items-center">
                    <img src={FootballIcon} alt="" />
                    <img className="ml-5px" src={USFlagIcon} alt="" />
                    <span className="ml-5px font-spoqaMedium text-20px tracking-tight text-white">MLS</span>
                </div>
                <div className="flex items-center">
                    <img src={ClockIcon} alt="" />
                    <span className="ml-5px font-spoqa text-16px tracking-tight text-white">2021-06-29 15:45</span>
                </div>
            </div>
            <div className="flex flex-col w-full bg-gray-fefefe border-b border-gray-dddddd">
                <CardContent bet="left" result="win" choice="home" score="4 : 4"/>
            </div>
        </div>
    )



    return (
        <div className="w-full shadow-subNavbar rounded-3xl bg-gray-fafafa pb-10px">
            <div className="flex h-54px w-full  font-spoqaMedium text-14px tracking-tight text-gray-r454545">
                <div className="w-138px h-full flex items-center justify-center">베팅구분</div>
                <div className="w-274px h-full flex items-center justify-center">승(홈)</div>
                <div className="w-100px h-full flex items-center justify-center">무</div>
                <div className="w-284px h-full flex items-center justify-center">패(원정)</div>
                <div className="w-108px h-full flex items-center justify-center">스코어</div>
                <div className="w-50px h-full flex items-center justify-center">선택</div>
                <div className="w-80px h-full flex items-center justify-center">결과</div>
            </div>

            <div className="w-full px-10px space-y-10px">
                <Cards />
                <Cards1 />
            </div>
            
            <div className="flex w-full px-10px mt-10px space-x-10px">
                <table>
                    <div className="flex w-auto h-36px rounded-lg bg-gray-efefef font-spoqaMedium text-14px tracking-tight text-gray-r454545">
                        <div className="w-45px h-full flex items-center justify-center">선택</div>
                        <div className="w-131px h-full flex items-center justify-center border-l border-gray-fafafa">베팅시간</div>
                        <div className="w-131px h-full flex items-center justify-center border-l border-gray-fafafa">베팅금액</div>
                        <div className="w-98px h-full flex items-center justify-center border-l border-gray-fafafa">배당률</div>
                        <div className="w-131px h-full flex items-center justify-center border-l border-gray-fafafa">예상적중금액</div>
                        <div className="w-131px h-full flex items-center justify-center border-l border-gray-fafafa">당첨금</div>
                        <div className="w-116px h-full flex items-center justify-center border-l border-gray-fafafa">티켓번호</div>
                    </div>
                    <div className="flex w-auto h-36px font-spoqaMedium text-14px tracking-tight text-gray-r454545">
                        <div className="w-45px h-full flex items-center justify-center">
                            <input 
                                className="radio" 
                                type="checkbox" 
                                name="radio" 
                                checked={isChecked}
                                onClick={() => setChecked(!isChecked)}
                            />
                        </div>
                        <div className="w-131px h-full flex items-center justify-center border-l border-gray-fafafa">2021-06-29 15:45</div>
                        <div className="w-131px h-full flex items-center justify-end border-l border-gray-fafafa">5,000원</div>
                        <div className="w-98px h-full flex items-center justify-center border-l border-gray-fafafa">4.34</div>
                        <div className="w-131px h-full flex items-center justify-end border-l border-gray-fafafa">21,715원</div>
                        <div className="w-131px h-full flex items-center justify-end border-l border-gray-fafafa">0원</div>
                        <div className="w-116px h-full flex items-center justify-center border-l border-gray-fafafa">1891241599</div>
                    </div>
                </table>
                
                <div className="flex space-x-5px">
                    <button className="flex items-center justify-center w-111px h-73px rounded-md bg-blue-r0070d9">
                        <div className="flex items-center justify-center h-71px w-109px rounded-4px border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r1491fc to-blue-r0675db cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white">내역올리기</span>
                        </div>
                    </button>
                    <button className="flex items-center justify-center w-111px h-73px rounded-md bg-red-cb4343">
                        <div className="flex items-center justify-center h-71px w-109px rounded-4px border border-red-f36576 bg-gradient-to-b from-red-f03a50 via-red-f03a50 to-red-cf254d cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-white">내역삭제</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SportsBetHistory
