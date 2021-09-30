import HorizontalMenu4 from 'components/horizontalMenus/HorizontalMenu4'
import React, { useState } from 'react'
import PowerballPanel from './PowerballPanel'

const MinigamesPanel = ({
    selectedGame,
    setSelectedGame
}) => {

    const [selectedTab, setSelectedTab] = useState(0)

    const MenuArray = [
        { id: 0, text: "게임하기" },
        { id: 1, text: "회차결과" },
        { id: 2, text: "베팅내역" },
    ]

    return (
        <div className="w-full">
            <div className="relative flex z-10 px-3px">
                <HorizontalMenu4 itemsArray={MenuArray} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            </div>

            <div className="px-2px w-full">
                <div className="-mt-7px w-full bg-gray-fafafa z-20 flex relative rounded-xl shadow-subNavbar overflow-hidden">


                    {selectedGame === 0 ? (
                        <PowerballPanel />
                    ) : selectedGame === 1 ? (
                        <></>
                    ) : selectedGame === 2 ? (
                        <></>
                    ) : selectedGame === 3 ? (
                        <></>
                    ) : <></>}


                </div>
            </div>
            
        </div>
    )
}

export default MinigamesPanel
