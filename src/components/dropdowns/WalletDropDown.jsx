import React, { useState } from 'react'
import ChargeMoneyIcon from '../../images/wallet/charge_money_gradient.png'
import ChargeMoneyIconHighlight from '../../images/menu/charge_money_highlight.png'
import ExchangeIcon from '../../images/wallet/exchange_icon_gradient.png'
import ExchangeIconHighlight from '../../images/menu/exchange_icon_highlight.png'
import PointExchangeIcon from '../../images/wallet/point_exchange_gradient.png'
import PointExchangeIconHighlight from '../../images/menu/point_exchange_highlight.png'

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
                className={`${selectedTab === item.id ? "bg-blue-500" : "bg-white"} flex w-full items-center p-1 h-12 rounded-full`} 
                onClick={() => setSelectedTab(item.id)}
            >
                <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 border">
                    <img className="h-auto w-10 bg-white rounded-full flex items-center justify-center" src={selectedTab === item.id ? item.iconHighlight : item.icon} alt="icon"></img>
                </div>
                <div className="w-full flex justify-center mr-3">                
                    <label className={`${selectedTab === item.id ? "text-white" : "text-gray-500"} font-bold cursor-pointer`}>{item.text}</label>
                </div>
            </button>
        ));
    }

    return (
        <div className="bg-white shadow-plain rounded-3xl bg-white w-48 p-1 space-y-1">
            <MenuList items={menuArray} />
        </div>
    )
}

export default WalletDropDown
