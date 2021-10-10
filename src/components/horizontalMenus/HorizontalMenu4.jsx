import React from 'react'

const HorizontalMenu4 = ({
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
                    : "bg-gray-f9f9f9"
                } overflow-hidden h-47px w-full rounded-t-lg flex justify-end border border-gray-dddddd`} 
                onClick={() => setSelectedTab(item.id)}
            >
                <div 
                    style={{
                        height: "45px",
                        background: selectedTab === item.id 
                        ? "linear-gradient(to bottom, #2087f0, #1873cf)" 
                        : "linear-gradient(to bottom, #f9f9f9, #f9f9f9, #d4d9de)"
                    }}
                    className="mt-2px w-full rounded-b-md rounded-t-lg flex items-start justify-center pr-20px pt-9px"
                >
                    <div className="flex items-center">
                        <div 
                            style={{color: selectedTab === item.id ? "#ffffff" : "#5b5b5b"}}
                            className="text-16px tracking-tight font-spoqaMedium flex h-16px items-center"
                        >
                            {item.text}
                        </div>
                    </div>
                </div>
            </button>
        ));
    }

    return (
        <div className="flex w-full h-47px space-x-3px">
            <TabsList items={itemsArray} />
        </div>
    )
}

export default HorizontalMenu4