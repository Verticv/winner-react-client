import React from 'react'
import { useHistory } from 'react-router';

const HorizontalMenu7 = ({
    itemsArray, 
}) => {

    const history = useHistory();
    const pathname = window.location.pathname

    function TabsList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                className={`${
                    pathname === item.path
                    ? "bg-blue-r58baf7" 
                    : "bg-white"
                } overflow-hidden h-80px w-full rounded-lg flex justify-end border border-gray-dddddd`} 
                onClick={() => {
                    history.push(item.path)
                }}
            >
                <div 
                    style={{
                        background: pathname === item.path
                        ? "linear-gradient(to bottom, #2087f0, #1873cf)"
                        : "linear-gradient(to bottom, #c4d6e6, #e8f3fd 26%, #ffffff )"
                    }}
                    className={`${
                        pathname === item.path
                        ? "bg-gradient-to-b from-blue-r2087f0 via-blue-r2087f0 to-blue-gradDark"
                        : "bg-gradient-to-b from-blue-c4d6e6 via-gray-f5feff to-white border-l border-r border-blue-d6dfe8"
                    } mt-3px h-77px w-full rounded-b-md rounded-t-lg flex flex-col items-center justify-between border-b`}
                >
                    <img className="mt-8px ml-2px object-none" src={item.icon} alt="" />
                    <span 
                        className={`${
                            pathname === item.path
                            ? "text-white"
                            : "text-gray-r616161" }
                            text-14px font-spoqaMedium tracking-tight mb-11px flex items-center h-14px`}
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

export default HorizontalMenu7