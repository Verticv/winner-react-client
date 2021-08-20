import React, { useState } from 'react'
import Icon1 from '../../images/myPage/leftMenu/icon_1.png'
import Icon2 from '../../images/myPage/leftMenu/icon_2.png'
import Icon3 from '../../images/myPage/leftMenu/icon_3.png'
import Icon4 from '../../images/myPage/leftMenu/icon_4.png'
import Icon5 from '../../images/myPage/leftMenu/icon_5.png'
import Icon6 from '../../images/myPage/leftMenu/icon_6.png'
import Icon7 from '../../images/myPage/leftMenu/icon_7.png'
import Icon8 from '../../images/myPage/leftMenu/icon_8.png'
import IconHighlight1 from '../../images/myPage/leftMenu/icon_1_highlight.png'
import IconHighlight2 from '../../images/myPage/leftMenu/icon_2_highlight.png'
import IconHighlight3 from '../../images/myPage/leftMenu/icon_3_highlight.png'
import IconHighlight4 from '../../images/myPage/leftMenu/icon_4_highlight.png'
import IconHighlight5 from '../../images/myPage/leftMenu/icon_5_highlight.png'
import IconHighlight6 from '../../images/myPage/leftMenu/icon_6_highlight.png'
import IconHighlight7 from '../../images/myPage/leftMenu/icon_7_highlight.png'
import IconHighlight8 from '../../images/myPage/leftMenu/icon_8_highlight.png'
import { useHistory } from 'react-router-dom'

const LeftMenu = () => {

    const history = useHistory();

    const [selectedTab, setSelectedTab] = useState(0)

    const tabsArray = [
        { text: "베팅내역", icon: Icon1, iconHighlight: IconHighlight1, id: 0, path: "/mypage/bet-history" },
        { text: "충/환전내역", icon: Icon2, iconHighlight: IconHighlight2, id: 1, path: "/mypage/charge-history" },
        { text: "총판페이지", icon: Icon3, iconHighlight: IconHighlight3, id: 2, path: "/mypage/charge-history" },
        { text: "원루즈정산", icon: Icon4, iconHighlight: IconHighlight4, id: 3, path: "/mypage/charge-history" },
        { text: "쿠폰관리", icon: Icon5, iconHighlight: IconHighlight5, id: 4, path: "/mypage/charge-history" },
        { text: "포인트", icon: Icon6, iconHighlight: IconHighlight6, id: 5, path: "/mypage/charge-history" },
        { text: "쪽지관리", icon: Icon7, iconHighlight: IconHighlight7, id: 6, path: "/mypage/charge-history" },
        { text: "회원정보수정", icon: Icon8, iconHighlight: IconHighlight8, id: 7, path: "/mypage/charge-history" }
    ];

    function MenuList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                className={`${
                    selectedTab === item.id 
                    ? "bg-gradient-to-br from-blue-gradLight to-blue-gradDark shadow-plain2" 
                    : "bg-white"
                } flex w-full items-center p-5px h-53px rounded-full`} 
                onClick={(e) => {
                    setSelectedTab(item.id)
                    history.push(item.path)
                }}
            >
                <div 
                    className={`${
                        selectedTab === item.id && "shadow-plain3"
                    } h-42px w-42px bg-white rounded-full flex items-center justify-center flex-shrink-0`} >
                    <img 
                    className="h-42px w-42px bg-white rounded-full flex items-center justify-center" 
                    src={selectedTab === item.id ? item.iconHighlight : item.icon} 
                    alt="icon" />
                </div>
                <div className="w-full flex ml-14px">                
                    <label
                        className={`${
                            selectedTab === item.id 
                            ? "text-white" 
                            : "text-gray-r8c8c8c"
                        } font-spoqaBold text-14px cursor-pointer tracking-tight`}>{item.text}</label>
                </div>
            </button>
        ));
    }

    return (
        <div className="w-200px h-440px bg-white shadow-subNavbar rounded-26px p-4px space-y-px mb-60px">
            <MenuList items={tabsArray} />
        </div>
    )
}

export default LeftMenu
