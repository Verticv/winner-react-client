import React, { useState } from 'react'
import SportsBanner1 from '../../images/gameBanner/sports_banner_1.png'
import SportsBanner2 from '../../images/gameBanner/sports_banner_2.png'
import SportsBanner3 from '../../images/gameBanner/sports_banner_3.png'

const SportsBanner = () => {

    const [selectedTab, setSelectedTab] = useState()

    const cardClass = "relative flex w-406px h-386px object-contain border border-gray-afafaf justify-end rounded-lg shadow-plain1 transition bg-gradient-to-br from-white via-white to-gray-500 cursor-pointer border border-gray-afafaf"
    const cardSelectedClass = "relative flex w-406px border border-gray-afafaf justify-end rounded-lg shadow-plain1 transition bg-gradient-to-r from-blue-cardGradLight to-blue-cardGradDark cursor-pointer"

    const gamesArray = [
        { id: 0, background: SportsBanner1, color: "bg-yellow-e3ba3c", btnText: "게임시작", class: "" },
        { id: 1, background: SportsBanner2, color: "bg-blue-r3384ca", btnText: "게임시작", class: "" },
        { id: 2, background: SportsBanner3, color: "bg-orange-e39e90", btnText: "게임시작", class: "" },
    ];

    function BannerList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                className={selectedTab === item.id ? cardSelectedClass : cardClass} 
                onMouseEnter={() => setSelectedTab(item.id)}
                onMouseLeave={() => setSelectedTab(false)}
            >
                <img src={item.background} alt="background" />
                <div className={`absolute left-0 bottom-0 ml-30px mb-34px w-124px h-44px rounded-full flex items-center justify-center text-white font-spoqaBold text-18px ${item.color} ${selectedTab === item.id ? "shadow-plain3" : item.class}`}>{item.btnText}</div>
            </button>
        ));
    }

    return (
        <div className="flex bg-white h-386px w-full justify-between rounded">
            <BannerList items={gamesArray} />
        </div>
    )
}

export default SportsBanner
