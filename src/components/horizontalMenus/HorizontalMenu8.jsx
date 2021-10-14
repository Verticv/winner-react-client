import React from 'react'

const HorizontalMenu8 = ({
    itemsArray, 
    selectedTab,
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
                } overflow-hidden h-80px w-full rounded-lg flex justify-end border border-gray-dddddd`} 
                onClick={() => {
                    setSelectedTab(item.id)
                }}
            >
                <div 
                    style={{
                        background: selectedTab === item.id
                        ? "linear-gradient(to bottom, #2087f0, #1873cf)"
                        : "linear-gradient(to bottom, #c4d6e6, #e8f3fd 26%, #ffffff )",
                        borderBottomLeftRadius:"6px",
                        borderBottomRightRadius:"6px",
                        borderColor: selectedTab === item.id ? "#1a73ce" : "#d6dfe8",
                    }}
                    className={`${
                        selectedTab === item.id
                        ? "bg-gradient-to-b from-blue-r2087f0 via-blue-r2087f0 to-blue-gradDark"
                        : "bg-gradient-to-b from-blue-c4d6e6 via-gray-f5feff to-white  border-blue-d6dfe8"
                    } mt-3px h-75px w-full rounded-b-md rounded-t-lg flex flex-col items-center border-b border-l border-r`}
                >
                    <img className="mt-8px ml-2px object-none" src={item.icon} alt="" />
                    <span 
                        className={`${
                            selectedTab === item.id
                            ? "text-white"
                            : "text-gray-r616161" }
                            text-14px font-spoqaMedium tracking-tight -mt-4px`}
                    >{item.text}</span>
                </div>
            </button>
        ));
    }

    return (
        <div className="flex w-full h-80px space-x-px">
            <TabsList items={itemsArray} />
        </div>
    )
}

export default HorizontalMenu8
