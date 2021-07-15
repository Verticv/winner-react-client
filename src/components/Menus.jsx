import React from 'react'
import MenuCard from './MenuCard'

const Menus = () => {
    return (
        <div className="flex justify-between w-full space-x-4 pb-24">
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
        </div>
    )
}

export default Menus
