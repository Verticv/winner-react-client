import React from 'react'
import SlotBackground from '../images/slots/slot_background.png'
import SevenIcon from '../images/slots/seven.png'
import TopRankIcon from '../images/slots/top_rank.png'
import DailyTop from '../images/slots/daily_top.png'
import WeeklyTop from '../images/slots/weekly_top.png'

const Slots = () => {

    const tabsArray = [
        { text: "슬롯잭팟", icon: SevenIcon, amount: "11,111,111", currency: "￦", id: 0 },
        { text: "슬롯랭킹TOP", icon: TopRankIcon, amount: "22,222,222", currency: "￦", id: 1 },
        { text: "오늘의출금TOP", icon: DailyTop, amount: "33,333,333", currency: "￦", id: 2 },
        { text: "금주의출금TOP", icon: WeeklyTop, amount: "44,444,444", currency: "￦", id: 3 }
    ];

    function SlotList({ items }) {
        return items.map(item => (
            <div className="relative w-308px h-183px select-none cursor-pointer">
                <div className="absolute w-308px h-46px flex items-center justify-center space-x-8px mt-21px">
                    <img className="" src={item.icon} alt="icon" />
                    <span className="font-spoqa text-20px font-medium text-gray-r536073 tracking-tight">{item.text}</span>
                </div>
                <span className="absolute z-30 text-28px text-white bottom-0 left-0 mb-46px ml-22px font-spoqa drop-shadow-xl text-shadow">{item.currency}</span>
                <span className="absolute z-30 text-42px text-white bottom-0 right-0 mb-34px mr-21px tracking-wider font-digital text-shadow">{item.amount}</span>
                <img className="object-contain w-full h-full z-10" src={SlotBackground} alt="background" />
            </div>
        ));
    }

    return (
        <div className="flex w-full items-center justify-between space-x-10px">
            <SlotList items={tabsArray} />
        </div>
    )
}

export default Slots
