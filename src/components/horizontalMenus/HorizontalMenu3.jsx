import React from 'react'
import { useHistory } from 'react-router';
import ClockIcon from '../../images/minigames/clock.png'
import ClockIconWhite from '../../images/minigames/clock_white.png'

const HorizontalMenu3 = ({
    itemsArray, 
    selectedTab = "", 
    setSelectedTab,
    setSelectedOption
}) => {

    const history = useHistory();

    function TabsList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                className={`${
                    selectedTab === item.path
                    ? "bg-blue-r58baf7" 
                    : "bg-white"
                } overflow-hidden h-59px w-full rounded-lg flex justify-end border border-gray-dddddd`} 
                onClick={() => {
                    setSelectedTab(item.path)
                    history.push(item.path)
                    setSelectedOption([
                        {
                            type: "",
                            name: "",
                            selection: "",
                            buttonType: "",
                            subtitle: null
                        }
                    ])
                }}
            >
                <div 
                    style={{
                        height: "54px",
                        background: selectedTab === item.path 
                        ? "linear-gradient(to bottom, #2087f0, #1873cf)"
                        : "linear-gradient(to bottom, #c4d6e6, #e8f3fd 26%, #ffffff)",
                        borderBottomLeftRadius:"6px",
                        borderBottomRightRadius:"6px",
                        borderColor: selectedTab === item.path ? "#1a73ce" : "#d6dfe8"
                    }}
                    className={`mt-3px w-full rounded-b-md rounded-t-lg flex items-center justify-between pr-20px border-l border-r border-b`}
                >
                    <div className={`flex items-center mb-2px ml-px`}>
                        <img 
                            className={`
                            ${
                                item.id === 0 
                                ? "ml-15px"
                                : item.id === 1 
                                ? "ml-12px"
                                : item.id === 2
                                ? "ml-18px"
                                : "ml-20px"
                            }`} 
                            src={item.img} 
                            alt="" 
                        />
                        <span 
                            style={{color: selectedTab === item.path ? "#ffffff" : "#616161"}} 
                            className={`
                            ${
                                item.id === 0 
                                ? "ml-4px"
                                : item.id === 1 
                                ? "ml-6px"
                                : item.id === 2
                                ? "ml-8px"
                                : "ml-7px"
                            } text-20px tracking-tight font-spoqaBold`}
                        >
                            {item.text}
                        </span>
                    </div>
                    
                    <div className="flex items-center -mr-px mt-2px">
                        <img className="mr-4px object-none mb-5px" src={selectedTab === item.path ? ClockIconWhite : ClockIcon} alt="" />
                        <div 
                            style={{color: selectedTab === item.path ? "#ffffff" : "#748496"}}
                            className="text-24px tracking-tight font-swagger flex h-24px items-center mb-px"
                        >
                            {item.time}
                        </div>
                    </div>
                </div>
            </button>
        ));
    }

    return (
        <div className="flex w-full h-59px space-x-2px">
            <TabsList items={itemsArray} />
        </div>
    )
}

export default HorizontalMenu3
