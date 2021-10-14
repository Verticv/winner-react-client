import React from 'react'
import { useHistory } from 'react-router';

const HorizontalMenu9 = ({
    itemsArray, 
    setSelectedTab,
    setSelectedSubTab = null
}) => {

    const history = useHistory();
    const pathname = window.location.pathname

    console.log(pathname)

    function TabsList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                style={{height:"59px"}}
                className={`${
                    pathname === item.path
                    ? "bg-blue-r58baf7" 
                    : "bg-white"
                } overflow-hidden w-full rounded-lg flex justify-end border border-gray-dddddd`} 
                onClick={() => {
                    history.push(item.path)
                    setSelectedTab(item.id)
                    if (setSelectedSubTab !== null) {
                        setSelectedSubTab(0)
                    }
                }}
            >
                <div 
                    style={{
                        background: pathname === item.path
                        ? "linear-gradient(to bottom, #2087f0, #1873cf)"
                        : "linear-gradient(to bottom, #c4d6e6, #e8f3fd 26%, #ffffff )",
                        height:"57px"
                    }}
                    className={`${
                        pathname === item.path
                        ? "bg-gradient-to-b from-blue-r2087f0 via-blue-r2087f0 to-blue-gradDark"
                        : "bg-gradient-to-b from-blue-c4d6e6 via-gray-f5feff to-white border-b border-l border-r border-blue-d6dfe8"
                    } mt-3px w-full rounded-md flex items-center justify-center pt-3px`}
                >
                    <span 
                        className={`${
                            pathname === item.path
                            ? "text-white"
                            : "text-gray-r616161" }
                            text-20px font-spoqaBold tracking-tight -mt-4px`}
                    >{item.text}</span>
                </div>
            </button>
        ));
    }

    return (
        <div className="flex w-full space-x-2px">
            <TabsList items={itemsArray} />
        </div>
    )
}

export default HorizontalMenu9
