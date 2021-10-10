import React from 'react'

const HorizontalMenu6 = ({
    itemsArray, 
    isState = 0, 
    setState
}) => {

    function TabsList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                style={{
                    height:"98px"
                }}
                className={`${
                    isState === item.id
                    ? "bg-blue-r58baf7" 
                    : "bg-white"
                } overflow-hidden w-full rounded-lg flex justify-end border border-gray-dddddd`} 
                onClick={() => setState(item.id)}
            >
                <div 
                    style={{
                        height: "93px",
                        borderColor: "#e9eced"
                    }}
                    className={`${
                        isState === item.id 
                        ? "bg-gradient-to-b from-blue-r2087f0 via-blue-r2087f0 to-blue-gradDark"
                        : "bg-gradient-to-b from-blue-c4d6e6 via-gray-f5feff to-white border-b border-l border-r border-blue-d6dfe8"
                    } mt-3px w-full rounded-b-md rounded-t-lg flex flex-col items-center`}
                >
                    <img className="mt-4px ml-3px object-none" src={item.icon} alt="" />
                    <div 
                        className={`${
                            isState === item.id
                            ? "text-white"
                            : "text-gray-r616161" }
                            text-14px font-spoqaMedium tracking-tight -mt-4px h-14px flex items-center`}
                    >
                        {item.text}
                    </div>
                    <div 
                        style={{
                            width: "38px",
                            backgroundColor: isState === item.id 
                            ? "#1b4372"
                            : "#8c8c8c"
                        }}
                        className={`text-white text-12px font-roboto tracking-tight mt-8px h-17px rounded-full flex items-center justify-center`}
                    >
                        {item.number}
                    </div>
                </div>
            </button>
        ));
    }

    return (
        <div className="flex w-full h-103px space-x-px">
            <TabsList items={itemsArray} />
        </div>
    )
}

export default HorizontalMenu6
