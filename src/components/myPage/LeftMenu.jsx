import React, { useState } from 'react'
import ArrowDown from '../../images/myPage/leftMenu/arr_down.png'
import ArrowUp from '../../images/myPage/leftMenu/arr_up.png'
import { useHistory } from 'react-router-dom'
import PopupControls from '../popups/PopupControls'
import ReauthenticatePopup from 'components/popups/ReauthenticatePopup'

const LeftMenu = ({
    selectedTab,
    setSelectedTab,
    selectedSubTab = null,
    setSelectedSubTab = null,
    array
}) => {

    const history = useHistory();
    const [isPopupOpen, setPopupOpen] = useState(true)
    const [isExpanded, setExpanded] = useState(window.location.pathname + "closed")

    function openTab() {
        window.open('/distributor-page');
      }
    
    function buttonPressed(path) {
        history.push(path)
        setSelectedTab(path)
        if (setSelectedSubTab !== null) {
            setSelectedSubTab(path)
        }
        
        if (isExpanded === path) {
            setExpanded(path + "closed")
        } else {
            setExpanded(path)
        }
    }
      
    const EditProfileButton = ({path, text, icon, iconHighlight, selectedTab}) => (
        <button 
            className={`${
                selectedTab === path
                ? "bg-gradient-to-br from-blue-gradLight to-blue-gradDark shadow-plain2" 
                : "bg-white"
            } flex w-full items-center p-5px h-53px rounded-full`} 
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
                {item.text === "회원정보수정" ? (
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
                                item.text === "총판페이지" ? (
                                    openTab()
                                ) : (
                                    buttonPressed(item.path)
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
                                        <img 
                                            className={isExpanded === item.path + "closed" && "transform rotate-180"} 
                                            src={
                                                isExpanded === item.path + "closed"
                                                ? ArrowUp 
                                                : (selectedTab === item.path || selectedTab === item.path2 || selectedTab === item.path3) 
                                                ? ArrowUp 
                                                : ArrowDown
                                            } 
                                            alt="" 
                                        />
                                    )}
                            </div>
                        </button>
                            
                        <div className={`${isExpanded === item.path ? "" : "hidden"} font-spoqaMedium text-16px cursor-pointer tracking-tight mt-px`} >
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
                                    } ${item.sub3 === "가상게임" && "rounded-b-3xl"} flex items-center h-45px w-full bg-gray-f9f9f9 pl-60px`}>
                                        {item.sub3}
                                </button>
                            )}
                        </div>

                    </div>
                )}
                
            </div>
        ));
    }

    return (
        <div className="w-200px bg-white shadow-subNavbar rounded-26px p-4px space-y-px mb-180px">
            <MenuList items={array} />
        </div>
    )
}

export default LeftMenu
