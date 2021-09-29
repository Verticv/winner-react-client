import React from 'react'
import ClockIcon from '../../images/minigames/clock_blue.png'
import RefreshIcon from '../../images/minigames/refresh_icon.png'
import SelectionBg from '../../images/minigames/selection_bg.png'
import CheckIcon from '../../images/minigames/checkbox.png'
import BetIcon from '../../images/betCombination/bet_icon.png'

const MinigamesRightPanel = () => {

    const BetAmountButton = ({amount}) => (
        <button style={{width:"110px", backgroundColor: "#b3bac1"}} className="flex items-center h-46px justify-center rounded-4px">
            <div style={{width:"108px"}} className="flex items-center justify-center rounded-4px h-44px border border-white bg-gradient-to-b from-white to-blue-c4d6e6 via-gray-f5feff cursor-pointer">
                <span className="font-roboto tracking-tight text-16px text-gray-r585858">{amount}</span>
            </div>
        </button>
    )

    return (
        <div 
            style={{width: "347px"}}
            className="rounded-xl shadow-subNavbar flex flex-col"
        >
            <div 
                style={{height: "131px"}}
                className="border-b border-gray-dddddd bg-gray-fbfbfb px-7px pt-7px pb-5px space-y-4px"
            >
                <div 
                    style={{
                        background: "linear-gradient(to right, #2087f0, #1873cf", 
                        boxShadow:'inset 1px 2px 1px 0px rgba(0, 0, 0, 0.2)'
                    }} 
                    className="h-52px w-full rounded-lg flex justify-between items-center pr-6px"
                >
                    <div className="flex flex-col px-7px space-y-4px pt-px">
                        <div className="text-16px font-spoqaMedium tracking-tight text-white h-16px flex items-center">
                            08원 02일 18:25:00 <p style={{color:"#ffea00"}} className="ml-3px">[216회차]</p>
                        </div>
                        <div style={{color:"#bffff5"}} className="flex space-x-2px text-18px font-spoqaBold tracking-tight h-18px items-center">
                            <img className="object-none mb-2px" src={ClockIcon} alt="" />
                            <p>02:16</p>
                        </div>
                    </div>
                    <img src={RefreshIcon} alt="" className="cursor-pointer" />
                </div>

                <div style={{height: "62px"}} className="relative w-full rounded-sm flex">
                    <img className="absolute object-none z-10" src={SelectionBg} alt="" />
                    <div style={{width:"106px"}} className="ml-8px flex h-full z-20 flex items-center justify-center space-x-4px pt-2px pr-8px">
                        <img src={CheckIcon} alt="" />
                        <p style={{color:"#7a5a37"}} className="text-16px tracking-tight font-spoqaBold mt-px">게임선택</p>
                    </div>
                    <div style={{width:"90px"}} className="ml-18px flex h-full z-20 flex items-center justify-center pr-2px">
                        <p style={{color:"#355b7d"}} className="text-12px tracking-tight font-spoqaBold mt-px">언더/오버</p>
                    </div>
                    <div style={{width:"81px"}} className="ml-20px flex h-full z-20 flex items-center justify-center"></div>
                </div>

            </div>

            <div className="h-43px border-b border-gray-dddddd flex items-center justify-between pl-14px pr-19px">
                <p className="text-16px font-spoqaMedium tracking-tight text-gray-r454545">보유금액</p>
                <p className="text-16px font-robotoBold tracking-tight text-blue-r0056a6">3,522,170</p>
            </div>
            <div className="h-43px border-b border-gray-dddddd flex items-center justify-between pl-14px pr-19px">
                <p className="text-16px font-spoqaMedium tracking-tight text-gray-r454545">배당률</p>
                <p style={{color:"#f26522"}} className="text-16px font-roboto tracking-tight">1.95</p>
            </div>
            <div className="h-47px border-b border-gray-dddddd flex items-center justify-between pl-14px pr-13px">
                <p className="text-16px font-spoqaMedium tracking-tight text-gray-r454545">베팅금액</p>
                <p 
                    style={{color: "#d52e2e", width: "216px", height: "32px", backgroundColor: "#e8e8e8"}} 
                    className="flex items-center justify-end px-5px border rounded-4px border-gray-dddddd text-16px font-roboto tracking-tight text-blue-r0056a6"
                >
                    10,000
                </p>
            </div>
            <div className="h-43px border-b border-gray-dddddd flex items-center justify-between pl-14px pr-19px">
                <p className="text-16px font-spoqaMedium tracking-tight text-gray-r454545">적중금액</p>
                <p className="text-16px font-roboto tracking-tight text-blue-r0056a6">19,500</p>
            </div>
            
            <div style={{height:"208px"}} className="w-full bg-gray-fafafa p-7px">

                <div className="grid grid-cols-3 gap-2px">
                    <BetAmountButton amount="5,000"/>
                    <BetAmountButton amount="10,000"/>
                    <BetAmountButton amount="50,000"/>
                    <BetAmountButton amount="100,000"/>
                    <BetAmountButton amount="500,000"/>
                    <BetAmountButton amount="1,000,000"/>
                </div>

                <div className="flex space-x-2px mt-2px">
                    <button style={{width:"110px"}} className="flex items-center justify-center h-46px rounded-4px bg-gray-r171a1d">
                        <div style={{width:"108px"}} className="flex items-center justify-center h-44px rounded-4px border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e to-gray-r303337 cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-16px text-white">잔돈</span>
                        </div>
                    </button>
                    <button style={{width:"110px"}} className="flex items-center justify-center h-46px rounded-4px bg-gray-r171a1d">
                        <div style={{width:"108px"}} className="flex items-center justify-center h-44px rounded-4px border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e to-gray-r303337 cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-16px text-white">초기화</span>
                        </div>
                    </button>
                    <button style={{width:"110px"}} className="flex items-center justify-center h-46px rounded-4px bg-gray-r171a1d">
                        <div style={{width:"108px"}} className="flex items-center justify-center h-44px rounded-4px border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e to-gray-r303337 cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-16px text-white">최대</span>
                        </div>
                    </button>
                </div>

                <button style={{width:"333px"}} className="mt-5px flex items-center justify-center h-46px rounded-4px bg-blue-r2068b2">
                    <div style={{width:"331px"}} className="flex items-center justify-center h-44px rounded-4px border border-blue-r3975ae bg-gradient-to-b from-blue-r125a9e via-blue-r0e508d to-blue-r0b447a cursor-pointer">
                        <img src={BetIcon} alt="" />
                        <span className="ml-5px font-spoqaMedium tracking-tight text-16px text-white pt-px">베팅하기</span>
                    </div>
                </button>

            </div>
        </div>
    )
}

export default MinigamesRightPanel
