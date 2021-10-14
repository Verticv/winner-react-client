import React from 'react'

const HorizontalMenu1 = ({
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
                } overflow-hidden h-103px w-full rounded-lg flex justify-end border border-gray-dddddd`} 
                onClick={() => setState(item.id)}
            >
                <div 
                    style={{
                        height: "98px",
                        background: isState === item.id 
                        ? "linear-gradient(to bottom, #2087f0, #1873cf)"
                        : "linear-gradient(to bottom, #c4d6e6, #e8f3fd 26%, #ffffff)",
                        borderBottomLeftRadius:"6px",
                        borderBottomRightRadius:"6px",
                        borderColor: isState === item.id  ? "#1a73ce" : "#d6dfe8"
                    }}
                    className={`mt-3px w-full rounded-b-md rounded-t-md flex flex-col items-center border-b border-l border-r`}>
                    <img className="mt-5px ml-2px object-none" src={item.icon} alt="" />
                    <div 
                        className={`${
                            isState === item.id
                            ? "text-white"
                            : "text-gray-r616161" }
                            text-14px font-spoqaMedium tracking-tight -mt-3px h-14px flex items-center`}
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
                        className={`text-white text-12px font-roboto tracking-tight mt-9px h-17px rounded-full flex items-center justify-center`}
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

export default HorizontalMenu1
