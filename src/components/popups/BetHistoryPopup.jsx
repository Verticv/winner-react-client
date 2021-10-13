import React, { useState } from 'react'
import CloseIcon from '../../images/popups/close.png'
import Icon2 from '../../images/myPage/betHistory/ico_2.png'
import Icon3 from '../../images/myPage/betHistory/ico_3.png'
import Icon4 from '../../images/myPage/betHistory/ico_4.png'
import Icon5 from '../../images/myPage/betHistory/ico_5.png'
import Icon6 from '../../images/myPage/betHistory/ico_6.png'
import Icon7 from '../../images/myPage/betHistory/ico_7.png'
import Icon8 from '../../images/myPage/betHistory/ico_8.png'
import Icon9 from '../../images/myPage/betHistory/ico_9.png'
import SportsBetHistory from 'components/myPage/betHistory/SportsBetHistoryPanel'
import HorizontalMenu8 from 'components/horizontalMenus/HorizontalMenu8'

const BetHistoryPopup = ({setPopupOpen, setAttachedArray, attachedArray}) => {

    const tabsArray = [
        { text: "라이브카지노", icon: Icon2, id: 1 },
        { text: "슬롯게임", icon: Icon3, id: 2 },
        { text: "스포츠", icon: Icon4, id: 3 },
        { text: "e-스포츠", icon: Icon5, id: 4 },
        { text: "미니게임", icon: Icon6, id: 5 },
        { text: "가상게임", icon: Icon7, id: 6 },
        { text: "피싱게임", icon: Icon8, id: 7 },
        { text: "로터리게임", icon: Icon9, id: 8 }
    ];

    const [selectedTab, setSelectedTab] = useState(1)

    return (
        <div style={{height:"811px", width: "1110px"}} className="flex flex-col rounded-lg overflow-hidden">
            <div className="relative h-71px bg-blue-r5d799c flex items-center justify-center flex-shrink-0">
                <label className="font-spoqaMedium text-white tracking-tight text-24px">베팅내역</label>
                <button className="absolute right-0 mr-26px cursor-pointer z-20" onClick={() => setPopupOpen(false)}>
                    <img src={CloseIcon} alt="close_icon" />
                </button>
            </div>
            
            <div className="w-full h-full bg-white pt-30px pb-40px">
                
                <div className="px-36px">
                    <HorizontalMenu8 itemsArray={tabsArray} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                </div>
                <div className="w-full px-30px">
                    <div style={{height: "559px"}} className="overflow-y-scroll mt-30px py-5px px-6px space-y-28px">
                        <SportsBetHistory type={0} setPopupOpen={setPopupOpen} isPopup={true} id={0} attachedArray={attachedArray} setAttachedArray={setAttachedArray} />
                        <SportsBetHistory type={1} setPopupOpen={setPopupOpen} winAmount="+900,000,000" isPopup={true} id={1}  attachedArray={attachedArray} setAttachedArray={setAttachedArray} />
                        <SportsBetHistory type={2} setPopupOpen={setPopupOpen} isPopup={true} id={2} attachedArray={attachedArray} setAttachedArray={setAttachedArray} />
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default BetHistoryPopup
