import React, { useEffect, useState } from 'react'
import Shadow from '../images/shadow.png'

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

    const tabClass = "w-full border-b-1 border-gray-d5d5d5 h-58px p-6px"
    const selectedTabClass = "w-full h-58px bg-blue-r009edf shadow-plain2 p-6px"

    const menuArray = [
        { text: optionTitle1, id: 0, icon: optionIcon1, iconHighlight: optionIconHighlight1, selectedCss: "border-b rounded-t bg-gray-f6f6f6" },
        { text: optionTitle2, id: 1, icon: optionIcon2, iconHighlight: optionIconHighlight2, selectedCss: "border-b bg-gray-fbfbfb" },
        { text: optionTitle3, id: 2, icon: optionIcon3, iconHighlight: optionIconHighlight3, selectedCss: "rounded-b bg-gray-f6f6f6" },
    ];

    function MenuList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                className={`${item.selectedCss} ${selectedTab === item.id ? selectedTabClass : tabClass}`}
                onClick={() => setSelectedTab(item.id)}
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-10px">
                        <div className={selectedTab === item.id ? "rounded-full shadow-plain" : "rounded-full"}>
                            <img className="w-full h-full" src={selectedTab === item.id ? item.iconHighlight : item.icon} alt="meunIcon" />
                        </div>
                        <label className={`cursor-pointer text-16px font-spoqa font-medium ${selectedTab === item.id ? "text-white" : "text-gray-text"}`}>{item.text}</label>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6" fill="none" viewBox="0 0 24 24" stroke={selectedTab === item.id ? "white" : "#b3b3b3"}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </button>
        ));
    }
    useEffect(
        () => {
            let timer1 = setTimeout(() => setSelectedTab(false), 100);
            return () => {
                clearTimeout(timer1);
            };
        },
        [selectedTab]
    );

    return (
        <div className="relative flex flex-col items-center w-300px h-308px border border-gray-ececec shadow-glow rounded-md px-10px bg-gradient-to-b from-white to-gray-f6f6f6 ">
            <div className="flex flex-col items-center justify-center space-y-4px pt-20px pb-15px">
                <img className="w-50px h-50px object-contain" src={mainIcon} alt="icon" />
                <span className="text-18px text-gray-r667177 font-spoqa font-medium pt-2px">{menuTitle}</span>
            </div>
            
            <div className="w-full border border-gray-d5d5d5 rounded-md shadow-plain1">
                <MenuList items={menuArray} />
            </div>
            <div className="absolute top-0 mt-308px">
                <img  src={Shadow} alt="shadow" />
            </div>

        </div>
    )
}

export default MenuCard
