import React, { useState } from 'react'
import ChargeMoneyIcon from '../../images/wallet/charge_money_gradient.png'
import ChargeMoneyIconHighlight from '../../images/wallet/charge_money_highlight.png'
import ExchangeIcon from '../../images/wallet/exchange_icon_gradient.png'
import ExchangeIconHighlight from '../../images/wallet/exchange_icon_highlight.png'
import PointExchangeIcon from '../../images/wallet/point_exchange_gradient.png'
import PointExchangeIconHighlight from '../../images/wallet/point_exchange_highlight.png'

const WalletDropDown = () => {

    const [selectedTab, setSelectedTab] = useState()

    const menuArray = [
        { icon: ChargeMoneyIcon, iconHighlight: ChargeMoneyIconHighlight, text: "보유머니충전", id: 0 },
        { icon: ExchangeIcon, iconHighlight: ExchangeIconHighlight, text: "보유머니환전", id: 1 },
        { icon: PointExchangeIcon, iconHighlight: PointExchangeIconHighlight, text: "포인트전환", id: 2 }
    ];

    function MenuList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                className={`${selectedTab === item.id ? "bg-gradient-to-br from-blue-gradLight to-blue-gradDark shadow-plain2" : "bg-white"} flex w-full items-center p-4px h-40px rounded-full`} 
                onPointerDown={() => setSelectedTab(item.id)}
                onPointerUp={() => setSelectedTab(false)}
            >
                <div className={`${selectedTab === item.id && "shadow-plain3"} bg-white rounded-full flex items-center justify-center flex-shrink-0`} >
                    <img className="object-none" src={selectedTab === item.id ? item.iconHighlight : item.icon} alt="icon"></img>
                </div>
                <div className="w-full flex justify-center mr-3">                
                    <label className={`${selectedTab === item.id ? "text-white" : "text-gray-subNavbar"} font-spoqaBold text-14px cursor-pointer`}>{item.text}</label>
                </div>
            </button>
        ));
    }

    return (
        <div className="relative bg-white shadow-plain rounded-20px bg-white w-184px h-126px p-2px flex flex-col items-center -mt-5px -mr-28px">
            <div class="absolute top-0 -mt-2 ml-2 w-4 overflow-hidden inline-block">
                <div class="h-2 w-2 bg-white rotate-45 transform origin-bottom-left shadow"></div>
            </div>
            <MenuList items={menuArray} />
        </div>
    )
}

export default WalletDropDown
