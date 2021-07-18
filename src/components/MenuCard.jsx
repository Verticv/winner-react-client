import React, { useState } from 'react'

const MenuCard = ({ 
    mainIcon, 
    menuTitle, 
    optionTitle1, 
    optionTitle2, 
    optionTitle3,
    optionIcon1,
    optionIconHighlight1,
    optionIcon2,
    optionIconHighlight2,
    optionIcon3,
    optionIconHighlight3 
}) => {

    const [selectedTab, setSelectedTab] = useState()

    const tabClass = "w-full h-1/3 border-b-1 p-2"
    const selectedTabClass = "w-full h-1/3 bg-blue-400 shadow-inner p-2"

    const menuArray = [
        { text: optionTitle1, id: 0, icon: optionIcon1, iconHighlight: optionIconHighlight1, selectedCss: "border-b rounded-t" },
        { text: optionTitle2, id: 1, icon: optionIcon2, iconHighlight: optionIconHighlight2, selectedCss: "border-b" },
        { text: optionTitle3, id: 2, icon: optionIcon3, iconHighlight: optionIconHighlight3, selectedCss: "rounded-b" },
    ];

    function MenuList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                className={`${item.selectedCss} ${selectedTab === item.id ? selectedTabClass : tabClass}`}
                onClick={() => setSelectedTab(item.id)}
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className={selectedTab === item.id ? "w-14 h-14 rounded-full shadow-plain" : "w-14 h-14 rounded-full "}>
                            <img className="w-full h-full" src={selectedTab === item.id ? item.iconHighlight : item.icon} alt="meunIcon" />
                        </div>
                        <label className={`cursor-pointer text-lg font-semibold ${selectedTab === item.id ? "text-white" : "text-gray-500"}`}>{item.text}</label>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={selectedTab === item.id ? "white" : "lightGray"}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </button>
        ));
    }

    return (
        <div className="flex flex-col items-center w-full h-96 border shadow-xl rounded-md p-4">
            <div className="flex items-center justify-center h-24 w-24">
                <img src={mainIcon} alt="icon" />
            </div>
            <span className="pb-4 text-lg font-bold text-gray-500">{menuTitle}</span>
            
            <div className="w-full h-full border rounded-md shadow-md">
                <MenuList items={menuArray} />
            </div>
        </div>
    )
}

export default MenuCard
