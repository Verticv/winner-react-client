import React from 'react'
import ClockIcon from '../../images/minigames/clock.png'
import ClockIconWhite from '../../images/minigames/clock_white.png'

const HorizontalMenu3 = ({
    itemsArray, 
    selectedTab = 0, 
    setSelectedTab
}) => {


    function TabsList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                className={`${
                    selectedTab === item.id
                    ? "bg-blue-r58baf7" 
                    : "bg-white"
                } overflow-hidden h-59px w-full rounded-lg flex justify-end border border-gray-dddddd`} 
                onClick={() => setSelectedTab(item.id)}
            >
                <div 
                    style={{height: "57px"}}
                    className={`${
                        selectedTab === item.id 
                        ? "bg-gradient-to-b from-blue-r2087f0 via-blue-r2087f0 to-blue-gradDark"
                        : "bg-gradient-to-b from-blue-c4d6e6 via-gray-f5feff to-white"
                    } mt-3px w-full rounded-b-md rounded-t-lg flex items-center justify-between pr-20px`}
                >
                    <img className="ml-14px" src={item.img} alt="" />
                    <div className="flex items-center">
                        <img className="mr-5px object-none mb-3px" src={selectedTab === item.id ? ClockIconWhite : ClockIcon} alt="" />
                        <div 
                            style={{color: selectedTab === item.id ? "#ffffff" : "#748496"}}
                            className="text-24px tracking-tight font-swagger flex h-24px items-center"
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
