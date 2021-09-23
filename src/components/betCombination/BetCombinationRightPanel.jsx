import HorizontalMenu2 from 'components/horizontalMenus/HorizontalMenu2'
import React, { useState } from 'react'
import Cart from '../../images/betCombination/cart.png'
import CartHighlight from '../../images/betCombination/cart_highlight.png'
import History from '../../images/betCombination/history.png'
import HistoryHighlight from '../../images/betCombination/history_highlight.png'

const BetCombinationRightPanel = () => {

    const tabsArray = [
        { text: "베팅카트", icon: Cart, iconHighlight: CartHighlight , id: 0, number: 2 },
        { text: "베팅내역", icon: History, iconHighlight: HistoryHighlight , id: 1, number: 2 }
    ];

    const [selectedTab, setSelectedTab] = useState(0)

    return (
        <div className="w-fill rounded-xl shadow-subNavbar">

            <div className="relative bg-gradient-to-b from-gray-f8f9fb via-gray-efeff0 to-gray-e5e6e6 h-54px w-full shadow-plain5 z-20 rounded-t-xl"></div>

            <div style={{height:"112px"}} className="bg-white border-b border-gray-dddddd pt-7px pb-5px px-3px">
                <HorizontalMenu2 itemsArray={tabsArray} isState={selectedTab} setState={setSelectedTab} />
            </div>
            
        </div>
    )
}

export default BetCombinationRightPanel
