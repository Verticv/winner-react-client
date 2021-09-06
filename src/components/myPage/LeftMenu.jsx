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
import ArrowDown from '../../images/myPage/leftMenu/arr_down.png'
import ArrowUp from '../../images/myPage/leftMenu/arr_up.png'
import { useHistory } from 'react-router-dom'
import PopupControls from '../popups/PopupControls'
import ReauthenticatePopup from 'components/popups/ReauthenticatePopup'

const LeftMenu = ({
    selectedTab,
    setSelectedTab,
    selectedSubTab,
    setSelectedSubTab
}) => {

    const history = useHistory();
    const [isPopupOpen, setPopupOpen] = useState(true)

    const tabsArray = [
        { text: "베팅내역", icon: Icon1, iconHighlight: IconHighlight1, id: 0, path: "/mypage/bet-history" },
        { 
            text: "충/환전내역", 
            icon: Icon2, 
            iconHighlight: IconHighlight2, 
            id: 1, 
            path: "/mypage/charge-history", 
            sub1: "충전내역", 
            sub2: "환전내역",
            path2: "/mypage/exchange-history"
        },
        { text: "총판페이지", icon: Icon3, iconHighlight: IconHighlight3, id: 2, path: "/distributor-page" },
        { text: "원루즈정산", icon: Icon4, iconHighlight: IconHighlight4, id: 3, path: "/mypage/win-lose-settlement" },
        { 
            text: "쿠폰관리",
            icon: Icon5, 
            iconHighlight: IconHighlight5, 
            id: 4, 
            path: "/mypage/coupon-usage", 
            sub1: "쿠폰사용",
            sub2: "쿠폰선물",
            sub3: "쿠폰내역",
            path2: "/mypage/coupon-gift", 
            path3: "/mypage/coupon-history"
        },
        { 
            text: "포인트", 
            icon: Icon6, 
            iconHighlight: IconHighlight6, 
            id: 5, 
            path: "/mypage/points-apply", 
            sub1: "포인트전환신청",
            sub2: "포인트적립내역",
            sub3: "포인트전환내역",
            path2: "/mypage/points-accumulate-history", 
            path3: "/mypage/points-transaction-history"
        },
        { text: "쪽지관리", icon: Icon7, iconHighlight: IconHighlight7, id: 6, path: "/mypage/inbox", inboxCount: "3" },
        { text: "회원정보수정", icon: Icon8, iconHighlight: IconHighlight8, id: 7, path: "/mypage/edit-info" }
    ];

    function openTab() {
        window.open('/distributor-page');
      }
    
    function buttonPressed(path) {
        history.push(path)
        setSelectedTab(path)
        setSelectedSubTab(path)
    }

    const EditProfileButton = ({path, text, icon, iconHighlight, selectedTab}) => (
        <button 
            className={`${
                selectedTab === path
                ? "bg-gradient-to-br from-blue-gradLight to-blue-gradDark shadow-plain2" 
                : "bg-white"
            } flex w-full items-center p-5px h-52px rounded-full`} 
            onClick={(e) => {
                buttonPressed(path)
                setPopupOpen(true)
            }}
        >
            <div 
                className={`${
                    (selectedTab === path) && "shadow-plain9"
                } h-42px w-42px bg-white rounded-full flex items-center justify-center flex-shrink-0`} 
            >
                <img 
                    className="h-42px w-42px bg-white rounded-full flex items-center justify-center" 
                    src={(selectedTab === path) ? iconHighlight : icon} 
                    alt="icon" />
            </div>
            <div className="w-full flex mx-14px justify-between items-center">                
                <label
                    className={`${
                        (selectedTab === path)
                        ? "text-white" 
                        : "text-gray-r8c8c8c"
                    } font-spoqaMedium text-16px cursor-pointer tracking-tight`}>{text}</label>
            </div>
        </button>
    )

    function MenuList({ items }) {
        
        return items.map(item => (

            <div key={item.id}>
                {item.id === 7 ? (
                    <PopupControls 
                        buttonChild={(
                            <EditProfileButton 
                                path={item.path} 
                                text={item.text} 
                                icon={item.icon} 
                                iconHighlight={item.iconHighlight} 
                                selectedTab={selectedTab}
                            />
                        ) }
                        isPopupOpen={isPopupOpen} 
                        setPopupOpen={setPopupOpen}
                    >
                        <ReauthenticatePopup setPopupOpen={setPopupOpen} setSelectedTab={setSelectedTab}/>
                    </PopupControls>  
                ) : (
                    <div>
                        <button 
                            className={`${
                                selectedTab === item.path || selectedTab === item.path2 || selectedTab === item.path3
                                ? "bg-gradient-to-br from-blue-gradLight to-blue-gradDark shadow-plain2" 
                                : "bg-white"
                            } flex w-full items-center p-5px h-53px rounded-full`} 
                            onClick={(e) => {
                                item.id !== 2 ? (
                                    buttonPressed(item.path)
                                ) : (
                                    openTab()
                                )
                            }}
                        >
                            <div 
                                className={`${
                                    (selectedTab === item.path || selectedTab === item.path2 || selectedTab === item.path3) && "shadow-plain9"
                                } h-42px w-42px bg-white rounded-full flex items-center justify-center flex-shrink-0`} 
                            >
                                <img 
                                    className="h-42px w-42px bg-white rounded-full flex items-center justify-center" 
                                    src={(selectedTab === item.path || selectedTab === item.path2 || selectedTab === item.path3) ? item.iconHighlight : item.icon} 
                                    alt="icon" />
                            </div>
                            <div className="w-full flex mx-14px justify-between items-center">
                                <div className="flex items-center">
                                    <label
                                        className={`${
                                            (selectedTab === item.path || selectedTab === item.path2 || selectedTab === item.path3)
                                            ? "text-white" 
                                            : "text-gray-r8c8c8c"
                                        } font-spoqaMedium text-16px cursor-pointer tracking-tight`}
                                    >
                                        {item.text}
                                    </label>
                                    {item.inboxCount && (
                                        <div className="ml-10px h-17px px-6px rounded-full bg-red-notification text-white flex items-center justify-center text-12px font-roboto">
                                            {item.inboxCount}
                                        </div>
                                    )}
                                    </div>
                                    {item.sub1 && (
                                        <img src={(selectedTab === item.path || selectedTab === item.path2 || selectedTab === item.path3) ? ArrowUp : ArrowDown} alt="" />
                                    )}
                            </div>
                        </button>
                        {(selectedTab === item.path || selectedTab === item.path2 || selectedTab === item.path3) &&(
                            <div className="font-spoqaMedium text-16px cursor-pointer tracking-tight mt-px">
                                {item.sub1 && (
                                        <button 
                                            onClick={() => {
                                                setSelectedSubTab(item.path)
                                                history.push(item.path)
                                            }}
                                            className={`${
                                                selectedSubTab === item.path
                                                ? "bg-blue-d0e8ff text-gray-r454545" 
                                                : "bg-gray-f9f9f9 text-gray-r8c8c8c"
                                            } flex items-center h-45px w-full  pl-60px`}>
                                                {item.sub1}
                                        </button>
                                )}
                                {item.sub2 && (
                                    <button 
                                        onClick={() => {
                                            setSelectedSubTab(item.path2)
                                            setSelectedTab(item.path2)
                                            history.push(item.path2)
                                        }}
                                        className={`${
                                            selectedSubTab === item.path2
                                            ? "bg-blue-d0e8ff text-gray-r454545" 
                                            : "bg-gray-f9f9f9 text-gray-r8c8c8c"
                                        } flex items-center h-45px w-full bg-gray-f9f9f9 pl-60px`}>
                                            {item.sub2}
                                    </button>
                                )}
                                {item.sub3 && (
                                    <button 
                                        onClick={() => {
                                            setSelectedSubTab(item.path3)
                                            setSelectedTab(item.path3)
                                            history.push(item.path3)
                                        }}
                                        className={`${
                                            selectedSubTab === item.path3
                                            ? "bg-blue-d0e8ff text-gray-r454545" 
                                            : "bg-gray-f9f9f9 text-gray-r8c8c8c"
                                        } flex items-center h-45px w-full bg-gray-f9f9f9 pl-60px`}>
                                            {item.sub3}
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                )}
                
            </div>
        ));
    }

    return (
        <div className="w-200px bg-white shadow-subNavbar rounded-26px p-4px space-y-px mb-180px">
            <MenuList items={tabsArray} />
        </div>
    )
}

export default LeftMenu
