import React from 'react'

const SubHorizontalMenu = ({
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
                    ? "bg-blue-d3f3fe" 
                    : "bg-white"
                } overflow-hidden h-81px w-full rounded-lg flex justify-end border border-gray-dddddd`} 
                onClick={() => setState(item.id)}
            >
                <div 
                    className={`${
                        isState === item.id 
                        ? "bg-gradient-to-b from-blue-b9dcff to-blue-d2f6ff"
                        : "bg-gradient-to-b from-blue-c4d6e6 via-white "
                    } mt-px h-79px w-full rounded-b-md rounded-t-lg flex flex-col items-center justify-end border-b border-l border-r border-blue-d6dfe8`}
                >
                    <img className="mt-8px ml-2px object-none h-40px" src={item.icon} alt="" />
                    <span className={`text-13px font-spoqaMedium tracking-tight text-gray-r616161 mb-10px mt-2px ${item.custom}`} >{item.text}</span>
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

export default SubHorizontalMenu
