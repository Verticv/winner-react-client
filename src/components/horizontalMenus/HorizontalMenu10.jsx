import React, { useState } from 'react'
import { useHistory } from 'react-router';

const HorizontalMenu10 = ({
    itemsArray, 
}) => {

    const history = useHistory();
    const pathname = window.location.pathname
    const [isHover, setHover] = useState(null)

    function TabsList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                className={`${
                    pathname === item.path
                    ? "bg-blue-r58baf7" 
                    : "bg-white hover:bg-blue-d3f3fe"
                } overflow-hidden h-80px w-full rounded-lg flex justify-end border border-gray-dddddd`} 
                onClick={() => {
                    history.push(item.path)
                }}
                onMouseOver={() => setHover(item.path)}
                onMouseLeave={() => setHover(null)}
            >
                <div 
                    style={{
                        background: pathname === item.path
                        ? "linear-gradient(to bottom, #2087f0, #1873cf)"
                        : isHover === item.path 
                        ? "linear-gradient(to bottom, #b9dcff, #d2f6ff)"
                        : "linear-gradient(to bottom, #c4d6e6, #e8f3fd 26%, #ffffff )",
                        borderBottomLeftRadius:"6px",
                        borderBottomRightRadius:"6px",
                        borderColor: pathname === item.path ? "#1a73ce" : "#d6dfe8",
                    }}
                    className={`${
                        pathname === item.path
                        ? "bg-gradient-to-b from-blue-r2087f0 via-blue-r2087f0 to-blue-gradDark"
                        : "bg-gradient-to-b from-blue-c4d6e6 via-gray-f5feff to-white border-blue-d6dfe8"
                    } mt-3px h-75px w-full rounded-b-md rounded-t-lg flex flex-col items-center border-b border-l border-r`}
                >
                    <img className="mt-8px ml-2px object-none" src={item.icon} alt="" />
                    <span 
                        className={`${
                            pathname === item.path
                            ? "text-white"
                            : "text-gray-r616161" }
                            text-14px font-spoqaMedium tracking-tight mt-7px`}
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

export default HorizontalMenu10