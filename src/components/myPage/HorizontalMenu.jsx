import React from 'react'

const HorizontalMenu = ({
    itemsArray, 
    isState = 0, 
    setState
}) => {


    function TabsList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                className={`${
                    isState === item.id
                    ? "bg-blue-r58baf7" 
                    : "bg-white"
                } overflow-hidden h-80px w-full rounded-lg flex justify-end border border-gray-dddddd shadow-plain7`} 
                onClick={() => setState(item.id)}
            >
                <div 
                    className={`${
                        isState === item.id 
                        ? "bg-gradient-to-b from-blue-r2087f0 via-blue-r2087f0 to-blue-gradDark"
                        : "bg-gradient-to-b from-blue-c4d6e6 via-white border-b border-l border-r border-blue-d6dfe8"
                    } mt-4px h-76px w-full rounded-b-md rounded-t-lg flex flex-col items-center`}
                >
                    <img className="mt-8px ml-2px object-none" src={item.icon} alt="" />
                    <span 
                        className={`${
                            isState === item.id
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

export default HorizontalMenu
