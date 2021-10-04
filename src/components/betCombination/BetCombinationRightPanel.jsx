import HorizontalMenu2 from 'components/horizontalMenus/HorizontalMenu2'
import React, { useEffect, useState } from 'react'
import Cart from '../../images/betCombination/cart.png'
import CartHighlight from '../../images/betCombination/cart_highlight.png'
import History from '../../images/betCombination/history.png'
import HistoryHighlight from '../../images/betCombination/history_highlight.png'
import BetIcon from '../../images/betCombination/bet_icon.png'
import TrashIcon from '../../images/betCombination/trash.png'
import LockIcon from '../../images/betCombination/lock.png'
import LockIconOn from '../../images/betCombination/lock_on.png'
import RefrshIcon from '../../images/betCombination/refresh.png'
import { format } from 'date-fns'
import { ko } from "date-fns/locale"

const BetCombinationRightPanel = ({isPanelFixed, setPanelFixed}) => {

    const tabsArray = [
        { text: "베팅카트", icon: Cart, iconHighlight: CartHighlight , id: 0, number: 2 },
        { text: "베팅내역", icon: History, iconHighlight: HistoryHighlight , id: 1, number: 2 }
    ];

    const dateFormat = "yyyy-MM-dd (eee)"
    const dateFormat1 = "hh:mm:ss"


    const [time, setTime] = useState(Date.now());
    const [inputValue, setInputValue] = useState(null)
    var nf = new Intl.NumberFormat();

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    const [selectedTab, setSelectedTab] = useState(0)

    const BetAmountButton = ({amount, setInputValue}) => (
        <button 
            style={{width:"94px", backgroundColor: "#b3bac1"}} 
            className="flex items-center justify-center h-46px w-75px rounded-4px"
            onClick={() => setInputValue(amount)}
        >
            <div 
                style={{
                    width:"92px",
                    background: "linear-gradient(to bottom, #feffff, #cedeed)"
                    }} 
                className="flex items-center justify-center h-44px w-73px rounded-4px border border-white bg-gradient-to-b cursor-pointer"
            >
                <span className="font-roboto tracking-tight text-16px text-gray-r585858 pt-px">{nf.format(amount)}</span>
            </div>
        </button>
    )

    return (
        <div className="w-fill rounded-xl shadow-subNavbar overflow-hidden">

            <div className="relative bg-gradient-to-b from-gray-f8f9fb via-gray-efeff0 to-gray-e5e6e6 h-54px w-full shadow-plain5 z-20 rounded-t-xl flex items-center justify-between px-8px">
                <div className="flex flex-col space-y-2px">
                    <div className="h-14px flex items-center text-14px font-spoqaMedium tracking-tight text-gray-r585858">{format(time, dateFormat, { locale : ko })}</div>
                    <div className="h-14px flex items-center text-14px font-spoqaMedium tracking-tight text-blue-r0056a6">{format(time, dateFormat1, { locale : ko })}</div>
                </div>

                <div className="flex space-x-2px">
                    <button style={{width: "38px", height: "38px", borderColor:"#9c9c9c"}} className="rounded-4px border bg-gradient-to-br from-white to-gray-r9c9c9c flex items-center justify-center">
                        <div style={{width: "34px", height: "34px", borderColor:"#9c9c9c"}} className="flex items-center justify-center bg-gradient-to-b from-gray-ececec to-gray-d8d8d8">
                            <img src={TrashIcon} alt="" />
                        </div>
                    </button>
                    <button onClick={() => setPanelFixed(!isPanelFixed)} style={{width: "38px", height: "38px", borderColor:"#9c9c9c"}} className="rounded-4px border bg-gradient-to-br from-white to-gray-r9c9c9c flex items-center justify-center">
                        <div style={{width: "34px", height: "34px", borderColor:"#9c9c9c"}} className="flex items-center justify-center bg-gradient-to-b from-gray-ececec to-gray-d8d8d8">
                            <img src={isPanelFixed ? LockIconOn : LockIcon} alt="" />
                        </div>
                    </button>
                    <button style={{width: "38px", height: "38px", borderColor:"#9c9c9c"}} className="rounded-4px border bg-gradient-to-br from-white to-gray-r9c9c9c flex items-center justify-center">
                        <div style={{width: "34px", height: "34px", borderColor:"#9c9c9c"}} className="flex items-center justify-center bg-gradient-to-b from-gray-ececec to-gray-d8d8d8">
                            <img src={RefrshIcon} alt="" />
                        </div>
                    </button>
                </div>
                
            </div>

            <div style={{height:"112px"}} className="bg-white border-b border-gray-dddddd pt-7px pb-5px px-3px flex flex-col">
                <HorizontalMenu2 itemsArray={tabsArray} isState={selectedTab} setState={setSelectedTab} />

                <div style={{height: "38px", backgroundColor: "#e8e8e8"}} className="mt-5px w-full rounded-md border border-gray-dddddd flex items-center px-8px">
                    <p className="text-14px font-spoqaMedium tracking-tight text-gray-r454545">베팅을 선택하세요.</p>
                </div>
            </div>

            <div className="h-47px border-b border-gray-dddddd flex items-center justify-between pl-11px pr-16px">
                <p className="text-16px font-spoqaMedium tracking-tight text-gray-r454545">보유금액</p>
                <p className="text-16px font-robotoBold tracking-tight text-blue-r0056a6">3,522,170</p>
            </div>

            <div className="h-34px border-b border-gray-dddddd flex  pl-11px pr-16px items-center justify-between bg-gray-fafafa">
                <p className="text-14px font-spoqaMedium tracking-tight text-gray-r7b7b7b">베팅 최소금액</p>
                <p style={{color: "#d52e2e"}} className="text-14px font-roboto tracking-tight">5,000</p>
            </div>
            
            <div className="h-34px border-b border-gray-dddddd flex pl-11px pr-16px items-center justify-between bg-gray-fafafa">
                <p className="text-14px font-spoqaMedium tracking-tight text-gray-r7b7b7b">베팅 최대금액</p>
                <p className="text-14px font-roboto tracking-tight">7,000,000</p>
            </div>

            <div className="h-34px border-b border-gray-dddddd flex pl-11px pr-16px items-center justify-between bg-gray-fafafa">
                <p className="text-14px font-spoqaMedium tracking-tight text-gray-r7b7b7b">적중 최대금액</p>
                <p className="text-14px font-roboto tracking-tight">20,000,000</p>
            </div>

            <div className="h-47px border-b border-gray-dddddd flex items-center justify-between pl-11px pr-16px">
                <p className="text-14px font-spoqaMedium tracking-tight text-gray-r454545">배당률합계</p>
                <p style={{color: "#f26522"}} className="text-14px font-roboto tracking-tight text-blue-r0056a6">1.00</p>
            </div>

            <div className="h-47px border-b border-gray-dddddd flex items-center justify-between pl-11px pr-10px">
                <p className="text-14px font-spoqaMedium tracking-tight text-gray-r454545">베팅금액</p>
                <input 
                    style={{color: "#d52e2e", width: "191px", height: "32px", backgroundColor: "#e8e8e8"}} 
                    className="flex items-center justify-end px-5px border rounded-4px border-gray-dddddd text-14px font-roboto tracking-tight outline-none text-right"
                    placeholder="0"
                    value={nf.format(inputValue)}
                    onChange={e => setInputValue(e.target.value.replace(/,/g, ''))}
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                        }
                    }}
                />
            </div>

            <div className="h-47px border-b border-gray-dddddd flex items-center justify-between pl-11px pr-16px">
                <p className="text-14px font-spoqaMedium tracking-tight text-gray-r454545">적중예상금액</p>
                <p className="text-14px font-roboto tracking-tight text-blue-r0056a6">11,000</p>
            </div>

            <div style={{height:"213px"}} className="w-full bg-gray-fafafa p-10px">

                <div className="grid grid-cols-3 gap-2px">
                    <BetAmountButton amount={5000} setInputValue={setInputValue}/>
                    <BetAmountButton amount={10000} setInputValue={setInputValue}/>
                    <BetAmountButton amount={50000} setInputValue={setInputValue}/>
                    <BetAmountButton amount={100000} setInputValue={setInputValue}/>
                    <BetAmountButton amount={500000} setInputValue={setInputValue}/>
                    <BetAmountButton amount={1000000} setInputValue={setInputValue}/>
                </div>

                <div className="flex space-x-2px mt-2px">
                    <button 
                    style={{width:"94px"}} 
                    className="flex items-center justify-center h-46px w-75px rounded-4px bg-gray-r171a1d"
                    onClick={() => setInputValue(3522170/2)}
                    >
                        <div style={{width:"92px"}} className="flex items-center justify-center h-44px w-73px rounded-4px border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e to-gray-r303337 cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-16px text-white pt-2px">하프</span>
                        </div>
                    </button>
                    <button 
                        style={{width:"94px"}} 
                        className="flex items-center justify-center h-46px w-75px rounded-4px bg-gray-r171a1d"
                        onClick={() => setInputValue(3522170)}
                    >
                        <div style={{width:"92px"}} className="flex items-center justify-center h-44px w-73px rounded-4px border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e to-gray-r303337 cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-16px text-white pt-2px">최대</span>
                        </div>
                    </button>
                    <button 
                        style={{width:"94px"}} 
                        className="flex items-center justify-center h-46px w-75px rounded-4px bg-gray-r171a1d"
                        onClick={() => setInputValue(0)}
                    >
                        <div style={{width:"92px"}} className="flex items-center justify-center h-44px w-73px rounded-4px border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e to-gray-r303337 cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-16px text-white pt-2px">정정</span>
                        </div>
                    </button>
                </div>

                <button style={{width:"287px"}} className="mt-5px flex items-center justify-center h-46px rounded-4px bg-blue-r2068b2">
                    <div style={{width:"285px"}} className="flex items-center justify-center h-44px rounded-4px border border-blue-r3975ae bg-gradient-to-b from-blue-r125a9e via-blue-r0e508d to-blue-r0b447a cursor-pointer">
                        <img src={BetIcon} alt="" />
                        <span className="ml-5px font-spoqaMedium tracking-tight text-16px text-white pt-px">베팅하기</span>
                    </div>
                </button>

            </div>

        </div>
    )
}

export default BetCombinationRightPanel
